
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-r from-midaas to-midaas/90 text-white pt-24">
      <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-left">
            <div>
              <h3 className="text-midaas-gold font-medium mb-2 tracking-wide">MIDAAS ENTERPRISES</h3>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight">
                Transforming Spaces & Finances With Elegance
              </h1>
            </div>
            <p className="text-lg text-gray-200 max-w-lg">
              We blend sophisticated interior design with expert financial advisory services, creating harmonious spaces and investment strategies for discerning clients.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#services" className="btn-primary flex items-center gap-2 group">
                Our Services 
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="btn-outline">
                Get in Touch
              </a>
            </div>
          </div>
          <div className="hidden lg:block">
            <div className="relative animate-fade-in">
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-midaas-gold"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-midaas-gold"></div>
              <img 
                src="/placeholder.svg" 
                alt="MIDAAS Enterprises Showcase" 
                className="w-full h-auto rounded-md shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-white opacity-80 hover:opacity-100 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
