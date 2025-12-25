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

  // Prevent body scroll when menu is open
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

          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-primary py-2 ${
                  isScrolled ? "text-foreground" : "text-primary-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <Button
              size="default"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold touch-target"
              asChild
            >
              <a href="tel:+48697277724">
                <Phone className="mr-2 h-4 w-4" />
                <span className="hidden xl:inline text-lg font-bold">697&nbsp;277&nbsp;724</span>
                <span className="xl:hidden">Zadzwoń</span>
              </a>
            </Button>
          </div>

          <button
            className="lg:hidden p-2.5 -mr-2 touch-target flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Zamknij menu" : "Otwórz menu"}
          >
            {isMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-foreground" : "text-primary-foreground"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 top-16 sm:top-20 bg-background z-40">
            <nav className="flex flex-col h-full">
              <div className="flex-1 overflow-y-auto py-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block px-5 py-4 text-foreground text-lg font-medium hover:bg-secondary transition-colors border-b border-border/50"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <div className="p-5 border-t border-border bg-secondary/30 safe-area-inset">
                <Button 
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold touch-target h-14" 
                  asChild
                >
                  <a href="tel:+48697277724" onClick={() => setIsMenuOpen(false)}>
                    <Phone className="mr-2 h-5 w-5" />
                    Zadzwoń: <span className="text-lg font-bold">697&nbsp;277&nbsp;724</span>
                  </a>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
