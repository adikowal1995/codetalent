import { Card, CardContent } from "@/components/ui/card";

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
    <section id="about" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold mb-6">O CodeTalent Agency</h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Jesteśmy agencją rekrutacyjną, która specjalizuje się wyłącznie w pozyskiwaniu 
              najlepszych specjalistów IT. Nasz zespół ma wieloletnie doświadczenie w branży 
              technologicznej i doskonale rozumie potrzeby zarówno kandydatów, jak i pracodawców.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Nie zajmujemy się outsourcingiem, consultingiem ani body leasingiem. 
              Koncentrujemy się na tym, co robimy najlepiej - permanent placements, 
              które tworzą wartość dla wszystkich stron.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-muted/50 rounded-lg">
                  <div className="text-2xl font-bold text-accent">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6">Nasze wartości</h3>
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-3 group-hover:text-accent transition-colors">
                    {value.title}
                  </h4>
                  <p className="text-muted-foreground leading-relaxed">
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