
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Main background image with parallax effect */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      </div>

      <div className="container mx-auto px-4 md:px-6 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {/* Animated reveal text */}
            <div className="overflow-hidden">
              <h3 className="text-midaas-gold font-medium mb-2 tracking-[0.2em] uppercase text-sm translate-y-0 animate-fade-in delay-100">
                MIDAAS ENTERPRISES
              </h3>
            </div>
            
            <div className="overflow-hidden">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight text-white animate-fade-in delay-200">
                Design Your <br />
                <span className="text-midaas-gold">Legacy</span>
              </h1>
            </div>

            <p className="text-lg text-gray-300 max-w-lg animate-fade-in delay-300">
              Where sophisticated design meets strategic financial planning. Creating spaces and investment portfolios that reflect your aspirations.
            </p>

            <div className="flex flex-wrap gap-6 animate-fade-in delay-400">
              <a 
                href="#services" 
                className="group relative inline-flex items-center gap-2 px-6 py-3 overflow-hidden bg-midaas-gold text-white rounded-full hover:bg-midaas transition-colors duration-300"
              >
                Explore Our Services
                <ArrowRight 
                  size={18} 
                  className="transition-transform group-hover:translate-x-1" 
                />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center px-6 py-3 border border-white/30 text-white rounded-full hover:bg-white/10 transition-colors duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Right side decorative elements */}
          <div className="hidden lg:block relative">
            <div className="absolute -top-20 -right-20 w-72 h-72 bg-midaas-gold/20 rounded-full blur-3xl" />
            <div className="absolute bottom-20 -left-20 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
            <div className="relative border-2 border-midaas-gold/30 rounded-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80" 
                alt="Interior Design Showcase"
                className="w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="text-white opacity-60 hover:opacity-100 transition-opacity">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
