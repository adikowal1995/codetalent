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
  darkBlue: {
    name: 'Theme 4',
    colors: {
      primaryBlue: '#0d1321',
      primaryBlueDark: '#0a0f1a',
      primaryBlueLight: '#1d2d44',
      secondaryGray: '#3e5c76',
      secondaryGrayLight: '#748cab',
      secondaryGrayDark: '#2d4a5f',
      accentGreen: '#f0ebd8',
      accentGreenLight: '#f5f0e0',
      accentOrange: '#748cab',
      accentOrangeLight: '#8a9db8',
      accentRed: '#ef4444',
      accentRedLight: '#f87171',
      bgPrimary: '#ffffff',
      bgSecondary: '#f0ebd8',
      bgTertiary: '#f5f0e0',
      textPrimary: '#0d1321',
      textSecondary: '#1d2d44',
      textTertiary: '#3e5c76',
      textLight: '#ffffff',
      textMuted: '#748cab',
      borderLight: '#3e5c76',
      borderMedium: '#1d2d44',
      borderDark: '#0d1321',
    },
  },
  darkBlueVariant: {
    name: 'Theme 4.1',
    colors: {
      primaryBlue: '#0d1321',
      primaryBlueDark: '#0a0f1a',
      primaryBlueLight: '#1d2d44',
      secondaryGray: '#3e5c76',
      secondaryGrayLight: '#748cab',
      secondaryGrayDark: '#2d4a5f',
      accentGreen: '#f0ebd8',
      accentGreenLight: '#f5f0e0',
      accentOrange: '#748cab',
      accentOrangeLight: '#8a9db8',
      accentRed: '#ef4444',
      accentRedLight: '#f87171',
      bgPrimary: '#ffffff',
      bgSecondary: '#f0ebd8',
      bgTertiary: '#f5f0e0',
      textPrimary: '#0d1321',
      textSecondary: '#1d2d44',
      textTertiary: '#3e5c76',
      textLight: '#ffffff',
      textMuted: '#748cab',
      borderLight: '#3e5c76',
      borderMedium: '#1d2d44',
      borderDark: '#0d1321',
    },
  },
  purpleGray: {
    name: 'Theme 6',
    colors: {
      primaryBlue: '#22223b',
      primaryBlueDark: '#1a1a2e',
      primaryBlueLight: '#2a2a4a',
      secondaryGray: '#4a4e69',
      secondaryGrayLight: '#9a8c98',
      secondaryGrayDark: '#3a3e59',
      accentGreen: '#c9ada7',
      accentGreenLight: '#d4b8b2',
      accentOrange: '#f2e9e4',
      accentOrangeLight: '#f5ede8',
      accentRed: '#ef4444',
      accentRedLight: '#f87171',
      bgPrimary: '#ffffff',
      bgSecondary: '#f2e9e4',
      bgTertiary: '#f8f6f4',
      textPrimary: '#22223b',
      textSecondary: '#4a4e69',
      textTertiary: '#9a8c98',
      textLight: '#ffffff',
      textMuted: '#c9ada7',
      borderLight: '#c9ada7',
      borderMedium: '#9a8c98',
      borderDark: '#4a4e69',
    },
  },
  master: {
    name: 'Theme Master',
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
    },
  },
};

export type ThemeKey = keyof typeof themes;
