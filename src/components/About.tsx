
import { CheckCircle } from "lucide-react";

const About = () => {
  const advantages = [
    "Experience across design, finance, and investment sectors",
    "Integration of aesthetic and financial excellence",
    "Client-centered approach to every project",
    "Sustainable and long-term solutions",
    "Commitment to innovation and quality"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in-left">
            <h2 className="section-title mb-8">About MIDAAS Enterprises</h2>
            <p className="text-midaas-gray mb-6">
              MIDAAS Enterprises stands at the intersection of design excellence and financial acumen. We've revolutionized the traditional approach by integrating interior design expertise with financial advisory services, creating a unique value proposition for our clients.
            </p>
            <p className="text-midaas-gray mb-8">
              Founded with a vision to transform both spaces and portfolios, we work with discerning clients who seek harmony between their living environments and financial strategies. Our team combines decades of experience across multiple disciplines to deliver comprehensive solutions.
            </p>
            
            <div className="space-y-3">
              {advantages.map((advantage, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="text-midaas-gold flex-shrink-0 mt-0.5" size={20} />
                  <span>{advantage}</span>
                </div>
              ))}
            </div>
            
            <a href="#contact" className="btn-primary mt-8 inline-block">
              Work With Us
            </a>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-36 h-36 border-t-2 border-r-2 border-midaas-gold"></div>
              <div className="absolute -bottom-6 -left-6 w-36 h-36 border-b-2 border-l-2 border-midaas-gold"></div>
              <img 
                src="/placeholder.svg" 
                alt="About MIDAAS Enterprises" 
                className="w-full rounded-lg shadow-lg relative z-10 animate-fade-in"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
