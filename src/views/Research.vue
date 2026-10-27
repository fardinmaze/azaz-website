<script setup>
import { t } from '../i18n'
import items from '../data/items.json'
import SectionHead from '../components/SectionHead.vue'
import ItemCard from '../components/ItemCard.vue'
</script>

<template>
  <section class="wrap block">
    <SectionHead :title="t('pubsTitle')" :lead="t('pubsLead')" />
    <div class="grid three">
      <ItemCard v-for="i in items.publications" :key="i.title" :item="i" />
    </div>
  </section>
  <section class="wrap block">
    <SectionHead :title="t('resourcesTitle')" :lead="t('resourcesLead')" />
    <div class="grid three">
      <ItemCard v-for="i in items.resources" :key="i.title" :item="i" />
    </div>
  </section>
</template>
