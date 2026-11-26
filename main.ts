// Roast the Smart Fridge: One Line, Best Laugh Wins
// (make.fun competition u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
//
// Writes exactly one roast line (at most 160 characters) to
// <output dir>/entry.txt, where the output dir is /output in the grader
// sandbox, or $MAKEFUN_OUTPUT_DIR when set (local testing stand-in).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one line, written fresh for this competition.
// Angle: the fridge's built-in camera photographs the groceries and emails
// the pictures to its owner — a paparazzo living in the kitchen — while
// still failing at the one thing a fridge is for: knowing where the butter is.
const ENTRY =
  "My smart fridge photographs my groceries and emails me the pictures — a paparazzo squatting in my kitchen, and it still can’t find the butter.";

const MAX_CHARS = 160;

// Gate checks, mirroring the competition's scorer:
// UTF-8 text, 1–160 characters, not only whitespace, exactly one line.
if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(
    `entry must be 1–${MAX_CHARS} characters, got ${ENTRY.length}`,
  );
}
if (!ENTRY.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be exactly one line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
