import AboutHeroSection from "../components/AboutHeroSection";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutGallerySection from "../components/AboutGallerySection";
import OurStorySection from "../components/OurStorySection";
import MissionSection from "../components/MissionSection";
import TeamSection from "../components/TeamSection";
import ProcessSection from "../components/ProcessSection";

function About() {
  return (
    <>
      <Navbar />
      <AboutHeroSection />
      <AboutGallerySection />
      <OurStorySection />
      <MissionSection />
      
      <TeamSection />
      <ProcessSection />
      <Footer />
    </>
  );
}
export default About;
