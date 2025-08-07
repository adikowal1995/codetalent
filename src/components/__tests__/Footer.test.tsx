import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '../Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { CookieProvider } from '@/contexts/CookieContext';

const renderWithProviders = (component: React.ReactElement) => {
  return render(
    <ThemeProvider>
      <CookieProvider>{component}</CookieProvider>
    </ThemeProvider>
  );
};

describe('Footer', () => {
  it('renders the company name', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText('CodeTalent')).toBeInTheDocument();
  });

  it('renders the company description', () => {
    renderWithProviders(<Footer />);
    expect(
      screen.getByText(/Specjalizujemy się w rekrutacjach stałych/i)
    ).toBeInTheDocument();
  });

  it('renders contact information', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText('+48 798 592 333')).toBeInTheDocument();
    expect(screen.getByText('kontakt@codetalent.pl')).toBeInTheDocument();
  });

  it('renders services section', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText('Nasze usługi')).toBeInTheDocument();
    expect(screen.getByText('Rekrutacja IT')).toBeInTheDocument();
    expect(screen.getByText('Sourcing')).toBeInTheDocument();
  });

  it('renders industries section', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText('Branże')).toBeInTheDocument();
    expect(screen.getByText('Software House')).toBeInTheDocument();
    expect(screen.getByText('Fintech')).toBeInTheDocument();
  });

  it('renders specializations section', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText('Specjalizacje')).toBeInTheDocument();
    expect(screen.getByText('Cybersecurity')).toBeInTheDocument();
    expect(screen.getByText('Backend Developer')).toBeInTheDocument();
  });

  it('renders social media section', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText('Social Media')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
  });

  it('renders legal links', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText('Polityka Prywatności')).toBeInTheDocument();
    expect(screen.getByText('Regulamin')).toBeInTheDocument();
  });

  it('renders copyright information', () => {
    renderWithProviders(<Footer />);
    expect(screen.getByText(/© 2024 CodeTalent/i)).toBeInTheDocument();
  });
});
