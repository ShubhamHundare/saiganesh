import { Shield, Users, Award, MapPin } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">About Sai Ganesh Tours & Travels</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted partner for comfortable and memorable journeys across incredible India
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Story</h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Founded over 15 years ago, Sai Ganesh Tours & Travels has been dedicated to providing exceptional travel experiences across India. We believe that every journey should be comfortable, safe, and filled with wonderful memories.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Our fleet of luxury AC sleeper buses and experienced team ensure that your pilgrimage or leisure tour is nothing short of extraordinary. From the sacred Char Dham to the vibrant cities of North and South India, we make your travel dreams come true.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card rounded-xl p-6 shadow-card text-center hover:shadow-warm transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">Safety First</h4>
              <p className="text-muted-foreground">Experienced drivers and well-maintained vehicles for secure journeys</p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card text-center hover:shadow-warm transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">Expert Guides</h4>
              <p className="text-muted-foreground">Knowledgeable local guides to enhance your travel experience</p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card text-center hover:shadow-warm transition-all duration-300">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-secondary-foreground" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">15+ Years</h4>
              <p className="text-muted-foreground">Proven track record of excellence in travel services</p>
            </div>

            <div className="bg-card rounded-xl p-6 shadow-card text-center hover:shadow-warm transition-all duration-300">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-accent-foreground" />
              </div>
              <h4 className="text-lg font-semibold text-primary mb-2">Pan India</h4>
              <p className="text-muted-foreground">Comprehensive coverage across all major destinations in India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;