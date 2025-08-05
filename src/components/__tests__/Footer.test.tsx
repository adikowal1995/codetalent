import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Footer from '../Footer';
import { ThemeProvider } from '@/contexts/ThemeContext';

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider>{component}</ThemeProvider>);
};

describe('Footer', () => {
  it('renders the company name', () => {
    renderWithTheme(<Footer />);
    expect(screen.getByText('CodeTalent')).toBeInTheDocument();
  });

  it('renders the company description', () => {
    renderWithTheme(<Footer />);
    expect(
      screen.getByText(/Specjalizujemy się w rekrutacjach stałych/i)
    ).toBeInTheDocument();
  });

  it('renders contact information', () => {
    renderWithTheme(<Footer />);
    expect(screen.getByText('+48 798 592 333')).toBeInTheDocument();
    expect(screen.getByText('kontakt@codetalent.pl')).toBeInTheDocument();
  });

  it('renders services section', () => {
    renderWithTheme(<Footer />);
    expect(screen.getByText('Nasze usługi')).toBeInTheDocument();
    expect(screen.getByText('Rekrutacje')).toBeInTheDocument();
    expect(screen.getByText('Sourcing')).toBeInTheDocument();
  });

  it('renders industries section', () => {
    renderWithTheme(<Footer />);
    expect(screen.getByText('Branże')).toBeInTheDocument();
    expect(screen.getByText('Software House')).toBeInTheDocument();
    expect(screen.getByText('FinTech')).toBeInTheDocument();
  });

  it('renders specializations section', () => {
    renderWithTheme(<Footer />);
    expect(screen.getByText('Specjalności')).toBeInTheDocument();
    expect(screen.getByText('Cybersecurity')).toBeInTheDocument();
    expect(screen.getByText('Backend Developer')).toBeInTheDocument();
  });

  it('renders social media section', () => {
    renderWithTheme(<Footer />);
    expect(screen.getByText('Social Media')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
  });

  it('renders legal links', () => {
    renderWithTheme(<Footer />);
    expect(screen.getByText('Polityka Prywatności')).toBeInTheDocument();
    expect(screen.getByText('Regulamin')).toBeInTheDocument();
  });

  it('renders copyright information', () => {
    renderWithTheme(<Footer />);
    expect(screen.getByText(/© 2024 CodeTalent/i)).toBeInTheDocument();
  });
});
