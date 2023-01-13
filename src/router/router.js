// import Vue from 'vue'
import {createRouter, createWebHashHistory} from 'vue-router';
import vCatalog from '../components/vCatalog.vue';
import vCart from '../components/vCart.vue';

// Vue.use(Router)

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/', component: vCatalog },
        { path: '/cart', component: vCart }
    ]
})

// let router = new Router({
//     routes: [
//         {
//             path: '/',
//             name: 'catalog',
//             component: vCatalog
//         },
//         {
//             path: '/cart',
//             name: 'cart',
//             component: vCart,
//             props: true
//         }
//     ]
// });

// export default router;