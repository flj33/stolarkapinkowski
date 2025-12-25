import { Award, Clock, Users, CheckCircle } from "lucide-react";
import useScrollAnimation from "@/hooks/useScrollAnimation";

const stats = [{
  icon: Clock,
  value: "25+",
  label: "Lat doświadczenia"
}, {
  icon: Users,
  value: "500+",
  label: "Zadowolonych klientów"
}, {
  icon: Award,
  value: "100%",
  label: "Zaangażowania"
}, {
  icon: CheckCircle,
  value: "1000+",
  label: "Zrealizowanych projektów"
}];

const About = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: statsRef, isVisible: statsVisible } = useScrollAnimation();

  return (
    <section id="o-nas" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-5 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center">
          <div 
            ref={contentRef}
            className={`transition-all duration-700 ${
              contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <span className="text-primary font-semibold tracking-wide text-sm uppercase">Dlaczego ja?</span>
            <h2 className="mt-2 mb-5 sm:mb-6">
              Marcin Pińkowski – fachowiec, któremu możesz zaufać
            </h2>
            
            <p className="text-muted-foreground mb-5 sm:mb-6 text-base sm:text-lg leading-relaxed">
              Od ponad <strong className="text-foreground">25&nbsp;lat</strong> zajmuję się montażem podłóg, drzwi i&nbsp;tarasów. 
              Siedziba mojej firmy mieści się w&nbsp;<strong className="text-foreground">Lesznie</strong>, ale realizuję projekty 
              w&nbsp;całej Polsce. Wykonałem już ponad 1000&nbsp;projektów dla klientów indywidualnych i&nbsp;firm.
            </p>

            <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              {[
                "Pracuję sam lub z zaufaną ekipą – wiem, kto odpowiada za efekt",
                "Używam sprawdzonych materiałów – doradzę, co wybrać",
                "Sprzątam po sobie – zostawiam gotowe wnętrze",
                "Działam terminowo – umawiamy się i dotrzymuję słowa"
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-primary" />
                  </div>
                  <span className="text-foreground text-sm sm:text-base">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-card p-5 sm:p-6 rounded-xl border border-border/50">
              <h3 className="font-semibold text-foreground mb-2 sm:mb-3 text-base sm:text-lg">
                Porozmawiajmy o&nbsp;Twoim projekcie
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                Bezpłatna wycena, doradztwo w&nbsp;wyborze materiałów, termin realizacji – wszystko ustalimy po kontakcie.
              </p>
              <a 
                href="#kontakt" 
                className="text-primary font-semibold hover:underline text-sm sm:text-base"
              >
                Przejdź do formularza kontaktowego →
              </a>
            </div>
          </div>

          <div 
            ref={statsRef}
            className={`grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 transition-all duration-700 delay-200 ${
              statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            {stats.map((stat, index) => (
              <div 
                key={stat.label} 
                className="bg-card p-4 sm:p-6 rounded-xl border border-border/50 text-center hover:shadow-lg transition-shadow"
                style={{ transitionDelay: `${200 + index * 100}ms` }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <stat.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
