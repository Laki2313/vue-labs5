<template>
  <div class="app">
    <h1>Task Manager (Pinia)</h1>

    <TaskList />
  </div>
</template>

<script>
import TaskList from './components/TaskList.vue'

export default {
  components: {
    TaskList
  }
}
</script>