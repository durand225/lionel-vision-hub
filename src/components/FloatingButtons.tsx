import { MessageCircle, Bot } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

const FloatingButtons = () => {
  const handleAIChat = () => {
    toast.info('Fonctionnalité IA à venir ! Pour le moment, contactez-nous via WhatsApp.');
  };

  return (
    <>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+2250777519477"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <Button
          size="lg"
          className="h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] shadow-elegant group-hover:scale-110 transition-all duration-300 p-0"
          aria-label="Contactez-nous sur WhatsApp"
        >
          <MessageCircle className="h-7 w-7 text-white" />
        </Button>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card/95 backdrop-blur-sm text-foreground px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gold/20">
          Discuter sur WhatsApp
        </span>
      </a>

      {/* AI Chat Button */}
      <button
        onClick={handleAIChat}
        className="fixed bottom-24 right-6 z-50 group"
      >
        <Button
          size="lg"
          className="h-14 w-14 rounded-full bg-gold hover:bg-gold-light text-primary-foreground shadow-gold group-hover:scale-110 transition-all duration-300 p-0"
          aria-label="Assistant IA"
        >
          <Bot className="h-7 w-7" />
        </Button>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-card/95 backdrop-blur-sm text-foreground px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-gold/20">
          Assistant IA (Bientôt)
        </span>
      </button>
    </>
  );
};

export default FloatingButtons;
