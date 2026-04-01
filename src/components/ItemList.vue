<template>
  <div>
    <h2>Список задач</h2>

    <ItemRow 
      v-for="item in items"
      :key="item.id"
      :item="item"
      @delete-item="$emit('delete-item', $event)"
      @toggle-item="$emit('toggle-item', $event)"
    />
    
  </div>
</template>

<script>
import ItemRow from "./ItemRow.vue"

export default {
  props: {
    items: Array
  },
  components: {
    ItemRow
  }
}
</script>