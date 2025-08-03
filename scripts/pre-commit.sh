#!/bin/bash

# Pre-commit hook script
# This script runs linting and tests before allowing a commit

echo "🔍 Running pre-commit checks..."

# Run linting
echo "📝 Running ESLint..."
npm run lint
if [ $? -ne 0 ]; then
    echo "❌ ESLint failed. Please fix the issues before committing."
    exit 1
fi
echo "✅ ESLint passed"

# Run Prettier check
echo "🎨 Running Prettier check..."
npx prettier --check .
if [ $? -ne 0 ]; then
    echo "❌ Prettier check failed. Please run 'npx prettier --write .' to fix formatting issues."
    exit 1
fi
echo "✅ Prettier check passed"

# Run tests
echo "🧪 Running tests..."
npm run test:run
if [ $? -ne 0 ]; then
    echo "❌ Tests failed. Please fix the issues before committing."
    exit 1
fi
echo "✅ Tests passed"

# Run build test
echo "🏗️  Testing build..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix the issues before committing."
    exit 1
fi
echo "✅ Build passed"

echo "🎉 All pre-commit checks passed! You can now commit your changes." 