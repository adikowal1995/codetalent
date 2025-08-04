import React from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { themes } from '@/lib/themes';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Palette } from 'lucide-react';

const ThemeSwitcher: React.FC = () => {
  const { currentTheme, currentThemeKey, setTheme, availableThemes } =
    useTheme();

  const getThemeIcon = (themeKey: string) => {
    switch (themeKey) {
      case 'blue':
        return '🔵';
      case 'green':
        return '💻';
      case 'purple':
        return '🟣';
      case 'darkBlue':
        return '🌙';
      case 'ocean':
        return '🌊';
      case 'purpleGray':
        return '🎭';
      case 'oceanTeal':
        return '🐠';
      case 'master':
        return '👑';
      default:
        return '🎨';
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="flex items-center gap-2"
          style={{
            borderColor: currentTheme.colors.borderLight,
            color: currentTheme.colors.textSecondary,
          }}
        >
          <div
            className="w-4 h-4 rounded-full border-2 border-white shadow-sm"
            style={{ backgroundColor: currentTheme.colors.primaryBlue }}
          />
          <span className="hidden sm:inline">{currentTheme.name}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {availableThemes.map(themeKey => (
          <DropdownMenuItem
            key={themeKey}
            onClick={() => setTheme(themeKey)}
            className={`flex items-center gap-2 ${
              currentThemeKey === themeKey ? 'bg-accent' : ''
            }`}
          >
            <span>{getThemeIcon(themeKey)}</span>
            <span>{themes[themeKey].name}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSwitcher;
