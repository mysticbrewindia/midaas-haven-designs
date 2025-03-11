
import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alexandra Hartman",
    position: "CEO, Luminary Studios",
    content: "MIDAAS Enterprises transformed our office space into a creativity hub while simultaneously helping us develop a sustainable financial growth plan. Their dual expertise is truly unique and valuable.",
    image: "/placeholder.svg"
  },
  {
    id: 2,
    name: "Michael Torres",
    position: "Private Client",
    content: "The team at MIDAAS redesigned our home and restructured our investment portfolio simultaneously. The integrated approach saved us time and created harmony between our living space and financial goals.",
    image: "/placeholder.svg"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    position: "Director, Evolution Capital",
    content: "The financial advisory services provided by MIDAAS Enterprises have been instrumental in our company's growth. Their strategic investment recommendations consistently exceed market performance.",
    image: "/placeholder.svg"
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonials" className="py-24 bg-midaas text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="section-title centered mb-6 inline-block text-white">What Our Clients Say</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mt-8">
            Hear from our clients about their experiences working with MIDAAS Enterprises across our various service domains.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative bg-midaas-gold/10 backdrop-blur-sm rounded-lg p-8 md:p-12">
            <Quote className="text-midaas-gold/30 absolute top-4 left-4" size={48} />
            
            <div className="relative z-10">
              <div className="animate-fade-in">
                <p className="text-lg md:text-xl italic mb-8">
                  "{testimonials[activeIndex].content}"
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={testimonials[activeIndex].image} 
                    alt={testimonials[activeIndex].name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-serif font-semibold">{testimonials[activeIndex].name}</h4>
                    <p className="text-gray-300 text-sm">{testimonials[activeIndex].position}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 flex space-x-2">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-midaas-gold/20 hover:bg-midaas-gold/40 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={18} />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full flex items-center justify-center bg-midaas-gold/20 hover:bg-midaas-gold/40 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
          
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2 h-2 mx-1 rounded-full transition-all duration-300 ${
                  activeIndex === index ? "bg-midaas-gold w-6" : "bg-white/40"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
