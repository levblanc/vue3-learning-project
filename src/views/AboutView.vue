<script setup>
import { useFlash } from '@/composables/useFlash'
const { flash } = useFlash()
</script>

<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <p><button @click="flash('On About page!')">Click Me</button></p>
</template>
