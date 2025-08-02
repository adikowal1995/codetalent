import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import SalaryCalculator from "@/components/SalaryCalculator";
import ProcessSection from "@/components/ProcessSection";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <HeroSection />
      </div>
      <SalaryCalculator />
      <div id="process">
        <ProcessSection />
      </div>
      <AboutSection />
      <TeamSection />
      <Footer />
    </div>
  );
};

export default Index;
