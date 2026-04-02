<template>
  <div class="form">
    <input
      v-model="title"
      placeholder="Нова задача..."
      @keyup.enter="addTask"
    />
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
      if (title.value.trim().length < 3) {
        alert('Мінімум 3 символи')
        return
      }

      store.addTask(title.value)
      title.value = ''
    }

    return { title, addTask }
  }
}
</script>

<style>
.form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}

.form input {
  flex: 1;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid #ccc;
}

.form button {
  padding: 10px 15px;
  border: none;
  border-radius: 10px;
  background: #42b983;
  color: white;
  cursor: pointer;
}
</style>