<script setup>
import { ref } from 'vue'
import { t, toggleLang } from '../i18n'

const open = ref(false)
const links = [
  ['home', '/'],
  ['about', '/about'],
  ['research', '/research'],
  ['books', '/books'],
  ['media', '/media'],
]
</script>

<template>
  <header class="site-header">
    <div class="wrap bar">
      <router-link to="/" class="brand" @click="open = false">{{ t('name') }}</router-link>
      <button class="menu-btn" :aria-expanded="open" aria-label="Menu" @click="open = !open">
        <span /><span />
      </button>
      <nav :class="{ open }">
        <router-link v-for="[k, to] in links" :key="k" :to="to" @click="open = false">{{ t(`nav.${k}`) }}</router-link>
        <button class="lang" @click="toggleLang">{{ t('switchTo') }}</button>
      </nav>
    </div>
  </header>
</template>
