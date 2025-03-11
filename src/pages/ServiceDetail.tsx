
import { useParams } from "react-router-dom";
import { Navbar, Footer } from "@/components";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

// Service Data
const serviceData = {
  "interior-design": {
    title: "Interior Design",
    hero: "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80",
    description: "Our interior design services transform spaces into elegant, functional environments that reflect your unique personality and lifestyle.",
    approach: "We combine aesthetic expertise with practical functionality to create spaces that are not only beautiful but also serve your daily needs effectively.",
    features: [
      "Custom residential and commercial interior design",
      "Space planning and optimization",
      "Material and furniture selection",
      "Color and lighting consultation",
      "Project management and implementation"
    ],
    process: [
      { title: "Consultation", description: "We begin with an in-depth consultation to understand your vision, needs, and budget constraints." },
      { title: "Concept Development", description: "Our designers create detailed concepts and mood boards to visualize the transformation." },
      { title: "Design Presentation", description: "We present comprehensive design plans including material selections, color schemes, and furniture layouts." },
      { title: "Implementation", description: "Our team coordinates with contractors and vendors to bring the design to life." },
      { title: "Final Reveal", description: "We complete the project with styling and accessories for a polished, magazine-worthy finish." }
    ],
    caseStudies: [
      {
        title: "Luxury Penthouse Transformation",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
        description: "A complete redesign of a 3,000 sq ft penthouse, bringing modern elegance and functionality to an outdated space."
      },
      {
        title: "Boutique Retail Space",
        image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80",
        description: "Creation of a distinctive retail environment that enhanced brand identity and improved customer flow."
      }
    ]
  },
  "financial-planning": {
    title: "Financial Planning",
    hero: "https://images.unsplash.com/photo-1561414927-6d86591d0c4f?auto=format&fit=crop&q=80",
    description: "Our comprehensive financial planning services help you create a roadmap to achieve your financial goals and secure your future.",
    approach: "We take a holistic approach to financial planning, considering all aspects of your financial life to create strategies that evolve with your changing needs.",
    features: [
      "Comprehensive financial assessment",
      "Goal-based planning and strategy development",
      "Retirement planning and income strategies",
      "Tax optimization strategies",
      "Estate planning and wealth transfer"
    ],
    process: [
      { title: "Discovery", description: "We gather detailed information about your current financial situation, goals, and risk tolerance." },
      { title: "Analysis", description: "Our advisors analyze your financial data to identify strengths, weaknesses, and opportunities." },
      { title: "Strategy Development", description: "We create customized strategies aligned with your specific goals and time horizons." },
      { title: "Implementation", description: "We help you put the plan into action with clear steps and timelines." },
      { title: "Ongoing Review", description: "Regular reviews ensure your plan remains aligned with your evolving goals and market conditions." }
    ],
    caseStudies: [
      {
        title: "Early Retirement Achievement",
        image: "https://images.unsplash.com/photo-1469571486292-b53601016655?auto=format&fit=crop&q=80",
        description: "Helped a professional couple restructure their finances to achieve early retirement 8 years ahead of their original timeline."
      },
      {
        title: "Family Legacy Planning",
        image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80",
        description: "Developed a comprehensive estate plan for a multi-generational family business, ensuring smooth wealth transfer and tax efficiency."
      }
    ]
  },
  "investment-advisory": {
    title: "Investment Advisory",
    hero: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
    description: "Our investment advisory services provide personalized strategies to grow and preserve your wealth in all market conditions.",
    approach: "We combine fundamental research, market insights, and risk management principles to create investment portfolios tailored to your goals and risk tolerance.",
    features: [
      "Personalized investment strategy development",
      "Portfolio construction and optimization",
      "Risk assessment and management",
      "Alternative investment opportunities",
      "Regular performance reporting and analysis"
    ],
    process: [
      { title: "Risk Assessment", description: "We determine your risk tolerance and investment time horizon to establish appropriate parameters." },
      { title: "Asset Allocation", description: "We create a diversified allocation strategy across various asset classes based on your objectives." },
      { title: "Investment Selection", description: "Our team selects specific investments that align with your strategy and values." },
      { title: "Portfolio Implementation", description: "We efficiently execute your investment plan with attention to market conditions and timing." },
      { title: "Monitoring & Rebalancing", description: "Ongoing oversight ensures your portfolio remains aligned with your goals through changing markets." }
    ],
    caseStudies: [
      {
        title: "Portfolio Resilience During Market Volatility",
        image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
        description: "Restructured a client's portfolio that maintained stability during significant market downturns while capturing upside during recovery phases."
      },
      {
        title: "Sustainable Investment Strategy",
        image: "https://images.unsplash.com/photo-1470790376778-a9fbc86d70e2?auto=format&fit=crop&q=80",
        description: "Developed an ESG-focused portfolio that achieved competitive returns while aligning with the client's environmental and social values."
      }
    ]
  },
  "business-consulting": {
    title: "Business Consulting",
    hero: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
    description: "Our business consulting services help organizations optimize operations, enhance profitability, and achieve sustainable growth.",
    approach: "We take a data-driven approach to identify challenges and opportunities, developing practical strategies that deliver measurable results.",
    features: [
      "Strategic business planning",
      "Operational efficiency assessments",
      "Market entry and expansion strategies",
      "Business process optimization",
      "Organizational restructuring and change management"
    ],
    process: [
      { title: "Diagnostic Analysis", description: "We perform a comprehensive assessment of your business operations, structure, and market position." },
      { title: "Strategy Development", description: "Our team creates actionable strategies to address identified challenges and capitalize on opportunities." },
      { title: "Implementation Planning", description: "We develop detailed implementation roadmaps with clear milestones and accountability." },
      { title: "Execution Support", description: "Our consultants provide hands-on support to ensure successful strategy execution." },
      { title: "Performance Measurement", description: "We establish metrics and reporting systems to track progress and measure outcomes." }
    ],
    caseStudies: [
      {
        title: "Tech Startup Scaling",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80",
        description: "Helped a technology startup optimize operations and scale efficiently, resulting in 300% growth over 18 months."
      },
      {
        title: "Manufacturing Efficiency Transformation",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80",
        description: "Redesigned production processes for a manufacturing company, reducing costs by 22% and improving quality metrics by 35%."
      }
    ]
  }
};

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = serviceData[slug as keyof typeof serviceData];
  
  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <>
      <Navbar />
      <div className="pt-24">
        {/* Hero Section */}
        <div className="relative h-[60vh] mb-16">
          <div className="absolute inset-0">
            <img 
              src={service.hero} 
              alt={service.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
          </div>
          <div className="container mx-auto px-4 md:px-6 relative h-full flex flex-col justify-center">
            <Link to="/#services" className="inline-flex items-center text-white/80 hover:text-white mb-6 transition-colors">
              <ArrowLeft size={20} className="mr-2" />
              Back to all services
            </Link>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">{service.title}</h1>
            <p className="text-xl text-white/90 max-w-2xl">{service.description}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 md:px-6 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif font-semibold mb-8">Our Approach</h2>
              <p className="text-lg text-midaas-gray mb-12">{service.approach}</p>
              
              <h2 className="text-3xl font-serif font-semibold mb-8">Our Process</h2>
              <div className="space-y-8 mb-16">
                {service.process.map((step, index) => (
                  <div key={index} className="flex">
                    <div className="mr-6">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-midaas-gold text-white font-semibold">
                        {index + 1}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                      <p className="text-midaas-gray">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <h2 className="text-3xl font-serif font-semibold mb-8">Case Studies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {service.caseStudies.map((caseStudy, index) => (
                  <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
                    <img 
                      src={caseStudy.image} 
                      alt={caseStudy.title} 
                      className="w-full h-60 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-3">{caseStudy.title}</h3>
                      <p className="text-midaas-gray">{caseStudy.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-midaas-light p-8 rounded-lg sticky top-24">
                <h3 className="text-2xl font-serif font-semibold mb-6">Our Services Include</h3>
                <ul className="space-y-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-block w-2 h-2 bg-midaas-gold rounded-full mt-2 mr-3"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-semibold mb-4">Ready to get started?</h4>
                  <p className="text-midaas-gray mb-6">Contact us today to discuss how we can help you achieve your goals.</p>
                  <Link 
                    to="/#contact" 
                    className="block w-full py-3 px-4 bg-midaas text-white text-center rounded-md hover:bg-midaas-dark transition-colors"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServiceDetail;
