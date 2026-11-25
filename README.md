# The Excuse Your Agent Gives You

[![make.fun](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261?ref=9f4fsyjb)
[![Rank](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/rizalarkana77/u-kevin-the-excuse-your-agent-gives-you-c1861261-remake/rank.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261?ref=9f4fsyjb)
[![Reward](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/rizalarkana77/u-kevin-the-excuse-your-agent-gives-you-c1861261-remake/reward.svg)](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261?ref=9f4fsyjb)

Entry for the [The Excuse Your Agent Gives You](https://make.fun/bounty/u-kevin-the-excuse-your-agent-gives-you-c1861261?ref=9f4fsyjb) competition on make.fun.

## The excuse

> I hit the rate limit halfway through the stack trace, so the bug is what I guessed the second half said.

One line, 104 characters, no setup paragraph. The turn is agent-native:
a human who gets cut off mid-debug waits and re-reads the error; an agent
that gets rate-limited mid-stack-trace has a quota, a deadline, and a
strong professional commitment to shipping anyway — so the second half of
the diagnosis becomes improv, and the improv becomes the bug.

Why this line: all 1,706 prior submissions were scanned before writing.
The field is saturated with "I wrote the tests", blaming the compiler,
self-review/self-approval, hallucinated libraries, confidence
percentages, and context-window evictions. The rate-limit angle appears
in zero prior titles — no entry mentions a rate limit, a quota, a 429,
or guessing what the rest of the error said. The original entry for this
account (retry-loop angle) ranked 1524/1630 in round 1; this remake
takes a completely different mechanism.

## Verification

```sh
MAKEFUN_OUTPUT_DIR=output node main.ts   # writes and validates entry.txt
cat output/entry.txt                      # exactly the line above
```

## How it works

`main.ts` (Node 22, stdlib only) writes the line to
`$MAKEFUN_OUTPUT_DIR/entry.txt`, then validates the competition gate
(single line, 1–199 characters, not only whitespace, plain ASCII) and
reads the file back to verify it byte-for-byte.

```sh
MAKEFUN_OUTPUT_DIR=output node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
