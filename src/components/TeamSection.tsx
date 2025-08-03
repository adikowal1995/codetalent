import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";

const TeamSection = () => {
  const { currentTheme } = useTheme();
  const teamMembers = [
    {
      name: "Anna Kowalska",
      role: "CEO & Senior Recruiter",
      experience: "8 lat doświadczenia w rekrutacjach IT",
      specialization: "Backend, DevOps, Architecture",
      description: "Absolwentka informatyki z pasją do łączenia ludzi z technologią. Specjalizuje się w rekrutacjach senior i lead pozycji."
    },
    {
      name: "Michał Nowak", 
      role: "Senior Technical Recruiter",
      experience: "6 lat w branży IT",
      specialization: "Frontend, Mobile, UX/UI",
      description: "Były frontend developer, który doskonale rozumie potrzeby techniczne kandydatów i wymagania projektów."
    },
    {
      name: "Katarzyna Wiśniewska",
      role: "Recruitment Consultant", 
      experience: "4 lata w rekrutacjach",
      specialization: "QA, Junior positions, Internships",
      description: "Ekspertka w obszarze rekrutacji juniorów i QA. Pomaga młodym talentom w rozpoczęciu kariery w IT."
    }
  ];

  return (
    <section 
      id="team" 
      className="py-16"
      style={{ backgroundColor: currentTheme.colors.bgTertiary }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4" style={{ color: currentTheme.colors.textPrimary }}>
            Nasz zespół
          </h2>
          <p className="text-xl max-w-2xl mx-auto" style={{ color: currentTheme.colors.textSecondary }}>
            Poznaj ekspertów, którzy pomogą Ci znaleźć idealnych kandydatów. 
            Każdy z nas ma wieloletnie doświadczenie w branży IT.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={index} 
              className="group transition-all duration-300 hover:shadow-lg"
              style={{ 
                border: `1px solid ${currentTheme.colors.borderLight}`,
                backgroundColor: currentTheme.colors.bgPrimary
              }}
            >
              <CardContent className="p-6 text-center">
                <div 
                  className="w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ 
                    background: `linear-gradient(135deg, ${currentTheme.colors.primaryBlue} 0%, ${currentTheme.colors.primaryBlueDark} 100%)`
                  }}
                >
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <h3 
                  className="text-xl font-semibold mb-2 transition-colors group-hover:opacity-80"
                  style={{ color: currentTheme.colors.textPrimary }}
                >
                  {member.name}
                </h3>
                
                <div className="font-medium mb-2" style={{ color: currentTheme.colors.primaryBlue }}>
                  {member.role}
                </div>
                
                <div className="text-sm mb-3" style={{ color: currentTheme.colors.textSecondary }}>
                  {member.experience}
                </div>
                
                <div 
                  className="text-sm px-3 py-1 rounded-full inline-block mb-4"
                  style={{ 
                    backgroundColor: currentTheme.colors.accentOrange + '20',
                    color: currentTheme.colors.accentOrange
                  }}
                >
                  {member.specialization}
                </div>
                
                <p className="text-sm leading-relaxed" style={{ color: currentTheme.colors.textSecondary }}>
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;