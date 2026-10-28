import { ref, watchEffect } from 'vue'

const stored = (() => {
  try { return localStorage.getItem('azaz-lang') } catch { return null }
})()

export const lang = ref(stored === 'en' ? 'en' : 'bn')

watchEffect(() => {
  document.documentElement.lang = lang.value
  try { localStorage.setItem('azaz-lang', lang.value) } catch {}
})

const dict = {
  en: {
    name: 'Mohammad Azaz',
    nav: { home: 'Home', about: 'About', research: 'Research', books: 'Books', media: 'Media & Writing' },
    tagline: 'Researcher · Urban policy advocate · Environmental organizer',
    heroLead: 'Co-producing fair and sustainable cities, rivers and deltas.',
    readBio: 'Read the full profile',
    seeResearch: 'Explore research',
    founder: 'Founder, River and Delta Research Centre (RDRC)',
    aboutTitle: 'About',
    resourcesTitle: 'Key resources',
    resourcesLead: 'Reference documents on delta governance and transboundary water law.',
    pubsTitle: 'Publications & reports',
    pubsLead: 'Peer-reviewed papers, field reports and the Obobahika river journal.',
    booksTitle: 'Books',
    booksLead: 'Long-form research on the liberation war and the politics of water.',
    videosTitle: 'Explainers & talks',
    videosLead: 'Short videos on rivers, barrages and South Asian water diplomacy.',
    articlesTitle: 'In the press',
    articlesLead: 'Opinion and analysis on cities, rivers and climate.',
    watch: 'Watch',
    read: 'Read',
    open: 'Open',
    readMore: 'Read More',
    ongoing: 'Ongoing research',
    homeHighlights: 'Selected work',
    themesTitle: 'Themes',
    latestPaper: 'Latest paper',
    footer: 'Mohammad Azaz. Researcher and writer, Dhaka, Bangladesh.',
    switchTo: 'বাংলা',
    menu: 'Main menu',
    search: 'Search here',
    pubsShort: 'Publications',
    newsMedia: 'News Media',
    talksTitle: 'Talks in Press  Media',
    privacy: 'Privacy Terms',
    contact: 'Contact',
    faq: 'FAQ',
  },
  bn: {
    name: 'মোহাম্মদ এজাজ',
    nav: { home: 'হোম', about: 'পরিচিতি', research: 'গবেষণা', books: 'বই', media: 'মিডিয়া ও লেখা' },
    tagline: 'গবেষক · নগর নীতি বিশ্লেষক · পরিবেশ সংগঠক',
    heroLead: 'ন্যায্য ও টেকসই নগর, নদী এবং ব-দ্বীপ গড়ার লক্ষ্যে।',
    readBio: 'পূর্ণ পরিচিতি পড়ুন',
    seeResearch: 'গবেষণা দেখুন',
    founder: 'প্রতিষ্ঠাতা, রিভার অ্যান্ড ডেল্টা রিসার্চ সেন্টার (আরডিআরসি)',
    aboutTitle: 'পরিচিতি',
    resourcesTitle: 'গুরুত্বপূর্ণ রেফারেন্স',
    resourcesLead: 'ব-দ্বীপ ব্যবস্থাপনা ও আন্তঃসীমান্ত পানি আইন বিষয়ক নথি।',
    pubsTitle: 'প্রকাশনা ও প্রতিবেদন',
    pubsLead: 'গবেষণাপত্র, মাঠ প্রতিবেদন এবং অববাহিকা জার্নাল।',
    booksTitle: 'বই',
    booksLead: 'মুক্তিযুদ্ধ ও পানি রাজনীতি নিয়ে গবেষণাধর্মী বই।',
    videosTitle: 'এক্সপ্লেইনার ও আলোচনা',
    videosLead: 'নদী, ব্যারেজ ও দক্ষিণ এশীয় পানি কূটনীতি নিয়ে ভিডিও।',
    articlesTitle: 'গণমাধ্যমে',
    articlesLead: 'নগর, নদী ও জলবায়ু নিয়ে মতামত ও বিশ্লেষণ।',
    watch: 'দেখুন',
    read: 'পড়ুন',
    open: 'খুলুন',
    readMore: 'আরও পড়ুন',
    ongoing: 'চলমান গবেষণা',
    homeHighlights: 'নির্বাচিত কাজ',
    themesTitle: 'বিষয়',
    latestPaper: 'সর্বশেষ গবেষণাপত্র',
    footer: 'মোহাম্মদ এজাজ। গবেষক ও লেখক, ঢাকা, বাংলাদেশ।',
    switchTo: 'English',
    menu: 'প্রধান মেনু',
    search: 'এখানে খুঁজুন',
    pubsShort: 'প্রকাশনা',
    newsMedia: 'সংবাদমাধ্যম',
    talksTitle: 'আলোচনা ও গণমাধ্যম',
    privacy: 'গোপনীয়তা ও শর্তাবলি',
    contact: 'যোগাযোগ',
    faq: 'প্রশ্নোত্তর',
  },
}

export const t = (key) => key.split('.').reduce((o, k) => o?.[k], dict[lang.value]) ?? key
export const toggleLang = () => { lang.value = lang.value === 'bn' ? 'en' : 'bn' }

const imgs = import.meta.glob('./assets/img/*', { eager: true, import: 'default' })
export const imgUrl = (name) => imgs[`./assets/img/${name}`]
