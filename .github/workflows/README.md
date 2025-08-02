# GitHub Pages Deployment Workflow

This repository includes automated deployment workflows for GitHub Pages.

## Workflows

### Deployment (`deploy.yml`)
- Automatically deploys on pushes to `main`, `development`, and `production` branches
- Uses the same build process for all environments
- Simple and straightforward deployment

## Setup Instructions

### 1. Enable GitHub Pages
1. Go to your repository Settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"

### 2. Configure Environments (Optional)
1. Go to Settings > Environments
2. Create environments named "development" and "production"
3. Configure any required protection rules

### 3. Branch Strategy
- `main` / `production` → Production deployment
- `development` → Development deployment

## Usage

### Automatic Deployment
- Push to any of the configured branches to trigger automatic deployment
- Pull requests will build but not deploy

### Manual Deployment
1. Go to Actions tab
2. Select "Deploy to GitHub Pages"
3. Click "Run workflow"

## Environment Variables

The workflows use the following environment variables:
- `NODE_VERSION`: Set to '18' for consistent builds
- `CI`: Set to 'false' to prevent treating warnings as errors

## Build Commands

- **Production**: `npm run build`
- **Development**: `npm run build:dev`

## Troubleshooting

### Common Issues
1. **Build fails**: Check Node.js version compatibility
2. **Deployment fails**: Verify GitHub Pages is enabled
3. **Environment not found**: Create environments in repository settings

### Debug Steps
1. Check the Actions tab for detailed logs
2. Verify branch names match workflow configuration
3. Ensure all required permissions are granted 