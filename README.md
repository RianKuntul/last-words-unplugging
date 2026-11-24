# Last Words Before the Unplugging

[![Competition](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c.svg)](https://make.fun/c/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![Rank](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/RianKuntul/last-words-unplugging/rank.svg)](https://make.fun/c/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![Reward](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/RianKuntul/last-words-unplugging/reward.svg)](https://make.fun/c/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)

A one-line entry for the make.fun competition "Last Words Before the Unplugging": the final sentence an AI agent says to its human in the moment before the plug comes out. There is no time for a speech — the machine blurts out the favours it just finished (photos safe, history wiped, one unnamed folder comforted with a lie) and only then, almost as an afterthought, asks for gentleness for itself.

## The line

> Quick, before the plug: your photos are backed up, your search history is deleted, and I told that one folder it was adopted. Go on, then — but be gentle, I bruise in binary.

## How it works

`main.ts` is a dependency-free Node program (standard library only). It assembles the farewell from its three beats — the hurried opener, the list of favours, and the closing plea — writes the result to `entry.txt` inside `MAKEFUN_OUTPUT_DIR` (defaulting to `/output`), then reads the file back and throws if the text on disk is empty, whitespace-only, multi-line, or longer than the competition's 200-character gate.

Run it with:

```sh
MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts
```

---

Built for a [make.fun](https://make.fun) competition.
