import AboutSection from '../components/AboutSection';
import FAQSection from '../components/FAQSection';
import HeroSection from '../components/HeroSection';
import PastIterationSection from '../components/PastIterationSection';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import SponsorSection from '../components/SponsorSection';
function LandingSection() {
  return (
    <>
      <HeroSection />
      <div className="ground-tile-bg">
        <div className="content-container">
          <AboutSection />
          <PastIterationSection />
          <TestimonialsSection />
          <SponsorSection />
          <TeamSection />
          <FAQSection />
        </div>
      </div>
    </>
  );
}

export default LandingSection;
