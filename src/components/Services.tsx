
import { Paintbrush, TrendingUp, Building, LineChart } from "lucide-react";

const ServiceCard = ({ icon: Icon, title, description, delay }: { icon: any, title: string, description: string, delay: string }) => {
  return (
    <div className={`bg-white p-8 rounded-lg shadow-md card-hover animate-fade-in ${delay}`}>
      <div className="mb-6 inline-flex items-center justify-center w-14 h-14 rounded-full bg-midaas-cream text-midaas-gold">
        <Icon size={28} />
      </div>
      <h3 className="text-xl font-serif font-semibold mb-3">{title}</h3>
      <p className="text-midaas-gray">{description}</p>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: Paintbrush,
      title: "Interior Design",
      description: "Creating sophisticated living and working spaces that reflect your unique personality and requirements.",
      delay: "delay-[100ms]"
    },
    {
      icon: TrendingUp,
      title: "Financial Planning",
      description: "Strategic financial planning tailored to your goals, balancing growth, security, and risk management.",
      delay: "delay-[200ms]"
    },
    {
      icon: Building,
      title: "Investment Advisory",
      description: "Expert guidance on investment opportunities, portfolio management, and wealth generation strategies.",
      delay: "delay-[300ms]"
    },
    {
      icon: LineChart,
      title: "Business Consulting",
      description: "Strategic advisory services to help businesses optimize operations, enhance profitability, and scale effectively.",
      delay: "delay-[400ms]"
    }
  ];

  return (
    <section id="services" className="py-24 bg-midaas-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="section-title centered mb-6 inline-block">Our Services</h2>
          <p className="text-midaas-gray max-w-3xl mx-auto mt-8">
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
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
