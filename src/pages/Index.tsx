import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TourPackages from '@/components/TourPackages';
import BusFleet from '@/components/BusFleet';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ContactBooking from '@/components/ContactBooking';
import Footer from '@/components/Footer';
import WhatsAppFloat from '@/components/WhatsAppFloat';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <TourPackages />
        <BusFleet />
        <WhyChooseUs />
        <Testimonials />
        <ContactBooking />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
