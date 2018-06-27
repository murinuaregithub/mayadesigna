import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/components/pages/Landing';
import Stills from '@/components/pages/Stills';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Landing',
      component: Landing,
    },
    {
      path: '/stills',
      name: 'Stills',
      component: Stills,
    },
  ],
  mode: 'history',
});
