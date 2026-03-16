import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import SocialProofSection from "@/components/SocialProofSection";
import GallerySection from "@/components/GallerySection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ReviewsSection from "@/components/ReviewsSection";
import FaqSection from "@/components/FaqSection";
import QuoteFormSection from "@/components/QuoteFormSection";
import ServiceAreasSection from "@/components/ServiceAreasSection";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import FloatingCallButton from "@/components/FloatingCallButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <TrustBar />
      <SocialProofSection />
      <GallerySection />
      <ServicesSection />
      <WhyChooseSection />
      <ReviewsSection />
      <FaqSection />
      <QuoteFormSection />
      <ServiceAreasSection />
      <FinalCta />
      <Footer />
      <MobileBottomBar />
      <FloatingCallButton />
    </div>
  );
};

export default Index;
