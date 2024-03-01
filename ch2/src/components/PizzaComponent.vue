<template>
  <header>Title: {{ pizza.title }}</header>
  <div class="pizza--details-wrapper">
    <img v-if="pizza.image" :src="pizza.image" :alt="pizza.title" width="300" />
    <p>Description: {{ pizza?.description ?? "" }}</p>
    <div class="pizza--inventory">
      <div class="pizza--inventory-stock">Quantity: {{pizza?.quantity ?? ""}}</div>
      <div class="pizza--inventory-price">Price: {{priceFormat}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

interface PizzaInterface {
  title?: string
  image?: string
  description?: string
  quantity?: number
  price?: number
}
class Pizza implements PizzaInterface {
  title?: string
  image?: string
  description?: string
  quantity?: number
  price?: number
  constructor (title: string, image: string, description: string, quantity: number, price: number) {
    this.title = title
    this.image = image
    this.description = description
    this.quantity = quantity
    this.price = price
  }

  /* priceFormat (): string { not work
    return `$${this.price?.toFixed(2)}`
  } */
}
export default defineComponent({
  name: 'PizzaComponent',
  props: {
    pizza: {
      type: Object as PropType<PizzaInterface>,
      // type: Object as () => Pizza,
      required: true
    }
  },
  computed: {
    priceFormat (): string {
      return `$${this.pizza.price?.toFixed(2)}`
    }
  },
  created () {
    console.log('PizzaComponent created')
    console.log(this.pizza)
  }
})
</script>
