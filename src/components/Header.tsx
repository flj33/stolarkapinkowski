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

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

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
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2 sm:gap-3">
            <img 
              src={logo} 
              alt="Montaż Stolarki Budowlanej" 
              className={`h-10 sm:h-12 md:h-14 w-auto transition-all ${
                isScrolled ? "" : "brightness-0 invert"
              }`}
            />
            <div className={`hidden xs:block ${isScrolled ? "text-foreground" : "text-primary-foreground"}`}>
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
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold touch-target px-5"
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
            className={`lg:hidden p-2.5 -mr-2 touch-target flex items-center justify-center rounded-md transition-colors ${
              isScrolled ? "hover:bg-secondary" : "hover:bg-primary-foreground/10"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
          </button>
        </div>
      </div>

      {/* Mobile Full-Screen Overlay Menu */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition-all duration-300 ${
          isMenuOpen ? "visible" : "invisible"
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-foreground/50 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Slide-in Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-full max-w-sm bg-background shadow-xl transition-transform duration-300 ease-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Close Button */}
          <div className="flex items-center justify-between p-4 border-b border-border">
            <span className="font-bold text-lg text-foreground">Menu</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md hover:bg-secondary transition-colors"
              aria-label="Zamknij menu"
            >
              <X className="h-6 w-6 text-foreground" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="px-6 py-4 text-foreground text-lg font-medium hover:bg-secondary transition-colors border-b border-border/30"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Phone Button */}
          <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-border bg-secondary/30">
            <Button 
              size="lg"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold touch-target h-14" 
              asChild
            >
              <a href="tel:+48697277724" onClick={() => setIsMenuOpen(false)}>
                <Phone className="mr-2 h-5 w-5" />
                <span className="text-lg font-bold">697&nbsp;277&nbsp;724</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
