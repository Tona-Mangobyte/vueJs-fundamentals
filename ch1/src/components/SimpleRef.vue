<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "SimpleRef",
  mounted() {
    (this.$refs.messageRef as HTMLInputElement).focus();
  },
  watch: {
    /*["$refs.messageRef"](el: HTMLInputElement) {
      console.log("watch", el);
    },*/
  },
  methods: {
    simpleChange(event: Event) {
      console.log((event.target as HTMLInputElement).value);
    },
  },
});
</script>

<template>
  <div>
    <input
      type="text"
      ref="messageRef"
      placeholder="Enter a message"
      @change="this.simpleChange($event)"
    />
  </div>
</template>
