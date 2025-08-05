import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import AboutSection from '../AboutSection';
import { ThemeProvider } from '@/contexts/ThemeContext';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('AboutSection', () => {
  it('renders the main heading', () => {
    renderWithTheme(<AboutSection />);
    expect(screen.getByText('O CodeTalent')).toBeInTheDocument();
  });

  it('renders the description text', () => {
    renderWithTheme(<AboutSection />);
    expect(
      screen.getByText(/Jesteśmy agencją rekrutacyjną/i)
    ).toBeInTheDocument();
  });

  it('renders statistics', () => {
    renderWithTheme(<AboutSection />);
    // The statistics are animated and start at 0, so we check for the labels instead
    expect(screen.getByText('Zakończonych rekrutacji')).toBeInTheDocument();
    expect(screen.getByText('Średni czas realizacji')).toBeInTheDocument();
    expect(screen.getByText('Średni czas odpowiedzi')).toBeInTheDocument();
    expect(screen.getByText('Doświadczenia na rynku')).toBeInTheDocument();
  });

  it('renders statistics labels', () => {
    renderWithTheme(<AboutSection />);
    expect(screen.getByText('Zakończonych rekrutacji')).toBeInTheDocument();
    expect(screen.getByText('Średni czas realizacji')).toBeInTheDocument();
    expect(screen.getByText('Średni czas odpowiedzi')).toBeInTheDocument();
    expect(screen.getByText('Doświadczenia na rynku')).toBeInTheDocument();
  });

  it('renders values section heading', () => {
    renderWithTheme(<AboutSection />);
    expect(screen.getByText('Nasze wartości')).toBeInTheDocument();
  });

  it('renders all value cards', () => {
    renderWithTheme(<AboutSection />);
    expect(screen.getByText('Transparentność')).toBeInTheDocument();
    expect(screen.getByText('Jakość')).toBeInTheDocument();
    expect(screen.getByText('Partnerstwo')).toBeInTheDocument();
    expect(screen.getByText('Etyka')).toBeInTheDocument();
  });

  it('renders value descriptions', () => {
    renderWithTheme(<AboutSection />);
    expect(
      screen.getByText(/Jasne procesy, czytelne stawki/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Dokładna weryfikacja kandydatów/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Długoterminowe relacje oparte na zaufaniu/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Przestrzeganie standardów etycznych/i)
    ).toBeInTheDocument();
  });
});
