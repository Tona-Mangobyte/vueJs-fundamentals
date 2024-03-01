<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <UserWatcherComponent />
    <CafeComponent />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import UserWatcherComponent from "@/components/UserWatcherComponent.vue"; // @ is an alias to /src
import CafeComponent from "@/components/CafeComponent.vue";

@Options({
  components: {
    UserWatcherComponent,
    CafeComponent,
  },
})
export default class HomeView extends Vue {}
</script>
