import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import HeroSection from '../HeroSection'
import { ThemeProvider } from '@/contexts/ThemeContext'

// Mock the theme context
const mockTheme = {
  name: 'Theme 1',
  colors: {
    primaryBlue: '#1e3a8a',
    primaryBlueDark: '#1e40af',
    primaryBlueLight: '#3b82f6',
    secondaryGray: '#6b7280',
    secondaryGrayLight: '#9ca3af',
    secondaryGrayDark: '#4b5563',
    accentGreen: '#10b981',
    accentGreenLight: '#34d399',
    accentOrange: '#f59e0b',
    accentOrangeLight: '#fbbf24',
    accentRed: '#ef4444',
    accentRedLight: '#f87171',
    bgPrimary: '#ffffff',
    bgSecondary: '#f8f9fa',
    bgTertiary: '#f1f3f4',
    textPrimary: '#1f2937',
    textSecondary: '#374151',
    textTertiary: '#6b7280',
    textLight: '#ffffff',
    textMuted: '#9ca3af',
    borderLight: '#e5e7eb',
    borderMedium: '#d1d5db',
    borderDark: '#9ca3af',
  }
}

const renderWithTheme = (component: React.ReactElement) => {
  return render(
    <ThemeProvider>
      {component}
    </ThemeProvider>
  )
}

describe('HeroSection', () => {
  it('renders the main heading', () => {
    renderWithTheme(<HeroSection />)
    expect(screen.getByText(/Specjaliści IT/i)).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    renderWithTheme(<HeroSection />)
    expect(screen.getByText(/dla Twojej firmy/i)).toBeInTheDocument()
  })

  it('renders the description text', () => {
    renderWithTheme(<HeroSection />)
    expect(screen.getByText(/CodeTalent Agency to agencja rekrutacyjna/i)).toBeInTheDocument()
  })

  it('renders the primary call-to-action button', () => {
    renderWithTheme(<HeroSection />)
    expect(screen.getByText(/Sprawdź koszt procesu rekrutacji/i)).toBeInTheDocument()
  })

  it('renders the secondary call-to-action button', () => {
    renderWithTheme(<HeroSection />)
    expect(screen.getByText(/Umów się na spotkanie/i)).toBeInTheDocument()
  })

  it('renders the scroll link', () => {
    renderWithTheme(<HeroSection />)
    expect(screen.getByText(/Co możemy dla Ciebie zrobić/i)).toBeInTheDocument()
  })

  it('renders the hero image', () => {
    renderWithTheme(<HeroSection />)
    const image = screen.getByAltText('CodeTalent Hero')
    expect(image).toBeInTheDocument()
  })
}) 