import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '919892635155'; // Replace with your actual WhatsApp number
    const message = 'Hello! I am interested in your tour packages. Please provide more information.';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        variant="whatsapp"
        size="icon"
        onClick={handleWhatsAppClick}
        className="w-16 h-16 shadow-2xl animate-float hover:scale-110 transition-all duration-300"
        title="Chat with us on WhatsApp"
      >
        <MessageCircle className="w-8 h-8" />
      </Button>
    </div>
  );
};

export default WhatsAppFloat;