<script setup>
import { t } from '../i18n'
import items from '../data/items.json'
import PageHero from '../components/PageHero.vue'
import ItemCard from '../components/ItemCard.vue'
</script>

<template>
  <PageHero :kicker="t('nav.books')" :title="t('booksTitle')" :lead="t('booksLead')" tone="light" />
  <div class="pg-grid three books">
    <ItemCard v-for="i in items.books" :key="i.title" :item="{ ...i, lang: 'bn' }" full />
  </div>
</template>
