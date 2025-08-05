#!/bin/bash

# CodeTalent Deployment Script
# This script builds and deploys the website to GitHub Pages

set -e

echo "🚀 Starting CodeTalent deployment..."

# Check if we're on a deployment branch
CURRENT_BRANCH=$(git branch --show-current)
if [[ "$CURRENT_BRANCH" != "main" && "$CURRENT_BRANCH" != "development" && "$CURRENT_BRANCH" != "production" ]]; then
    echo "⚠️  Warning: Not on a deployment branch (main/development/production)"
    echo "   Current branch: $CURRENT_BRANCH"
    read -p "Continue anyway? (y/N): " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        exit 1
    fi
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run tests
echo "🧪 Running tests..."
npm run test:run

# Build the project
echo "🏗️  Building project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Build failed - dist directory not found"
    exit 1
fi

echo "✅ Build completed successfully!"

# If we're on main or production, we can deploy directly
if [[ "$CURRENT_BRANCH" == "main" || "$CURRENT_BRANCH" == "production" ]]; then
    echo "🌐 Deploying to production..."
    echo "📱 Website will be available at: https://adikowal1995.github.io/codetalent/"
else
    echo "🌐 Deploying to development..."
    echo "📱 Website will be available at: https://adikowal1995.github.io/codetalent/"
fi

echo ""
echo "🎉 Deployment completed!"
echo "📊 Check deployment status at: https://github.com/adikowal1995/codetalent/actions"
echo "🌐 Live website: https://adikowal1995.github.io/codetalent/" 