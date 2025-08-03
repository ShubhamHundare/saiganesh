import { Wifi, Zap, Shield, Snowflake, Bed, Users } from 'lucide-react';
import busInterior from '@/assets/bus-interior.jpg';

const BusFleet = () => {
  const fleetTypes = [
    { seats: 15, type: 'Luxury Sleeper', features: ['Spacious berths', 'Premium comfort'] },
    { seats: 25, type: 'Deluxe Sleeper', features: ['Semi-sleeper seats', 'Good for shorter trips'] },
    { seats: 30, type: 'AC Sleeper', features: ['Standard comfort', 'Budget-friendly'] },
    { seats: 49, type: 'AC Semi-Sleeper', features: ['Reclining seats', 'Group travel'] },
    { seats: 55, type: 'AC Seater', features: ['Regular seating', 'Day journeys'] }
  ];

  const features = [
    { icon: Snowflake, title: 'AC Comfort', description: 'Climate-controlled environment for all weather conditions' },
    { icon: Bed, title: 'Sleeper Berths', description: 'Comfortable sleeping arrangements for night journeys' },
    { icon: Zap, title: 'Charging Points', description: 'USB and power outlets for all your devices' },
    { icon: Wifi, title: 'Wi-Fi Ready', description: 'Stay connected during your journey (select buses)' },
    { icon: Shield, title: 'Safety First', description: 'GPS tracking, CCTV, and emergency systems' },
    { icon: Users, title: 'Spacious Design', description: 'Ample legroom and personal space for comfort' }
  ];

  return (
    <section id="fleet" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Our Luxury Bus Fleet</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Modern, comfortable, and safe buses designed for your perfect travel experience
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src={busInterior} 
              alt="Luxury Bus Interior" 
              className="rounded-2xl shadow-warm w-full h-96 object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-primary mb-6">Premium Comfort on Wheels</h3>
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="bg-card rounded-xl p-4 shadow-card hover:shadow-warm transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-accent mb-3" />
                  <h4 className="text-lg font-semibold text-primary mb-2">{feature.title}</h4>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-primary mb-4">Choose Your Perfect Bus</h3>
          <p className="text-muted-foreground">Different seating capacities to suit your group size and budget</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {fleetTypes.map((bus, index) => (
            <div key={index} className="bg-card rounded-xl p-6 shadow-card hover:shadow-warm transition-all duration-300 text-center group">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-primary mb-2">{bus.seats} Seater</h4>
              <p className="text-secondary font-semibold mb-3">{bus.type}</p>
              <div className="space-y-2">
                {bus.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center justify-center text-sm text-muted-foreground">
                    <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
                    {feature}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusFleet;