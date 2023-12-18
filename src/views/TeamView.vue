<script setup>
import TeamMember from '@/components/Teams/TeamMember.vue'
</script>

<template>
  <tbody>
    <TeamMember
      v-for="member in team.members"
      :key="member.id"
      :name="member.name"
      :email="member.email"
      :status="member.status"
    />
  </tbody>
</template>
