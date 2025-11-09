import { ArrowRight, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';
import lionelPhoto from '@/assets/lionel-kouakou.jpg';

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background z-10" />
        <img
          src={heroBg}
          alt="Trading Background"
          className="w-full h-full object-cover opacity-20"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 bg-card/50 backdrop-blur-sm rounded-full border border-gold/30">
              <TrendingUp className="w-4 h-4 text-gold mr-2" />
              <span className="text-sm font-medium text-gold">6 ans d'expérience professionnelle</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-montserrat font-bold leading-tight">
              Apprenez à maîtriser
              <span className="block text-gold mt-2">les marchés</span>
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 font-normal text-muted-foreground">
                comme les institutions
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Forex, Indices & Crypto Traders 📊 | Formation & Coaching 💻📊 | SMC (Smart Money) & BC ✅
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold-light text-primary-foreground font-semibold text-lg px-8 shadow-gold group"
              >
                <a href="#services">
                  Découvrir nos formations
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-gold text-gold hover:bg-gold/10 font-semibold text-lg px-8"
              >
                <a
                  href="https://wa.me/+2250777519477"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp Direct
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div>
                <p className="text-3xl font-bold text-gold">6+</p>
                <p className="text-sm text-muted-foreground">Années d'expérience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold">500+</p>
                <p className="text-sm text-muted-foreground">Élèves formés</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gold">95%</p>
                <p className="text-sm text-muted-foreground">Taux de satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-elegant border border-gold/20">
              <img
                src={lionelPhoto}
                alt="Lionel Kouakou - Trader Professionnel"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card/90 backdrop-blur-md p-6 rounded-xl shadow-elegant border border-gold/30 max-w-xs">
              <p className="text-sm text-muted-foreground mb-2">Fondateur & Formateur Principal</p>
              <h3 className="text-2xl font-bold text-gold mb-1">Lionel Kouakou</h3>
              <p className="text-sm text-foreground">Trader Professionnel Certifié</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
