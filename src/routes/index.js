import VueRouter from 'vue-router';
import Index from '../pages/Index.vue';
import List from '../pages/List.vue';
export default new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index
    },
    {
      path: '/list',
      component: List
    },
  ]
})