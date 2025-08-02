import { Button } from "@/components/ui/button";
import { colors } from "@/lib/colors";

const HeroSection = () => {
  const scrollToCalculator = () => {
    document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      className="min-h-screen flex items-center py-16"
      style={{ 
        background: `linear-gradient(135deg, ${colors.primaryBlue} 0%, ${colors.primaryBlueDark} 100%)`,
        color: colors.textLight 
      }}
    >
      <div className="container mx-auto px-4">
        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Column - Content */}
          <div className="animate-fade-in text-center lg:text-left">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Specjaliści IT
              <br />
              <span style={{ color: colors.accentOrange }}>dla Twojej firmy</span>
            </h1>
            <p className="text-xl mb-8 leading-relaxed" style={{ color: colors.textLight + 'CC' }}>
              CodeTalent Agency to agencja rekrutacyjna specjalizująca się w pozyskiwaniu 
              najlepszych specjalistów IT. Oferujemy permanent placements dopasowane 
              do Twoich potrzeb biznesowych.
            </p>
            <div className="flex justify-center lg:justify-start mb-8 gap-4">
              <Button 
                size="lg" 
                className="px-12 w-64 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ 
                  backgroundColor: colors.accentOrange,
                  color: colors.textLight,
                  border: 'none'
                }}
                onClick={scrollToCalculator}
              >
                Sprawdź koszt procesu rekrutacji
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="px-12 w-64 shadow-lg hover:shadow-xl transition-all duration-300"
                style={{ 
                  borderColor: colors.accentOrange,
                  color: colors.accentOrange,
                  backgroundColor: 'transparent'
                }}
              >
                Umów się na spotkanie
              </Button>
            </div>
            
            <div className="flex justify-center lg:justify-start gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: colors.accentOrange }}>500+</div>
                <div className="text-sm" style={{ color: colors.textLight + 'B3' }}>Rekrutacji</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: colors.accentOrange }}>95%</div>
                <div className="text-sm" style={{ color: colors.textLight + 'B3' }}>Skuteczność</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{ color: colors.accentOrange }}>24h</div>
                <div className="text-sm" style={{ color: colors.textLight + 'B3' }}>Pierwsza odpowiedź</div>
              </div>
            </div>
          </div>
          
          {/* Right Column - Hero Image */}
          <div className="animate-slide-up">
            <div className="relative">
              <picture>
                <source 
                  srcSet={process.env.NODE_ENV === 'production' ? '/codetalent/images/heroimage.webp' : '/images/heroimage.webp'} 
                  type="image/webp" 
                />
                <img 
                  src={process.env.NODE_ENV === 'production' ? '/codetalent/images/heroimage.jpg' : '/images/heroimage.jpg'} 
                  alt="CodeTalent Hero" 
                  className="w-full h-auto max-w-2xl mx-auto rounded-2xl shadow-2xl animate-float"
                  style={{ 
                    boxShadow: `0 25px 50px -12px ${colors.primaryBlue}40`,
                    border: `4px solid ${colors.white}`
                  }}
                  loading="eager"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>
        
        {/* Centered link - positioned outside the grid to center across entire screen */}
        <div className="text-center">
          <a 
            href="#calculator" 
            className="inline-flex items-center transition-colors cursor-pointer hover:scale-105" 
            style={{ color: colors.textLight }}
            aria-label="Scroll to calculator section"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('calculator')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="mr-2">Poznaj nasze możliwości</span>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="lucide lucide-arrow-down h-5 w-5 animate-bounce"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;