
import { Navbar, Hero, Services, About, Portfolio, Testimonials, Contact, Footer } from "@/components";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const sections = useRef<Record<string, HTMLElement | null>>({});

  useEffect(() => {
    // Collect all sections
    sections.current = {
      home: document.getElementById('home'),
      services: document.getElementById('services'),
      about: document.getElementById('about'),
      portfolio: document.getElementById('portfolio'),
      testimonials: document.getElementById('testimonials'),
      contact: document.getElementById('contact'),
    };

    // Check if there's a hash in the URL when the component mounts
    if (location.hash) {
      const targetId = location.hash.substring(1);
      setTimeout(() => {
        const targetElement = sections.current[targetId];
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
