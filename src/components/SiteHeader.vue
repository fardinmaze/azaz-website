<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import { lang, t, toggleLang } from '../i18n'

const route = useRoute()
const open = ref(false)
watch(() => route.path, () => { open.value = false })

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
      <router-link to="/" class="pg-brand">{{ t('name') }}</router-link>
      <button class="pg-burger" type="button" :class="{ open }" :aria-expanded="open" aria-controls="pg-menu" :aria-label="t('menu')" @click="open = !open">
        <span></span><span></span><span></span>
      </button>
      <div id="pg-menu" class="pg-menu" :class="{ open }">
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
    </div>
  </header>
</template>
