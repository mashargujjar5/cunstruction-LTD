import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUs from "../components/WhyChooseUs";
import RecentProjects from "../components/RecentProjects";
import TraditionSection from "../components/TraditionSection";
import ContactSection from "../components/ContactSection";
import TestimonialsSection from "../components/TestimonialsSection";
import Footer from "../components/Footer";

function Home (){
    return(
        <>
        <Navbar />
      <HeroSection   />
      
      <AboutSection />
      <ServicesSection />
      <WhyChooseUs />
      <RecentProjects />
      <TraditionSection />
      
      <ContactSection />
      <TestimonialsSection />
      <Footer />
        </>
    )
}
export default Home;    