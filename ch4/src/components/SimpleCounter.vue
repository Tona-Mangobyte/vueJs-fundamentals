<script setup lang="ts">
import { ref, defineExpose, watchEffect, watch } from 'vue'
import { useFeature } from '@/composables/simple'

const count = ref(0)

watchEffect(() => {
  console.log('watchEffect[count]: ', count.value)
})

watch(count, (count, prevCount) => {
  console.log('watch[count]: ', count, prevCount)
})
useFeature(count)
// Expose the increment function
defineExpose({
  incrementCallback: () => count.value++
})

</script>

<template>
  <h1>{{ count }}</h1>
</template>
