<script setup>
import { lang, t } from '../i18n'
import bio from '../data/bio.json'
</script>

<template>
  <section class="wrap block prose-wrap">
    <p class="kicker">{{ t('founder') }}</p>
    <h1>{{ t('aboutTitle') }}</h1>
    <div class="prose" :lang="lang">
      <p v-for="(p, i) in bio[lang]" :key="`${lang}${i}`">{{ p }}</p>
    </div>
  </section>
</template>
