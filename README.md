# CodeTalent - IT Recruitment Agency Website

A modern, responsive website for CodeTalent, a specialized IT recruitment agency. Built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional interface with customizable themes
- **GDPR Compliant**: Cookie banner with granular consent management
- **Responsive**: Works perfectly on all devices
- **Interactive Calculator**: Salary calculator for IT recruitment process
- **Performance Optimized**: Fast loading with optimized images and code splitting

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui components
- **Build Tool**: Vite
- **Testing**: Vitest with React Testing Library
- **Deployment**: GitHub Pages ready

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd codetalent
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## Project Structure

```
src/
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   └── __tests__/      # Component tests
├── contexts/           # React contexts (Theme, Cookie)
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and configurations
├── pages/              # Page components
└── styles/             # Global styles
```

## Key Components

- **CookieBanner**: GDPR-compliant cookie consent management
- **SalaryCalculator**: Interactive recruitment cost calculator
- **ThemeSwitcher**: Dynamic theme customization
- **Navigation**: Responsive navigation with mobile menu

## Deployment

The project is configured for GitHub Pages deployment. Simply push to the main branch and GitHub Actions will automatically build and deploy the site.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm run test`
5. Submit a pull request

## License

This project is proprietary to CodeTalent. All rights reserved.
