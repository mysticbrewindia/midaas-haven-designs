
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const categories = ["All", "Interior Design", "Financial Planning", "Investment Projects", "Consulting"];

const projects = [
  {
    id: 1,
    title: "Luxury Apartment Redesign",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&q=80",
    description: "Complete transformation of a penthouse apartment with custom furnishings and lighting."
  },
  {
    id: 2,
    title: "Retirement Portfolio Strategy",
    category: "Financial Planning",
    image: "https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?auto=format&fit=crop&q=80",
    description: "Long-term financial planning and investment strategy for early retirement."
  },
  {
    id: 3,
    title: "Commercial Office Renovation",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
    description: "Modern office space designed for productivity, collaboration, and employee wellbeing."
  },
  {
    id: 4,
    title: "Diversified Investment Portfolio",
    category: "Investment Projects",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
    description: "Strategic allocation across multiple asset classes for optimal risk-adjusted returns."
  },
  {
    id: 5,
    title: "Business Growth Strategy",
    category: "Consulting",
    image: "https://images.unsplash.com/photo-1552581234-26160f608093?auto=format&fit=crop&q=80",
    description: "Comprehensive business analysis and strategic plan for a growing tech startup."
  },
  {
    id: 6,
    title: "Hospitality Interior Design",
    category: "Interior Design",
    image: "https://images.unsplash.com/photo-1618219878616-8d1aec4001fa?auto=format&fit=crop&q=80",
    description: "Elegant and functional design for a boutique hotel featuring custom elements."
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const navigate = useNavigate();

  useEffect(() => {
    if (activeCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === activeCategory));
    }
  }, [activeCategory]);

  const handleProjectClick = (projectId: number) => {
    // Navigate to a detailed project page
    navigate(`/portfolio/${projectId}`);
  };

  return (
    <section id="portfolio" className="py-24 bg-midaas-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="section-title centered mb-6 inline-block">Our Portfolio</h2>
          <p className="text-midaas-gray max-w-3xl mx-auto mt-8">
            Explore our diverse range of projects spanning interior design, financial planning, and business consulting, showcasing our commitment to excellence.
          </p>
        </div>

        <Tabs defaultValue="All" className="mb-12">
          <TabsList className="flex flex-wrap justify-center gap-2 mb-8 bg-transparent">
            {categories.map((category) => (
              <TabsTrigger 
                key={category} 
                value={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-midaas text-white data-[state=active]:bg-midaas"
                    : "bg-white text-midaas hover:bg-midaas-gold hover:text-white data-[state=active]:bg-white"
                }`}
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="bg-white rounded-lg overflow-hidden shadow-md card-hover group animate-fade-in cursor-pointer"
              onClick={() => handleProjectClick(project.id)}
            >
              <div className="relative overflow-hidden h-56">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-midaas bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300"></div>
              </div>
              <div className="p-6">
                <span className="text-xs font-medium text-midaas-gold uppercase tracking-wider">{project.category}</span>
                <h3 className="text-xl font-serif font-semibold mt-2 mb-3">{project.title}</h3>
                <p className="text-midaas-gray text-sm">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
