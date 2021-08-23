<template>
  <div>
    <v-card flat style="text-align: center" class="mt-5">
      <h1 class="font-weight-bold text-h1">404</h1>
      <v-card-text>
        Oooooops! We couldn't find this page. <br />
        <router-link style="text-decoration: none" :to="{ name: 'home' }">
          <v-btn class="mt-5" style="color: white" color="indigo">
            Back To Home
          </v-btn>
        </router-link>
      </v-card-text>
    </v-card>
  </div>
</template>
