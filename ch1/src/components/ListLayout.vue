<script lang="ts">
interface Item {
  id: number;
  name: string;
  description: string;
  thumbnail?: string;
}

import { defineComponent } from "vue";
export default defineComponent({
  name: "ListLayout",
  data(): { items: Item[] } {
    return {
      items: [
        {
          id: 1,
          name: "Item 1",
          description: "This is item 1",
          thumbnail:
            "https://res.cloudinary.com/mayashavin/image/upload/v1643005666/Demo/supreme_pizza",
        },
        {
          id: 2,
          name: "Item 2",
          description: "This is item 2",
          thumbnail:
            "https://res.cloudinary.com/mayashavin/image/upload/v1643005666/Demo/hawaiian_pizza",
        },
        {
          id: 3,
          name: "Item 3",
          description: "This is item 3",
          thumbnail:
            "https://res.cloudinary.com/mayashavin/image/upload/v1643005666/Demo/pina_colada_pizza",
        },
      ],
    };
  },
});
</script>
<template>
  <!-- Style 1 -->
  <!-- <ul class="list-layout">
    <li class="list-layout__item" v-for="item in items" :key="item.id">
      <div class="list-layout__item__name">{{ item.name }}</div>
      <div class="list-layout__item__description">{{ item.description }}</div>
    </li>
  </ul>-->
  <!-- Style 2 -->
  <!--  <ul class="list-layout">
    <li class="list-layout__item" v-for="item in items" :key="item.id">
      <slot :item="item">
        <div class="list-layout__item__name">{{ item.name }}</div>
        <div class="list-layout__item__description">{{ item.description }}</div>
      </slot>
    </li>
  </ul>-->
  <!-- Style 3 -->
  <ul class="list-layout">
    <li class="list-layout__item" v-for="item in items" :key="item.id">
      <slot name="thumbnail" :item="item" />
      <slot name="main" :item="item">
        <div class="list-layout__item__name">{{ item.name }}</div>
        <div class="list-layout__item__description">{{ item.description }}</div>
      </slot>
      <slot name="actions" :item="item" />
    </li>
  </ul>
</template>
