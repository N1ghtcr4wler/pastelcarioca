import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import FeaturedGrid from "@/components/site/FeaturedGrid";
import MenuSection from "@/components/site/MenuSection";
import OrdersBlock from "@/components/site/OrdersBlock";
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
        <MenuSection />
        <OrdersBlock />
        <AboutSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
