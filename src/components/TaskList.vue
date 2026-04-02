<template>
  <div>
    <h2>Список задач</h2>

    <ul>
      <li v-for="task in store.tasks" :key="task.id">
        <span :class="{ done: task.done }">
          {{ task.title }}
        </span>

        <button @click="store.toggleTask(task.id)">✔</button>
        <button @click="store.removeTask(task.id)">❌</button>
      </li>
    </ul>
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
.done {
  text-decoration: line-through;
  color: gray;
}
</style>