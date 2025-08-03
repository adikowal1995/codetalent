import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { CalculatorData } from "./SalaryCalculator";

interface ContactFormProps {
  calculatorData: CalculatorData;
  onBack: () => void;
}

const ContactForm = ({ calculatorData, onBack }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    comment: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Tutaj w prawdziwej aplikacji wysłałbyś dane na serwer
    // Na potrzeby demo, symulujemy wysłanie
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log("Dane z kalkulatora:", calculatorData);
      console.log("Dane z formularza:", formData);
      
      toast({
        title: "Zapytanie wysłane!",
        description: "Skontaktujemy się z Tobą w ciągu 24 godzin.",
      });
      
      // Reset formularza
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        comment: ""
      });
      onBack();
    } catch (error) {
      toast({
        title: "Błąd",
        description: "Wystąpił problem z wysłaniem zapytania. Spróbuj ponownie.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-elegant">
            <CardHeader>
              <CardTitle className="text-2xl text-center">
                Formularz zapytania
              </CardTitle>
              <div className="bg-muted p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Wybrane parametry:</h3>
                <p className="text-sm text-muted-foreground">
                  <strong>Rola:</strong> {calculatorData.role} • 
                  <strong> Doświadczenie:</strong> {calculatorData.experience} • 
                  <strong> Tryb pracy:</strong> {calculatorData.workMode}
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>UoP:</strong> {calculatorData.uopMin.toLocaleString()} - {calculatorData.uopMax.toLocaleString()} PLN • 
                  <strong> B2B:</strong> {calculatorData.b2bMin.toLocaleString()} - {calculatorData.b2bMax.toLocaleString()} PLN • 
                  <strong> Koszt rekrutacji:</strong> {calculatorData.recruitmentCost.toLocaleString()} PLN
                </p>
              </div>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">Imię *</Label>
                    <Input
                      id="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Nazwisko *</Label>
                    <Input
                      id="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="company">Nazwa firmy</Label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="comment">Dodatkowe komentarze</Label>
                  <Textarea
                    id="comment"
                    rows={4}
                    placeholder="Opisz swoje potrzeby rekrutacyjne, oczekiwania co do kandydata..."
                    value={formData.comment}
                    onChange={(e) => handleInputChange('comment', e.target.value)}
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onBack}
                    className="flex-1"
                  >
                    Wróć do kalkulatora
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground"
                  >
                    {isSubmitting ? "Wysyłanie..." : "Wyślij zapytanie"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;