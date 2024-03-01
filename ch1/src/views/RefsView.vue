<script lang="ts">
import { Options, Vue } from "vue-class-component";
import SimpleRef from "@/components/SimpleRef.vue";
@Options({
  components: {
    SimpleRef,
  },
})
export default class RefsView extends Vue {}
</script>

<template>
  <h2>Hello Refs</h2>
  <SimpleRef />
</template>
