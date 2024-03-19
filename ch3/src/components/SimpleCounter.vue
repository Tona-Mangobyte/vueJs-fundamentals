<template>
  <h2>Counter: {{ count }}</h2>
  <button @click="increment">Click</button>
</template>
<script setup lang="ts">
import { defineEmits, defineProps } from 'vue'

const simpleProps = defineProps({
  count: {
    type: Number,
    required: true
  }
})

const emitCallback = defineEmits(['increment'])
const increment = () => {
  emitCallback('increment', simpleProps.count + 1)
}
</script>
