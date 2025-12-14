import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Send, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    message: "",
    consent: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Wymagana zgoda",
        description: "Zaznacz zgodę na przetwarzanie danych, aby wysłać wiadomość.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Wiadomość wysłana!",
      description: "Dziękuję za kontakt. Oddzwonię najszybciej jak to możliwe."
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (isSubmitted) {
    return (
      <div className="bg-card rounded-xl p-8 border border-border/50 text-center">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-xl font-bold mb-2">Dziękuję za wiadomość!</h3>
        <p className="text-muted-foreground mb-4">
          Otrzymałem Twoje zapytanie. Oddzwonię lub odpiszę <strong className="text-foreground">w ciągu 24 godzin</strong> (zwykle szybciej).
        </p>
        <p className="text-sm text-muted-foreground">
          Jeśli sprawa pilna – zadzwoń: <a href="tel:+48697277724" className="text-primary font-semibold hover:underline">697 277 724</a>
        </p>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-xl p-6 md:p-8 border border-border/50">
      <h3 className="text-xl md:text-2xl font-bold mb-2 tracking-tight">
        Opisz krótko swój projekt
      </h3>
      <p className="text-muted-foreground mb-6">
        Wypełnij formularz – oddzwonię z bezpłatną wyceną. Zwykle odpowiadam tego samego dnia.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Imię *</Label>
            <Input
              id="name"
              name="name"
              placeholder="Jak się nazywasz?"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-background"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Telefon *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Pod jaki numer oddzwonić?"
              value={formData.phone}
              onChange={handleChange}
              required
              className="bg-background"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Opcjonalnie"
              value={formData.email}
              onChange={handleChange}
              className="bg-background"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="location">Miejscowość *</Label>
            <Input
              id="location"
              name="location"
              placeholder="Gdzie realizacja? (np. Leszno)"
              value={formData.location}
              onChange={handleChange}
              required
              className="bg-background"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Opis projektu *</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="Np. Chcę położyć panele w salonie 25m², potrzebuję też listew. Kiedy mógłby Pan wycenić?"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="bg-background resize-none"
          />
          <p className="text-xs text-muted-foreground">
            Im więcej szczegółów, tym dokładniejsza wycena.
          </p>
        </div>

        <div className="flex items-start space-x-3">
          <Checkbox
            id="consent"
            checked={formData.consent}
            onCheckedChange={(checked) => 
              setFormData(prev => ({ ...prev, consent: checked as boolean }))
            }
            className="mt-0.5"
          />
          <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
            Wyrażam zgodę na przetwarzanie moich danych osobowych w celu odpowiedzi na zapytanie. 
            Dane nie będą udostępniane osobom trzecim.
          </Label>
        </div>

        <Button 
          type="submit" 
          size="lg"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            "Wysyłanie..."
          ) : (
            <>
              <Send className="mr-2 h-5 w-5" />
              Wyślij zapytanie o wycenę
            </>
          )}
        </Button>

        <p className="text-xs text-center text-muted-foreground">
          Wolisz zadzwonić? <a href="tel:+48697277724" className="text-primary font-semibold hover:underline">697 277 724</a>
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
