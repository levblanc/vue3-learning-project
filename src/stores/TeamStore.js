import { defineStore } from 'pinia'

export let useTeamStore = defineStore('team', {
  state: () => ({ name: '', spots: 0, members: [] }),
  actions: {
    async fill() {
      const res = await import('@/dataset/team.json')
      this.$state = res.default
    },
    grow(spots) {
      this.$state.spots = spots
    }
  },
  getters: {
    spotsRemaining() {
      return this.$state.spots - this.$state.members.length
    }
  }
})
