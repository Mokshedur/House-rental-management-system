import AboutUsSection from "../components/AboutUsSection";
import HeroSection from "../components/HeroSection";
import OurProducts from "../components/OurProducts";
import OurServicesSection from "../components/OurServicesSection";
import TestimonialsSection from "../components/TestimonialsSection";

const HomePage = () => {
  return (
    <div className="px-4 lg">
      {/* Hero section */}
      <HeroSection />

      {/* About us section */}
      <section id="about" className="mt-32">
        <AboutUsSection />
      </section>

      {/* Our service section */}
      <section id="services" className="mt-32">
        <OurServicesSection />
      </section>

      {/* Our Products */}
      <section className="mt-32">
        <OurProducts />
      </section>

      {/* Our Testimonials */}
      <section className="mt-32">
        <TestimonialsSection />
      </section>
    </div>
  );
};

export default HomePage;
