import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast.success('Message envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.');
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Contactez
            <span className="block text-gold mt-2">l'Institution</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Prêt à commencer votre parcours ? Discutons de vos objectifs
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-montserrat font-bold text-gold mb-6">
                Informations de Contact
              </h3>
              <p className="text-muted-foreground mb-8">
                N'hésitez pas à nous contacter pour toute question concernant nos formations, nos programmes ou pour prendre rendez-vous.
              </p>
            </div>

            <div className="space-y-6">
              <a
                href="https://wa.me/+2250777519477"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-gold group"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center group-hover:bg-gold/20 transition-colors flex-shrink-0">
                  <Phone className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">WhatsApp / Téléphone</h4>
                  <p className="text-gold">+225 07 77 51 94 77</p>
                  <p className="text-sm text-muted-foreground mt-1">Disponible 24/7</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-gold/20">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Email</h4>
                  <p className="text-gold">contact@lionelcameron.com</p>
                  <p className="text-sm text-muted-foreground mt-1">Réponse sous 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-card/50 backdrop-blur-sm rounded-xl border border-gold/20">
                <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Localisation</h4>
                  <p className="text-muted-foreground">Abidjan, Côte d'Ivoire 🇨🇮</p>
                  <p className="text-sm text-muted-foreground mt-1">Formations en ligne & présentiel</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-xl overflow-hidden border border-gold/20 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d254837.08707196765!2d-4.163703!3d5.345317!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfc1eb4a1c06a3df%3A0x9daec717c2c31ee9!2sAbidjan%2C%20C%C3%B4te%20d&#39;Ivoire!5e0!3m2!1sfr!2s!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation Abidjan"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20">
            <h3 className="text-2xl font-montserrat font-bold text-gold mb-6">
              Envoyez-nous un Message
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    Prénom
                  </label>
                  <Input
                    id="firstName"
                    required
                    placeholder="Votre prénom"
                    className="bg-background/50 border-gold/20 focus:border-gold"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Nom
                  </label>
                  <Input
                    id="lastName"
                    required
                    placeholder="Votre nom"
                    className="bg-background/50 border-gold/20 focus:border-gold"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  placeholder="votre@email.com"
                  className="bg-background/50 border-gold/20 focus:border-gold"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Téléphone / WhatsApp
                </label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  placeholder="+225 XX XX XX XX XX"
                  className="bg-background/50 border-gold/20 focus:border-gold"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  required
                  placeholder="Parlez-nous de vos objectifs en trading..."
                  rows={5}
                  className="bg-background/50 border-gold/20 focus:border-gold resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gold hover:bg-gold-light text-primary-foreground font-semibold shadow-gold group"
              >
                Envoyer le Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
