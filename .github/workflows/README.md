# GitHub Pages Deployment

This workflow deploys the React application to GitHub Pages.

## Configuration

1. **Repository Settings**: 
   - Go to Settings > Pages
   - Source: "GitHub Actions"
   - Branch: `development`

2. **Base Path**: 
   - The app is configured to work at the root path `/`
   - For GitHub Pages, the site will be available at: `https://adikowal1995.github.io/codetalent/`

3. **SPA Routing**:
   - Added `404.html` for client-side routing support
   - Added routing script to `index.html`

## Troubleshooting

If you see routing errors:
- Check that the base path in `vite.config.ts` is set to `/`
- Ensure `404.html` is copied to the dist folder during build
- Verify that the routing script is present in `index.html`

## Manual Deployment

To manually trigger deployment:
1. Go to Actions tab
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select the `development` branch 