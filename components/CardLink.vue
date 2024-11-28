<script setup lang="ts">
interface Props {
  title: string;
  description?: string;
  href: string;
}

const props = defineProps<Props>();
</script>

<template>
  <div class="pager">
    <a class="pager-link next" :href="href">
      <span class="title" v-html="title"></span>
      <span class="desc" v-html="description"></span>
    </a>
  </div>
</template>

<style scoped>
.pager-link {
  display: block;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  padding: 24px;
  width: 100%;
  height: 100%;
  transition: border-color 0.25s;
  text-decoration: none;
}

.pager-link:hover {
  border-color: var(--vp-c-brand-1);
}

.desc {
  display: block;
  line-height: 20px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  margin-top: 6px;
}

.title {
  display: block;
  line-height: 24px;
  font-size: 16px;
  font-weight: 500;
  color: var(--vp-c-brand-1);
  transition: color 0.25s;
}
</style>
