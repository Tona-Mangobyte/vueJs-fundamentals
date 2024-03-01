<template>
  <div>
    <h2>Pizza List</h2>
    <PizzaComponent v-for="pizza in pizzas" :key="pizza.title" :pizza="pizza"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PizzaComponent from '@/components/PizzaComponent.vue'

export default defineComponent({
  name: 'PizzaComponentList',
  components: { PizzaComponent },
  data () {
    return {
      pizzas: [
        { title: 'Pepperoni', quantity: 25, price: 20 }
      ]
    }
  }
})
</script>
