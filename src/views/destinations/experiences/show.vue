<template>
  <div>
    <div>
      <h3 id="experience">{{ experience.name }}</h3>
    </div>
    <v-divider class="mb-5"></v-divider>
    <v-row>
      <v-col cols="12" md="4">
        <v-img :src="require(`@/assets/${experience.image}`)" />
      </v-col>
      <v-col cols="12" md="8">
        <p class="lead">
          {{ experience.description }}
        </p>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import store from "@/store";

export default {
  props: {
    experienceSlug: {
      type: String,
      required: true
    },
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      experience: null
    };
  },
  created() {
    const destination = store.destinations.find(
      destination => destination.slug === this.slug
    );
    this.experience = destination.experiences.find(
      experience => experience.slug === this.experienceSlug
    );
  }
};
</script>

<style scoped>
#experience {
  padding: 10px;
}
</style>
