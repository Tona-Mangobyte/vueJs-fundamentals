<script setup lang="ts">
import { defineProps, inject } from 'vue'

interface Props {
  title: string
  description?: string
}
defineProps<Props>()

console.log(inject('say'))
</script>

<template>
  <h1> {{ title }} </h1>
  <h5> {{ description }} </h5>
</template>
