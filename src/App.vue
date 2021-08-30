<template>
  <v-app class="vapp">
    <LeftNavDrawerHeader />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<style lang="scss">
.vapp {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>

<script>
import LeftNavDrawerHeader from "@/components/LeftNavDrawerHeader.vue";

export default {
  name: "App",
  components: {
    LeftNavDrawerHeader,
  },
};
</script>
