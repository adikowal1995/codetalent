import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/contexts/ThemeContext';
import ThemeSwitcher from './ThemeSwitcher';

const Navigation = () => {
  const { currentTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Kalkulator', id: 'calculator' },
    { label: 'Proces', id: 'process' },
    { label: 'O nas', id: 'about' },
    { label: 'Zespół', id: 'team' },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 backdrop-blur-sm border-b z-50"
      style={{
        backgroundColor: currentTheme.colors.bgPrimary + 'F2',
        borderColor: currentTheme.colors.borderLight,
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => scrollToSection('hero')}
            className="text-2xl font-bold transition-colors hover:opacity-80"
            style={{ color: currentTheme.colors.primaryBlue }}
          >
            CodeTalent
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="transition-colors hover:opacity-80"
                style={{ color: currentTheme.colors.textPrimary }}
              >
                {item.label}
              </button>
            ))}
            <ThemeSwitcher />
            <Button
              onClick={() => scrollToSection('calculator')}
              className="transition-all duration-300 hover:shadow-lg"
              style={{
                backgroundColor: currentTheme.colors.primaryBlue,
                color: currentTheme.colors.textLight,
                border: 'none',
              }}
            >
              Sprawdź stawki
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-6 h-0.5 transition-all ${isMenuOpen ? 'rotate-45 translate-y-1' : ''}`}
                style={{ backgroundColor: currentTheme.colors.textPrimary }}
              ></span>
              <span
                className={`block w-6 h-0.5 mt-1 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}
                style={{ backgroundColor: currentTheme.colors.textPrimary }}
              ></span>
              <span
                className={`block w-6 h-0.5 mt-1 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1' : ''}`}
                style={{ backgroundColor: currentTheme.colors.textPrimary }}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className="md:hidden py-4 border-t"
            style={{ borderColor: currentTheme.colors.borderLight }}
          >
            <div className="flex flex-col space-y-4">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left py-2 transition-colors hover:opacity-80"
                  style={{ color: currentTheme.colors.textPrimary }}
                >
                  {item.label}
                </button>
              ))}
              <div className="flex justify-center py-2">
                <ThemeSwitcher />
              </div>
              <Button
                onClick={() => scrollToSection('calculator')}
                className="w-full transition-all duration-300 hover:shadow-lg"
                style={{
                  backgroundColor: currentTheme.colors.primaryBlue,
                  color: currentTheme.colors.textLight,
                  border: 'none',
                }}
              >
                Sprawdź stawki
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
