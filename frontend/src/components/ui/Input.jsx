import { cn } from '../../utils/cn';

function Input({
  className,
  id,
  error,
  hint,
  ...props
}) {
  return (
    <div className="w-full">
      <input
        id={id}
        aria-invalid={error ? 'true' : undefined}
        aria-describedby={
          error ? `${id}-error` : hint ? `${id}-hint` : undefined
        }
        className={cn(
          'h-10 w-full rounded-input border bg-surface px-3 text-body text-slate-800',
          'placeholder:text-slate-400',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-1',
          'disabled:cursor-not-allowed disabled:opacity-50',
          error ? 'border-error' : 'border-border',
          className
        )}
        {...props}
      />
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1.5 text-caption text-slate-500">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-caption text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;
