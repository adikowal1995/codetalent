import { useTheme } from "@/contexts/ThemeContext";

const Footer = () => {
  const { currentTheme } = useTheme();
  return (
          <footer 
        className="py-12"
        style={{ 
          backgroundColor: currentTheme.colors.primaryBlue,
          color: currentTheme.colors.textLight
        }}
      >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-6 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4" style={{ color: currentTheme.colors.accentOrange }}>
              CodeTalent Agency
            </h3>
            <p className="mb-4 leading-relaxed" style={{ color: currentTheme.colors.textLight + 'CC' }}>
              Specjalizujemy się w rekrutacjach stałych najlepszych specjalistów IT. 
              Tworzymy długoterminowe partnerstwa oparte na zaufaniu i jakości.
            </p>
            <div className="space-y-3 mb-4" style={{ color: currentTheme.colors.textLight + 'CC' }}>
              <div className="flex items-center gap-3">
                <span>+48 798 592 333</span>
              </div>
              <div className="flex items-center gap-3">
                <span>kontakt@codetalent.pl</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: currentTheme.colors.textLight }}>
              Nasze usługi
            </h4>
            <div className="space-y-3" style={{ color: currentTheme.colors.textLight + 'CC' }}>
              <div className="flex items-center gap-3">
                <span>Rekrutacje</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Sourcing</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Weryfikacja kandydatów</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Direct search</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: currentTheme.colors.textLight }}>
              Branże
            </h4>
            <div className="space-y-3" style={{ color: currentTheme.colors.textLight + 'CC' }}>
              <div className="flex items-center gap-3">
                <span>Software House</span>
              </div>
              <div className="flex items-center gap-3">
                <span>FinTech</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Bankowość</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Ubezpiecznia</span>
              </div>
              <div className="flex items-center gap-3">
                <span>IT</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: currentTheme.colors.textLight }}>
              Specjalności
            </h4>
            <div className="space-y-3" style={{ color: currentTheme.colors.textLight + 'CC' }}>
              <div className="flex items-center gap-3">
                <span>Cybersecurity</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Backend Developer</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Full Stack Developer</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Solution Architect</span>
              </div>
              <div className="flex items-center gap-3">
                <span>Data Engineer</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4" style={{ color: currentTheme.colors.textLight }}>
              Social Media
            </h4>
            <div className="space-y-3">
              <a 
                href="https://linkedin.com/company/codetalent" 
                className="flex items-center gap-3 transition-colors hover:opacity-80"
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
          className="border-t mt-8 pt-6 text-center text-sm"
          style={{ 
            borderColor: currentTheme.colors.textLight + '33',
            color: currentTheme.colors.textLight + '99'
          }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              © 2024 CodeTalent Agency. Wszystkie prawa zastrzeżone.
            </div>
            <div className="flex gap-6">
              <a href="/polityka-prywatnosci.html" className="hover:underline transition-colors" style={{ color: currentTheme.colors.accentOrange }}>
                Polityka Prywatności
              </a>
              <a href="/regulamin.html" className="hover:underline transition-colors" style={{ color: currentTheme.colors.accentOrange }}>
                Regulamin
              </a>
              <a href="#" className="hover:underline transition-colors" style={{ color: currentTheme.colors.accentOrange }}>
                Ustawienia Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;