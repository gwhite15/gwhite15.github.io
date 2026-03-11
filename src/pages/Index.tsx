import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import GallerySection from "@/components/GallerySection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ReviewsSection from "@/components/ReviewsSection";
import QuoteFormSection from "@/components/QuoteFormSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <GallerySection />
      <ServicesSection />
      <WhyChooseSection />
      <ReviewsSection />
      <QuoteFormSection />
      <ServiceAreasSection />
      <FinalCta />
      <Footer />
      <MobileBottomBar />
    </div>
  );
};

export default Index;
