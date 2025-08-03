import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users, Star } from 'lucide-react';
import charDhamImg from '@/assets/char-dham.jpg';
import northIndiaImg from '@/assets/north-india.jpg';
import southIndiaImg from '@/assets/south-india.jpg';
import allIndiaImg from '@/assets/all-india.jpg';

const TourPackages = () => {
  const packages = [
    {
      id: 1,
      title: 'Char Dham Yatra',
      image: charDhamImg,
      duration: '12 Days',
      destinations: 'Yamunotri, Gangotri, Kedarnath, Badrinath',
      price: 'Starting ₹35,000',
      rating: 4.9,
      description: 'Sacred pilgrimage to the four holy shrines in the Himalayas with comfortable accommodation and guided tours.',
      highlights: ['Expert spiritual guides', 'Helicopter services available', 'Comfortable stays', 'All meals included']
    },
    {
      id: 2,
      title: 'North India Tour',
      image: northIndiaImg,
      duration: '10 Days',
      destinations: 'Delhi, Agra, Jaipur, Haridwar, Rishikesh',
      price: 'Starting ₹28,000',
      rating: 4.8,
      description: 'Explore the Golden Triangle and spiritual cities with rich history, culture, and architectural marvels.',
      highlights: ['Taj Mahal visit', 'Cultural experiences', 'Heritage sites', 'Local cuisine tours']
    },
    {
      id: 3,
      title: 'South India Explorer',
      image: southIndiaImg,
      duration: '14 Days',
      destinations: 'Chennai, Madurai, Kanyakumari, Rameswaram',
      price: 'Starting ₹32,000',
      rating: 4.7,
      description: 'Discover the rich temple culture, beautiful beaches, and diverse landscapes of South India.',
      highlights: ['Temple architecture', 'Coastal beauty', 'Local traditions', 'Authentic cuisine']
    },
    {
      id: 4,
      title: 'All India Grand Tour',
      image: allIndiaImg,
      duration: '21 Days',
      destinations: 'Major cities across North & South India',
      price: 'Starting ₹55,000',
      rating: 4.9,
      description: 'Comprehensive tour covering the best of both North and South India in one unforgettable journey.',
      highlights: ['Complete India experience', 'Multiple destinations', 'Cultural diversity', 'Best value package']
    }
  ];

  const scrollToBooking = () => {
    const element = document.getElementById('booking');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Tour Packages</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Carefully curated journeys across India's most beautiful and sacred destinations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-card rounded-2xl shadow-card hover:shadow-warm transition-all duration-500 group overflow-hidden">
              <div className="relative overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold">
                  {pkg.duration}
                </div>
                <div className="absolute top-4 right-4 bg-white/90 text-primary px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                  <Star className="w-4 h-4 mr-1 fill-current" />
                  {pkg.rating}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary mb-2">{pkg.title}</h3>
                <div className="flex items-center text-muted-foreground mb-3">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="text-sm">{pkg.destinations}</span>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">{pkg.description}</p>
                
                <div className="space-y-2 mb-6">
                  {pkg.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                      {highlight}
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-2xl font-bold text-primary">{pkg.price}</span>
                    <span className="text-muted-foreground"> per person</span>
                  </div>
                  <Button variant="book" onClick={scrollToBooking}>
                    Book Now
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TourPackages;