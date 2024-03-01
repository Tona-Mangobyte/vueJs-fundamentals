<script lang="ts">
import { defineComponent } from 'vue'
import ProductComp from '@/components/ProductComp.vue'

export default defineComponent({
  name: 'ProductList',
  components: { ProductComp },
  data () {
    return {
      products: [
        { name: 'Red Sweater', price: 50 },
        { name: 'Blue T-Shirt', price: 25 },
        { name: 'Green Hat', price: 15 }
      ]
    }
  },
  provide () {
    return {
      selectedIds: [1]
    }
  }
})
</script>

<template>
  <div>
    <h2>Product List</h2>
    <ProductComp v-for="product in products" :key="product.name" :name="product.name" :price="product.price" />
  </div>
</template>
