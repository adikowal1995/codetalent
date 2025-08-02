const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
                                   <div className="grid md:grid-cols-6 gap-8">
                      <div className="md:col-span-2">
             <h3 className="text-2xl font-bold mb-4 text-accent">
               CodeTalent Agency
             </h3>
             <p className="text-primary-foreground/80 mb-4 leading-relaxed">
               Specjalizujemy się w rekrutacjach stałych najlepszych specjalistów IT. 
               Tworzymy długoterminowe partnerstwa oparte na zaufaniu i jakości.
             </p>
                           <div className="space-y-3 text-primary-foreground/80 mb-4">
                <div className="flex items-center gap-3">
                  <span>+48 798 592 333</span>
                </div>
                <div className="flex items-center gap-3">
                  <span>kontakt@codetalent.pl</span>
                </div>
              </div>
             
           </div>

           <div>
             <h4 className="text-lg font-semibold mb-4">Nasze usługi</h4>
                           <div className="space-y-3 text-primary-foreground/80">
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
             <h4 className="text-lg font-semibold mb-4">Branże</h4>
                           <div className="space-y-3 text-primary-foreground/80">
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
             <h4 className="text-lg font-semibold mb-4">Specjalności</h4>
                           <div className="space-y-3 text-primary-foreground/80">
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
             <h4 className="text-lg font-semibold mb-4">Social Media</h4>
                         <div className="space-y-3">
                               <a 
                  href="https://linkedin.com/company/codetalent" 
                  className="flex items-center gap-3 text-primary-foreground/80 hover:text-accent transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
             </div>

                         
          </div>
        </div>

                 <div className="border-t border-primary-foreground/20 mt-8 pt-6 text-center text-sm text-primary-foreground/60">
           <div className="flex flex-col md:flex-row justify-between items-center gap-4">
             <div>
               © 2024 CodeTalent Agency. Wszystkie prawa zastrzeżone.
             </div>
             <div className="flex gap-6">
               <a href="#" className="text-accent hover:underline">
                 Polityka Prywatności
               </a>
               <a href="#" className="text-accent hover:underline">
                 Regulamin
               </a>
               <a href="#" className="text-accent hover:underline">
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