<template>
  <div class="stats">
    <h3>Статистика</h3>

    <p>Всього: {{ store.totalCount }}</p>
    <p>Виконано: {{ store.doneCount }}</p>
    <p>Активні: {{ store.activeCount }}</p>

    <div class="filters">
      <button 
        :class="{ active: store.filter === 'all' }"
        @click="store.setFilter('all')"
      >
        Всі
      </button>

      <button 
        :class="{ active: store.filter === 'active' }"
        @click="store.setFilter('active')"
      >
        Активні
      </button>

      <button 
        :class="{ active: store.filter === 'done' }"
        @click="store.setFilter('done')"
      >
        Виконані
      </button>
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

<style scoped>
.stats {
  margin-bottom: 20px;
}

.filters button {
  margin-right: 10px;
  padding: 6px 10px;
  border: none;
  border-radius: 6px;
  background: #ddd;
  cursor: pointer;
}

.filters button.active {
  background: #3498db;
  color: white;
}
</style>