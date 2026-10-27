<script setup>
import { t } from '../i18n'
import items from '../data/items.json'
import SectionHead from '../components/SectionHead.vue'
import ItemCard from '../components/ItemCard.vue'
</script>

<template>
  <section class="wrap block">
    <SectionHead :title="t('booksTitle')" :lead="t('booksLead')" />
    <div class="grid three">
      <ItemCard v-for="i in items.books" :key="i.title" :item="{ ...i, lang: 'bn' }" />
    </div>
  </section>
</template>
