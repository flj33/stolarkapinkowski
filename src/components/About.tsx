import { Award, Clock, Users, CheckCircle } from "lucide-react";
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
  return <section id="o-nas" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary font-semibold tracking-wide">O mnie</span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 tracking-tight">
              Doświadczenie i Profesjonalizm
            </h2>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">Nazywam się Marcin Pińkowski posiadam ponad 25-letnie doświadczenie zawodowe w branży stolarskiej i montażowej. Przez lata zdobyłem szeroką wiedzę i umiejętności w zakresie montażu stolarki budowlanej, podłóg oraz prac wykończeniowych.<strong className="text-foreground"> ponad 25-letnie doświadczenie zawodowe</strong> w branży 
              stolarskiej i montażowej. Przez lata zdobyłem szeroką wiedzę i umiejętności 
              w zakresie montażu stolarki budowlanej, podłóg oraz prac wykończeniowych.
            </p>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Wykonuję usługi na rynku lokalnym, obsługując zarówno 
              <strong className="text-foreground"> klientów indywidualnych</strong>, jak i 
              <strong className="text-foreground"> firmy</strong>. Gwarantuję solidność, estetykę 
              oraz zgodność z obowiązującymi normami budowlanymi.
            </p>

            <div className="space-y-4">
              {["Układanie podłóg drewnianych, paneli i winylowych", "Montaż drzwi wewnętrznych i zewnętrznych", "Budowa tarasów i podestów drewnianych", "Montaż okien, rolet i osłon przeciwsłonecznych"].map(item => <div key={item} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{item}</span>
                </div>)}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map(stat => <div key={stat.label} className="bg-card p-6 rounded-xl border border-border/50 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default About;