import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src={logo} 
                alt="Marcin Pińkowski Usługi Budowlane" 
                className="h-16 w-auto"
              />
              <div>
                <span className="font-bold block">Marcin Pińkowski</span>
                <span className="text-sm text-muted-foreground">Usługi Budowlane</span>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Profesjonalne usługi montażowe: podłogi, drzwi, tarasy i inne prace wykończeniowe. 
              Ponad 25 lat doświadczenia w branży.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Usługi</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Układanie podłóg</li>
              <li>Montaż drzwi</li>
              <li>Budowa tarasów drewnianych</li>
              <li>Montaż okien i parapetów</li>
              <li>Rolety i żaluzje</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Kontakt</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a href="tel:+48697277724" className="hover:text-primary transition-colors font-medium">
                  697 277 724
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <a href="mailto:marcinpinkowski77@gmail.com" className="hover:text-primary transition-colors break-all">
                  marcinpinkowski77@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Zagłoby 17, 64-100 Leszno</span>
              </li>
            </ul>
            <div className="mt-4 text-xs text-muted-foreground">
              <p>NIP: 6931838292</p>
              <p>REGON: 302245156</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Marcin Pińkowski Usługi Budowlane. Wszelkie prawa zastrzeżone.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
