import { createRouter, createWebHistory } from 'vue-router';
import AppMain from './components/AppMain.vue';
import CardsPage from './pages/CardsPage.vue';


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: AppMain 
        },
        {
            path: '/cards',
            name: 'cards',
            component: CardsPage
        },
        
    ]
});

export { router };
