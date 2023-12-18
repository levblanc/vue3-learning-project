<script setup>
import TheWelcome from '@/components/TheWelcome.vue'
import { useFlash } from '@/composables/useFlash'
import { useCounterStore } from '@/stores/CounterStore'

// eslint-disable-next-line no-undef
let message = $ref('Hello Vite + Vue 3!')
const { flash } = useFlash()

setTimeout(() => {
  message = 'I have changed!'
}, 2000)

const counter = useCounterStore()
</script>

<template>
  <main>
    <TheWelcome />
    <p>{{ message }}</p>
    <p>
      <button class="bg-gray-100" @click="flash('It works!')">Click Me</button>
    </p>

    <div>
      <h1>{{ counter.count }}</h1>
      <button @click="counter.increment()" :disabled="!counter.remaining">
        Increment ({{ counter.remaining }} Remaining)
      </button>
    </div>
  </main>
</template>
