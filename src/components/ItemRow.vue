<template>
  <div class="task" :class="{ done: item.done }">
    <div class="task-info">
      <span class="title">{{ item.title }}</span>
      <span class="status">
        {{ item.done ? "✔ Виконано" : "❌ Не виконано" }}
      </span>
    </div>

    <div class="actions">
      <button class="toggle" @click="$emit('toggle-item', item.id)">
        🔄
      </button>

      <button class="delete" @click="$emit('delete-item', item.id)">
        🗑
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object
  }
}
</script>

<style scoped>
.task {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f4f6f8;
  padding: 10px 15px;
  margin: 10px 0;
  border-radius: 10px;
  transition: 0.3s;
}

.task:hover {
  transform: scale(1.02);
}

.done {
  text-decoration: line-through;
  opacity: 0.6;
}

.task-info {
  display: flex;
  flex-direction: column;
}

.title {
  font-weight: bold;
}

.status {
  font-size: 12px;
  color: gray;
}

.actions button {
  margin-left: 5px;
  border: none;
  padding: 5px 8px;
  border-radius: 6px;
  cursor: pointer;
}

.toggle {
  background: #4caf50;
  color: white;
}

.delete {
  background: #f44336;
  color: white;
}
</style>