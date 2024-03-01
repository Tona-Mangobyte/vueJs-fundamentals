<template>
  <div class="home">
<!--    <ParentComponent />-->
    <ProductList />
<!--    <PizzaComponentList />-->
    <ToDoList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import ParentComponent from '@/components/ParentComponent.vue' // @ is an alias to /src
import ProductList from '@/components/ProductList.vue'
// import PizzaComponentList from '@/components/PizzaComponentList.vue'
import ToDoList from '@/components/ToDoList.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    // ParentComponent,
    ProductList,
    // PizzaComponentList
    ToDoList
  }
})
</script>
