import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

Vue.config.productionTip = false;

export const SHOPKEY = '44AC62C6BA528CADABDDB18F9F3D2145';

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app');
