import Vue from 'vue';
import Router from 'vue-router';
import goods from './Good/goods';
import ratings from './Ratings/ratings';
import seller from './Seller/seller';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      redirect: 'goods'
    },
    {
      path: '/goods',
      component: goods
    },
    {
      path: '/ratings',
      component: ratings
    },
    {
      path: '/seller',
      component: seller
    }
  ],
  linkActiveClass: 'active'
});
