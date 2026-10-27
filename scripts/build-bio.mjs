// Builds src/data/bio.json from docs/content-extracted.txt (bio paragraphs only).
import { readFileSync, writeFileSync } from 'node:fs'

const lines = readFileSync('docs/content-extracted.txt', 'utf8').split(/\r?\n/)
const L = (n) => lines[n - 1].trim()

const bn = [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(L)

// The doc breaks one paragraph across lines 20/22 and packs several into line 26.
const en = [L(16), L(18), `${L(20)} ${L(22)}`, L(24)]
const tail = L(26)
const anchors = ['Through this socially-engaged', 'He has formerly served', 'Azaz’s expertise', 'Beyond research and policy', 'As a geopolitical analyst']
let rest = tail
for (const a of anchors.slice(1)) {
  const i = rest.indexOf(a)
  en.push(rest.slice(0, i).trim())
  rest = rest.slice(i)
}
en.push(rest.trim(), L(28))

writeFileSync('src/data/bio.json', JSON.stringify({ bn, en }, null, 2))
console.log('bn', bn.length, 'en', en.length)
