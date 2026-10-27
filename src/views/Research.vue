<script setup>
import { t } from '../i18n'
import items from '../data/items.json'
import PageHero from '../components/PageHero.vue'
import SectionHead from '../components/SectionHead.vue'
import ItemCard from '../components/ItemCard.vue'
</script>

<template>
  <PageHero :kicker="t('nav.research')" :title="t('pubsTitle')" :lead="t('pubsLead')" tone="green" />
  <div class="pg-grid three">
    <ItemCard v-for="i in items.publications" :key="i.title" :item="i" :portrait="false" />
  </div>
  <SectionHead :title="t('resourcesTitle')" :lead="t('resourcesLead')" />
  <div class="pg-grid three">
    <ItemCard v-for="i in items.resources" :key="i.title" :item="i" :portrait="false" />
  </div>
</template>
