import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
import axios from 'axios'

Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://10.36.149.30:8888/api/private/v1/'
axios.interceptors.request.use(config=>{
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})





// 导入全局样式表
import "./assets/css/global.css"
Vue.config.productionTip = false

import TreeTable from 'vue-table-with-tree-grid'

// 导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)

Vue.component('tree-table',TreeTable)
Vue.filter('dateFormat',function(originVal){
  const dt = new Date(originVal)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2,'0')
  const d = (dt.getDate() + '').padStart(2,'0')
  const h = (dt.getHours() + '').padStart(2,'0')
  const mm = (dt.getMinutes() + '').padStart(2,'0')
  const s = (dt.getSeconds() + '').padStart(2,'0')
  return `${y}-${m}-${d} ${h}:${mm}:${s}`
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
