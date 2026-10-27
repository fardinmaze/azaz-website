<script setup>
import { imgUrl, t } from '../i18n'

defineProps({
  item: { type: Object, required: true },
  action: { type: String, default: 'open' },
  portrait: { type: Boolean, default: true },
})
</script>

<template>
  <article class="card" :lang="item.lang">
    <div class="cover" :class="{ portrait }">
      <img v-if="item.image" :src="imgUrl(item.image)" :alt="item.title" loading="lazy" />
      <div v-else class="cover-ph" aria-hidden="true">▶</div>
    </div>
    <div class="body">
      <p v-if="item.kind || item.outlet" class="kicker">{{ item.kind || item.outlet }}</p>
      <h3>{{ item.title }}</h3>
      <p v-if="item.summary" class="summary">{{ item.summary }}</p>
      <p v-if="item.cite" class="cite">{{ item.cite }}</p>
      <p v-if="item.note && item.note !== 'bn-ongoing'" class="cite">{{ item.note }}</p>
      <p v-if="item.note === 'bn-ongoing'" class="kicker">{{ t('ongoing') }}</p>
      <a v-if="item.url" :href="item.url" target="_blank" rel="noopener" class="link">{{ t(action) }} →</a>
    </div>
  </article>
</template>
