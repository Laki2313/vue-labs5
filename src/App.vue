<template>
  <div class="app">
    <h1>Task Manager (Pinia)</h1>

    <TaskForm />
    <TaskList />
  </div>
</template>

<script>
import TaskForm from './components/TaskForm.vue'
import TaskList from './components/TaskList.vue'

export default {
  components: {
    TaskForm,
    TaskList
  }
}
</script>

<style>
.app {
  max-width: 500px;
  margin: auto;
  text-align: center;
}
</style>