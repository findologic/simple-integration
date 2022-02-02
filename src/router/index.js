import Vue from 'vue';
import VueRouter from 'vue-router';
import Results from '@/components/Results';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Results,
    props: {
      query: "",
    },
  },
  {
    path: '/search/:query?',
    name: 'Results',
    component: Results,
    props: true,
  }
]

const router = new VueRouter({
  routes
})

export default router
