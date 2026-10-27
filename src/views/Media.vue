<script setup>
import { t } from '../i18n'
import items from '../data/items.json'
import PageHero from '../components/PageHero.vue'
import SectionHead from '../components/SectionHead.vue'
import ItemCard from '../components/ItemCard.vue'
</script>

<template>
  <PageHero :kicker="t('nav.media')" :title="t('videosTitle')" :lead="t('videosLead')" tone="blue" />
  <div class="pg-grid four">
    <ItemCard v-for="i in items.videos" :key="i.url" :item="{ ...i, lang: 'bn' }" action="watch" :portrait="false" />
  </div>
  <SectionHead :title="t('articlesTitle')" :lead="t('articlesLead')" />
  <div class="pg-grid three">
    <ItemCard v-for="i in items.articles" :key="i.url" :item="i" action="read" :portrait="false" />
  </div>
</template>
