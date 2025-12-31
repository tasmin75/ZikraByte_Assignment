import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Herosection from "@/components/landingPage/Herosection";
import AgeGroupSection from "@/components/landingPage/AgeGroupSection";
import ContactSection from "@/components/landingPage/ContactSection";
import FAQSection from "@/components/landingPage/FAQSection";
import MealBoxSection from "@/components/landingPage/MealBoxSection";
import PricingSection from "@/components/landingPage/PricingSection";
import TestimonialsSection from "@/components/landingPage/TestimonialsSection";
import WhyChooseUsSection from "@/components/landingPage/WhyChooseUsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Herosection />
        <MealBoxSection />
        <AgeGroupSection />
        <WhyChooseUsSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        {/* <ContactSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default Index;
