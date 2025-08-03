#!/usr/bin/env node

import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🏗️  Testing build process...\n');

// Test production build
console.log('📦 Testing production build...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Production build successful!\n');
} catch (error) {
  console.error('❌ Production build failed!');
  process.exit(1);
}

// Test development build
console.log('🔧 Testing development build...');
try {
  execSync('npm run build:dev', { stdio: 'inherit' });
  console.log('✅ Development build successful!\n');
} catch (error) {
  console.error('❌ Development build failed!');
  process.exit(1);
}

// Check if dist folder exists and has content
const distPath = path.join(process.cwd(), 'dist');
if (fs.existsSync(distPath)) {
  const files = fs.readdirSync(distPath);
  console.log(`📁 Dist folder contains ${files.length} files:`);
  files.forEach(file => {
    const stats = fs.statSync(path.join(distPath, file));
    console.log(
      `   - ${file} (${stats.isDirectory() ? 'dir' : stats.size + ' bytes'})`
    );
  });
} else {
  console.error('❌ Dist folder not found!');
  process.exit(1);
}

console.log('\n🎉 All builds completed successfully!');
console.log('🚀 Ready for deployment to GitHub Pages.');
