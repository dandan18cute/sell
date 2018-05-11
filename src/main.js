// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import goods from './router/Good/goods';

Vue.config.productionTip = false;

const routes = [
	{path: '/goods',component: goods}
	// {path: '/ratings',component: Ratings},
	// {path: '/seller',component: Seller}
]

const router = new VueRouter({
	routes
})

const app = new Vue({
	router
}).$mount('#app')
