import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import router from './router';

Vue.config.productionTip = false;

export const SHOPKEY = 'DBF2EE9DE465AAB69BCE510E71C5AC48';

new Vue({
    vuetify,
    router,
    render: h => h(App)
}).$mount('#app');
