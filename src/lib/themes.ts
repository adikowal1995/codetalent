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
    name: "Theme 2",
    colors: {
      primaryBlue: '#059669',
      primaryBlueDark: '#047857',
      primaryBlueLight: '#10b981',
      secondaryGray: '#64748b',
      secondaryGrayLight: '#94a3b8',
      secondaryGrayDark: '#475569',
      accentGreen: '#06b6d4',
      accentGreenLight: '#22d3ee',
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
      borderLight: '#bbf7d0',
      borderMedium: '#86efac',
      borderDark: '#4ade80',
    }
  },
  purple: {
    name: "Theme 3",
    colors: {
      primaryBlue: '#22577a',
      primaryBlueDark: '#1a4561',
      primaryBlueLight: '#2d6b8f',
      secondaryGray: '#38a3a5',
      secondaryGrayLight: '#4db3b5',
      secondaryGrayDark: '#2d8a8c',
      accentGreen: '#57cc99',
      accentGreenLight: '#6dd4a8',
      accentOrange: '#80ed99',
      accentOrangeLight: '#95f0a8',
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
      borderLight: '#c7f9cc',
      borderMedium: '#80ed99',
      borderDark: '#57cc99',
    }
  }
};

export type ThemeKey = keyof typeof themes; 