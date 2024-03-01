<template>
  <div>
    <h2>Using Props to Pass Data to Child Components</h2>
    <ChildComponent name="Child 1" />
    <ChildComponent name="Child 2" />
  </div>
</template>

<script lang="ts">
import ChildComponent from '@/components/ChildComponent.vue'
export default {
  name: 'ParentComponent',
  components: { ChildComponent }
}
</script>
