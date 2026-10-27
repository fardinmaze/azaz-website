<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { lang, t, toggleLang } from '../i18n'
import bio from '../data/bio.json'
import items from '../data/items.json'
import { socials } from '../data/socials'

const asset = (name) => new URL(`../assets/design/${name}`, import.meta.url).href

// Desktop: scale the 1440x1080 design uniformly to fit the height; extra width goes to the columns, media keeps its design size.
// Below 900px the stacked, scrolling layout is used instead.
const fit = ref(false)
const scale = ref(1)
const width = ref(1440)
const measure = () => {
  fit.value = window.innerWidth >= 900
  scale.value = Math.min(window.innerWidth / 1440, window.innerHeight / 1080)
  width.value = window.innerWidth / scale.value // columns stretch so the page runs edge to edge
  document.documentElement.classList.toggle('ld-noscroll', fit.value)
}
measure()
onMounted(() => window.addEventListener('resize', measure))
onUnmounted(() => {
  window.removeEventListener('resize', measure)
  document.documentElement.classList.remove('ld-noscroll')
})

const intro = computed(() => bio[lang.value][0])

const links = [
  ['home', '/'],
  ['about', '/about'],
  ['research', '/research'],
  ['books', '/books'],
  ['media', '/media'],
]

const themes = [
  { en: 'Rivers & Wetlands', bn: 'নদী ও জলাভূমি', to: '/research' },
  { en: 'Transboundary Water', bn: 'আন্তঃসীমান্ত নদী', to: '/books' },
  { en: 'Fair Cities', bn: 'ন্যায্য নগর', to: '/research' },
  { en: 'Liberation War', bn: 'মুক্তিযুদ্ধ', to: '/books' },
  { en: 'Fishing Communities', bn: 'জেলে জনগোষ্ঠী', to: '/research' },
  { en: 'Biodiversity', bn: 'জীববৈচিত্র্য', to: '/research' },
  { en: 'Climate & Policy', bn: 'জলবায়ু ও নীতি', to: '/media' },
  { en: 'Youth Networks', bn: 'যুব নেতৃত্ব', to: '/about' },
]

const pubImgs = [
  { src: 'book-image7.webp', cls: 'shadow' },
  { src: 'pub-image16.webp', cls: 'bordered' },
  { src: 'pub-image17.webp', crop: 'height: 128.38%; left: 0; top: -0.02%' },
  { src: 'pub-image18.webp', crop: 'height: 154.67%; left: -0.23%; top: -54.99%' },
  { src: 'pub-image13.webp', cls: 'bordered shadow' },
]

// back-to-front stack; each cover maps to its entry on the Books page
const stack = [
  { cls: 'b3', img: 'book-2.webp', book: items.books[0] },
  { cls: 'b2', img: 'book-6.webp', book: items.books[2] },
  { cls: 'b1', img: 'book-5.webp', book: items.books[1] },
]

const ticker = [...items.articles, ...items.videos.slice(0, 2)].map((i) => i.title)
</script>

<template>
  <div class="ld-stage" :class="{ fit }">
  <div class="ld" :class="{ 'ld--fit': fit }" :style="fit ? { width: `${width}px`, transform: `scale(${scale})` } : null">
    <section class="ld-top">
      <div class="ld-cover">
        <img :src="asset('portrait-cover.webp')" alt="" />
        <p class="ld-name">{{ t('name') }}</p>
      </div>

      <div class="ld-main">
        <div class="ld-bar">
          <nav class="ld-nav" :aria-label="t('menu')">
            <div class="ld-links">
              <router-link v-for="[k, to] in links" :key="k" :to="to" :class="{ 'is-home': k === 'home' }">{{ t(`nav.${k}`) }}</router-link>
            </div>
            <button class="ld-lang" type="button" :aria-label="t('switchTo')" @click="toggleLang">
              <span :class="{ on: lang === 'en' }">En</span><span class="sep">/</span><span :class="{ on: lang === 'bn' }">Bn</span>
            </button>
          </nav>
          <label class="ld-search">
            <img :src="asset('search.svg')" alt="" width="18" height="18" />
            <input type="search" :placeholder="t('search')" :aria-label="t('search')" />
          </label>
        </div>

        <div class="ld-hero">
          <div class="ld-hero-left">
            <div class="ld-headline">
              <p class="ld-tagline">{{ t('tagline') }}</p>
              <h1>{{ t('heroLead') }}</h1>
            </div>
            <div class="ld-bio">
              <p>{{ intro }}</p>
              <router-link to="/about" class="ld-btn">
                {{ t('readBio') }}
              </router-link>
            </div>
          </div>

          <ul class="ld-themes" :aria-label="t('themesTitle')">
            <li v-for="th in themes" :key="th.en">
              <router-link :to="th.to">
                <span>{{ th[lang] }}</span>
                <span class="arr" aria-hidden="true"></span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <div class="ld-ticker" aria-label="Recent writing and talks">
      <div class="ld-ticker-track">
        <template v-for="(x, i) in [...ticker, ...ticker]" :key="i">
          <span>{{ x }}</span>
          <img :src="asset('star.svg')" alt="" width="12" height="12" />
        </template>
      </div>
    </div>

    <section class="ld-bottom">
      <router-link to="/research" class="ld-pubs">
        <div class="ld-pubs-in">
        <div class="ld-pubs-imgs" aria-hidden="true">
          <div class="ld-pubs-track">
            <template v-for="(im, i) in [...pubImgs, ...pubImgs]" :key="i">
              <span v-if="im.crop" class="bordered crop"><img :src="asset(im.src)" alt="" :style="im.crop" /></span>
              <img v-else :class="im.cls" :src="asset(im.src)" alt="" />
            </template>
          </div>
        </div>
        <div class="ld-pubs-text">
          <p>{{ t('pubsShort') }}</p>
          <p>{{ t('nav.research') }}</p>
          <p>{{ t('newsMedia') }}</p>
          <img :src="asset('arrow-right-green.svg')" alt="" width="24" height="24" />
        </div>
        </div>
      </router-link>

      <router-link to="/books" class="ld-books">
        <div class="ld-books-head">
          <p>{{ t('nav.books') }}</p>
          <img :src="asset('arrow-right-red.svg')" alt="" width="24" height="24" />
        </div>
        <div class="ld-books-stack">
          <div v-for="b in stack" :key="b.cls" class="bk" :class="b.cls" tabindex="0">
            <img :src="asset(b.img)" :alt="b.book.title" />
            <div class="bk-info" lang="bn">
              <h3>{{ b.book.title }}</h3>
              <p>{{ b.book.summary }}</p>
            </div>
          </div>
        </div>
      </router-link>

      <router-link to="/media" class="ld-talks">
        <p>{{ t('talksTitle') }}</p>
        <video class="ld-video" :src="asset('gemini_generated_video_84b8b154.mp4')" autoplay muted loop playsinline aria-hidden="true"></video>
      </router-link>

      <footer class="ld-foot">
        <div class="ld-social">
          <template v-for="(s, i) in socials" :key="s.name">
            <img v-if="i" :src="asset('star.svg')" alt="" width="12" height="12" />
            <a href="#" :aria-label="s.name"><img :src="asset(s.icon)" alt="" :width="s.w" height="24" :class="{ flip: s.flip }" /></a>
          </template>
        </div>
        <a href="#" class="ld-foot-link">{{ t('privacy') }}</a>
        <a href="#" class="ld-foot-link">{{ t('contact') }}</a>
        <a href="#" class="ld-foot-link">{{ t('faq') }}</a>
      </footer>
    </section>
  </div>
  </div>
</template>
