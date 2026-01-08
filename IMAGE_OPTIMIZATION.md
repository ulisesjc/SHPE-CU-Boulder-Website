# Image Optimization Guide

## Current Issue
The images in `/public/images/` are **extremely large** and causing slow page loads:

- `Ari_sPic.jpeg`: **7.1MB** ⚠️
- `tato.jpg`: **5.5MB** ⚠️
- `Sanchez_Kevin_Photo.jpg`: **3.0MB** ⚠️
- `Garza_Felipe.jpg`: **2.1MB** ⚠️
- `Alan_Ayala_Photo.jpg`: **2.6MB** ⚠️
- `Saucedo_Jose_Photo.jpg`: **1.5MB** ⚠️

**Total: ~25MB of images!** These should be under 200KB each for web use.

## Recommended Actions

### 1. Compress Images
Use tools like:
- **Squoosh** (https://squoosh.app/) - Free online tool
- **ImageOptim** (Mac) or **TinyPNG** (online)
- **Sharp** (CLI tool)

Target sizes:
- Profile photos (160x160px display): **50-100KB** each
- Background images: **200-500KB** max

### 2. Convert to Modern Formats
- Use **WebP** format with JPG fallback
- Better compression, same quality

### 3. Resize Images
Profile photos are displayed at 160x160px, but source images are much larger.
Resize to 320x320px (2x for retina displays) = perfect size.

### 4. Use Responsive Images
Consider using `<picture>` element with multiple sources:
```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <source srcset="image.jpg" type="image/jpeg">
  <img src="image.jpg" alt="...">
</picture>
```

## Current Optimizations Applied
✅ Lazy loading on board member images
✅ Eager loading on critical navigation logos
✅ Preload links for critical images
✅ Async decoding

## Quick Fix Command (using ImageMagick)
```bash
# Install ImageMagick: brew install imagemagick (Mac) or apt-get install imagemagick (Linux)

# Resize and compress all images
cd public/images
for img in *.jpg *.jpeg; do
  convert "$img" -resize 320x320^ -gravity center -extent 320x320 -quality 85 "optimized_${img}"
done
```

## Expected Results
After optimization:
- **Total image size**: ~1-2MB (down from 25MB)
- **Page load time**: 80-90% faster
- **User experience**: Much better, especially on mobile

