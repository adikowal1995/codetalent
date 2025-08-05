import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import ProcessSection from '../ProcessSection';
import { ThemeProvider } from '@/contexts/ThemeContext';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('ProcessSection', () => {
  it('renders the main heading', () => {
    renderWithTheme(<ProcessSection />);
    expect(screen.getByText('Nasz proces rekrutacji')).toBeInTheDocument();
  });

  it('renders the description text', () => {
    renderWithTheme(<ProcessSection />);
    expect(
      screen.getByText(/Sprawdzony 6-etapowy proces/i)
    ).toBeInTheDocument();
  });

  it('renders all process steps', () => {
    renderWithTheme(<ProcessSection />);
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
    expect(screen.getByText('3')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
    expect(screen.getByText('6')).toBeInTheDocument();
  });

  it('renders step titles', () => {
    renderWithTheme(<ProcessSection />);
    expect(screen.getByText('Analiza potrzeb')).toBeInTheDocument();
    expect(screen.getByText('Sourcing i rekrutacja')).toBeInTheDocument();
    expect(screen.getByText('Weryfikacja techniczna')).toBeInTheDocument();
    expect(screen.getByText('Prezentacja kandydatów')).toBeInTheDocument();
    expect(screen.getByText('Wsparcie w procesie')).toBeInTheDocument();
    expect(screen.getByText('Feedback')).toBeInTheDocument();
  });

  it('renders step descriptions', () => {
    renderWithTheme(<ProcessSection />);
    expect(
      screen.getByText(/Szczegółowe omówienie wymagań/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Aktywne poszukiwanie specjalistów/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Przeprowadzenie rozmów technicznych/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Przedstawienie sprawdzonych kandydatów/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Pomoc w rozmowach, negocjacjach/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Informacja zwrotna dla wszystkich stron/i)
    ).toBeInTheDocument();
  });

  it('renders quality guarantee section', () => {
    renderWithTheme(<ProcessSection />);
    expect(screen.getByText('Gwarancja jakości')).toBeInTheDocument();
  });

  it('renders guarantee description', () => {
    renderWithTheme(<ProcessSection />);
    expect(
      screen.getByText(/Oferujemy 3-miesięczną gwarancję/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Jeśli kandydat nie spełni oczekiwań/i)
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Całość realizujemy bez naliczania/i)
    ).toBeInTheDocument();
  });
});
