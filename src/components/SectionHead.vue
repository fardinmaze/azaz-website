<script setup>
defineProps({ title: String, lead: String })
</script>

<template>
  <div class="section-head">
    <h2>{{ title }}</h2>
    <p v-if="lead" class="lead">{{ lead }}</p>
  </div>
</template>
