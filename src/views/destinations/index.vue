<template>
  <div>
    <v-sheet class="mt-5">
      <v-row>
        <v-col
          v-for="(destination, index) in destinations"
          :key="index"
          class="d-flex child-flex"
          cols="6"
        >
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-img
                :src="require(`@/assets/${destination.image}`)"
                :lazy-src="require(`@/assets/${destination.image}`)"
                aspect-ratio="1"
                class="grey lighten-2"
              >
                <template v-slot:placeholder>
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#036358">
                    <h3 class="text-center font-weight-bold">
                      {{ destination.name }}
                    </h3>
                    <router-link
                      style="text-decoration: none"
                      :to="{
                        name: 'destination.show',
                        params: { slug: destination.slug }
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
    </v-sheet>
  </div>
</template>

<script>
import store from "@/store";
export default {
  data() {
    return {
      destinations: [],
      overlay: false
    };
  },
  created() {
    this.getDestinations();
  },
  methods: {
    getDestinations() {
      this.destinations = store.destinations;
    }
  }
};
</script>
