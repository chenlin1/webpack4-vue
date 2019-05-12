import Vue from 'vue';
import App from './App.vue';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import router from './router';
import 'swiper/dist/css/swiper.css';
import '../css/stlye.css';

Vue.config.productionTip = false;
Vue.use(VueAwesomeSwiper)
new Vue({
    el: '#app',
    router,
    components: {
       App
    },
    template: "<App></App>"
})