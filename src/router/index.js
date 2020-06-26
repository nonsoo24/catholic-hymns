import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
//import Hymn from '../views/Hymn.vue'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    //path: '/Hymn',
    path: "/Hymn/:_id",
    name: 'Hymn',
    // route level code-splitting
    // this generates a separate chunk (hymn.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/Hymn.vue'),
  },

  // {
  //   path: '/Hymn',
  //   name: 'Hymn',
  // }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
