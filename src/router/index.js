import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import store from "@/store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/destinations",
    name: "destination.index",
    component: () =>
      import(
        /* webpackChunkName: "destination.index" */ "@/views/destinations/index"
      )
  },
  {
    path: "/destinations/:slug",
    name: "destination.show",
    props: true,
    children: [
      {
        path: ":experienceSlug",
        name: "experience.show",
        props: true,
        beforeEnter: (to, from, next) => {
          const destination = store.destinations.find(
            destination => destination.slug === to.params.slug
          );
          const exist = destination.experiences.find(
            experience => experience.slug === to.params.experienceSlug
          );
          if (exist) {
            next();
          } else {
            next({ name: "error.notFoundPage" });
          }
        },
        component: () =>
          import(
            /* webpackChunkName: "experience.show" */ "@/views/destinations/experiences/show"
          )
      }
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        destination => destination.slug === to.params.slug
      );
      if (exists) {
        next();
      } else {
        next({ name: "error.notFoundPage" });
      }
    },
    component: () =>
      import(
        /* webpackChunkName: "destination.show" */ "@/views/destinations/show"
      )
  },
  {
    path: "/404",
    alias: "*",
    name: "error.notFoundPage",
    component: () =>
      import(
        /* webpackChunkName: "error.notFoundPage" */ "@/views/errors/NotFoundPage"
      )
  }
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      const position = {};
      if (to.hash) {
        position.selector = to.hash;
        if (to.hash === "#experience") {
          position.offset = { y: 100 };
        }
        if (document.querySelector(to.hash)) {
          return position;
        }
        return false;
      }
    }
  },
  routes
});

export default router;
