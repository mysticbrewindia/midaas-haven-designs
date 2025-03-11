
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage("Thank you for your message. We'll contact you shortly.");
      setFormData({ name: "", email: "", service: "", message: "" });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(""), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-midaas-cream">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 text-center">
          <h2 className="section-title centered mb-6 inline-block">Get In Touch</h2>
          <p className="text-midaas-gray max-w-3xl mx-auto mt-8">
            Ready to transform your space or financial future? Contact us today to discuss how MIDAAS Enterprises can help you achieve your goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 animate-fade-in-left">
            <div className="bg-white rounded-lg p-8 shadow-md">
              {submitMessage && (
                <div className="mb-6 p-4 bg-green-100 text-green-800 rounded-md animate-fade-in">
                  {submitMessage}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-midaas mb-2">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-midaas-gold focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-midaas mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-midaas-gold focus:border-transparent transition-all"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="service" className="block text-sm font-medium text-midaas mb-2">Service Interest</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-midaas-gold focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Financial Planning">Financial Planning</option>
                    <option value="Investment Advisory">Investment Advisory</option>
                    <option value="Business Consulting">Business Consulting</option>
                    <option value="Multiple Services">Multiple Services</option>
                  </select>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-midaas mb-2">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-midaas-gold focus:border-transparent transition-all"
                    placeholder="Tell us about your project or inquiry"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
          
          <div className="animate-fade-in-right">
            <div className="bg-midaas rounded-lg p-8 text-white h-full flex flex-col justify-between">
              <div>
                <h3 className="font-serif text-2xl font-semibold mb-6">Contact Information</h3>
                <p className="text-gray-300 mb-8">
                  We'd love to hear from you. Reach out using the contact details below or visit our office.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-midaas-gold/20 p-3 rounded-full">
                      <MapPin className="text-midaas-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Our Location</h4>
                      <p className="text-gray-300">7/7 Haltu West Bengal, Kolkata - 700078</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-midaas-gold/20 p-3 rounded-full">
                      <Mail className="text-midaas-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Email Us</h4>
                      <p className="text-gray-300">email@midaas.net</p>
                      <p className="text-gray-300">midaas.solutions@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-midaas-gold/20 p-3 rounded-full">
                      <Phone className="text-midaas-gold" size={20} />
                    </div>
                    <div>
                      <h4 className="font-medium text-lg">Call Us</h4>
                      <p className="text-gray-300">+91 9830907077</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-midaas-gold/20 p-3 rounded-full hover:bg-midaas-gold/40 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                  </a>
                  <a href="#" className="bg-midaas-gold/20 p-3 rounded-full hover:bg-midaas-gold/40 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                  </a>
                  <a href="#" className="bg-midaas-gold/20 p-3 rounded-full hover:bg-midaas-gold/40 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
