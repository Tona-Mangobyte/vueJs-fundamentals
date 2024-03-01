<template>
  <div>
    <h2>Using Props to Pass Data to Child Components</h2>
    <ChildComponent name="Child 1" />
    <ChildComponent :name="children[0]" />
  </div>
</template>

<script lang="ts">
import ChildComponent from '@/components/ChildComponent.vue'
export default {
  name: 'ParentComponent',
  components: { ChildComponent },
  data () {
    return {
      children: ['Red Sweater', 'Blue T-Shirt', 'Green Hat']
    }
  }
}
</script>
