<script setup>
import { lang, t } from '../i18n'
import bio from '../data/bio.json'
import PageHero from '../components/PageHero.vue'
</script>

<template>
  <PageHero :kicker="t('founder')" :title="t('aboutTitle')" tone="yellow" video="/about hero.mp4" />
  <section class="about">
    <div class="about-text" :lang="lang">
      <p v-for="(p, i) in bio[lang]" :key="`${lang}${i}`">{{ p }}</p>
    </div>
  </section>
</template>
