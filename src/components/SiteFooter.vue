<script setup>
import { t } from '../i18n'
import { socials } from '../data/socials'

const asset = (name) => new URL(`../assets/design/${name}`, import.meta.url).href
</script>

<template>
  <footer class="pg-foot">
    <div class="pg-foot-row">
      <div class="pg-social">
        <template v-for="(s, i) in socials" :key="s.name">
          <img v-if="i" :src="asset('star.svg')" alt="" width="12" height="12" />
          <a :href="s.href" :aria-label="s.name"><img :src="asset(s.icon)" alt="" :width="s.w" height="24" :class="{ flip: s.flip }" /></a>
        </template>
      </div>
      <a href="#" class="pg-foot-link">{{ t('privacy') }}</a>
      <a href="#" class="pg-foot-link">{{ t('contact') }}</a>
      <a href="#" class="pg-foot-link">{{ t('faq') }}</a>
    </div>
    <p class="pg-copy">{{ t('footer') }} © {{ new Date().getFullYear() }}</p>
  </footer>
</template>
