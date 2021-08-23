<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-app-bar-title>
        Travels
      </v-app-bar-title>
      <nav-links></nav-links>
    </v-app-bar>
    <v-main>
      <v-container>
        <router-view :key="$route.path"></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>
<script>
import NavLinks from "@/components/App/NavLinks";
export default {
  components: { NavLinks }
};
</script>
