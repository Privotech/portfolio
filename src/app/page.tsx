import AboutSection from "@/Components/AboutSection";
import EmailSection from "@/Components/EmailSection";
import Footer from "@/Components/Footer";
import HeroSection from "@/Components/HeroSection";
import Navbar from "@/Components/Navbar";
import ProjectsSection from "@/Components/ProjectsSection";

export default function Home() {
  return (
    <div className="bg-gradient-to-l from-pink-400 via-blue-700 to-red-300 min-h-screen">
      <div className="flex min-h-screen flex-col bg-[rgba(63,57,57,0.9)] container mx-auto px-12 py-4">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection /> 
      <EmailSection />
      <Footer />   
      </div>
    </div>
  );
}
