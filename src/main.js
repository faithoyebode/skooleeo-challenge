import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.vue';
import SignIn from '@/components/SignIn.vue';


const routes = [
    { 
        path: '/sign-in', 
        nane: 'SignIn',
        component: SignIn 
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes, // short for `routes: routes`
});

createApp(App).use(router).mount('#app')
