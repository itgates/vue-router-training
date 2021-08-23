<template>
  <div>
    <div>
      <go-back></go-back>
      <h3 class="mt-3">{{ destination.name }}</h3>
    </div>
    <v-divider class="mb-5"></v-divider>
    <v-row>
      <v-col cols="12" md="4">
        <v-img :src="require(`@/assets/${destination.image}`)" />
      </v-col>
      <v-col cols="12" md="8">
        <p class="lead">
          {{ destination.description }}
        </p>
      </v-col>
    </v-row>
    <div class="mt-5">
      <h3>{{ destination.name }} Experiences</h3>
    </div>
    <v-divider class="mb-5"></v-divider>
    <v-row>
      <v-col
        v-for="(experience, index) in destination.experiences"
        :key="index"
        class="d-flex child-flex"
        cols="6"
      >
        <v-hover>
          <template v-slot:default="{ hover }">
            <v-img
              :src="require(`@/assets/${experience.image}`)"
              :lazy-src="require(`@/assets/${experience.image}`)"
              aspect-ratio="1"
              class="grey lighten-2"
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
              <v-fade-transition>
                <v-overlay v-if="hover" absolute color="#036358">
                  <h3 class="text-center font-weight-bold">
                    {{ experience.name }}
                  </h3>
                  <router-link
                    style="text-decoration: none"
                    :to="{
                      name: 'experience.show',
                      params: { experienceSlug: experience.slug },
                      hash: '#experience'
                    }"
                  >
                    <v-btn class="mt-1">See more info</v-btn>
                  </router-link>
                </v-overlay>
              </v-fade-transition>
            </v-img>
          </template>
        </v-hover>
      </v-col>
    </v-row>
    <div class="mt-5">
      <router-view :key="$route.path" />
    </div>
  </div>
</template>

<script>
import store from "@/store";
import GoBack from "@/components/GoBack";
export default {
  components: { GoBack },
  props: {
    slug: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      destination: null,
      overlay: false
    };
  },
  created() {
    this.destination = store.destinations.find(
      destination => destination.slug === this.slug
    );
  }
};
</script>

<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.destination-details {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
.cards {
  display: flex;
}
.cards img {
  max-height: 200px;
}
.card {
  padding: 0 20px;
  position: relative;
}
.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}
</style>
