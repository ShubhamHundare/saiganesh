import { Shield, Heart, DollarSign, Users, Clock, Award } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Shield,
      title: 'Safe & Secure Travel',
      description: 'GPS tracking, CCTV surveillance, and verified drivers ensure your safety throughout the journey.',
      color: 'text-green-600'
    },
    {
      icon: Users,
      title: 'Experienced Team',
      description: 'Professional drivers and knowledgeable guides with years of experience in Indian travel.',
      color: 'text-blue-600'
    },
    {
      icon: Heart,
      title: 'Comfort & Cleanliness',
      description: 'Well-maintained buses with regular sanitization and comfortable seating arrangements.',
      color: 'text-red-600'
    },
    {
      icon: DollarSign,
      title: 'Affordable Pricing',
      description: 'Competitive rates with transparent pricing and no hidden charges for quality travel.',
      color: 'text-green-600'
    },
    {
      icon: Clock,
      title: 'Punctual Service',
      description: 'On-time departures and arrivals with well-planned itineraries and schedules.',
      color: 'text-purple-600'
    },
    {
      icon: Award,
      title: 'Customer Satisfaction',
      description: '15+ years of excellence with thousands of happy customers and five-star reviews.',
      color: 'text-yellow-600'
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Sai Ganesh Tours?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your comfort, safety, and satisfaction are our top priorities. Here's what makes us different.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-8 shadow-card hover:shadow-warm transition-all duration-500 group text-center"
            >
              <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-10 h-10 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-primary mb-4">{reason.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-primary rounded-3xl p-12 text-white text-center">
          <h3 className="text-3xl font-bold mb-8">Our Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">15+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">50K+</div>
              <div className="text-white/80">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">100+</div>
              <div className="text-white/80">Destinations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">5★</div>
              <div className="text-white/80">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;