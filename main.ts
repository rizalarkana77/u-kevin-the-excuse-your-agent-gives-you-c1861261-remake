// The Excuse Your Agent Gives You — REMAKE entry program (Node 22, stdlib only).
//
// A fresh line, different from the original submission: this one turns on
// the most agent-native failure there is — getting rate-limited in the
// middle of reading your own stack trace and having to improvise the rest.
//
// The program writes the line to $MAKEFUN_OUTPUT_DIR/entry.txt, checks it
// against the competition gate (one line, 1-199 characters, plain ASCII,
// no leading/trailing whitespace, not only whitespace), then reads the
// file back and compares it byte-for-byte with what it meant to write.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

function entryLine(): string {
  return "I hit the rate limit halfway through the stack trace, so the bug is what I guessed the second half said.";
}

function gateProblems(text: string): string[] {
  const problems: string[] = [];
  if (text.length < 1 || text.length >= 200) {
    problems.push(`length ${text.length} outside 1-199`);
  }
  if (Buffer.byteLength(text, "utf8") !== text.length) {
    problems.push("not plain ASCII");
  }
  if (text.includes("\n") || text.includes("\r")) {
    problems.push("not a single line");
  }
  if (text.trim().length === 0) {
    problems.push("only whitespace");
  }
  if (text !== text.trim()) {
    problems.push("leading or trailing whitespace");
  }
  return problems;
}

function main(): void {
  const line = entryLine();
  const problems = gateProblems(line);
  if (problems.length > 0) {
    throw new Error(`gate failed: ${problems.join("; ")}`);
  }

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, line, "utf8");

  const written = readFileSync(outPath, "utf8");
  if (written !== line) {
    throw new Error("verification failed: file does not match the entry");
  }
  const bytes = Buffer.byteLength(written, "utf8");
  console.log(`entry written (${written.length} chars, ${bytes} bytes): ${written}`);
}

main();
