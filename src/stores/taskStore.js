import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [],
    filter: 'all'
  }),

  getters: {
    totalCount: (state) => state.tasks.length,

    doneCount: (state) =>
      state.tasks.filter(task => task.done).length,

    activeCount: (state) =>
      state.tasks.filter(task => !task.done).length,

    filteredTasks: (state) => {
      if (state.filter === 'active') {
        return state.tasks.filter(task => !task.done)
      }
      if (state.filter === 'done') {
        return state.tasks.filter(task => task.done)
      }
      return state.tasks
    }
  },

  actions: {

    loadFromStorage() {
      const data = localStorage.getItem('tasks')
      if (data) {
        this.tasks = JSON.parse(data)
      } else {

        this.tasks = [
          { id: 1, title: 'Вивчити Vue', done: false },
          { id: 2, title: 'Зробити лабораторну', done: true }
        ]
      }
    },

    saveToStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks))
    },

    addTask(title) {
      this.tasks.push({
        id: Date.now(),
        title,
        done: false
      })
      this.saveToStorage()
    },

    toggleTask(id) {
      const task = this.tasks.find(t => t.id === id)
      if (task) {
        task.done = !task.done
        this.saveToStorage()
      }
    },

    removeTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id)
      this.saveToStorage()
    },

    setFilter(value) {
      this.filter = value
    }
  }
})