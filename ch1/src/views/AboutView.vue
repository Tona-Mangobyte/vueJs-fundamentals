<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ProductItemList from "@/components/ProductItemList.vue";

@Options({
  components: {
    ProductItemList,
  },
})
export default class AboutView extends Vue {}
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <ProductItemList />
  </div>
</template>
