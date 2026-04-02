<template>
  <div class="form">
    <input v-model="title" placeholder="Введіть задачу..." />
    <button @click="addTask">Додати</button>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useTaskStore } from '../stores/taskStore'

export default {
  setup() {
    const title = ref('')
    const store = useTaskStore()

    const addTask = () => {
      if (title.value.trim().length < 3) return

      store.addTask(title.value)
      title.value = ''
    }

    return { title, addTask }
  }
}
</script>

<style>
.form {
  margin-bottom: 20px;
}

input {
  padding: 5px;
  margin-right: 10px;
}
</style>