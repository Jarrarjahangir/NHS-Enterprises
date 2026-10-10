import fs from "fs";
import path from "path";
import sharp from "sharp";

const brainDir = "C:\\Users\\Jarrar\\.gemini\\antigravity-ide\\brain\\c038e9aa-c300-4e1c-b6be-b6166e21ab75";
const outputDir = "d:\\NHS\\public\\images";

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Map key generated images to clean webp names
const namedImages = [
  { pattern: /^hero_boardroom.*\.jpg$/i, target: "hero-boardroom.webp" },
  { pattern: /^about_office.*\.jpg$/i, target: "about-office.webp" },
  { pattern: /^service_accounting.*\.jpg$/i, target: "service-accounting.webp" },
  { pattern: /^service_bookkeeping.*\.jpg$/i, target: "service-bookkeeping.webp" },
  { pattern: /^service_tax.*\.jpg$/i, target: "service-tax.webp" },
  { pattern: /^service_audit.*\.jpg$/i, target: "service-audit.webp" },
  { pattern: /^service_cfo.*\.jpg$/i, target: "service-cfo.webp" },
  { pattern: /^service_advisory.*\.jpg$/i, target: "service-advisory.webp" },
  { pattern: /^industry_real_estate.*\.jpg$/i, target: "industry-real-estate.webp" },
  { pattern: /^industry_trading.*\.jpg$/i, target: "industry-trading.webp" },
  { pattern: /^industry_manufacturing.*\.jpg$/i, target: "industry-manufacturing.webp" },
  { pattern: /^industry_retail.*\.jpg$/i, target: "industry-retail.webp" },
  { pattern: /^industry_hospitality.*\.jpg$/i, target: "industry-hospitality.webp" },
  { pattern: /^industry_professional.*\.jpg$/i, target: "industry-professional.webp" },
  { pattern: /^insight_tax.*\.jpg$/i, target: "insight-tax.webp" },
  { pattern: /^insight_cfo.*\.jpg$/i, target: "insight-cfo.webp" },
  { pattern: /^insight_audit.*\.jpg$/i, target: "insight-audit.webp" },
];

async function convert() {
  const files = fs.readdirSync(brainDir);
  console.log(`Found ${files.length} items in brain directory.`);

  // 1. Process specific named images
  for (const item of namedImages) {
    const match = files.find(f => item.pattern.test(f));
    if (match) {
      const srcPath = path.join(brainDir, match);
      const destPath = path.join(outputDir, item.target);
      await sharp(srcPath)
        .webp({ quality: 85 })
        .toFile(destPath);
      console.log(`Converted: ${match} -> public/images/${item.target}`);
    } else {
      console.warn(`No match found for pattern: ${item.pattern}`);
    }
  }

  // 2. Convert all PNG files in brain dir to WebP
  for (const f of files) {
    if (f.endsWith(".png")) {
      const srcPath = path.join(brainDir, f);
      const cleanName = f.replace(/_\d+\.png$/, "").replace(/_/g, "-") + ".webp";
      const destPath = path.join(outputDir, cleanName);
      await sharp(srcPath)
        .webp({ quality: 85 })
        .toFile(destPath);
      console.log(`Converted PNG: ${f} -> public/images/${cleanName}`);
    }
  }

  // 3. Generate high quality cta-skyline.webp if not present from existing night Dubai skyline
  const ctaDest = path.join(outputDir, "cta-skyline.webp");
  if (!fs.existsSync(ctaDest)) {
    // We can use insight-tax or hero-boardroom with subtle dark tint or fetch
    const heroSrc = path.join(outputDir, "hero-boardroom.webp");
    if (fs.existsSync(heroSrc)) {
      await sharp(heroSrc)
        .modulate({ brightness: 0.6, saturation: 1.1 })
        .webp({ quality: 85 })
        .toFile(ctaDest);
      console.log(`Created dark luxury cta-skyline.webp`);
    }
  }

  console.log("All image conversions completed successfully!");
}

convert().catch(err => {
  console.error("Conversion failed:", err);
  process.exit(1);
});
