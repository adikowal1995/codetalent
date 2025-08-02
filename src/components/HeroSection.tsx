import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="bg-hero-bg text-hero-text min-h-screen flex items-center py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Specjaliści IT
              <br />
              <span className="text-accent">dla Twojej firmy</span>
            </h1>
            <p className="text-xl text-hero-text/80 mb-8 leading-relaxed">
              CodeTalent Agency to agencja rekrutacyjna specjalizująca się w pozyskiwaniu 
              najlepszych specjalistów IT. Oferujemy permanent placements dopasowane 
              do Twoich potrzeb biznesowych.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow"
                onClick={scrollToCalculator}
              >
                Sprawdź widełki płacowe
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-hero-text/30 text-hero-text hover:bg-hero-text/10"
              >
                Poznaj nasz proces
              </Button>
            </div>
            
            <div className="grid grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">500+</div>
                <div className="text-sm text-hero-text/70">Rekrutacji</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">95%</div>
                <div className="text-sm text-hero-text/70">Skuteczność</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">24h</div>
                <div className="text-sm text-hero-text/70">Pierwsza odpowiedź</div>
              </div>
            </div>
          </div>
          
          <div className="animate-slide-up">
            <div className="relative">
              <div className="bg-gradient-primary rounded-lg p-8 shadow-elegant">
                <h3 className="text-2xl font-semibold mb-4 text-white">
                  Dlaczego CodeTalent?
                </h3>
                <ul className="space-y-3 text-white/90">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Wyłącznie permanent placements
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Dokładna weryfikacja kandydatów
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Transparentne widełki płacowe
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    Profesjonalne doradztwo HR
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;