<script setup>
import { t } from '../i18n'
import items from '../data/items.json'
import SectionHead from '../components/SectionHead.vue'
import ItemCard from '../components/ItemCard.vue'
</script>

<template>
  <section class="wrap block">
    <SectionHead :title="t('videosTitle')" :lead="t('videosLead')" />
    <div class="grid four">
      <ItemCard v-for="i in items.videos" :key="i.url" :item="{ ...i, lang: 'bn' }" action="watch" :portrait="false" />
    </div>
  </section>
  <section class="wrap block">
    <SectionHead :title="t('articlesTitle')" :lead="t('articlesLead')" />
    <div class="grid three">
      <ItemCard v-for="i in items.articles" :key="i.url" :item="i" action="read" :portrait="false" />
    </div>
  </section>
</template>
