<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <UserWatcherComponent />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import UserWatcherComponent from "@/components/UserWatcherComponent.vue"; // @ is an alias to /src

@Options({
  components: {
    UserWatcherComponent,
  },
})
export default class HomeView extends Vue {}
</script>
