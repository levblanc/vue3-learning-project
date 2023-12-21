<script setup>
defineProps({
  show: Boolean,
  modalHeader: Boolean
})
</script>

<template>
  <div class="modal-mask" v-if="show">
    <div class="modal-container">
      <header v-if="modalHeader">
        <slot name="header">default header</slot>
      </header>
      <div>
        <slot name="default">default body</slot>
      </div>
      <footer class="modal-footer">
        <slot name="footer">
          <button @click="$emit('close')">Close</button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<style>
.modal-mask {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  place-items: center;
}

.modal-container {
  width: 80vw;
  max-width: 500px;
  padding: 1rem;
  background: white;
  border-radius: 10px;
}
.modal-footer {
  border-top: 1px solid #ddd;
  margin-top: 1rem;
  padding-top: 0.5rem;
  font-size: 0.8rem;
}

.modal-footer button {
  background: #ddd;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
}

.modal-footer button:hover {
  background: #8c8c8c;
}
</style>
