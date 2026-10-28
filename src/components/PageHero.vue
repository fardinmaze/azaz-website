<script setup>
defineProps({
  kicker: String,
  title: String,
  lead: String,
  tone: { type: String, default: 'yellow' }, // yellow | green | light | blue
  leadLarge: Boolean, // large light lead on a plain panel (Research design)
  video: String, // optional looping background video covering the whole band
})
</script>

<template>
  <section class="pg-hero" :class="{ 'pg-hero--video': video, 'pg-hero--lead': leadLarge }">
    <video v-if="video" class="pg-hero-video" :src="video" autoplay muted loop playsinline aria-hidden="true"></video>
    <div class="pg-hero-main" :class="`tone-${tone}`">
      <p v-if="kicker" class="pg-kicker">{{ kicker }}</p>
      <h1>{{ title }}</h1>
    </div>
    <div class="pg-hero-side">
      <p v-if="lead">{{ lead }}</p>
    </div>
  </section>
</template>
