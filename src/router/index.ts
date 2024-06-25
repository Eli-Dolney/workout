import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import Store from '../views/Store.vue';
import EisleysApparel from '../views/EisleysApparel.vue';
import NutritionalPrograms from '../views/NutritionalPrograms.vue';
import TrainingPrograms from '../views/TrainingPrograms.vue';
import Coaching from '../views/Coaching.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/store', name: 'Store', component: Store, 
    children: [
      { path: 'eisleys-apparel', name: 'EisleysApparel', component: EisleysApparel },
      { path: 'nutritional-programs', name: 'NutritionalPrograms', component: NutritionalPrograms },
      { path: 'training-programs', name: 'TrainingPrograms', component: TrainingPrograms },
    ] 
  },
  { path: '/coaching', name: 'Coaching', component: Coaching },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
