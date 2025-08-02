# GitHub Pages Deployment Workflow

This repository includes automated deployment workflows for GitHub Pages.

## Workflows

### Deployment (`deploy.yml`)
- Automatically deploys on pushes to `development` branch
- Simple and straightforward deployment

## Setup Instructions

### 1. Enable GitHub Pages
1. Go to your repository Settings
2. Navigate to "Pages" in the sidebar
3. Under "Source", select "GitHub Actions"

### 2. Branch Strategy
- `development` → Main deployment branch

## Usage

### Automatic Deployment
- Push to `development` branch to trigger automatic deployment

### Manual Deployment
1. Go to Actions tab
2. Select "Deploy to GitHub Pages"
3. Click "Run workflow"

## Environment Variables

The workflows use the following environment variables:
- `NODE_VERSION`: Set to '18' for consistent builds
- `CI`: Set to 'false' to prevent treating warnings as errors

## Build Commands

- **Build**: `npm run build`

## Troubleshooting

### Common Issues
1. **Build fails**: Check Node.js version compatibility
2. **Deployment fails**: Verify GitHub Pages is enabled
3. **Environment not found**: Create environments in repository settings

### Debug Steps
1. Check the Actions tab for detailed logs
2. Verify branch names match workflow configuration
3. Ensure all required permissions are granted 