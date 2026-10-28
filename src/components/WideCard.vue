<script setup>
import { imgUrl, t } from '../i18n'

defineProps({ item: { type: Object, required: true } })
</script>

<template>
  <article class="wcard" :lang="item.lang">
    <div class="wcard-row">
      <div class="wcard-img">
        <img v-if="item.image" :src="imgUrl(item.image)" :alt="item.title" loading="lazy" />
      </div>
      <div class="wcard-text">
        <div class="wcard-head">
          <p v-if="item.kind || item.outlet">{{ item.kind || item.outlet }}</p>
          <h3>{{ item.title }}</h3>
        </div>
        <div class="wcard-body">
          <p v-if="item.summary">{{ item.summary }}</p>
          <p v-if="item.cite" class="cite">{{ item.cite }}</p>
          <p v-if="item.note && item.note !== 'bn-ongoing'" class="cite">{{ item.note }}</p>
        </div>
      </div>
    </div>
    <a v-if="item.url" :href="item.url" target="_blank" rel="noopener" class="wcard-btn">
      <span>{{ t('readMore') }}</span>
      <i class="ico ico-arrow" aria-hidden="true"></i>
    </a>
  </article>
</template>
