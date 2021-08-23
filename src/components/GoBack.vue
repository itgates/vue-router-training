<template>
  <div>
    <v-btn @click="goBack">
      <v-icon>mdi-arrow-left</v-icon>
      Go Back
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>
