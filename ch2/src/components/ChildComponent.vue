<template>
  <h3>{{ name }}</h3>
</template>

<script lang="ts">
export default {
  name: 'ChildComponent',
  props: {
    name: String
  }
}
</script>
