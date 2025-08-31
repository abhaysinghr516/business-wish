#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Running SEO Check...\n');

// Check for required SEO files
const requiredFiles = [
    'src/app/robots.ts',
    'src/app/sitemap.ts',
    'src/app/manifest.ts',
    'public/llms.txt',
    'src/lib/seo.ts'
];

let allFilesExist = true;

requiredFiles.forEach(file => {
    if (fs.existsSync(file)) {
        console.log(`✅ ${file} exists`);
    } else {
        console.log(`❌ ${file} missing`);
        allFilesExist = false;
    }
});

// Check package.json for SEO-related metadata
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

console.log('\n📦 Package.json SEO Check:');
console.log(`✅ Name: ${packageJson.name}`);
console.log(`✅ Version: ${packageJson.version}`);
console.log(`✅ Description: ${packageJson.description || 'Missing description'}`);

// Check for Next.js config optimizations
if (fs.existsSync('next.config.mjs')) {
    const nextConfig = fs.readFileSync('next.config.mjs', 'utf8');
    console.log('\n⚙️ Next.js Config Check:');

    if (nextConfig.includes('compress: true')) {
        console.log('✅ Compression enabled');
    } else {
        console.log('⚠️ Consider enabling compression');
    }

    if (nextConfig.includes('headers()')) {
        console.log('✅ Custom headers configured');
    } else {
        console.log('⚠️ Consider adding security headers');
    }

    if (nextConfig.includes('redirects()')) {
        console.log('✅ Redirects configured');
    } else {
        console.log('⚠️ Consider adding URL redirects');
    }
}

// Check for structured data in layout
if (fs.existsSync('src/app/layout.tsx')) {
    const layout = fs.readFileSync('src/app/layout.tsx', 'utf8');
    console.log('\n🏗️ Layout SEO Check:');

    if (layout.includes('application/ld+json')) {
        console.log('✅ Structured data found');
    } else {
        console.log('❌ No structured data found');
    }

    if (layout.includes('preconnect')) {
        console.log('✅ DNS prefetch/preconnect found');
    } else {
        console.log('⚠️ Consider adding DNS prefetch');
    }
}

console.log('\n📊 SEO Summary:');
if (allFilesExist) {
    console.log('✅ All required SEO files are present');
} else {
    console.log('❌ Some SEO files are missing');
}

console.log('\n🚀 Recommendations:');
console.log('1. Run lighthouse audit: npm run lighthouse');
console.log('2. Test structured data: https://search.google.com/test/rich-results');
console.log('3. Check mobile-friendliness: https://search.google.com/test/mobile-friendly');
console.log('4. Validate sitemap: https://www.xml-sitemaps.com/validate-xml-sitemap.html');

console.log('\n✨ SEO check complete!');