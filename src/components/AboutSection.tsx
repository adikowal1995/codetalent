import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';
import { useState, useEffect, useRef, useCallback } from 'react';

// Custom hook for scroll-triggered animations
const useScrollTriggeredAnimation = (callback: () => void, threshold = 0.3) => {
  const elementRef = useRef<HTMLElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  const handleIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;
      if (entry.isIntersecting && !hasTriggered) {
        setHasTriggered(true);
        callback();
      }
    },
    [callback, hasTriggered]
  );

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(handleIntersection, {
      threshold,
      rootMargin: '0px 0px -50px 0px',
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [handleIntersection]);

  return elementRef;
};

const AboutSection = () => {
  const { currentTheme } = useTheme();
  const [animatedStats, setAnimatedStats] = useState([
    { value: 0, label: 'Zakończonych rekrutacji', target: 500, suffix: '+' },
    { value: 0, label: 'Średni czas realizacji', target: 10, suffix: ' dni' },
    { value: 0, label: 'Średni czas odpowiedzi', target: 24, suffix: 'h' },
    {
      value: 0,
      label: 'Doświadczenia na rynku',
      target: 12,
      suffix: ' lat',
      prefix: '>',
    },
  ]);

  const animateStats = useCallback(() => {
    const totalDuration = 2000; // 2 seconds total
    const intervalTime = 50; // Update every 50ms
    const totalSteps = totalDuration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / totalSteps; // 0 to 1

      setAnimatedStats(prev =>
        prev.map(stat => {
          const newValue = Math.round(stat.target * progress);
          return {
            ...stat,
            value: Math.min(newValue, stat.target),
          };
        })
      );

      if (currentStep >= totalSteps) {
        clearInterval(interval);
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  // Use the scroll-triggered animation hook
  const sectionRef = useScrollTriggeredAnimation(animateStats);

  const stats = [
    { value: '500+', label: 'Zakończonych rekrutacji' },
    { value: '10 dni', label: 'Średni czas realizacji' },
    { value: '24h', label: 'Średni czas odpowiedzi' },
    { value: '>12 lat', label: 'Doświadczenia na rynku' },
  ];

  const values = [
    {
      title: 'Transparentność',
      description:
        'Jasne procesy, czytelne stawki i regularna komunikacja na każdym etapie.',
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ),
    },
    {
      title: 'Jakość',
      description:
        'Dokładna weryfikacja kandydatów i 3-miesięczna gwarancja na każdą rekrutację.',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
    {
      title: 'Partnerstwo',
      description:
        'Długoterminowe relacje oparte na zaufaniu i wzajemnym sukcesie.',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
    {
      title: 'Etyka',
      description:
        'Przestrzeganie standardów etycznych w biznesie, szacunek dla różnorodności, równość szans i uczciwość w każdym aspekcie procesu rekrutacyjnego.',
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
        </svg>
      ),
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-16"
      style={{
        backgroundColor:
          currentTheme.name === 'Theme Master 1.1' ? '#F2E9E4' : '#f9fafb',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <h2
              className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 lg:mb-6"
              style={{
                color:
                  currentTheme.name === 'Theme Master 1.1'
                    ? '#0f172a'
                    : currentTheme.colors.textPrimary,
              }}
            >
              O CodeTalent
            </h2>
            <p
              className="text-base sm:text-lg mb-6 lg:mb-8 leading-relaxed"
              style={{
                color:
                  currentTheme.name === 'Theme Master 1.1'
                    ? '#475569'
                    : currentTheme.colors.textSecondary,
              }}
            >
              Jesteśmy agencją rekrutacyjną, która specjalizuje się w
              pozyskiwaniu najlepszych specjalistów IT. Nasz zespół ma
              wieloletnie doświadczenie w branży technologicznej i doskonale
              rozumie potrzeby zarówno kandydatów, jak i pracodawców.
            </p>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {animatedStats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-3 sm:p-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:scale-105"
                  style={{
                    border: `1px solid ${currentTheme.name === 'Theme Master 1.1' ? '#3C6E71' : currentTheme.colors.borderLight}`,
                  }}
                >
                  <div
                    className="text-lg sm:text-xl lg:text-2xl font-bold"
                    style={{
                      color:
                        currentTheme.name === 'Theme Master 1.1'
                          ? '#22577a'
                          : currentTheme.colors.primaryBlue,
                    }}
                  >
                    {stat.prefix || ''}
                    {stat.value}
                    {stat.suffix}
                  </div>
                  <div
                    className="text-xs sm:text-sm lg:text-base"
                    style={{ color: currentTheme.colors.textSecondary }}
                  >
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3 lg:space-y-4 mt-8 lg:mt-0">
            <h3
              className="text-xl sm:text-2xl font-semibold mb-4 lg:mb-6"
              style={{
                color:
                  currentTheme.name === 'Theme Master 1.1'
                    ? '#0f172a'
                    : currentTheme.colors.textPrimary,
              }}
            >
              Nasze wartości
            </h3>
            {values.map((value, index) => (
              <Card
                key={index}
                className="group transition-all duration-300 hover:shadow-lg"
                style={{
                  border: `1px solid ${currentTheme.name === 'Theme Master 1.1' ? '#3C6E71' : currentTheme.colors.borderLight}`,
                  backgroundColor:
                    currentTheme.name === 'Theme Master 1.1'
                      ? '#F2E9E4'
                      : currentTheme.colors.bgPrimary,
                }}
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex-shrink-0 p-1 transition-colors ${index === 0 ? 'border-2 border-current rounded-full' : ''}`}
                      style={{
                        color:
                          currentTheme.name === 'Theme Master 1.1'
                            ? '#22577a'
                            : currentTheme.colors.primaryBlue,
                      }}
                    >
                      {value.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4
                        className="text-lg sm:text-xl font-semibold mb-2 lg:mb-3 transition-colors group-hover:opacity-80"
                        style={{
                          color:
                            currentTheme.name === 'Theme Master 1.1'
                              ? '#0f172a'
                              : currentTheme.colors.textPrimary,
                        }}
                      >
                        {value.title}
                      </h4>
                      <p
                        className="leading-relaxed text-sm sm:text-base"
                        style={{
                          color:
                            currentTheme.name === 'Theme Master 1.1'
                              ? '#475569'
                              : currentTheme.colors.textSecondary,
                        }}
                      >
                        {value.description}
                      </p>
                    </div>
                  </div>
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
