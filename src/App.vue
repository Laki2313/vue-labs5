<template>
  <div class="container">
    <h1>📋 Task Manager</h1>

    <ItemForm @add-item="handleAddItem" />

    <ItemList 
      :items="items"
      @delete-item="deleteItem"
      @toggle-item="toggleItem"
    />
  </div>
</template>

<script>
import ItemList from "./components/ItemList.vue"
import ItemForm from "./components/ItemForm.vue"

export default {
  components: {
    ItemList,
    ItemForm
  },
  data() {
    return {
      items: [
        { id: 1, title: "Зробити лабораторну", done: false },
        { id: 2, title: "Вивчити Vue", done: true }
      ]
    }
  },
  methods: {
    handleAddItem(newItem) {
      this.items.push(newItem)
    },
    deleteItem(id) {
      this.items = this.items.filter(item => item.id !== id)
    },
    toggleItem(id) {
      const item = this.items.find(item => item.id === id)
      if (item) item.done = !item.done
    }
  }
}
</script>

<style>
body {
  background: #eef2f5;
}

.container {
  max-width: 600px;
  margin: 50px auto;
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 5px 20px rgba(0,0,0,0.1);
}

h1 {
  text-align: center;
}
</style>