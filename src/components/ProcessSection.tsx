import { Card, CardContent } from "@/components/ui/card";

const ProcessSection = () => {
  const processSteps = [
    {
      step: "01",
      title: "Analiza potrzeb",
      description: "Szczegółowe omówienie wymagań, kultury firmy i oczekiwań wobec kandydata."
    },
    {
      step: "02", 
      title: "Sourcing kandydatów",
      description: "Aktywne poszukiwanie specjalistów w naszej bazie i na rynku pracy."
    },
    {
      step: "03",
      title: "Weryfikacja techniczna", 
      description: "Przeprowadzenie rozmów technicznych i sprawdzenie kompetencji."
    },
    {
      step: "04",
      title: "Prezentacja kandydatów",
      description: "Przedstawienie sprawdzonych kandydatów wraz z rekomendacjami."
    },
    {
      step: "05",
      title: "Wsparcie w procesie",
      description: "Pomoc w rozmowach, negocjacjach i finalizacji zatrudnienia."
    },
    {
      step: "06",
      title: "Follow-up",
      description: "Monitorowanie satysfakcji i wsparcie w okresie wdrożenia."
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Nasz Proces Rekrutacji</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sprawdzony 6-etapowy proces, który gwarantuje znalezienie 
            idealnego kandydata dla Twojej firmy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-accent text-accent-foreground rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 bg-gradient-primary rounded-lg p-8 text-white text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Gwarancja jakości
          </h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Oferujemy 3-miesięczną gwarancję na każdą rekrutację. 
            Jeśli kandydat nie spełni oczekiwań, przeprowadzimy proces ponownie bez dodatkowych kosztów.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;