#!/bin/bash

# Deployment script
# This script runs all checks before deployment

set -e  # Exit on any error

echo "🚀 Starting deployment process..."

# Check if we're on the right branch
if [ "$(git branch --show-current)" != "development" ] && [ "$(git branch --show-current)" != "main" ]; then
    echo "❌ Error: Deployment can only be run from 'development' or 'main' branch"
    exit 1
fi

echo "📋 Current branch: $(git branch --show-current)"

# Run pre-deployment checks
echo "🔍 Running pre-deployment checks..."

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run linting
echo "📝 Running ESLint..."
npm run lint
if [ $? -ne 0 ]; then
    echo "❌ ESLint failed. Deployment aborted."
    exit 1
fi
echo "✅ ESLint passed"

# Run tests
echo "🧪 Running tests..."
npm run test:run
if [ $? -ne 0 ]; then
    echo "❌ Tests failed. Deployment aborted."
    exit 1
fi
echo "✅ Tests passed"

# Run security audit
echo "🔒 Running security audit..."
npm audit --audit-level=moderate
if [ $? -ne 0 ]; then
    echo "⚠️  Security audit found issues. Please review before deployment."
    read -p "Continue with deployment? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "❌ Deployment aborted due to security issues."
        exit 1
    fi
fi
echo "✅ Security audit passed"

# Build application
echo "🏗️  Building application..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed. Deployment aborted."
    exit 1
fi
echo "✅ Build completed"

# Determine deployment environment
if [ "$(git branch --show-current)" = "main" ]; then
    ENVIRONMENT="production"
else
    ENVIRONMENT="development"
fi

echo "🌍 Deploying to $ENVIRONMENT environment..."

# Add your deployment commands here
# Example for different deployment scenarios:

# For Vercel:
# vercel --prod

# For Netlify:
# netlify deploy --prod --dir=dist

# For AWS S3:
# aws s3 sync dist/ s3://your-bucket-name --delete

# For custom server (rsync):
# rsync -avz --delete dist/ user@server:/path/to/web/root/

echo "✅ Deployment to $ENVIRONMENT completed successfully!"

# Optional: Run post-deployment tests
echo "🧪 Running post-deployment tests..."
# Add your post-deployment test commands here

echo "🎉 Deployment process completed successfully!" 