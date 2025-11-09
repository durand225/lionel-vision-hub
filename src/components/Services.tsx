import { GraduationCap, Users, Brain, TrendingUp, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import servicesBg from '@/assets/services-bg.jpg';

const Services = () => {
  const services = [
    {
      icon: GraduationCap,
      title: 'Formation Forex Complète',
      description: 'Programme structuré du niveau débutant à expert',
      features: [
        'Analyse technique approfondie',
        'Smart Money Concept (SMC)',
        'Break of Structure (BC)',
        'Gestion du risque',
        'Psychologie du trading',
      ],
      price: 'Sur demande',
    },
    {
      icon: Users,
      title: 'Coaching 1:1 Personnalisé',
      description: 'Accompagnement individuel sur mesure',
      features: [
        'Sessions privées en direct',
        'Plan de trading personnalisé',
        'Analyse de vos trades',
        'Suivi hebdomadaire',
        'Accès WhatsApp direct',
      ],
      price: 'Sur demande',
    },
    {
      icon: Brain,
      title: 'Masterclass SMC Avancée',
      description: 'Formation avancée Smart Money Concept',
      features: [
        'Stratégies institutionnelles',
        'Order Flow analysis',
        'Market Structure',
        'Liquidity concepts',
        'Sessions de trading live',
      ],
      price: 'Sur demande',
    },
    {
      icon: TrendingUp,
      title: 'Trading Indices & Crypto',
      description: 'Spécialisation marchés indices et cryptos',
      features: [
        'Analyse indices US & EU',
        'Trading Bitcoin & altcoins',
        'Stratégies multi-marchés',
        'Risk management avancé',
        'Communauté de traders',
      ],
      price: 'Sur demande',
    },
  ];

  return (
    <section id="services" className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-10" />
        <img
          src={servicesBg}
          alt="Services Background"
          className="w-full h-full object-cover opacity-5"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Nos Services &
            <span className="block text-gold mt-2">Formations</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Des programmes adaptés à tous les niveaux pour vous transformer en trader professionnel
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-gold group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center group-hover:bg-gold/20 transition-colors flex-shrink-0">
                    <Icon className="w-7 h-7 text-gold" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-montserrat font-bold text-gold mb-2">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <p className="text-sm text-muted-foreground">Tarif</p>
                    <p className="text-xl font-bold text-gold">{service.price}</p>
                  </div>
                  <Button
                    asChild
                    className="bg-gold hover:bg-gold-light text-primary-foreground"
                  >
                    <a
                      href="https://wa.me/+2250777519477"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contactez-nous
                    </a>
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 rounded-2xl p-8 md:p-12 border border-gold/30 text-center">
          <h3 className="text-3xl font-montserrat font-bold mb-4">
            Prêt à commencer votre parcours ?
          </h3>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Rejoignez l'Institution of Lionel Cameron et apprenez à trader comme les professionnels. Contactez-nous pour obtenir plus d'informations sur nos programmes.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-gold hover:bg-gold-light text-primary-foreground font-semibold text-lg px-12 shadow-gold"
          >
            <a
              href="https://wa.me/+2250777519477"
              target="_blank"
              rel="noopener noreferrer"
            >
              Discuter sur WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
