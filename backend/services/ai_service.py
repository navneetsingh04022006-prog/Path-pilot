"""
AI service — Google Gemini API integration.

Builds a structured prompt from user profile, assessment, and career goal,
calls the Gemini model, and validates the JSON response against the expected
roadmap schema before returning it.
"""

import json
import re
from typing import Any

from google import genai
from google.genai import types

from config.settings import settings

# Generation config — enforce JSON-only output with a sensible token ceiling
_GENERATION_CONFIG = types.GenerateContentConfig(
    temperature=0.4,
    top_p=0.9,
    max_output_tokens=4096,
    system_instruction=(
        "You are a senior software engineering career advisor. "
        "Your only job is to produce structured JSON career roadmaps. "
        "Never include markdown fences, explanations, or any text outside the JSON object."
    ),
    response_mime_type="application/json",
)


def _get_client() -> tuple[genai.Client, str]:
    if not settings.gemini_configured:
        raise ValueError(
            "GEMINI_API_KEY is not set. Add it to backend/.env to enable AI generation."
        )
    client = genai.Client(api_key=settings.gemini_api_key)
    return client, "gemini-2.5-flash"



def _build_prompt(
    *,
    career_goal: str,
    current_level: str,
    tools_known: list[str],
    projects_done: list[str],
    fundamentals_score: int,
    weekly_hours: int,
    full_name: str,
) -> str:
    tools_str = ", ".join(tools_known) if tools_known else "none listed"
    projects_str = ", ".join(projects_done) if projects_done else "none listed"

    return f"""
Generate a personalized career roadmap for {full_name}.

USER PROFILE
- Career goal: {career_goal}
- Current skill level: {current_level}
- Tools and technologies known: {tools_str}
- Projects completed: {projects_str}
- Fundamentals quiz score: {fundamentals_score}/100
- Available study time: {weekly_hours} hours per week

INSTRUCTIONS
Create a roadmap with 4 to 6 phases that takes the user from their current level to their career goal.
Each phase must build on the previous one. Tailor topics, resources, and projects to the user's existing tools and goals.

Return ONLY a valid JSON object matching this exact schema (no markdown, no explanation):

{{
  "career_goal": "<concise career goal title>",
  "summary": "<2-3 sentence summary of the overall roadmap strategy>",
  "phases": [
    {{
      "phase_number": 1,
      "title": "<phase title>",
      "duration_weeks": <integer, minimum 2>,
      "topics": ["<topic 1>", "<topic 2>"],
      "resources": ["<resource name or URL>"],
      "projects": ["<project idea 1>", "<project idea 2>"]
    }}
  ]
}}
""".strip()


def _validate_roadmap(data: dict[str, Any]) -> dict[str, Any]:
    """Validate that the parsed JSON matches the required roadmap structure."""
    required_top = {"career_goal", "summary", "phases"}
    missing = required_top - data.keys()
    if missing:
        raise ValueError(f"Gemini response missing required fields: {missing}")

    if not isinstance(data["phases"], list) or len(data["phases"]) == 0:
        raise ValueError("Gemini response 'phases' must be a non-empty list.")

    required_phase = {"phase_number", "title", "duration_weeks", "topics", "resources", "projects"}
    for i, phase in enumerate(data["phases"]):
        missing_phase = required_phase - phase.keys()
        if missing_phase:
            raise ValueError(f"Phase {i + 1} missing required fields: {missing_phase}")
        if not isinstance(phase["topics"], list):
            phase["topics"] = []
        if not isinstance(phase["resources"], list):
            phase["resources"] = []
        if not isinstance(phase["projects"], list):
            phase["projects"] = []

    return data


def _extract_json(text: str) -> dict[str, Any]:
    """
    Extract a JSON object from the model response.
    Handles cases where the model wraps output in markdown fences despite instructions.
    """
    # Strip markdown fences if present
    cleaned = re.sub(r"^```(?:json)?\s*", "", text.strip(), flags=re.IGNORECASE)
    cleaned = re.sub(r"\s*```$", "", cleaned.strip())

    try:
        return json.loads(cleaned)
    except json.JSONDecodeError:
        # Try to find the first {...} block as a fallback
        match = re.search(r"\{.*\}", cleaned, re.DOTALL)
        if match:
            return json.loads(match.group())
        raise ValueError(
            "Could not parse JSON from Gemini response. "
            "The model returned unexpected content. Please try again."
        )


async def generate_roadmap(
    *,
    career_goal: str,
    current_level: str,
    tools_known: list[str],
    projects_done: list[str],
    fundamentals_score: int,
    weekly_hours: int = 10,
    full_name: str = "the user",
) -> dict[str, Any]:
    """
    Call Gemini to generate a structured career roadmap.

    Returns a validated dict matching the roadmap JSON schema.
    Raises ValueError on API misconfiguration, model error, or parse failure.
    """
    client, model_name = _get_client()
    prompt = _build_prompt(
        career_goal=career_goal,
        current_level=current_level,
        tools_known=tools_known,
        projects_done=projects_done,
        fundamentals_score=fundamentals_score,
        weekly_hours=weekly_hours,
        full_name=full_name,
    )

    try:
        response = client.models.generate_content(
            model=model_name,
            contents=prompt,
            config=_GENERATION_CONFIG,
        )
    except Exception as exc:
        raise ValueError(f"Gemini API call failed: {exc}") from exc

    raw_text = response.text
    if not raw_text:
        raise ValueError("Gemini returned an empty response. Please try again.")

    data = _extract_json(raw_text)
    return _validate_roadmap(data)
