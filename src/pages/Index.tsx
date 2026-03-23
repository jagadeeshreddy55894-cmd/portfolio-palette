import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import TrainingSection from "@/components/TrainingSection";
import CertificatesSection from "@/components/CertificatesSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <EducationSection />
      <TrainingSection />
      <CertificatesSection />
      <FooterSection />
    </div>
  );
};

export default Index;
