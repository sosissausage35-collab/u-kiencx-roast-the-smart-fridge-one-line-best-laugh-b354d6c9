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
function validateEntry(text: string): void {
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(
      `entry must be 1–${MAX_CHARS} characters, got ${text.length}`,
    );
  }
  if (!text.trim()) {
    throw new Error("entry must not be only whitespace");
  }
  if (text !== text.trim()) {
    throw new Error("entry must not start or end with whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("entry must be exactly one line");
  }
  // No control characters other than the ones a single line can never hold,
  // and no lone surrogates (invalid UTF-8 once written out).
  for (const ch of text) {
    if (ch.codePointAt(0)! < 0x20 || ch.codePointAt(0) === 0x7f) {
      throw new Error("entry must not contain control characters");
    }
  }
  if (Buffer.from(text, "utf8").toString("utf8") !== text) {
    throw new Error("entry is not valid UTF-8");
  }
}

validateEntry(ENTRY);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outFile = join(outDir, "entry.txt");
writeFileSync(outFile, ENTRY, "utf8");

// Round-trip check: what was written must be byte-identical to the entry.
import { readFileSync } from "node:fs";
if (readFileSync(outFile, "utf8") !== ENTRY) {
  throw new Error("written entry.txt differs from the validated entry");
}
console.log(
  `wrote ${outFile} (${ENTRY.length} chars, ${Buffer.byteLength(ENTRY, "utf8")} bytes, valid)`,
);
