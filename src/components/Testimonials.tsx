import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Mumbai',
      rating: 5,
      comment: 'Excellent service! The Char Dham yatra was perfectly organized. The bus was comfortable and the guide was very knowledgeable. Highly recommended!',
      tour: 'Char Dham Yatra'
    },
    {
      name: 'Priya Sharma',
      location: 'Delhi',
      rating: 5,
      comment: 'Amazing North India tour experience. Clean buses, punctual service, and great hospitality. Our family had a wonderful time.',
      tour: 'North India Tour'
    },
    {
      name: 'Suresh Reddy',
      location: 'Hyderabad',
      rating: 5,
      comment: 'The South India tour exceeded our expectations. Beautiful destinations, comfortable travel, and excellent food arrangements.',
      tour: 'South India Explorer'
    },
    {
      name: 'Meena Patel',
      location: 'Ahmedabad',
      rating: 5,
      comment: 'Professional service from start to finish. The All India tour was comprehensive and well-planned. Great value for money!',
      tour: 'All India Grand Tour'
    },
    {
      name: 'Vikram Singh',
      location: 'Jaipur',
      rating: 5,
      comment: 'Safety and comfort were top-notch. The drivers were experienced and the buses were well-maintained. Will definitely book again.',
      tour: 'Char Dham Yatra'
    },
    {
      name: 'Anita Gupta',
      location: 'Pune',
      rating: 5,
      comment: 'Wonderful experience with my elderly parents. The staff took great care of us and made the journey memorable and comfortable.',
      tour: 'North India Tour'
    }
  ];

  return (
    <section className="py-20 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-primary mb-4">What Our Travelers Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Real experiences from real customers who've traveled with us across India
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-warm transition-all duration-500 relative"
            >
              <div className="absolute top-4 right-4 text-accent opacity-20">
                <Quote className="w-12 h-12" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                "{testimonial.comment}"
              </p>
              
              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                      {testimonial.tour}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="bg-primary rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Create Your Own Story?</h3>
            <p className="text-white/90 mb-6">Join thousands of satisfied travelers and book your perfect tour today!</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <span className="text-secondary font-semibold">⭐ 4.9/5 Rating</span>
              <span className="text-secondary font-semibold">🎯 50,000+ Happy Customers</span>
              <span className="text-secondary font-semibold">🏆 15+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;