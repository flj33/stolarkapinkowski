import { Award, Clock, Users, CheckCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

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
  return (
    <section id="o-nas" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold tracking-wide">Dlaczego ja?</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 tracking-tight">
              Marcin Pińkowski – fachowiec, któremu możesz zaufać
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
              Od ponad <strong className="text-foreground">25 lat</strong> zajmuję się montażem podłóg, drzwi i tarasów 
              w <strong className="text-foreground">Lesznie i okolicach</strong>. Wykonałem już ponad 1000 projektów 
              dla klientów indywidualnych i firm. Wiem, że liczy się terminowość, czystość i solidne wykonanie 
              – dlatego na tym się skupiam.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Pracuję sam lub z zaufaną ekipą – wiem, kto odpowiada za efekt",
                "Używam sprawdzonych materiałów – doradzę, co wybrać",
                "Sprzątam po sobie – zostawiam gotowe wnętrze",
                "Działam terminowo – umawiamy się i dotrzymuję słowa"
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-card p-6 rounded-xl border border-border/50">
              <h3 className="font-semibold text-foreground mb-3">Zadzwoń i porozmawiajmy o Twoim projekcie</h3>
              <p className="text-muted-foreground text-sm mb-4">
                Bezpłatna wycena, doradztwo w wyborze materiałów, termin realizacji – wszystko ustalimy telefonicznie.
              </p>
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full sm:w-auto"
                asChild
              >
                <a href="tel:+48697277724">
                  <Phone className="mr-2 h-5 w-5" />
                  Zadzwoń: 697 277 724
                </a>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map(stat => (
              <div key={stat.label} className="bg-card p-6 rounded-xl border border-border/50 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
