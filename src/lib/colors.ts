export const colors = {
  // Primary Brand Colors
  primaryBlue: '#2563eb',
  primaryBlueDark: '#1d4ed8',
  primaryBlueLight: '#3b82f6',
  
  // Secondary Colors
  secondaryGray: '#64748b',
  secondaryGrayLight: '#94a3b8',
  secondaryGrayDark: '#475569',
  
  // Neutral Colors
  white: '#ffffff',
  black: '#000000',
  gray50: '#f8fafc',
  gray100: '#f1f5f9',
  gray200: '#e2e8f0',
  gray300: '#cbd5e1',
  gray400: '#94a3b8',
  gray500: '#64748b',
  gray600: '#475569',
  gray700: '#334155',
  gray800: '#1e293b',
  gray900: '#0f172a',
  
  // Accent Colors
  accentGreen: '#10b981',
  accentGreenLight: '#34d399',
  accentOrange: '#f59e0b',
  accentOrangeLight: '#fbbf24',
  accentRed: '#ef4444',
  accentRedLight: '#f87171',
  
  // Status Colors
  success: '#10b981',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
  
  // Background Colors
  bgPrimary: '#ffffff',
  bgSecondary: '#f8fafc',
  bgTertiary: '#f1f5f9',
  bgDark: '#0f172a',
  
  // Text Colors
  textPrimary: '#0f172a',
  textSecondary: '#475569',
  textTertiary: '#64748b',
  textLight: '#ffffff',
  textMuted: '#94a3b8',
  
  // Border Colors
  borderLight: '#e2e8f0',
  borderMedium: '#cbd5e1',
  borderDark: '#94a3b8',
  
  // Shadow Colors
  shadowLight: 'rgba(0, 0, 0, 0.05)',
  shadowMedium: 'rgba(0, 0, 0, 0.1)',
  shadowDark: 'rgba(0, 0, 0, 0.2)',
} as const;

export type ColorKey = keyof typeof colors;

// Color palette for different themes
export const colorPalettes = {
  light: {
    primary: colors.primaryBlue,
    secondary: colors.secondaryGray,
    background: colors.bgPrimary,
    surface: colors.bgSecondary,
    text: colors.textPrimary,
    textSecondary: colors.textSecondary,
    border: colors.borderLight,
  },
  dark: {
    primary: colors.primaryBlueLight,
    secondary: colors.secondaryGrayLight,
    background: colors.bgDark,
    surface: colors.gray800,
    text: colors.textLight,
    textSecondary: colors.textMuted,
    border: colors.borderDark,
  },
} as const;

// Utility function to get color with opacity
export const withOpacity = (color: string, opacity: number): string => {
  const hex = color.replace('#', '');
  const r = parseInt(hex.substr(0, 2), 16);
  const g = parseInt(hex.substr(2, 2), 16);
  const b = parseInt(hex.substr(4, 2), 16);
  return `rgba(${r}, ${g}, ${b}, ${opacity})`;
};

// Gradient utilities
export const gradients = {
  primary: `linear-gradient(135deg, ${colors.primaryBlue} 0%, ${colors.primaryBlueDark} 100%)`,
  secondary: `linear-gradient(135deg, ${colors.gray100} 0%, ${colors.gray200} 100%)`,
  accent: `linear-gradient(135deg, ${colors.accentGreen} 0%, ${colors.accentGreenLight} 100%)`,
} as const; 