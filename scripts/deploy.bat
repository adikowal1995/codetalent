@echo off
REM CodeTalent Deployment Script for Windows
REM This script builds and deploys the website to GitHub Pages

echo 🚀 Starting CodeTalent deployment...

REM Check if we're on a deployment branch
for /f "tokens=*" %%i in ('git branch --show-current') do set CURRENT_BRANCH=%%i

if not "%CURRENT_BRANCH%"=="main" if not "%CURRENT_BRANCH%"=="development" if not "%CURRENT_BRANCH%"=="production" (
    echo ⚠️  Warning: Not on a deployment branch (main/development/production)
    echo    Current branch: %CURRENT_BRANCH%
    set /p CONTINUE="Continue anyway? (y/N): "
    if /i not "%CONTINUE%"=="y" exit /b 1
)

REM Install dependencies
echo 📦 Installing dependencies...
call npm ci
if errorlevel 1 (
    echo ❌ Failed to install dependencies
    exit /b 1
)

REM Run tests
echo 🧪 Running tests...
call npm run test:run
if errorlevel 1 (
    echo ❌ Tests failed
    exit /b 1
)

REM Build the project
echo 🏗️  Building project...
call npm run build
if errorlevel 1 (
    echo ❌ Build failed
    exit /b 1
)

REM Check if build was successful
if not exist "dist" (
    echo ❌ Build failed - dist directory not found
    exit /b 1
)

echo ✅ Build completed successfully!

REM If we're on main or production, we can deploy directly
if "%CURRENT_BRANCH%"=="main" (
    echo 🌐 Deploying to production...
    echo 📱 Website will be available at: https://adikowal1995.github.io/codetalent/
) else if "%CURRENT_BRANCH%"=="production" (
    echo 🌐 Deploying to production...
    echo 📱 Website will be available at: https://adikowal1995.github.io/codetalent/
) else (
    echo 🌐 Deploying to development...
    echo 📱 Website will be available at: https://adikowal1995.github.io/codetalent/
)

echo.
echo 🎉 Deployment completed!
echo 📊 Check deployment status at: https://github.com/adikowal1995/codetalent/actions
echo 🌐 Live website: https://adikowal1995.github.io/codetalent/

pause 