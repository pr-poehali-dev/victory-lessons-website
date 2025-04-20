import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import AboutProject from "@/components/AboutProject";
import LessonsPreview from "@/components/LessonsPreview";
import UpcomingEvents from "@/components/UpcomingEvents";
import HistoricalGallery from "@/components/HistoricalGallery";
import VideoChronicles from "@/components/VideoChronicles";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        <HeroSection />
        <AboutProject />
        <HistoricalGallery />
        <VideoChronicles />
        <LessonsPreview />
        <UpcomingEvents />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
