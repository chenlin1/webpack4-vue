import Vue from "vue";
import Router from "vue-router";
import Home from "../home/index.vue";
import "../../css/reset.scss";
import "swiper/dist/css/swiper.css";

Vue.use(Router);

export default new Router({
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }]
})