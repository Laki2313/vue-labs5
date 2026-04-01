<template>
  <div>
    <h1>Task Manager</h1>

    <ItemForm @add-item="handleAddItem" />

    <ItemList :items="items" />
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
        { id: 1, title: "Зробити лабораторну", done: true },
        { id: 2, title: "Вивчити Vue", done: true }
      ]
    }
  },
  methods: {
    handleAddItem(newItem) {
      this.items.push(newItem)
    }
  }
}
</script>
