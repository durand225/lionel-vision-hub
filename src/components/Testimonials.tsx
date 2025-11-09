import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Kouassi Arnaud',
      role: 'Entrepreneur',
      location: 'Abidjan, Côte d\'Ivoire',
      rating: 5,
      text: 'Grâce à la formation de Lionel Cameron, j\'ai pu comprendre les concepts du Smart Money et améliorer mes résultats de trading de façon significative. Son approche pédagogique est exceptionnelle.',
      image: '👨🏿‍💼',
    },
    {
      name: 'Diabaté Mariame',
      role: 'Comptable',
      location: 'Yamoussoukro, Côte d\'Ivoire',
      rating: 5,
      text: 'Le coaching 1:1 avec Lionel a transformé ma façon de trader. Sa patience et son expertise m\'ont permis de passer de débutante à trader rentable en quelques mois.',
      image: '👩🏿‍💼',
    },
    {
      name: 'Traoré Ibrahim',
      role: 'Étudiant',
      location: 'Bouaké, Côte d\'Ivoire',
      rating: 5,
      text: 'La masterclass SMC est incroyable ! J\'ai enfin compris comment les institutions bougent le marché. Lionel partage ses connaissances avec générosité et professionnalisme.',
      image: '👨🏿‍🎓',
    },
    {
      name: 'Koné Fatou',
      role: 'Commerçante',
      location: 'Daloa, Côte d\'Ivoire',
      rating: 5,
      text: 'Institution sérieuse et professionnelle. Les formations sont bien structurées et Lionel reste disponible pour répondre à nos questions. Je recommande vivement !',
      image: '👩🏿‍💼',
    },
  ];

  return (
    <section id="temoignages" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            Témoignages de
            <span className="block text-gold mt-2">nos Élèves</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez les success stories de nos traders formés
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20 hover:border-gold/40 transition-all duration-300 hover:shadow-gold relative group"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-gold/10 group-hover:text-gold/20 transition-colors" />
              
              <div className="flex items-start gap-4 mb-6">
                <div className="text-5xl flex-shrink-0">{testimonial.image}</div>
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-1">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground mb-1">{testimonial.role}</p>
                  <p className="text-xs text-gold">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 rounded-2xl p-8 md:p-12 border border-gold/30">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-gold mb-2">500+</p>
              <p className="text-sm text-muted-foreground">Élèves Formés</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gold mb-2">95%</p>
              <p className="text-sm text-muted-foreground">Taux de Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gold mb-2">6+</p>
              <p className="text-sm text-muted-foreground">Années d'Expérience</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-gold mb-2">24/7</p>
              <p className="text-sm text-muted-foreground">Support Disponible</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
