import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/landing/HeroSection';
import HowItWorksSection from '../components/landing/HowItWorksSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import CareerPathsSection from '../components/landing/CareerPathsSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';
import CtaSection from '../components/landing/CtaSection';

function HomePage() {
  return (
    <div className="min-h-screen bg-surface dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <CareerPathsSection />
        <TestimonialsSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
