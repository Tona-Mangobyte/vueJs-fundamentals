<template>
  <div class="home">
    <ParentComponent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ParentComponent from '@/components/ParentComponent.vue' // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    ParentComponent
  }
})
</script>
