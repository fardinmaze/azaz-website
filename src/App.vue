<script setup>
import SiteHeader from './components/SiteHeader.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>

<template>
  <SiteHeader v-if="$route.path !== '/'" />
  <main :class="{ 'pg-main': $route.path !== '/' }"><router-view /></main>
  <SiteFooter v-if="$route.path !== '/'" />
</template>
