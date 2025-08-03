export interface Theme {
  name: string;
  colors: {
    primaryBlue: string;
    primaryBlueDark: string;
    primaryBlueLight: string;
    secondaryGray: string;
    secondaryGrayLight: string;
    secondaryGrayDark: string;
    accentGreen: string;
    accentGreenLight: string;
    accentOrange: string;
    accentOrangeLight: string;
    accentRed: string;
    accentRedLight: string;
    bgPrimary: string;
    bgSecondary: string;
    bgTertiary: string;
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
    textLight: string;
    textMuted: string;
    borderLight: string;
    borderMedium: string;
    borderDark: string;
  };
}

export const themes: Record<string, Theme> = {
  blue: {
    name: "Blue Theme",
    colors: {
      primaryBlue: '#2563eb',
      primaryBlueDark: '#1d4ed8',
      primaryBlueLight: '#3b82f6',
      secondaryGray: '#64748b',
      secondaryGrayLight: '#94a3b8',
      secondaryGrayDark: '#475569',
      accentGreen: '#10b981',
      accentGreenLight: '#34d399',
      accentOrange: '#f59e0b',
      accentOrangeLight: '#fbbf24',
      accentRed: '#ef4444',
      accentRedLight: '#f87171',
      bgPrimary: '#ffffff',
      bgSecondary: '#f8fafc',
      bgTertiary: '#f1f5f9',
      textPrimary: '#0f172a',
      textSecondary: '#475569',
      textTertiary: '#64748b',
      textLight: '#ffffff',
      textMuted: '#94a3b8',
      borderLight: '#e2e8f0',
      borderMedium: '#cbd5e1',
      borderDark: '#94a3b8',
    }
  },
  green: {
    name: "Green Theme",
    colors: {
      primaryBlue: '#059669',
      primaryBlueDark: '#047857',
      primaryBlueLight: '#10b981',
      secondaryGray: '#64748b',
      secondaryGrayLight: '#94a3b8',
      secondaryGrayDark: '#475569',
      accentGreen: '#2563eb',
      accentGreenLight: '#3b82f6',
      accentOrange: '#f59e0b',
      accentOrangeLight: '#fbbf24',
      accentRed: '#ef4444',
      accentRedLight: '#f87171',
      bgPrimary: '#ffffff',
      bgSecondary: '#f0fdf4',
      bgTertiary: '#ecfdf5',
      textPrimary: '#0f172a',
      textSecondary: '#475569',
      textTertiary: '#64748b',
      textLight: '#ffffff',
      textMuted: '#94a3b8',
      borderLight: '#d1fae5',
      borderMedium: '#a7f3d0',
      borderDark: '#6ee7b7',
    }
  },
  purple: {
    name: "Purple Theme",
    colors: {
      primaryBlue: '#7c3aed',
      primaryBlueDark: '#6d28d9',
      primaryBlueLight: '#8b5cf6',
      secondaryGray: '#64748b',
      secondaryGrayLight: '#94a3b8',
      secondaryGrayDark: '#475569',
      accentGreen: '#10b981',
      accentGreenLight: '#34d399',
      accentOrange: '#f59e0b',
      accentOrangeLight: '#fbbf24',
      accentRed: '#ef4444',
      accentRedLight: '#f87171',
      bgPrimary: '#ffffff',
      bgSecondary: '#faf5ff',
      bgTertiary: '#f3e8ff',
      textPrimary: '#0f172a',
      textSecondary: '#475569',
      textTertiary: '#64748b',
      textLight: '#ffffff',
      textMuted: '#94a3b8',
      borderLight: '#e9d5ff',
      borderMedium: '#d8b4fe',
      borderDark: '#c084fc',
    }
  }
};

export type ThemeKey = keyof typeof themes; 