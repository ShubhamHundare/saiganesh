import { Phone, Mail, MapPin, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                <span className="text-secondary-foreground font-bold text-lg">SG</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Sai Ganesh</h3>
                <p className="text-secondary">Tours & Travels</p>
              </div>
            </div>
            <p className="text-white/80 leading-relaxed mb-6">
              Your trusted partner for comfortable and memorable journeys across incredible India. Experience the best of Indian culture, spirituality, and natural beauty with our premium tour packages.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-white hover:text-secondary hover:bg-white/10">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-secondary hover:bg-white/10">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:text-secondary hover:bg-white/10">
                <Twitter className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => scrollToSection('home')} 
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')} 
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('packages')} 
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  Tour Packages
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('fleet')} 
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  Our Fleet
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')} 
                  className="text-white/80 hover:text-secondary transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Tour Packages */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Tour Packages</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-white/80">Char Dham Yatra</span>
              </li>
              <li>
                <span className="text-white/80">North India Tour</span>
              </li>
              <li>
                <span className="text-white/80">South India Explorer</span>
              </li>
              <li>
                <span className="text-white/80">All India Grand Tour</span>
              </li>
              <li>
                <span className="text-white/80">Custom Packages</span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">+91 98765 43210</p>
                  <p className="text-white/80 text-sm">Mon - Sat: 9 AM - 8 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">info@saiganeshtours.com</p>
                  <p className="text-white/80 text-sm">24/7 Email Support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white font-medium">123 Main Street</p>
                  <p className="text-white/80 text-sm">Transport Nagar, Delhi - 110001</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm mb-4 md:mb-0">
              © 2024 Sai Ganesh Tours & Travels. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <span className="text-white/80 hover:text-secondary cursor-pointer transition-colors">Privacy Policy</span>
              <span className="text-white/80 hover:text-secondary cursor-pointer transition-colors">Terms of Service</span>
              <span className="text-white/80 hover:text-secondary cursor-pointer transition-colors">Cancellation Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;