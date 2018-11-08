import Loading from '../../components/loading.vue'
import Toast from '../../components/toast.vue'
import addToast from './api'

Toast.install = function (Vue) {
  Vue.component(Loading.name, Loading)
  Vue.component(Toast.name, Toast)
  addToast(Vue, Toast)
}

Toast.Loading = Loading

export default Toast
