
import { ArrowUp, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-midaas text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-white font-serif text-2xl font-bold">MIDAAS</span>
              <span className="text-midaas-gold font-light text-sm">ENTERPRISES</span>
            </div>
            <p className="text-gray-300 mb-6">
              Transforming spaces and finances with elegance and expertise. We create harmonious experiences through design and financial acumen.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-gray-300 hover:text-midaas-gold transition-colors">Home</Link></li>
              <li><Link to="/services/interior-design" className="text-gray-300 hover:text-midaas-gold transition-colors">Interior Design</Link></li>
              <li><Link to="/services/financial-planning" className="text-gray-300 hover:text-midaas-gold transition-colors">Financial Planning</Link></li>
              <li><Link to="/services/investment-advisory" className="text-gray-300 hover:text-midaas-gold transition-colors">Investment Advisory</Link></li>
              <li><Link to="/#about" className="text-gray-300 hover:text-midaas-gold transition-colors">About Us</Link></li>
              <li><Link to="/#contact" className="text-gray-300 hover:text-midaas-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li><Link to="/services/interior-design" className="text-gray-300 hover:text-midaas-gold transition-colors">Interior Design</Link></li>
              <li><Link to="/services/financial-planning" className="text-gray-300 hover:text-midaas-gold transition-colors">Financial Planning</Link></li>
              <li><Link to="/services/investment-advisory" className="text-gray-300 hover:text-midaas-gold transition-colors">Investment Advisory</Link></li>
              <li><Link to="/services/business-consulting" className="text-gray-300 hover:text-midaas-gold transition-colors">Business Consulting</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">Contact Info</h4>
            <address className="not-italic text-gray-300 space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-midaas-gold flex-shrink-0 mt-1" size={18} />
                <p>7/7 Haltu West Bengal, Kolkata - 700078</p>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="text-midaas-gold flex-shrink-0 mt-1" size={18} />
                <div>
                  <p>email@midaas.net</p>
                  <p>midaas.solutions@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className="text-midaas-gold flex-shrink-0 mt-1" size={18} />
                <p>+91 9830907077</p>
              </div>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} MIDAAS Enterprises. All rights reserved.
          </p>
          
          <button 
            onClick={scrollToTop}
            className="bg-midaas-gold/20 p-3 rounded-full hover:bg-midaas-gold/40 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
