<script setup>
import { lang, t } from '../i18n'
import bio from '../data/bio.json'
import PageHero from '../components/PageHero.vue'

const portrait = new URL('../assets/design/portrait-cover.webp', import.meta.url).href
</script>

<template>
  <PageHero :kicker="t('founder')" :title="t('aboutTitle')" tone="yellow" />
  <section class="about">
    <div class="about-photo">
      <img :src="portrait" alt="" />
    </div>
    <div class="about-text" :lang="lang">
      <p v-for="(p, i) in bio[lang]" :key="`${lang}${i}`">{{ p }}</p>
    </div>
  </section>
</template>
