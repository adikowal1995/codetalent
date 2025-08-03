import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react';
import { themes, Theme, ThemeKey } from '@/lib/themes';

interface ThemeContextType {
  currentTheme: Theme;
  currentThemeKey: ThemeKey;
  setTheme: (themeKey: ThemeKey) => void;
  availableThemes: ThemeKey[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [currentThemeKey, setCurrentThemeKey] = useState<ThemeKey>('blue');

  const setTheme = (themeKey: ThemeKey) => {
    setCurrentThemeKey(themeKey);
    localStorage.setItem('selectedTheme', themeKey);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem('selectedTheme') as ThemeKey;
    if (savedTheme && themes[savedTheme]) {
      setCurrentThemeKey(savedTheme);
    }
  }, []);

  const value: ThemeContextType = {
    currentTheme: themes[currentThemeKey],
    currentThemeKey,
    setTheme,
    availableThemes: Object.keys(themes) as ThemeKey[],
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
