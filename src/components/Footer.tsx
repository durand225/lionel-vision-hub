import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import logo from '@/assets/logo.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/30 backdrop-blur-sm border-t border-gold/20 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Institution of Lionel Cameron" className="h-12 w-12" />
              <div>
                <h3 className="text-lg font-montserrat font-bold text-gold">
                  INSTITUTION OF
                </h3>
                <p className="text-sm text-muted-foreground">LIONEL CAMERON</p>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Formation d'élite en trading Forex, Indices et Cryptomonnaies. Transformez votre passion en expertise professionnelle.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 bg-gold/10 hover:bg-gold/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 text-gold" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gold/10 hover:bg-gold/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gold" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gold/10 hover:bg-gold/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5 text-gold" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gold/10 hover:bg-gold/20 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5 text-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-bold text-gold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              <li>
                <a href="#accueil" className="text-muted-foreground hover:text-gold transition-colors">
                  Accueil
                </a>
              </li>
              <li>
                <a href="#apropos" className="text-muted-foreground hover:text-gold transition-colors">
                  À Propos
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-gold transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#temoignages" className="text-muted-foreground hover:text-gold transition-colors">
                  Témoignages
                </a>
              </li>
              <li>
                <a href="#contact" className="text-muted-foreground hover:text-gold transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-montserrat font-bold text-gold mb-4">Nos Services</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-muted-foreground hover:text-gold transition-colors">
                  Formation Forex
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-gold transition-colors">
                  Coaching 1:1
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-gold transition-colors">
                  Masterclass SMC
                </a>
              </li>
              <li>
                <a href="#services" className="text-muted-foreground hover:text-gold transition-colors">
                  Trading Indices & Crypto
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Institution of Lionel Cameron. Tous droits réservés.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                Mentions Légales
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                Politique de Confidentialité
              </a>
              <a href="#" className="text-muted-foreground hover:text-gold transition-colors">
                Avertissement sur les Risques
              </a>
            </div>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-4">
            ⚠️ Avertissement : Le trading comporte des risques importants de perte en capital. 
            Les performances passées ne garantissent pas les résultats futurs. Tradez uniquement avec des fonds que vous pouvez vous permettre de perdre.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
