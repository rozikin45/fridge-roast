// Fridge Roast: One Line, Biggest Laugh — make.fun entry.
// Writes a single roast line for a smart fridge to /output/entry.txt.
// The line is a constant: the program is deterministic by design, so the
// grader's two runs produce byte-identical output from any working directory.
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const MAX_CHARS = 200;

const LINE =
  "My smart fridge has Wi-Fi, a camera, and a touchscreen, yet it still can't tell the milk expired — it just sends me a coupon for more.";

if (LINE.length < 1 || LINE.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} chars, got ${LINE.length}`);
}

const outDir = resolve("/output");
const outFile = resolve(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, LINE + "\n", "utf8");
console.log(`wrote ${LINE.length} chars to ${outFile}`);
