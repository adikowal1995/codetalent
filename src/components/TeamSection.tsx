import { Card, CardContent } from "@/components/ui/card";

const TeamSection = () => {
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
    <section id="team" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Nasz zespół</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Poznaj ekspertów, którzy pomogą Ci znaleźć idealnych kandydatów. 
            Każdy z nas ma wieloletnie doświadczenie w branży IT.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                  {member.name}
                </h3>
                
                <div className="text-accent font-medium mb-2">
                  {member.role}
                </div>
                
                <div className="text-sm text-muted-foreground mb-3">
                  {member.experience}
                </div>
                
                <div className="bg-accent/10 text-accent text-sm px-3 py-1 rounded-full inline-block mb-4">
                  {member.specialization}
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
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