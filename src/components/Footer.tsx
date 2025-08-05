import { useTheme } from '@/contexts/ThemeContext';
import { useCookie } from '@/contexts/CookieContext';

const Footer = () => {
  const { currentTheme } = useTheme();
  const { setShowBanner } = useCookie();
  return (
    <footer
      className="py-12"
      style={{
        background:
          'linear-gradient(135deg, rgb(34, 87, 122) 0%, rgb(26, 69, 97) 100%)',
        color: currentTheme.colors.textLight,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-2">
            <h3
              className="text-xl sm:text-2xl font-bold mb-3 lg:mb-4"
              style={{ color: currentTheme.colors.accentOrange }}
            >
              CodeTalent
            </h3>
            <p
              className="mb-3 lg:mb-4 leading-relaxed text-sm sm:text-base"
              style={{ color: currentTheme.colors.textLight + 'CC' }}
            >
              Specjalizujemy się w rekrutacjach stałych najlepszych specjalistów
              IT. Tworzymy długoterminowe partnerstwa oparte na zaufaniu i
              jakości.
            </p>
            <div
              className="space-y-2 lg:space-y-3 mb-3 lg:mb-4"
              style={{ color: currentTheme.colors.textLight + 'CC' }}
            >
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span>+48 798 592 333</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span>kontakt@codetalent.pl</span>
              </div>
            </div>
          </div>

          <div>
            <h4
              className="text-base sm:text-lg font-semibold mb-3 lg:mb-4"
              style={{ color: currentTheme.colors.textLight }}
            >
              Nasze usługi
            </h4>
            <div
              className="space-y-2 lg:space-y-3"
              style={{ color: currentTheme.colors.textLight + 'CC' }}
            >
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span>Rekrutacje</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span>Sourcing</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span>Weryfikacja kandydatów</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span>Direct search</span>
              </div>
            </div>
          </div>

          <div>
            <h4
              className="text-base sm:text-lg font-semibold mb-3 lg:mb-4"
              style={{ color: currentTheme.colors.textLight }}
            >
              Branże
            </h4>
            <div
              className="space-y-2 lg:space-y-3"
              style={{ color: currentTheme.colors.textLight + 'CC' }}
            >
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span>Software House</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span>FinTech</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span>Bankowość</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span>Ubezpiecznia</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span>IT</span>
              </div>
            </div>
          </div>

          <div>
            <h4
              className="text-base sm:text-lg font-semibold mb-3 lg:mb-4"
              style={{ color: currentTheme.colors.textLight }}
            >
              Specjalności
            </h4>
            <div
              className="space-y-2 lg:space-y-3"
              style={{ color: currentTheme.colors.textLight + 'CC' }}
            >
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span>Cybersecurity</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span>Backend Developer</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span>Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span>Solution Architect</span>
              </div>
              <div className="flex items-center gap-3 text-sm sm:text-base">
                <span>Data Engineer</span>
              </div>
            </div>
          </div>

          <div>
            <h4
              className="text-base sm:text-lg font-semibold mb-3 lg:mb-4"
              style={{ color: currentTheme.colors.textLight }}
            >
              Social Media
            </h4>
            <div className="space-y-2 lg:space-y-3">
              <a
                href="https://linkedin.com/company/codetalent"
                className="flex items-center gap-3 transition-colors hover:opacity-80 text-sm sm:text-base"
                style={{ color: currentTheme.colors.textLight + 'CC' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div
          className="border-t mt-6 lg:mt-8 pt-4 lg:pt-6 text-center text-xs sm:text-sm"
          style={{
            borderColor: currentTheme.colors.textLight + '33',
            color: currentTheme.colors.textLight + '99',
          }}
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-3 lg:gap-4">
            <div className="text-center sm:text-left">
              © 2024 CodeTalent. Wszystkie prawa zastrzeżone.
            </div>
            <div className="flex flex-wrap justify-center sm:justify-end gap-3 lg:gap-6">
              <a
                href="/polityka-prywatnosci.html"
                className="hover:underline transition-colors text-xs sm:text-sm"
                style={{ color: currentTheme.colors.accentOrange }}
              >
                Polityka Prywatności
              </a>
              <a
                href="/regulamin.html"
                className="hover:underline transition-colors text-xs sm:text-sm"
                style={{ color: currentTheme.colors.accentOrange }}
              >
                Regulamin
              </a>
              <button
                onClick={() => setShowBanner(true)}
                className="hover:underline transition-colors text-xs sm:text-sm bg-transparent border-none cursor-pointer"
                style={{ color: currentTheme.colors.accentOrange }}
              >
                Ustawienia Cookies
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
