// Builds src/data/items.json from docs/content-extracted.txt. Images map by docx order.
import { readFileSync, writeFileSync } from 'node:fs'

const lines = readFileSync('docs/content-extracted.txt', 'utf8').split(/\r?\n/)
const L = (n) => lines[n - 1].trim()
const J = (...ns) => ns.map(L).filter(Boolean).join(' ')
const img = (n) => `image${n}.${n === 21 ? 'jpg' : 'png'}`

const resources = [
  { title: L(36), summary: J(38, 39), url: L(41), image: img(12), lang: 'en' },
  { title: L(43), summary: L(46), url: L(47), image: img(5), lang: 'en' },
]

const videos = [
  { title: L(63), summary: L(65), url: L(66) },
  { title: L(67), summary: J(69, 70), url: L(71) },
  { title: L(73), summary: L(75), url: L(76) },
  // source doc labels this "পর্ব ১" but its summary says third instalment
  { title: L(78).replace('পর্ব ১', 'পর্ব ৩'), summary: L(80), url: L(82) },
]

const publications = [
  { title: L(89), summary: L(91), cite: L(92), url: 'https://doi.org/10.1177/25148486241254922', image: img(13), lang: 'en', kind: 'Journal article' },
  { title: L(93), summary: L(95), cite: L(96), url: 'https://doi.org/10.1080/13549839.2026.2711376', image: img(1), lang: 'en', kind: 'Journal article' },
  { title: L(98), summary: L(100), cite: L(101).replace(/https?:\/\/\S+$/, '').trim(), url: 'https://storymaps.arcgis.com/stories/df790f8762994dddac329274befb6768', image: img(20), lang: 'en', kind: 'StoryMap' },
  { title: L(102), summary: L(104), url: L(105), image: img(2), lang: 'en', kind: 'Report' },
  { title: L(107), summary: L(109), url: L(111), image: img(15), lang: 'en', kind: 'Report' },
  { title: L(113), summary: L(115), image: img(17), lang: 'en', kind: 'Book chapter', note: 'In Urban Wetlands in Peril (eds. Islam, Akther & Islam)' },
  { title: L(117), summary: L(119), url: L(120), image: img(3), lang: 'bn', kind: 'প্রকাশনা' },
  { title: L(122), summary: J(124, 126, 128), url: L(130), image: img(16), lang: 'en', kind: 'Biodiversity report' },
  { title: L(131), summary: L(133), url: L(134), image: img(4), lang: 'en', kind: 'Biodiversity report' },
  { title: L(135), summary: L(137), url: L(138), image: img(11), lang: 'bn', kind: 'অববাহিকা' },
  { title: L(140), summary: L(142), url: L(143), image: img(9), lang: 'bn', kind: 'অববাহিকা' },
]

const books = [
  { title: L(153), summary: L(155), image: img(7) },
  { title: L(157), summary: L(159), image: img(21) },
  { title: L(161), summary: L(163), image: img(22), note: 'bn-ongoing' },
]

const articles = [
  { title: 'As urbanisation booms, could Bangladesh benefit from a dedicated Cities Ministry?', outlet: 'The Business Standard', image: img(8), url: 'https://www.tbsnews.net/features/panorama/urbanisation-booms-could-bangladesh-benefit-dedicated-cities-ministry-1028511', lang: 'en' },
  { title: 'Eviction drives around rivers are not sustainable', outlet: 'The Business Standard', image: img(10), url: 'https://www.tbsnews.net/analysis/eviction-drives-around-rivers-are-not-sustainable', lang: 'en' },
  { title: 'Granting rivers legal status can redefine our relationship with nature', outlet: 'The Daily Star', image: img(14), url: 'https://www.thedailystar.net/opinion/views/news/granting-rivers-legal-status-can-redefine-our-relationship-nature-3848591', lang: 'en' },
  { title: 'COP28: the 1.5°C threshold', outlet: 'New Age', image: img(19), url: 'https://www.newagebd.net/article/219825/cop28-the-15c-threshold', lang: 'en' },
  { title: L(200).split(' | ')[0], outlet: 'বণিক বার্তা', image: img(6), url: 'https://www.bonikbarta.com/editorial/iQImWTyqp4TnCGGn', lang: 'bn' },
]

writeFileSync('src/data/items.json', JSON.stringify({ resources, videos, publications, books, articles }, null, 2))
console.log(Object.fromEntries(Object.entries({ resources, videos, publications, books, articles }).map(([k, v]) => [k, v.length])))
