<script setup>
// eslint-disable-next-line no-undef
let food = $ref('')
</script>

<template>
  <p>
    What is your favorite food?
    <input type="text" v-model="food" />
  </p>
</template>
