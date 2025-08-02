const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-accent">
              CodeTalent Agency
            </h3>
            <p className="text-primary-foreground/80 mb-4 leading-relaxed">
              Specjalizujemy się w rekrutacjach stałych najlepszych specjalistów IT. 
              Tworzymy długoterminowe partnerstwa oparte na zaufaniu i jakości.
            </p>
            <div className="text-sm text-primary-foreground/60">
              © 2024 CodeTalent Agency. Wszystkie prawa zastrzeżone.
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3 text-primary-foreground/80">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>+48 123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>kontakt@codetalent.pl</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>ul. Przykładowa 123, 00-001 Warszawa</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <span>NIP: 1234567890</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Social Media</h4>
            <div className="space-y-3">
              <a 
                href="https://linkedin.com/company/codetalent" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                LinkedIn
              </a>
              <a 
                href="https://facebook.com/codetalent" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Facebook
              </a>
              <a 
                href="https://twitter.com/codetalent" 
                className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                Twitter
              </a>
            </div>

            <div className="mt-6">
              <h5 className="font-medium mb-2">Godziny pracy</h5>
              <div className="text-sm text-primary-foreground/60">
                <div>Poniedziałek - Piątek: 9:00 - 18:00</div>
                <div>Sobota - Niedziela: Na umówienie</div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/60">
          <p>
            Strona wykorzystuje pliki cookies w celu świadczenia usług zgodnie z{" "}
            <a href="#" className="text-accent hover:underline">
              Polityką Prywatności
            </a>
            . Możesz określić warunki przechowywania cookies w Twojej przeglądarce.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;