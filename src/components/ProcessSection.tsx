import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";

const ProcessSection = () => {
  const { currentTheme } = useTheme();
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
      title: "Feedback",
      description: "Informacja zwrotna dla wszystkich stron, monitorowanie satysfakcji i dalsze wsparcie."
    }
  ];

  return (
    <section 
      className="py-16"
      style={{ backgroundColor: currentTheme.colors.bgTertiary }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: currentTheme.colors.textPrimary }}>
            Nasz proces rekrutacji
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: currentTheme.colors.textSecondary }}>
            Sprawdzony 6-etapowy proces, który gwarantuje znalezienie 
            idealnego kandydata dla Twojej firmy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processSteps.map((step, index) => (
            <Card 
              key={index} 
              className="group transition-all duration-300 hover:shadow-lg"
              style={{ 
                border: `1px solid ${currentTheme.colors.borderLight}`,
                backgroundColor: currentTheme.colors.bgPrimary
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div 
                    className="rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold group-hover:scale-110 transition-transform"
                    style={{ 
                      backgroundColor: currentTheme.colors.accentOrange,
                      color: currentTheme.colors.textLight
                    }}
                  >
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 
                      className="text-xl font-semibold mb-2 transition-colors group-hover:opacity-80"
                      style={{ color: currentTheme.colors.textPrimary }}
                    >
                      {step.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>
                      {step.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div 
          className="mt-12 rounded-lg p-8 text-white text-center"
          style={{ 
            background: `linear-gradient(135deg, ${currentTheme.colors.primaryBlue} 0%, ${currentTheme.colors.primaryBlueDark} 100%)`
          }}
        >
          <h3 className="text-4xl font-semibold mb-4">
            Gwarancja jakości
          </h3>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Oferujemy 3-miesięczną gwarancję na każdą rekrutację.
            <br />
            Jeśli kandydat nie spełni oczekiwań, przeprowadzimy proces ponownie.
            <br />
            Całość realizujemy bez naliczania dodatkowych kosztów.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;