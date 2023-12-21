<script setup>
import TeamHeader from '@/components/Teams/TeamHeader.vue'
import TeamFooter from '@/components/Teams/TeamFooter.vue'
import TeamMemberList from '@/components/Teams/TeamMemberList.vue'
import { useTeamStore } from '@/stores/TeamStore.js'

let team = useTeamStore()
team.fill()

setTimeout(() => {
  team.grow(25)
}, 1000)
</script>

<template>
  <TeamHeader />

  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <TeamMemberList />
  </div>

  <TeamFooter />
</template>
