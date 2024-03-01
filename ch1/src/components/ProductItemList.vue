<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ListLayout from "@/components/ListLayout.vue";
@Options({
  components: {
    ListLayout,
  },
})
export default class ProductItemList extends Vue {}
</script>
<template>
  <!--<ListLayout />-->
  <ListLayout>
    <template #thumbnail="{ item }">
      <img
        v-if="item.thumbnail"
        class="list-layout__item__thumbnail"
        :src="item.thumbnail"
        :alt="item.name"
        width="200"
      />
    </template>
    <template #actions>
      <div class="list-layout__item__footer">
        <button class="list-layout__item__footer__button">Add to cart</button>
      </div>
    </template>
  </ListLayout>
</template>
