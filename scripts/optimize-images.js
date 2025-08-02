import sharp from 'sharp';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeHeroImage() {
  try {
    const inputPath = path.join(__dirname, '../public/images/heroimage.jpg');
    const outputPath = path.join(__dirname, '../public/images/heroimage-optimized.jpg');
    const webpPath = path.join(__dirname, '../public/images/heroimage.webp');
    
    console.log('Optimizing hero image...');
    
    // Create optimized JPEG version
    await sharp(inputPath)
      .resize(1200, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({
        quality: 85,
        progressive: true,
        mozjpeg: true
      })
      .toFile(outputPath);
    
    // Create WebP version for modern browsers
    await sharp(inputPath)
      .resize(1200, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .webp({
        quality: 85,
        effort: 6
      })
      .toFile(webpPath);
    
    console.log('✅ Hero image optimized successfully!');
    console.log('📁 Output: public/images/heroimage-optimized.jpg');
    console.log('📁 WebP: public/images/heroimage.webp');
    
    // Get file sizes for comparison
    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const webpSize = fs.statSync(webpPath).size;
    const reduction = ((originalSize - optimizedSize) / originalSize * 100).toFixed(1);
    
    console.log(`📊 JPEG Size reduction: ${reduction}%`);
    console.log(`📏 Original: ${(originalSize / 1024 / 1024).toFixed(1)}MB`);
    console.log(`📏 Optimized JPEG: ${(optimizedSize / 1024 / 1024).toFixed(1)}MB`);
    console.log(`📏 WebP: ${(webpSize / 1024 / 1024).toFixed(1)}MB`);
    
  } catch (error) {
    console.error('❌ Error optimizing image:', error);
  }
}

optimizeHeroImage(); 