<template>
  <h2>Hello watchEffect! {{ count }}</h2>
  <h3>Total: {{ total }}</h3>
  <button @click="increment">Click</button>
  <SimpleCounter :count="count" @increment="incrementCounter" />
</template>

<script setup lang="ts">
import { ref, watchEffect, watch, computed } from 'vue'
import SimpleCounter from '@/components/SimpleCounter.vue'

const count = ref<number>(0)

const total = computed<number>(() => count.value * 2)

watchEffect(() => {
  console.log('watchEffect ', count.value)
})
const watchCounter = (value: number) => {
  console.log('watch ', value)
}
watch<number, boolean>(count, watchCounter)

const increment = () => {
  count.value++
}

const incrementCounter = (inc: number) => {
  console.log('incrementCounter ', inc)
  count.value = inc
}
</script>
