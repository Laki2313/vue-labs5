<template>
  <div class="container">
    <h1>📋 Task Manager</h1>

    <!-- Форма -->
    <TaskForm />

    <!-- Фільтри -->
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

    <!-- Список -->
    <TaskList />

    <!-- Статистика -->
    <TaskStats />
  </div>
</template>

<script>
import { onMounted } from 'vue'
import { useTaskStore } from './stores/taskStore'

import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'
import TaskStats from './components/TaskStats.vue'

export default {
  components: { TaskForm, TaskList, TaskStats },

  setup() {
    const store = useTaskStore()

    onMounted(() => {
      store.loadFromStorage()
    })

    return { store }
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: Arial;
  background: linear-gradient(to right, #e0eafc, #cfdef3);
}

.container {
  max-width: 700px;
  margin: 50px auto;
  background: #fff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
}

/* 🔹 Фільтри */
.filters {
  margin: 20px 0;
  text-align: center;
}

.filters button {
  margin: 5px;
  padding: 8px 15px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  background: #ddd;
}

.filters .active {
  background: #42b983;
  color: white;
}
</style>