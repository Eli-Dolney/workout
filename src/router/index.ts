// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Store from '../views/Store.vue';
import EisleysApparel from '../views/EisleysApparel.vue';
import NutritionalPrograms from '../views/NutritionalPrograms.vue';
import TrainingPrograms from '../views/TrainingPrograms.vue';
import Coaching from '../views/Coaching.vue';
import ProductDetail from '../views/products/ProductDetail.vue';
import CartPage from '../views/CartPage.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/store', name: 'Store', component: Store },
  { path: '/store/eisleys-apparel', name: 'EisleysApparel', component: EisleysApparel },
  { path: '/store/nutritional-programs', name: 'NutritionalPrograms', component: NutritionalPrograms },
  { path: '/store/training-programs', name: 'TrainingPrograms', component: TrainingPrograms },
  { path: '/store/:productId', name: 'ProductDetail', component: ProductDetail, props: true }, // Dynamic route for products
  { path: '/coaching', name: 'Coaching', component: Coaching },
  { path: '/cart', name: 'CartPage', component: CartPage } // Route for Cart Page
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
