<script setup>
defineProps({
  kicker: String,
  title: String,
  lead: String,
  tone: { type: String, default: 'yellow' }, // yellow | green | light | blue
})
</script>

<template>
  <section class="pg-hero">
    <div class="pg-hero-main" :class="`tone-${tone}`">
      <p v-if="kicker" class="pg-kicker">{{ kicker }}</p>
      <h1>{{ title }}</h1>
    </div>
    <div class="pg-hero-side">
      <p v-if="lead">{{ lead }}</p>
    </div>
  </section>
</template>
