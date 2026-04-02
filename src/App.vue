<template>
  <div class="app">
    <h1>Task Manager (Pinia)</h1>

    <TaskForm />
    <TaskStats />
    <TaskList />
  </div>
</template>

<script>
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'
import TaskStats from './components/TaskStats.vue'

export default {
  components: {
    TaskForm,
    TaskList,
    TaskStats
  }
}
</script>