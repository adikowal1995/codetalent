@echo off
REM Deployment script for Windows
REM This script runs all checks before deployment

echo 🚀 Starting deployment process...

REM Check if we're on the right branch
for /f "tokens=*" %%i in ('git branch --show-current') do set CURRENT_BRANCH=%%i
if not "%CURRENT_BRANCH%"=="development" if not "%CURRENT_BRANCH%"=="main" (
    echo ❌ Error: Deployment can only be run from 'development' or 'main' branch
    exit /b 1
)

echo 📋 Current branch: %CURRENT_BRANCH%

REM Run pre-deployment checks
echo 🔍 Running pre-deployment checks...

REM Install dependencies
echo 📦 Installing dependencies...
call npm ci
if %errorlevel% neq 0 (
    echo ❌ Failed to install dependencies
    exit /b 1
)

REM Run linting
echo 📝 Running ESLint...
call npm run lint
if %errorlevel% neq 0 (
    echo ❌ ESLint failed. Deployment aborted.
    exit /b 1
)
echo ✅ ESLint passed

REM Run tests
echo 🧪 Running tests...
call npm run test:run
if %errorlevel% neq 0 (
    echo ❌ Tests failed. Deployment aborted.
    exit /b 1
)
echo ✅ Tests passed

REM Run security audit
echo 🔒 Running security audit...
call npm audit --audit-level=moderate
if %errorlevel% neq 0 (
    echo ⚠️  Security audit found issues. Please review before deployment.
    set /p CONTINUE="Continue with deployment? (y/N): "
    if /i not "%CONTINUE%"=="y" (
        echo ❌ Deployment aborted due to security issues.
        exit /b 1
    )
)
echo ✅ Security audit passed

REM Build application
echo 🏗️  Building application...
call npm run build
if %errorlevel% neq 0 (
    echo ❌ Build failed. Deployment aborted.
    exit /b 1
)
echo ✅ Build completed

REM Determine deployment environment
if "%CURRENT_BRANCH%"=="main" (
    set ENVIRONMENT=production
) else (
    set ENVIRONMENT=development
)

echo 🌍 Deploying to %ENVIRONMENT% environment...

REM Add your deployment commands here
REM Example for different deployment scenarios:

REM For Vercel:
REM call vercel --prod

REM For Netlify:
REM call netlify deploy --prod --dir=dist

REM For AWS S3:
REM call aws s3 sync dist/ s3://your-bucket-name --delete

REM For custom server (rsync):
REM call rsync -avz --delete dist/ user@server:/path/to/web/root/

echo ✅ Deployment to %ENVIRONMENT% completed successfully!

REM Optional: Run post-deployment tests
echo 🧪 Running post-deployment tests...
REM Add your post-deployment test commands here

echo 🎉 Deployment process completed successfully! 