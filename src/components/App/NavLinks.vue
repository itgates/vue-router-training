<template>
  <div class="ml-2 mt-1">
    <router-link :to="{ name: 'home' }">
      <v-btn text>
        Home
      </v-btn>
    </router-link>
    <router-link :to="{ name: 'destination.index' }">
      <v-btn text>
        Destinations
      </v-btn>
    </router-link>
  </div>
</template>

<style scoped>
.router-link {
  padding: 3px;
}
</style>
