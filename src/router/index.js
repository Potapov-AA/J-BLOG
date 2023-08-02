import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Books from '@/views/Books.vue'
import Devlog from '@/views/Devlog.vue'
import Recipes from '@/views/Recipes.vue'

const routes = [
    { path: '/', name: 'Home', component: Home},
    { path: '/devlog', name: 'Devlog', component: Devlog},
    { path: '/books', name: 'Books', component: Books},
    { path: '/recipes', name: 'Recipes', component: Recipes}
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
