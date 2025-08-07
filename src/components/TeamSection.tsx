import { Card, CardContent } from '@/components/ui/card';
import { useTheme } from '@/contexts/ThemeContext';

const TeamSection = () => {
  const { currentTheme } = useTheme();
  const teamMembers = [
    {
      name: 'Marcin Kowalski',
      role: 'Business Manager',
      experience: 'CodeTalent',
      specialization: 'Backend, DevOps, Architecture',
      description:
        'Absolwentka informatyki z pasją do łączenia ludzi z technologią. Specjalizuje się w rekrutacjach senior i lead pozycji.',
    },
  ];

  return (
    <section
      id="team"
      className="py-16"
      style={{
        backgroundColor:
          currentTheme.name === 'Theme Master 1.1'
            ? '#3C6E71'
            : currentTheme.colors.bgTertiary,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold mb-4"
            style={{ color: currentTheme.colors.textPrimary }}
          >
            Kontakt Bezpośredni
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: currentTheme.colors.textSecondary }}
          >
            Skontaktuj się i porozmawiajmy o Twoich potrzebach podczas
            bezpłatnej konsultacji
          </p>
        </div>

        <div className="grid grid-cols-1 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              className="group transition-all duration-300 hover:shadow-lg"
              style={{
                border: `1px solid ${currentTheme.colors.borderLight}`,
                backgroundColor: currentTheme.colors.bgPrimary,
              }}
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-6">
                  <div className="w-48 h-60 flex-shrink-0">
                    <img
                      src="/images/Marcin zdjęcie CodeTalent.jpg"
                      alt="Marcin Kowalski"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1 text-left">
                    <h3
                      className="text-xl font-semibold mb-2 transition-colors group-hover:opacity-80"
                      style={{ color: currentTheme.colors.textPrimary }}
                    >
                      {member.name}
                    </h3>

                    <div
                      className="font-medium mb-2"
                      style={{ color: currentTheme.colors.primaryBlue }}
                    >
                      {member.role}
                    </div>

                    <div
                      className="text-sm mb-3"
                      style={{ color: currentTheme.colors.textSecondary }}
                    >
                      {member.experience}
                    </div>

                    <div
                      className="text-sm px-3 py-1 rounded-full inline-block mb-4"
                      style={{
                        backgroundColor:
                          currentTheme.colors.accentOrange + '20',
                        color: currentTheme.colors.accentOrange,
                      }}
                    >
                      {member.specialization}
                    </div>

                    <p
                      className="text-sm leading-relaxed mb-4"
                      style={{ color: currentTheme.colors.textSecondary }}
                    >
                      {member.description}
                    </p>

                    <div className="grid grid-cols-2 gap-3">
                      <button
                        className="flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors hover:opacity-80"
                        style={{
                          backgroundColor:
                            currentTheme.colors.accentOrange + '20',
                          color: currentTheme.colors.accentOrange,
                        }}
                        onClick={() =>
                          window.open('mailto:marcin.kowalski@codetalent.pl')
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                          <polyline points="22,6 12,13 2,6" />
                        </svg>
                        <span className="truncate">
                          marcin.kowalski@codetalent.pl
                        </span>
                      </button>

                      <button
                        className="flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors hover:opacity-80"
                        style={{
                          backgroundColor:
                            currentTheme.colors.accentOrange + '20',
                          color: currentTheme.colors.accentOrange,
                        }}
                        onClick={() => window.open('tel:+48798592333')}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                        <span>+48 798 592 333</span>
                      </button>

                      <button
                        className="flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors hover:opacity-80"
                        style={{
                          backgroundColor:
                            currentTheme.colors.accentOrange + '20',
                          color: currentTheme.colors.accentOrange,
                        }}
                        onClick={() =>
                          window.open(
                            'https://www.linkedin.com/in/marcin-kowalski-9508a1101/',
                            '_blank'
                          )
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect x="2" y="9" width="4" height="12" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                        <span>LinkedIn</span>
                      </button>

                      <button
                        className="flex items-center gap-2 px-3 py-2 text-sm rounded-md transition-colors hover:opacity-80"
                        style={{
                          backgroundColor:
                            currentTheme.colors.accentOrange + '20',
                          color: currentTheme.colors.accentOrange,
                        }}
                        onClick={() =>
                          window.open(
                            'mailto:marcin.kowalski@codetalent.pl?subject=Umówienie spotkania'
                          )
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect
                            x="3"
                            y="4"
                            width="18"
                            height="18"
                            rx="2"
                            ry="2"
                          />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span>Umów Spotkanie</span>
                      </button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
