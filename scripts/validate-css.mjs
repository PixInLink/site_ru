import { readFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const distDir = process.argv[2] || "dist";
const errors = [];

// 1. Check overrides.css exists in dist
const overridesPath = join(distDir, "themes/oiron/overrides.css");
if (!existsSync(overridesPath)) {
  errors.push("MISSING: dist/themes/oiron/overrides.css not found");
} else {
  const content = readFileSync(overridesPath, "utf8");
  if (!content.includes(".progress-linear")) {
    errors.push("MISSING: progress-linear fix not in overrides.css");
  }
  if (!content.includes("text-transform: none !important")) {
    errors.push("MISSING: text-transform fix not in overrides.css");
  }
}

// 2. Check that styles.css does NOT contain width:0!important on progress-linear
const stylesPath = join(distDir, "themes/oiron/styles.css");
if (!existsSync(stylesPath)) {
  errors.push("MISSING: dist/themes/oiron/styles.css not found");
} else {
  const content = readFileSync(stylesPath, "utf8");
  if (content.includes("progress-linear{width:0!important}")) {
    errors.push("ERROR: styles.css still has progress-linear{width:0!important} — delete this rule from public/themes/oiron/styles.css");
  }
}

// 3. Check that all 33+ pages link overrides.css
const { readdirSync, readFileSync: rf } = await import("node:fs");
function walk(dir, cb) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, entry.name);
    if (entry.isDirectory()) walk(p, cb);
    else if (entry.name.endsWith(".html")) cb(p);
  }
}
walk(distDir, (p) => {
  const html = readFileSync(p, "utf8");
  if (p.endsWith("index.html") && !html.includes("overrides.css")) {
    errors.push(`MISSING: ${p} does not link overrides.css`);
  }
});

if (errors.length) {
  console.error("CSS Validation FAILED:");
  errors.forEach((e) => console.error("  ❌ " + e));
  process.exit(1);
}
console.log("CSS Validation PASSED ✅");
