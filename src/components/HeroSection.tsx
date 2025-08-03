import { Button } from '@/components/ui/button';
import { MapPin, Star, Users } from 'lucide-react';
import heroBus from '@/assets/hero-bus.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${heroBus})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Explore India in 
            <span className="block text-secondary"> Comfort & Luxury</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Premium AC Sleeper Tours across India with experienced guides, comfortable buses, and unforgettable memories
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              variant="hero" 
              size="xl" 
              onClick={() => scrollToSection('packages')}
              className="animate-glow-pulse"
            >
              <MapPin className="w-5 h-5" />
              View Tour Packages
            </Button>
            <Button 
              variant="outline" 
              size="xl"
              className="bg-white/10 border-white/30 text-white hover:bg-white/20"
              onClick={() => scrollToSection('booking')}
            >
              Book Your Seat
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-slide-in">
              <div className="flex items-center justify-center mb-2">
                <Star className="w-6 h-6 text-tertiary mr-2" />
                <span className="text-3xl font-bold">15+</span>
              </div>
              <p className="text-white/80">Years Experience</p>
            </div>
            <div className="text-center animate-slide-in">
              <div className="flex items-center justify-center mb-2">
                <Users className="w-6 h-6 text-tertiary mr-2" />
                <span className="text-3xl font-bold">50K+</span>
              </div>
              <p className="text-white/80">Happy Travelers</p>
            </div>
            <div className="text-center animate-slide-in">
              <div className="flex items-center justify-center mb-2">
                <MapPin className="w-6 h-6 text-tertiary mr-2" />
                <span className="text-3xl font-bold">100+</span>
              </div>
              <p className="text-white/80">Destinations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;