
import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
const index = () => import("../pages/index.vue");
const routes = [{
    path: "/",
    component: index
}]
export default new VueRouter({
    routes
})