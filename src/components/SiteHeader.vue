<script setup>
import { lang, t, toggleLang } from '../i18n'

const searchIcon = new URL('../assets/design/search.svg', import.meta.url).href

const links = [
  ['home', '/'],
  ['about', '/about'],
  ['research', '/research'],
  ['books', '/books'],
  ['media', '/media'],
]
</script>

<template>
  <header class="pg-head">
    <div class="pg-bar">
      <nav class="pg-links" :aria-label="t('menu')">
        <router-link v-for="[k, to] in links" :key="k" :to="to">{{ t(`nav.${k}`) }}</router-link>
      </nav>
      <button class="pg-lang" type="button" :aria-label="t('switchTo')" @click="toggleLang">
        <span :class="{ on: lang === 'en' }">En</span><span class="sep">/</span><span :class="{ on: lang === 'bn' }">Bn</span>
      </button>
      <label class="pg-search">
        <img :src="searchIcon" alt="" width="18" height="18" />
        <input type="search" :placeholder="t('search')" :aria-label="t('search')" />
      </label>
    </div>
  </header>
</template>
