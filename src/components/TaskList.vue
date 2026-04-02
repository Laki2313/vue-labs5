<template>
  <div>
    <h2>Список задач</h2>

    <div v-for="task in store.tasks" :key="task.id" class="task">
      <div>
        <p :class="{ done: task.done }">{{ task.title }}</p>
        <small>
          {{ task.done ? '✔ Виконано' : '❌ Не виконано' }}
        </small>
      </div>

      <div class="buttons">
        <button class="doneBtn" @click="store.toggleTask(task.id)">🔄</button>
        <button class="deleteBtn" @click="store.removeTask(task.id)">🗑</button>
      </div>
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
h2 {
  margin-bottom: 15px;
}

.task {
  background: #e5e7eb;
  padding: 15px;
  border-radius: 12px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.done {
  text-decoration: line-through;
  color: gray;
}

.buttons button {
  margin-left: 5px;
  border: none;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
}

.doneBtn {
  background: #86efac;
}

.deleteBtn {
  background: #fca5a5;
}
</style>