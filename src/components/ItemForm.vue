<template>
  <div class="form">
    <input 
      v-model="newItem"
      placeholder="Нова задача..."
    />

    <button @click="addItem">Додати</button>

    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItem: "",
      error: ""
    }
  },
  methods: {
    addItem() {
      if (this.newItem.trim() === "") {
        this.error = "Поле не може бути порожнім"
        return
      }

      if (this.newItem.length < 3) {
        this.error = "Мінімум 3 символи"
        return
      }

      this.error = ""

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

<style scoped>
.form {
  margin-bottom: 20px;
}

input {
  padding: 10px;
  width: 60%;
  border-radius: 8px;
  border: 1px solid #ccc;
}

button {
  margin-left: 10px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background: #2196f3;
  color: white;
  cursor: pointer;
}

button:hover {
  background: #1976d2;
}

.error {
  color: red;
  margin-top: 5px;
}
</style>