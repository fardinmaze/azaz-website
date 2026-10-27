<script setup>
import { t } from '../i18n'
</script>

<template>
  <footer class="site-footer">
    <div class="wrap">
      <p>{{ t('footer') }}</p>
      <p class="muted">© {{ new Date().getFullYear() }}</p>
    </div>
  </footer>
</template>
