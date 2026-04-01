<template>
  <div>
    <p>
      {{ item.title }} — 
      <strong>{{ item.done ? "✔ Виконано" : "❌ Не виконано" }}</strong>
    </p>
  </div>
</template>

<script>
export default {
  name: "ItemRow",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>