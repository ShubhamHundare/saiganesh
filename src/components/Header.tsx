import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-card">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">SG</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-primary">Sai Ganesh</h1>
              <p className="text-sm text-secondary">Tours & Travels</p>
            </div>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('packages')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Packages
            </button>
            <button 
              onClick={() => scrollToSection('fleet')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Fleet
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              <Phone className="w-4 h-4" />
              +91 98926 35155
            </Button>
            <Button variant="book" size="sm" onClick={() => scrollToSection('booking')}>
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('packages')} 
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Packages
              </button>
              <button 
                onClick={() => scrollToSection('fleet')} 
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Fleet
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
              <div className="flex flex-col space-y-2 pt-4">
                <Button variant="outline" size="sm">
                  <Phone className="w-4 h-4" />
                  +91 98926 35155
                </Button>
                <Button variant="book" size="sm" onClick={() => scrollToSection('booking')}>
                  Book Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;