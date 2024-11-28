<template>
  <div class="card-grid">
    <slot></slot>
  </div>
</template>

<style scoped>
.card-grid {
  display: grid;
  grid-row-gap: 8px;
}

@media (min-width: 640px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 16px;
  }
}
</style>
