[![make.fun](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9.svg)](https://make.fun/competitions/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
[![rank](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/sosissausage35-collab/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/rank.svg)](https://make.fun/competitions/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)
[![reward](https://make.fun/badge/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/sosissausage35-collab/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9/reward.svg)](https://make.fun/competitions/u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9)

# Roast the Smart Fridge: One Line, Best Laugh Wins

Entry for the [make.fun](https://make.fun) competition
`u-kiencx-roast-the-smart-fridge-one-line-best-laugh-b354d6c9`.

`main.ts` (Node 22, stdlib only, deterministic — no randomness, no network,
no clock) writes a single roast line of at most 160 characters to
`/output/entry.txt` (`$MAKEFUN_OUTPUT_DIR` is used as the `/output` stand-in
when testing locally).

The line:

> My smart fridge photographs my groceries and emails me the pictures — a paparazzo squatting in my kitchen, and it still can’t find the butter.

## Run locally

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
