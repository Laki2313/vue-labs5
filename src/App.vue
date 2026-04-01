<template>
  <div>
    <h1>Task Manager</h1>

    <ItemList :items="items" />
  </div>
</template>

<script>
import ItemList from "./components/ItemList.vue"

export default {
  components: {
    ItemList
  },
  data() {
    return {
      items: [
        { id: 1, title: "Зробити лабораторну", done: true },
        { id: 2, title: "Вивчити Vue", done: true },
        { id: 3, title: "Відпочити", done: false }
      ]
    }
  }
}
</script>
