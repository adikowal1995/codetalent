import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';

const HeroSection = () => {
  const { currentTheme } = useTheme();
  const scrollToCalculator = () => {
    document
      .getElementById('calculator')
      ?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className="min-h-screen flex items-center py-16"
      style={{
        background:
          currentTheme.name === 'Theme 3'
            ? `linear-gradient(135deg, #1e3a8a 0%, ${currentTheme.colors.primaryBlue} 30%, ${currentTheme.colors.secondaryGray} 70%, ${currentTheme.colors.accentGreen} 100%)`
            : currentTheme.name === 'Theme 4'
              ? `linear-gradient(135deg, ${currentTheme.colors.primaryBlue} 0%, ${currentTheme.colors.primaryBlueLight} 30%, ${currentTheme.colors.secondaryGray} 70%, ${currentTheme.colors.accentGreen} 100%)`
              : currentTheme.name === 'Theme 5'
                ? `linear-gradient(135deg, ${currentTheme.colors.primaryBlue} 0%, ${currentTheme.colors.secondaryGray} 30%, ${currentTheme.colors.secondaryGrayLight} 70%, ${currentTheme.colors.accentGreen} 100%)`
                : currentTheme.name === 'Theme 6'
                  ? `linear-gradient(135deg, ${currentTheme.colors.primaryBlue} 0%, ${currentTheme.colors.secondaryGray} 30%, ${currentTheme.colors.secondaryGrayLight} 70%, ${currentTheme.colors.accentOrange} 100%)`
                  : `linear-gradient(135deg, ${currentTheme.colors.primaryBlue} 0%, ${currentTheme.colors.primaryBlueDark} 100%)`,
        color: currentTheme.colors.textLight,
      }}
    >
      <div className="container mx-auto px-4">
        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
          {/* Left Column - Content */}
          <div className="animate-fade-in text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 lg:mb-6">
              Specjaliści IT
              <br />
              <span style={{ color: currentTheme.colors.accentOrange }}>
                dla Twojej firmy
              </span>
            </h1>
            <p
              className="text-base sm:text-lg lg:text-xl mb-6 lg:mb-8 leading-relaxed px-4 lg:px-0"
              style={{ color: currentTheme.colors.textLight + 'CC' }}
            >
              CodeTalent Agency to agencja rekrutacyjna specjalizująca się w
              pozyskiwaniu najlepszych specjalistów IT. Oferujemy permanent
              placements dopasowane do Twoich potrzeb biznesowych.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start mb-6 lg:mb-8 gap-3 sm:gap-4 px-4 lg:px-0">
              <Button
                size="lg"
                className="w-full sm:w-auto px-6 sm:px-8 lg:px-12 shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                style={{
                  backgroundColor: currentTheme.colors.accentOrange,
                  color: currentTheme.colors.textLight,
                  border: 'none',
                }}
                onClick={scrollToCalculator}
              >
                Sprawdź koszt procesu rekrutacji
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto px-6 sm:px-8 lg:px-12 shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base"
                style={{
                  borderColor: currentTheme.colors.accentOrange,
                  color: currentTheme.colors.accentOrange,
                  backgroundColor: 'transparent',
                }}
              >
                Umów się na spotkanie
              </Button>
            </div>
          </div>

          {/* Right Column - Hero Image */}
          <div className="animate-slide-up order-1 lg:order-2">
            <div className="relative px-4 lg:px-0">
              <picture>
                <source
                  srcSet={
                    process.env.NODE_ENV === 'production'
                      ? '/codetalent/images/heroimage.webp'
                      : '/images/heroimage.webp'
                  }
                  type="image/webp"
                />
                <img
                  src={
                    process.env.NODE_ENV === 'production'
                      ? '/codetalent/images/heroimage.jpg'
                      : '/images/heroimage.jpg'
                  }
                  alt="CodeTalent Hero"
                  className="w-full h-auto max-w-sm sm:max-w-md lg:max-w-2xl mx-auto rounded-xl lg:rounded-2xl shadow-lg lg:shadow-2xl animate-float"
                  style={{
                    boxShadow: `0 15px 30px -8px ${currentTheme.colors.primaryBlue}40`,
                    border: `3px solid ${currentTheme.colors.bgPrimary}`,
                  }}
                  loading="eager"
                  decoding="async"
                />
              </picture>
            </div>
          </div>
        </div>

        {/* Centered link - positioned outside the grid to center across entire screen */}
        <div className="text-center px-4 lg:px-0">
          <a
            href="#calculator"
            className="inline-flex items-center transition-colors cursor-pointer hover:scale-105 text-sm sm:text-base"
            style={{ color: currentTheme.colors.textLight }}
            aria-label="Scroll to calculator section"
            onClick={e => {
              e.preventDefault();
              document
                .getElementById('calculator')
                ?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <span className="mr-2">Co możemy dla Ciebie zrobić</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-arrow-down h-4 w-4 sm:h-5 sm:w-5 animate-bounce"
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
