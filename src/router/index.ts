import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';
import WorkoutPlans from '../views/WorkoutPlans.vue';
import Contact from '../views/Contact.vue';
import EisleysApparel from '../views/EisleysApparel.vue';
import NutritionalPrograms from '../views/NutritionalPrograms.vue';
import TrainingPrograms from '../views/TrainingPrograms.vue';
import Store from '../views/Store.vue';
import Coaching from '../views/Coaching.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/workout-plans', name: 'WorkoutPlans', component: WorkoutPlans, 
    children: [
      { path: 'eisleys-apparel', name: 'EisleysApparel', component: EisleysApparel },
      { path: 'nutritional-programs', name: 'NutritionalPrograms', component: NutritionalPrograms },
      { path: 'training-programs', name: 'TrainingPrograms', component: TrainingPrograms },
    ] 
  },
  { path: '/contact', name: 'Contact', component: Contact },
  { path: '/store', name: 'Store', component: Store },
  { path: '/coaching', name: 'Coaching', component: Coaching },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
