<template>
  <div class="stats">
    <p>Всього: {{ store.totalCount }}</p>
    <p>Виконано: {{ store.doneCount }}</p>
    <p>Активні: {{ store.activeCount }}</p>

    <div class="filters">
      <button @click="store.setFilter('all')">Всі</button>
      <button @click="store.setFilter('active')">Активні</button>
      <button @click="store.setFilter('done')">Виконані</button>
    </div>
  </div>
</template>

<script>
import { useTaskStore } from '../stores/taskStore'

export default {
  setup() {
    const store = useTaskStore()
    return { store }
  }
}
</script>

<style>
.stats {
  margin: 20px 0;
}

.filters button {
  margin: 5px;
}
</style>