<template>
  <div>
    <h2>Додати задачу</h2>

    <input 
      v-model="newItem"
      placeholder="Введіть задачу"
    />

    <button @click="addItem">Додати</button>

    <p v-if="error" style="color: red;">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: "ItemForm",
  data() {
    return {
      newItem: "",
      error: ""
    }
  },
  methods: {
    addItem() {
      // валідація
      if (this.newItem.trim() === "") {
        this.error = "Поле не може бути порожнім"
        return
      }

      if (this.newItem.length < 3) {
        this.error = "Мінімум 3 символи"
        return
      }

  
      this.error = ""

      // emit події
      this.$emit("add-item", {
        id: Date.now(),
        title: this.newItem,
        done: false
      })


      this.newItem = ""
    }
  }
}
</script>