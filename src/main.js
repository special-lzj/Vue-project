// 入口文件
import Vue from 'vue'

// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

import { Header } from 'mint-ui';
Vue.component(Header.name, Header);




import app from './App.vue'
var vm = new Vue({
    el: '#app',
    render: c => c(app)
})