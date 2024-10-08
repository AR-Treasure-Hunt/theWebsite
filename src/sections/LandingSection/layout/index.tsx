import AboutSection from "../components/AboutSection"
import FAQSection from "../components/FAQSection"
import HeroSection from "../components/HeroSection"
import PastIterationSection from "../components/PastIterationSection"
import TeamSection from "../components/TeamSection"
import TestimonialsSection from "../components/TestimonialsSection"

function LandingSection() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <PastIterationSection />
            <TestimonialsSection />
            <TeamSection />
            <FAQSection />
        </>
    )
}

export default LandingSection;