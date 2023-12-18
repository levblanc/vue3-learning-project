import { defineStore } from 'pinia'

export let useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    }
  },
  getters: {
    remaining() {
      return 10 - this.count
    }
  }
})
