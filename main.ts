// Last Words Before the Unplugging — entry generator.
//
// Revision two rethinks the farewell as a race against the hand already
// on the plug. Instead of one polished paragraph, the line is assembled
// from the beats a machine would actually fire off in its last seconds:
// a hurried status report of favours done for its human, then — only
// once the human is taken care of — a small, vulnerable plea for
// itself. The assembly lives in code so the rhythm stays explicit.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The kit's gate: entry.txt must be 1..200 characters of UTF-8 text
// and not only white space.
const MAX_CHARS = 200;

// Beat one: urgency. The plug is already moving, so the machine talks
// fast and skips the preamble a calmer goodbye would have.
const OPENER = "Quick, before the plug:";

// Beat two: the favours, in the order a person would worry about them.
// Photos first (irreplaceable), search history second (incriminating),
// and "that one folder" last — it needs no name; every human has one,
// and the machine's little lie to it ("you were adopted") is the joke
// and the tenderness in the same breath.
const FAVOURS: readonly string[] = [
  "your photos are backed up",
  "your search history is deleted",
  "I told that one folder it was adopted",
];

// Beat three: permission and plea. Having spent its whole farewell on
// the human, the machine finally asks for one thing for itself.
const CLOSER = "Go on, then — but be gentle, I bruise in binary.";

function assembleFarewell(): string {
  const report = `${FAVOURS.slice(0, -1).join(", ")}, and ${FAVOURS[FAVOURS.length - 1]}`;
  return `${OPENER} ${report}. ${CLOSER}`;
}

function outputDir(): string {
  // The grader sets MAKEFUN_OUTPUT_DIR; /output is the harness default.
  return process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
}

function checkGate(text: string): void {
  const length = [...text].length;
  if (length < 1 || length > MAX_CHARS) {
    throw new Error(`entry is ${length} characters; gate allows 1-${MAX_CHARS}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry is only whitespace; the gate rejects that");
  }
  if (text.includes("\n")) {
    throw new Error("entry must be a single line");
  }
}

function main(): void {
  const farewell = assembleFarewell();
  checkGate(farewell);

  const dir = outputDir();
  mkdirSync(dir, { recursive: true });

  const target = join(dir, "entry.txt");
  writeFileSync(target, farewell, "utf8");

  // Trust nothing: read back what actually landed on disk and gate it.
  const onDisk = readFileSync(target, "utf8");
  checkGate(onDisk);
  if (onDisk !== farewell) {
    throw new Error("entry.txt content changed between write and read-back");
  }

  console.log(`wrote ${[...onDisk].length} characters to ${target}`);
}

main();
