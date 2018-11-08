//当前环境 dev 开发环境  build 生产环境
let curENV = currentENVIR;
console.log(curENV);
import Vue from "vue"
import router from "../router/router.js"
import App from "./app.vue"
new Vue({
    el: "#app",
    router,
    components: {
        App
    }
})
