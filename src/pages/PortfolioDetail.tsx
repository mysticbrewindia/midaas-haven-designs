
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Tag } from "lucide-react";
import { Navbar, Footer } from "@/components";

// This data would ideally come from a backend API
const projects = [
  {
    id: 1,
    title: "Luxury Apartment Redesign",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80",
    description: "Complete transformation of a penthouse apartment with custom furnishings and lighting.",
    client: "Private Residence, Mumbai",
    date: "January 2023",
    fullDescription: `
      This luxury apartment redesign project involved a complete transformation of a 3,500 square foot penthouse in an exclusive residential tower. Our design team worked closely with the client to create a sophisticated living space that balances luxury with functionality.
      
      The project scope included:
      
      - Custom furniture design and procurement
      - Bespoke lighting solutions to enhance the space
      - High-end material selection for flooring and wall treatments
      - Smart home integration for climate, lighting, and entertainment systems
      - Art curation and placement
      
      The result is a breathtaking living space that perfectly encapsulates the client's lifestyle and aesthetic preferences while maximizing the stunning views and natural light of the penthouse location.
    `,
    gallery: [
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 2,
    title: "Retirement Portfolio Strategy",
    category: "Financial Planning",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80",
    description: "Long-term financial planning and investment strategy for early retirement.",
    client: "Private Client",
    date: "March 2023",
    fullDescription: `
      This comprehensive retirement planning project was developed for a high-net-worth professional couple looking to achieve financial independence and early retirement within 10 years.
      
      Our financial planning team created a tailored strategy that included:
      
      - Detailed cash flow analysis and retirement needs assessment
      - Tax-efficient investment allocation across multiple asset classes
      - Risk management strategies to protect accumulated wealth
      - Estate planning considerations for generational wealth transfer
      - Regular portfolio rebalancing schedule with quarterly reviews
      
      The implemented strategy provides a clear roadmap to financial independence while balancing growth opportunities with appropriate risk mitigation measures.
    `,
    gallery: [
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 3,
    title: "Commercial Office Renovation",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    description: "Modern office space designed for productivity, collaboration, and employee wellbeing.",
    client: "Tech Innovation Corp.",
    date: "June 2023",
    fullDescription: `
      This 15,000 square foot office renovation project transformed an outdated corporate space into a modern, collaborative work environment for a growing technology company.
      
      Key elements of the redesign included:
      
      - Open concept workspaces balanced with private meeting areas
      - Ergonomic furniture selection for employee comfort and productivity
      - Biophilic design elements to bring nature indoors
      - Acoustic treatments to manage noise in collaborative spaces
      - Technology integration for seamless digital collaboration
      - Wellness areas for employee relaxation and rejuvenation
      
      The redesigned office has significantly improved employee satisfaction and productivity while reinforcing the company's innovative brand identity.
    `,
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 4,
    title: "Diversified Investment Portfolio",
    category: "Investment Projects",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    description: "Strategic allocation across multiple asset classes for optimal risk-adjusted returns.",
    client: "Family Office",
    date: "August 2023",
    fullDescription: `
      This investment project involved creating a diversified portfolio strategy for a family office managing assets of approximately $50 million.
      
      Our investment advisory team developed:
      
      - A globally diversified multi-asset portfolio with exposure to equities, fixed income, real estate, and alternative investments
      - Custom allocation models based on the family's risk tolerance and long-term objectives
      - Tax-efficient investment vehicles and strategies
      - Liquidity management framework to address both short and long-term needs
      - Detailed reporting and monitoring systems with quarterly performance reviews
      
      The portfolio structure has delivered consistent risk-adjusted returns through various market cycles while preserving wealth for future generations.
    `,
    gallery: [
      "https://images.unsplash.com/photo-1429514513361-8fa32282fd5f?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 5,
    title: "Business Growth Strategy",
    category: "Consulting",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80",
    description: "Comprehensive business analysis and strategic plan for a growing tech startup.",
    client: "InnovateTech Solutions",
    date: "October 2023",
    fullDescription: `
      This strategic consulting project assisted a promising tech startup in planning and executing their growth strategy to scale operations nationally.
      
      The comprehensive engagement included:
      
      - Market analysis and competitive positioning assessment
      - Revenue model optimization and pricing strategy
      - Operational scalability roadmap with key milestones
      - Talent acquisition and development strategy
      - Investment pitch preparation and capital raising support
      - Implementation timeline with accountable metrics
      
      Following the implementation of our recommendations, the client successfully secured Series B funding and has expanded operations to five new markets.
    `,
    gallery: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1590402494610-2c378a9114c6?auto=format&fit=crop&q=80"
    ]
  },
  {
    id: 6,
    title: "Hospitality Interior Design",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1618219878616-8d1aec4001fa?auto=format&fit=crop&q=80",
    description: "Elegant and functional design for a boutique hotel featuring custom elements.",
    client: "Serenity Boutique Hotels",
    date: "December 2023",
    fullDescription: `
      This comprehensive design project encompassed the complete interior design of a new 45-room boutique hotel in a historic building, blending heritage elements with modern luxury.
      
      Our design scope included:
      
      - Conceptual design development aligned with the hotel's brand identity
      - Space planning for guest rooms, lobby, restaurant, and amenity areas
      - Custom furniture and fixture design for signature spaces
      - Material and finish selection throughout all areas
      - Lighting design to enhance architectural features and guest experience
      - Art and accessory curation to create a unique atmosphere
      
      The completed hotel has received industry recognition for its innovative design that respects the building's historic character while providing guests with a distinctly luxurious and contemporary experience.
    `,
    gallery: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80"
    ]
  },
];

const PortfolioDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id || "1");
  
  const project = projects.find(p => p.id === projectId) || projects[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-24">
        <div className="container mx-auto px-4 py-12">
          <Link to="/#portfolio" className="flex items-center text-midaas-gold hover:text-midaas transition-colors mb-8">
            <ArrowLeft size={18} className="mr-2" />
            Back to Portfolio
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto rounded-lg shadow-lg mb-8"
              />
              
              <h1 className="text-3xl md:text-4xl font-serif font-semibold mb-6">{project.title}</h1>
              
              <div className="prose prose-lg max-w-none text-midaas-gray">
                {project.fullDescription.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-serif font-semibold mb-6">Project Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {project.gallery.map((image, index) => (
                    <img 
                      key={index}
                      src={image}
                      alt={`${project.title} - Gallery image ${index + 1}`}
                      className="w-full h-60 object-cover rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h3 className="text-xl font-serif font-semibold mb-6 pb-4 border-b">Project Details</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Calendar size={20} className="text-midaas-gold mt-1 mr-3" />
                    <div>
                      <p className="text-sm text-midaas-gray font-medium">Date</p>
                      <p className="text-midaas">{project.date}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <User size={20} className="text-midaas-gold mt-1 mr-3" />
                    <div>
                      <p className="text-sm text-midaas-gray font-medium">Client</p>
                      <p className="text-midaas">{project.client}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Tag size={20} className="text-midaas-gold mt-1 mr-3" />
                    <div>
                      <p className="text-sm text-midaas-gray font-medium">Category</p>
                      <p className="text-midaas">{project.category}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-6 border-t">
                  <h4 className="font-medium mb-4">Similar Projects</h4>
                  <div className="space-y-4">
                    {projects
                      .filter(p => p.category === project.category && p.id !== project.id)
                      .slice(0, 2)
                      .map(relatedProject => (
                        <Link 
                          key={relatedProject.id}
                          to={`/portfolio/${relatedProject.id}`}
                          className="flex items-center space-x-3 group"
                        >
                          <div className="w-16 h-16 overflow-hidden rounded">
                            <img 
                              src={relatedProject.image} 
                              alt={relatedProject.title}
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <div>
                            <h5 className="text-midaas group-hover:text-midaas-gold transition-colors">{relatedProject.title}</h5>
                            <p className="text-xs text-midaas-gray">{relatedProject.category}</p>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PortfolioDetail;
