import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";

const AboutSection = () => {
  const { currentTheme } = useTheme();
  const stats = [
    { value: "500+", label: "Zakończonych rekrutacji" },
    { value: "10 dni", label: "Średni czas realizacji" },
    { value: "24h", label: "Średni czas odpowiedzi" },
    { value: "12+ lat", label: "Doświadczenia na rynku" }
  ];

  const values = [
    {
      title: "Specjalizacja",
      description: "Fokusujemy się wyłącznie na rekrutacjach IT - znamy branżę od podszewki."
    },
    {
      title: "Transparentność", 
      description: "Jasne procesy, czytelne stawki i regularna komunikacja na każdym etapie."
    },
    {
      title: "Jakość",
      description: "Dokładna weryfikacja kandydatów i 3-miesięczna gwarancja na każdą rekrutację."
    },
    {
      title: "Partnerstwo",
      description: "Długoterminowe relacje oparte na zaufaniu i wzajemnym sukcesie."
    }
  ];

  return (
    <section 
      id="about" 
      className="py-16"
      style={{ backgroundColor: currentTheme.colors.bgPrimary }}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6" style={{ color: currentTheme.colors.textPrimary }}>
              O CodeTalent Agency
            </h2>
            <p className="text-base sm:text-lg mb-6 lg:mb-8 leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>
              Jesteśmy agencją rekrutacyjną, która specjalizuje się w pozyskiwaniu 
              najlepszych specjalistów IT. Nasz zespół ma wieloletnie doświadczenie w branży 
              technologicznej i doskonale rozumie potrzeby zarówno kandydatów, jak i pracodawców.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-3 sm:p-4 rounded-lg transition-all duration-300 hover:shadow-lg"
                  style={{ 
                    backgroundColor: currentTheme.colors.bgTertiary,
                    border: `1px solid ${currentTheme.colors.borderLight}`
                  }}
                >
                  <div className="text-lg sm:text-xl lg:text-2xl font-bold" style={{ color: currentTheme.colors.primaryBlue }}>
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm lg:text-base" style={{ color: currentTheme.colors.textSecondary }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4 lg:space-y-6 mt-8 lg:mt-0">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 lg:mb-6" style={{ color: currentTheme.colors.textPrimary }}>
              Nasze wartości
            </h3>
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group transition-all duration-300 hover:shadow-lg"
                style={{ 
                  border: `1px solid ${currentTheme.colors.borderLight}`,
                  backgroundColor: currentTheme.colors.bgPrimary
                }}
              >
                <CardContent className="p-4 sm:p-6">
                  <h4 
                    className="text-lg sm:text-xl font-semibold mb-2 lg:mb-3 transition-colors group-hover:opacity-80"
                    style={{ color: currentTheme.colors.textPrimary }}
                  >
                    {value.title}
                  </h4>
                  <p className="leading-relaxed text-sm sm:text-base" style={{ color: currentTheme.colors.textSecondary }}>
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;