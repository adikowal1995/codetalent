# Development Workflow

This document outlines the development workflow for the CodeTalent Agency website, including linting, testing, and deployment processes.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```

## 📋 Available Scripts

### Development
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Testing
- `npm run test` - Run tests in watch mode
- `npm run test:run` - Run tests once
- `npm run test:coverage` - Run tests with coverage report
- `npm run test:ui` - Run tests with UI (requires @vitest/ui)

### Linting
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Run ESLint with auto-fix

### Pre-deployment
- `npm run pre-deploy` - Run linting, tests, and build

## 🧪 Testing

### Running Tests
```bash
# Run all tests
npm run test:run

# Run tests in watch mode
npm run test

# Run tests with coverage
npm run test:coverage
```

### Test Structure
- Tests are located in `src/components/__tests__/`
- Each component has its own test file
- Tests use React Testing Library and Vitest

### Writing Tests
```typescript
import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import YourComponent from '../YourComponent'

describe('YourComponent', () => {
  it('renders correctly', () => {
    render(<YourComponent />)
    expect(screen.getByText('Expected Text')).toBeInTheDocument()
  })
})
```

## 🔍 Linting

### ESLint Configuration
- Uses TypeScript ESLint
- React-specific rules
- Custom rules for project consistency

### Running Linting
```bash
# Check for issues
npm run lint

# Auto-fix issues
npm run lint:fix
```

## 🚀 Deployment

### Pre-deployment Checklist
1. ✅ All tests pass
2. ✅ Linting passes
3. ✅ Build succeeds
4. ✅ Security audit passes

### Manual Deployment
```bash
# Run pre-deployment checks
npm run pre-deploy

# Deploy using the deployment script
./scripts/deploy.sh
```

### Automated Deployment (GitHub Actions)
The project uses GitHub Actions for CI/CD:

1. **Lint Job** - Runs ESLint on all code
2. **Test Job** - Runs all tests and coverage
3. **Build Job** - Builds the application
4. **Deploy Job** - Deploys to appropriate environment

#### Deployment Triggers
- **Development**: Push to `development` branch
- **Production**: Push to `main` branch

## 📁 Project Structure

```
codetalent/
├── .github/workflows/     # GitHub Actions
├── scripts/              # Build and deployment scripts
├── src/
│   ├── components/       # React components
│   │   └── __tests__/   # Component tests
│   ├── contexts/        # React contexts
│   ├── lib/            # Utilities and configurations
│   └── test/           # Test setup and utilities
├── public/              # Static assets
└── dist/               # Build output
```

## 🔧 Development Workflow

### 1. Feature Development
```bash
# Create feature branch
git checkout -b feature/your-feature-name

# Make changes and test
npm run test:run
npm run lint

# Commit changes
git add .
git commit -m "feat: add your feature"
```

### 2. Pre-commit Checks
The project includes pre-commit hooks that run:
- ESLint
- Tests
- Build verification

### 3. Pull Request Process
1. Create PR to `development` branch
2. GitHub Actions run automatically
3. All checks must pass
4. Code review required
5. Merge to `development`

### 4. Deployment Process
1. Merge `development` to `main` for production
2. GitHub Actions deploy automatically
3. Monitor deployment status

## 🛠️ Troubleshooting

### Common Issues

#### Tests Failing
```bash
# Clear test cache
npm run test -- --clearCache

# Run specific test file
npm run test:run src/components/__tests__/ComponentName.test.tsx
```

#### Linting Issues
```bash
# Auto-fix linting issues
npm run lint:fix

# Check specific file
npm run lint src/components/ComponentName.tsx
```

#### Build Issues
```bash
# Clear build cache
rm -rf dist/
npm run build
```

### Performance Testing
```bash
# Build for performance testing
npm run build

# Run Lighthouse CI (if configured)
npx lighthouse-ci autorun
```

## 📊 Quality Metrics

### Code Coverage
- Target: >80% coverage
- Run: `npm run test:coverage`

### Performance
- Lighthouse Score: >90
- First Contentful Paint: <1.5s
- Largest Contentful Paint: <2.5s

### Security
- npm audit: No high/critical vulnerabilities
- Regular security updates

## 🔄 Continuous Integration

### GitHub Actions Workflow
1. **Lint** - Code quality checks
2. **Test** - Unit and integration tests
3. **Build** - Production build verification
4. **Security** - Vulnerability scanning
5. **Deploy** - Automated deployment

### Branch Protection
- Required status checks
- Code review required
- Up-to-date branch required

## 📝 Contributing

1. Fork the repository
2. Create feature branch
3. Make changes
4. Run tests and linting
5. Submit pull request
6. Wait for CI/CD checks
7. Address review feedback
8. Merge when approved

## 🆘 Support

For development issues:
1. Check this documentation
2. Review GitHub Issues
3. Contact the development team 