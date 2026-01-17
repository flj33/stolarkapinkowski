import { Phone, Mail, MapPin } from "lucide-react";

import logo from "@/assets/logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-5 sm:px-6 py-10 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src={logo}
                alt="Marcin Pińkowski Usługi Budowlane"
                className="h-12 sm:h-16 w-auto"
              />
              <div>
                <span className="font-bold block text-sm sm:text-base">
                  Marcin Pińkowski
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground">
                  Usługi Budowlane
                </span>
              </div>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              Profesjonalne usługi montażowe: podłogi, drzwi, tarasy i inne
              prace wykończeniowe. Ponad 25 lat doświadczenia w branży.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
              Usługi
            </h4>
            <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
              <li>Układanie podłóg</li>
              <li>Montaż drzwi</li>
              <li>Budowa tarasów drewnianych</li>
              <li>Montaż okien i parapetów</li>
              <li>Rolety i żaluzje</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-3 sm:mb-4 text-sm sm:text-base">
              Kontakt
            </h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="tel:+48697277724"
                  className="hover:text-primary transition-colors font-medium"
                >
                  697 277 724
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:marcinpinkowski77@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  marcinpinkowski77@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                <span>Zagłoby 17, 64-100 Leszno</span>
              </li>
            </ul>
            <div className="mt-3 sm:mt-4 text-xs text-muted-foreground">
              <p>NIP: 6931838292</p>
              <p>REGON: 302245156</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-6 sm:mt-8 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs sm:text-sm text-muted-foreground">
          <p>© {currentYear} Marcin Pińkowski Usługi Budowlane. Wszelkie prawa zastrzeżone.</p>
          <p className="text-muted-foreground/70">
            Projekt strony:{" "}
            <a
              href="https://lokalny.pro"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-gray-900 via-gray-900 to-blue-600 bg-clip-text text-transparent font-bold tracking-tight hover:opacity-90 transition-all"
            >
              lokalny.pro
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
