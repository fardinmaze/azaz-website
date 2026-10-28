<script setup>
import { t } from '../i18n'
import items from '../data/items.json'
import PageHero from '../components/PageHero.vue'
import SectionHead from '../components/SectionHead.vue'
import WideCard from '../components/WideCard.vue'
</script>

<template>
  <PageHero :kicker="t('nav.research')" :title="t('pubsTitle')" :lead="t('pubsLead')" tone="green" lead-large />
  <div class="wgrid">
    <WideCard v-for="i in items.publications" :key="i.title" :item="i" />
  </div>
  <SectionHead :title="t('resourcesTitle')" :lead="t('resourcesLead')" />
  <div class="wgrid">
    <WideCard v-for="i in items.resources" :key="i.title" :item="i" />
  </div>
</template>
