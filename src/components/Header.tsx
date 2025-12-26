import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { href: "#uslugi", label: "Usługi" },
  { href: "#cennik", label: "Cennik" },
  { href: "#galeria", label: "Galeria" },
  { href: "#o-nas", label: "O mnie" },
  { href: "#kontakt", label: "Kontakt" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMenuOpen
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 sm:gap-3">
            <img 
              src={logo} 
              alt="Montaż Stolarki Budowlanej" 
              className={`h-12 sm:h-14 md:h-16 w-auto transition-all ${
                isScrolled || isMenuOpen ? "" : "brightness-0 invert"
              }`}
            />
            <div className={`hidden xs:block ${isScrolled || isMenuOpen ? "text-foreground" : "text-primary-foreground"}`}>
              <span className="font-bold text-sm sm:text-base block leading-tight">Marcin Pińkowski</span>
              <span className="text-xs opacity-80 hidden sm:block">Usługi Budowlane</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-all duration-200 py-2 hover:text-primary relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200 hover:after:w-full ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Phone Button */}
          <div className="hidden lg:flex items-center">
            <Button
              size="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-5"
              asChild
            >
              <a href="tel:+48697277724">
                <Phone className="mr-2 h-4 w-4" />
                <span className="text-lg font-bold">697&nbsp;277&nbsp;724</span>
              </a>
            </Button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            className={`lg:hidden p-2 rounded-md transition-colors ${
              isScrolled || isMenuOpen ? "text-foreground hover:bg-secondary" : "text-primary-foreground hover:bg-primary-foreground/10"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <nav className="lg:hidden border-t border-border/50 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="block py-3 px-2 text-foreground text-base font-medium hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:+48697277724"
              className="flex items-center gap-2 py-3 px-2 text-primary font-semibold mt-2 border-t border-border/50 pt-4"
            >
              <Phone className="h-4 w-4" />
              697 277 724
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
