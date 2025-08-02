import { Card, CardContent } from "@/components/ui/card";
import { colors } from "@/lib/colors";

const AboutSection = () => {
  const stats = [
    { value: "500+", label: "Zakończonych rekrutacji" },
    { value: "95%", label: "Skuteczność procesu" },
    { value: "24h", label: "Średni czas odpowiedzi" },
    { value: "3 lata", label: "Doświadczenia na rynku" }
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
      style={{ backgroundColor: colors.white }}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6" style={{ color: colors.textPrimary }}>
              O CodeTalent Agency
            </h2>
            <p className="text-lg mb-8 leading-relaxed" style={{ color: colors.textSecondary }}>
              Jesteśmy agencją rekrutacyjną, która specjalizuje się w pozyskiwaniu 
              najlepszych specjalistów IT. Nasz zespół ma wieloletnie doświadczenie w branży 
              technologicznej i doskonale rozumie potrzeby zarówno kandydatów, jak i pracodawców.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div 
                  key={index} 
                  className="text-center p-4 rounded-lg transition-all duration-300 hover:shadow-lg"
                  style={{ 
                    backgroundColor: colors.gray50,
                    border: `1px solid ${colors.borderLight}`
                  }}
                >
                  <div className="text-2xl font-bold" style={{ color: colors.primaryBlue }}>
                    {stat.value}
                  </div>
                  <div className="text-base" style={{ color: colors.textSecondary }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6" style={{ color: colors.textPrimary }}>
              Nasze wartości
            </h3>
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="group transition-all duration-300 hover:shadow-lg"
                style={{ 
                  border: `1px solid ${colors.borderLight}`,
                  backgroundColor: colors.white
                }}
              >
                <CardContent className="p-6">
                  <h4 
                    className="text-xl font-semibold mb-3 transition-colors group-hover:opacity-80"
                    style={{ color: colors.textPrimary }}
                  >
                    {value.title}
                  </h4>
                  <p className="leading-relaxed" style={{ color: colors.textSecondary }}>
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