<script setup>
import TeamMember from '@/components/Teams/TeamMember.vue'
import team from '@/dataset/team'
console.log(team)
</script>

<template>
  <header class="flex justify-between">
    <div>
      <button
        class="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded disabled:border-gray-400"
        :disabled="team.members.length === team.spots"
      >
        Add Member ({{ team.spots - team.members.length }} Spots Left)
      </button>
    </div>

    <div>
      <h3 class="inline-flex items-center text-3xl relative">
        <img src="" alt="" class="mr-2" />
        {{ team.name }} Team
        <div
          class="bg-green-400 w-5 h-5 text-xs text-white rounded-full flex justify-center items-center absolute -right-4 -top-2"
        >
          {{ team.spots }}
        </div>
      </h3>
    </div>
  </header>
  <div class="place-self-center flex flex-col gap-y-3" style="width: 725px">
    <table class="table-fixed border-spacing-2 border-separate">
      <thead>
        <th class="text-left px-6 py-2">Name</th>
        <th class="text-left px-6 py-2">Email</th>
        <th class="text-left px-6 py-2">Status</th>
      </thead>
      <tbody>
        <TeamMember
          v-for="member in team.members"
          :key="member.name"
          :name="member.name"
          :email="member.email"
          :status="member.status"
        />
      </tbody>
    </table>
    <p class="text-right text-gray-600 italic" v-show="team.members.length === team.spots">
      There are no remaining team spots. Upgrade to add more.
    </p>
  </div>
  <footer class="mt-12 bg-gray-100 py-4 text-center">
    <h5 class="font-semibold text-lg">{{ team.name }} - {{ team.spots }} Member Team</h5>
  </footer>
</template>
