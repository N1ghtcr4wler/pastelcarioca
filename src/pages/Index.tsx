import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import FeaturedGrid from "@/components/site/FeaturedGrid";
import EventsSection from "@/components/site/EventsSection";
import BirthdaysSection from "@/components/site/BirthdaysSection";
import NovenasSection from "@/components/site/NovenasSection";
import OrdersBlock from "@/components/site/OrdersBlock";
import FAQSection from "@/components/site/FAQSection";
import AboutSection from "@/components/site/AboutSection";
import Footer from "@/components/site/Footer";
import FloatingWhatsApp from "@/components/site/FloatingWhatsApp";

const Index = () => {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <FeaturedGrid />
        <EventsSection />
        <BirthdaysSection />
        <NovenasSection />
        <OrdersBlock />
        <FAQSection />
        <AboutSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
