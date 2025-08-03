import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';

const ProcessSection = () => {
  const { currentTheme } = useTheme();
  const processSteps = [
    {
      step: '01',
      title: 'Analiza potrzeb',
      description:
        'Szczegółowe omówienie wymagań, kultury firmy i oczekiwań wobec kandydata.',
    },
    {
      step: '02',
      title: 'Sourcing i rekrutacja',
      description:
        'Aktywne poszukiwanie specjalistów w naszej bazie i na rynku pracy.',
    },
    {
      step: '03',
      title: 'Weryfikacja techniczna',
      description:
        'Przeprowadzenie rozmów technicznych i sprawdzenie kompetencji.',
    },
    {
      step: '04',
      title: 'Prezentacja kandydatów',
      description:
        'Przedstawienie sprawdzonych kandydatów wraz z rekomendacjami.',
    },
    {
      step: '05',
      title: 'Wsparcie w procesie',
      description:
        'Pomoc w rozmowach, negocjacjach i finalizacji zatrudnienia.',
    },
    {
      step: '06',
      title: 'Feedback',
      description:
        'Informacja zwrotna dla wszystkich stron, monitorowanie satysfakcji i dalsze wsparcie.',
    },
  ];

  return (
    <section
      className="py-16"
      style={{ backgroundColor: currentTheme.colors.bgTertiary }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 lg:mb-12">
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 lg:mb-4"
            style={{ color: currentTheme.colors.textPrimary }}
          >
            Nasz proces rekrutacji
          </h2>
          <p
            className="text-base sm:text-lg lg:text-xl max-w-2xl mx-auto px-4"
            style={{ color: currentTheme.colors.textSecondary }}
          >
            Sprawdzony 6-etapowy proces, który gwarantuje znalezienie idealnego
            kandydata dla Twojej firmy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
          {processSteps.map((step, index) => (
            <Card
              key={index}
              className="group transition-all duration-300 hover:shadow-lg"
              style={{
                border: `1px solid ${currentTheme.colors.borderLight}`,
                backgroundColor: currentTheme.colors.bgPrimary,
              }}
            >
              <CardContent className="p-4 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div
                    className="rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center text-sm sm:text-lg font-bold group-hover:scale-110 transition-transform flex-shrink-0"
                    style={{
                      backgroundColor: currentTheme.colors.accentOrange,
                      color: currentTheme.colors.textLight,
                    }}
                  >
                    {step.step}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3
                      className="text-lg sm:text-xl font-semibold mb-2 transition-colors group-hover:opacity-80"
                      style={{ color: currentTheme.colors.textPrimary }}
                    >
                      {step.title}
                    </h3>
                    <p
                      className="leading-relaxed text-sm sm:text-base"
                      style={{ color: currentTheme.colors.textSecondary }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div
          className="mt-8 lg:mt-12 rounded-lg p-6 lg:p-8 text-white text-center"
          style={{
            background: `linear-gradient(135deg, ${currentTheme.colors.primaryBlue} 0%, ${currentTheme.colors.primaryBlueDark} 100%)`,
          }}
        >
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-3 lg:mb-4">
            Gwarancja jakości
          </h3>
          <p className="text-base sm:text-lg lg:text-xl opacity-90 max-w-2xl mx-auto px-4">
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
