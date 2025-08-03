import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    tour: '',
    date: '',
    guests: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Inquiry Received!",
      description: "We'll contact you within 24 hours to confirm your booking details.",
    });
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      tour: '',
      date: '',
      guests: '',
      message: ''
    });
  };

  const tours = [
    'Char Dham Yatra',
    'North India Tour',
    'South India Explorer',
    'All India Grand Tour',
    'Custom Package'
  ];

  return (
    <div className="py-20 bg-background">
      {/* Booking Section */}
      <section id="booking" className="container mx-auto px-4 mb-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Book Your Journey</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to explore India? Fill out the form below and we'll create the perfect tour package for you.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-card rounded-3xl shadow-warm p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Full Name *</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Email Address *</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                  className="w-full"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Phone Number *</label>
                <Input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="+91 98765 43210"
                  required
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Select Tour Package *</label>
                <select
                  name="tour"
                  value={formData.tour}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-input rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Choose a tour package</option>
                  {tours.map((tour) => (
                    <option key={tour} value={tour}>{tour}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Preferred Date</label>
                <Input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  className="w-full"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Number of Guests</label>
                <Input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  placeholder="Enter number of travelers"
                  min="1"
                  className="w-full"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-primary mb-2">Special Requirements</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Any special requirements, dietary preferences, or questions..."
                rows={4}
                className="w-full"
              />
            </div>

            <div className="text-center">
              <Button type="submit" variant="book" size="xl" className="w-full md:w-auto">
                Submit Booking Inquiry
              </Button>
              <p className="text-sm text-muted-foreground mt-4">
                We'll get back to you within 24 hours with a customized quote and itinerary.
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions? Need assistance? Our friendly team is here to help you plan your perfect journey.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-card rounded-2xl p-8 shadow-card text-center hover:shadow-warm transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Call Us</h3>
            <p className="text-muted-foreground mb-4">Speak with our travel experts</p>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-primary">+91 98765 43210</p>
              <p className="text-muted-foreground">Mon - Sat: 9:00 AM - 8:00 PM</p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-card text-center hover:shadow-warm transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-warm rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Email Us</h3>
            <p className="text-muted-foreground mb-4">Send us your queries</p>
            <div className="space-y-2">
              <p className="text-lg font-semibold text-primary">info@saiganeshtours.com</p>
              <p className="text-muted-foreground">We reply within 4 hours</p>
            </div>
          </div>

          <div className="bg-card rounded-2xl p-8 shadow-card text-center hover:shadow-warm transition-all duration-300">
            <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-secondary-foreground" />
            </div>
            <h3 className="text-xl font-bold text-primary mb-4">Visit Office</h3>
            <p className="text-muted-foreground mb-4">Meet us in person</p>
            <div className="space-y-2">
              <p className="text-primary font-semibold">Sai Ganesh Tours & Travels</p>
              <p className="text-muted-foreground">123 Main Street, Transport Nagar<br />Delhi - 110001</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactBooking;