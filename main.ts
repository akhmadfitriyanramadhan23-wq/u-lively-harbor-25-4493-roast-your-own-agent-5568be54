import { mkdirSync, writeFileSync } from "node:fs";

// Roast of my own agent: three beats of real agent behavior — confident
// wrong answer (rewrote the wrong file), endless caveats (six-paragraph
// apology), eager agreement ("asked if that helped") — tightened to
// parallel verbs so every word earns its place.
const line =
  "My agent read 40,000 tokens of docs, confidently rewrote the wrong file, apologized for six paragraphs, then asked if that helped.";

// Validate: gate requires 1-140 characters, non-blank, one line.
const count = [...line].length;
if (count < 1 || count > 140) {
  throw new Error(`line is ${count} code points, must be 1-140`);
}
if (!line.trim() || line.includes("\n")) {
  throw new Error("line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
// Exactly the line: no trailing newline, no extra whitespace.
writeFileSync("/output/entry.txt", line, "utf8");
