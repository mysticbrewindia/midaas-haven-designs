
import { Paintbrush, TrendingUp, Building, LineChart } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, image, delay }: { 
  icon: any, 
  title: string, 
  description: string, 
  image: string,
  delay: string 
}) => {
  return (
    <div className={`group relative overflow-hidden rounded-xl ${delay}`}>
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/90" />
      </div>
      
      <div className="relative p-8 min-h-[400px] flex flex-col justify-end transform transition-transform duration-300 group-hover:-translate-y-2">
        <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-midaas-gold/20 backdrop-blur-sm text-midaas-gold">
          <Icon size={28} />
        </div>
        <h3 className="text-2xl font-serif font-semibold mb-3 text-white">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Paintbrush,
      title: "Interior Design",
      description: "Creating sophisticated living and working spaces that reflect your unique personality and requirements.",
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80",
      delay: "animate-fade-in delay-[100ms]"
    },
    {
      icon: TrendingUp,
      title: "Financial Planning",
      description: "Strategic financial planning tailored to your goals, balancing growth, security, and risk management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
      delay: "animate-fade-in delay-[200ms]"
    },
    {
      icon: Building,
      title: "Investment Advisory",
      description: "Expert guidance on investment opportunities, portfolio management, and wealth generation strategies.",
      image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80",
      delay: "animate-fade-in delay-[300ms]"
    },
    {
      icon: LineChart,
      title: "Business Consulting",
      description: "Strategic advisory services to help businesses optimize operations, enhance profitability, and scale effectively.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80",
      delay: "animate-fade-in delay-[400ms]"
    }
  ];

  return (
    <section id="services" className="py-24 bg-midaas">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="section-title centered mb-6 inline-block text-white">Our Services</h2>
          <p className="text-gray-400 max-w-3xl mx-auto mt-8">
            MIDAAS Enterprises offers a comprehensive suite of services, blending aesthetic excellence with financial acumen to create holistic solutions for our clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              image={service.image}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
