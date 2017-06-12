import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
import vue4 from '@/components/vue4';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/vue4',
      name: 'vue4',
      component: vue4,
    },
  ],
});
