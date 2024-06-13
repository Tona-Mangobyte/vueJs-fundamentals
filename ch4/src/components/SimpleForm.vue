<script setup lang="ts">
import { inject } from 'vue'

// const formRef = ref<HTMLFormElement | null>(null)
const handleSubmit = (data: unknown) => {
  console.log('Simple form submitted')
  console.log(data)
}
</script>

<template>
  <form class="form" @submit.prevent="handleSubmit">
    <h1> {{ inject('form') }} </h1>
    <slot></slot>
  </form>
</template>
