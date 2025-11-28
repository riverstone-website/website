import fs from "fs";
import path from "path";

const root = process.cwd();
const imagesDir = path.join(root, "public", "images");

const allowedExt = new Set([
  ".jpg",
  ".jpeg",
  ".png",
  ".webp",
  ".JPG",
  ".JPEG",
  ".PNG",
  ".WEBP",
]);

const labelMap = {
  gallery: "Main Gallery",
  BOWL: "Bowls",
  CYLINDER: "Cylinders",
  MURALS: "Murals",
  RECT: "Rectangles",
  Rounds: "Rounds",
  Square: "Squares",
  teardrop: "Teardrops",
  URNS: "Urns",
  Waterfall: "Waterfalls",
};

const order = [
  "gallery",
  "BOWL",
  "CYLINDER",
  "MURALS",
  "RECT",
  "Rounds",
  "Square",
  "teardrop",
  "URNS",
  "Waterfall",
];

const ensureDir = (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
};

const buildCategories = () =>
  order
    .filter((name) => fs.existsSync(path.join(imagesDir, name)))
    .map((name) => {
      const dirPath = path.join(imagesDir, name);
      const files = fs
        .readdirSync(dirPath)
        .filter((file) => allowedExt.has(path.extname(file)))
        .sort((a, b) => a.localeCompare(b));

      const label = labelMap[name] || name;

      return {
        key: name,
        label,
        images: files.map((file, index) => ({
          src: `/images/${name}/${file}`,
          alt: `${label} ${index + 1}`,
          title: `${label} ${index + 1}`,
        })),
      };
    });

const categories = buildCategories();

const union = categories.length
  ? categories.map((cat) => `'${cat.key}'`).join(" | ")
  : "never";

const fileContent = `// This file is auto-generated via scripts/generateGalleryData.mjs
// Do not edit manually unless you know what you're doing.

export type GalleryCategoryKey = ${union};

export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
}

export interface GalleryCategory {
  key: GalleryCategoryKey;
  label: string;
  images: GalleryImage[];
}

export const galleryCategories: GalleryCategory[] = ${JSON.stringify(
  categories,
  null,
  2
)};
`;

const outputDir = path.join(root, "src", "data");
ensureDir(outputDir);
fs.writeFileSync(path.join(outputDir, "galleryData.ts"), fileContent, "utf8");

console.log(
  `Generated gallery data for ${categories.length} categories at src/data/galleryData.ts`
);

