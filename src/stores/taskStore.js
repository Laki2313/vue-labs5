import { defineStore } from 'pinia'

export const useTaskStore = defineStore('taskStore', {
  state: () => ({
    tasks: [
      { id: 1, title: 'Вивчити Vue', done: false },
      { id: 2, title: 'Зробити лабораторну', done: true }
    ],
    filter: 'all' // all | active | done
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
    addTask(title) {
      this.tasks.push({
        id: Date.now(),
        title,
        done: false
      })
    },

    toggleTask(id) {
      const task = this.tasks.find(t => t.id === id)
      if (task) task.done = !task.done
    },

    removeTask(id) {
      this.tasks = this.tasks.filter(t => t.id !== id)
    },

    setFilter(value) {
      this.filter = value
    }
  }
})