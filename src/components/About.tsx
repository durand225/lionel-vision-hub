import { Target, Award, Users, TrendingUp } from 'lucide-react';
import aboutPhoto from '@/assets/about-photo.jpg';

const About = () => {
  const values = [
    {
      icon: Target,
      title: 'Rigueur',
      description: 'Méthodologie claire, processus reproductibles et standards élevés d\'enseignement.',
    },
    {
      icon: Award,
      title: 'Performance',
      description: 'Orientation résultats, suivi des progrès et amélioration continue.',
    },
    {
      icon: Users,
      title: 'Éthique',
      description: 'Respect de la déontologie financière et responsabilisation des apprenants.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'Adoption d\'outils technologiques modernes (IA, trading tools) pour enrichir l\'apprentissage.',
    },
  ];

  return (
    <section id="apropos" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-montserrat font-bold mb-4">
            À Propos de
            <span className="block text-gold mt-2">l'Institution</span>
          </h2>
          <div className="w-24 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une institution de formation d'élite dédiée à la maîtrise des marchés financiers
          </p>
        </div>

        {/* Biography */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant border border-gold/20">
            <img
              src={aboutPhoto}
              alt="Lionel Cameron - Trading Session"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <h3 className="text-3xl font-montserrat font-bold text-gold">
              Lionel Kouakou - Lionel Cameron
            </h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="text-foreground">Lionel Kouakou</strong>, connu sous le nom de <strong className="text-gold">Lionel Cameron</strong>, est un <strong className="text-foreground">trader ivoirien professionnel</strong> et <strong className="text-foreground">formateur certifié</strong>, cumulant plus de <strong className="text-gold">6 années d'expérience</strong> sur les marchés <strong className="text-foreground">Forex, Indices et Cryptomonnaies</strong>.
              </p>
              <p>
                Passionné par la finance et animé par un profond désir de transmettre son savoir, il a fondé <strong className="text-gold">l'Institution of Lionel Cameron</strong>, un espace d'apprentissage moderne et rigoureux dédié à la formation des traders d'élite en Afrique et à l'international.
              </p>
              <p>
                Au fil des années, Lionel a développé une <strong className="text-foreground">méthodologie d'enseignement unique</strong>, basée sur le <strong className="text-gold">Smart Money Concept (SMC)</strong> et le <strong className="text-gold">Break of Structure (BC)</strong>. Cette approche permet à ses élèves de comprendre la logique des institutions financières et de maîtriser les mouvements des marchés avec précision.
              </p>
              <p>
                Son enseignement met l'accent sur la <strong className="text-foreground">discipline, la patience et la gestion émotionnelle</strong>, trois piliers essentiels du succès en trading.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-gold/20 mb-16">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-montserrat font-bold text-gold mb-4">Notre Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Devenir la référence africaine et francophone de la formation en trading — une institution reconnue pour transformer des passionnés en traders professionnels capables d'opérer avec la rigueur, la méthode et l'éthique des grandes institutions financières.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-montserrat font-bold text-gold mb-4">Notre Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Offrir des programmes pédagogiques structurés, un coaching personnalisé et des analyses de marché actionnables, fondés sur le Smart Money Concept et le Break of Structure, afin de fournir aux traders les compétences techniques et comportementales nécessaires.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div>
          <h3 className="text-3xl font-montserrat font-bold text-center mb-12">
            Nos Valeurs Fondamentales
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="bg-card/30 backdrop-blur-sm p-6 rounded-xl border border-gold/10 hover:border-gold/30 transition-all duration-300 hover:shadow-gold group"
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                    <Icon className="w-6 h-6 text-gold" />
                  </div>
                  <h4 className="text-xl font-bold text-gold mb-2">{value.title}</h4>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
