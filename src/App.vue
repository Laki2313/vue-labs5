<template>
  <div class="container">
    <h1>Список продуктів</h1>

    <div class="controls">
      <input v-model="newTitle" placeholder="Введіть назву продукту" />

      <select v-model="newCategory">
        <option value="A">Категорія A</option>
        <option value="B">Категорія B</option>
      </select>

      <button class="add-btn" @click="addProduct">
        Додати
      </button>
    </div>

    <ul class="product-list">
      <li
        v-for="p in products"
        :key="p.id"
        :class="['product-item', { highlight: p.category === 'A' }]"
      >
        <div class="product-info">
          <strong>{{ p.title }}</strong>
          <span class="category">{{ p.category }}</span>
        </div>

        <button class="delete-btn" @click="removeProduct(p.id)">
          Видалити
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",

  data() {
    return {
      newTitle: "",
      newCategory: "A",

      products: [
        { id: 1, title: "Ноутбук", category: "A" },
        { id: 2, title: "Мишка", category: "B" },
        { id: 3, title: "Клавіатура", category: "A" }
      ]
    }
  },

  methods: {
    addProduct() {
      if (this.newTitle.trim() === "") return

      const newProduct = {
        id: Date.now(),
        title: this.newTitle,
        category: this.newCategory
      }

      this.products.push(newProduct)
      this.newTitle = ""
    },

    removeProduct(id) {
      this.products = this.products.filter(p => p.id !== id)
    }
  }
}
</script>

<style>
body{
  background:#f4f6f9;
}

.container {
  max-width: 600px;
  margin: 40px auto;
  font-family: Arial, Helvetica, sans-serif;
  background: white;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}

h1{
  text-align:center;
  margin-bottom:20px;
}

.controls{
  display:flex;
  gap:10px;
  margin-bottom:20px;
}

input, select{
  padding:8px;
  border:1px solid #ccc;
  border-radius:6px;
}

.add-btn{
  background:#4CAF50;
  color:white;
  border:none;
  padding:8px 12px;
  border-radius:6px;
  cursor:pointer;
}

.add-btn:hover{
  background:#45a049;
}

.product-list{
  list-style:none;
  padding:0;
}

.product-item{
  display:flex;
  justify-content:space-between;
  align-items:center;
  background:#f8f8f8;
  padding:10px;
  margin-bottom:8px;
  border-radius:6px;
}

.product-info{
  display:flex;
  gap:10px;
}

.category{
  color:#666;
}

.highlight{
  background:#e6ffe6;
}

.delete-btn{
  background:#e74c3c;
  color:white;
  border:none;
  padding:6px 10px;
  border-radius:6px;
  cursor:pointer;
}

.delete-btn:hover{
  background:#c0392b;
}
</style>
