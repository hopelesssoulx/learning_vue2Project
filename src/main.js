import Vue from 'vue'
import App from './App.vue'


Vue.config.productionTip = false


// import ElementUI from 'element-ui';
// Vue.use(ElementUI);
import { row, Button } from 'element-ui';
Vue.use(row)
Vue.use(Button)
import { container, aside, header, main } from 'element-ui'
Vue.use(container)
Vue.use(aside)
Vue.use(header)
Vue.use(main)
import { menu, submenu, MenuItem, MenuItemGroup } from 'element-ui'
Vue.use(menu)
Vue.use(submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
import { Icon } from 'element-ui'
Vue.use(Icon)
import { Dropdown, DropdownMenu, DropdownItem } from 'element-ui';
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
import { Col, Card } from 'element-ui'
Vue.use(Col)
Vue.use(Card)
import { Table, TableColumn } from 'element-ui'
Vue.use(Table)
Vue.use(TableColumn)
import { Breadcrumb, BreadcrumbItem } from 'element-ui';
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
import { Tag } from 'element-ui';
Vue.use(Tag)
import { Dialog } from 'element-ui';
Vue.use(Dialog)
import { Form, FormItem } from 'element-ui'
Vue.use(Form)
Vue.use(FormItem)
import { Input } from 'element-ui';
Vue.use(Input)
import { Select, Option } from 'element-ui';
Vue.use(Select)
Vue.use(Option)
import { DatePicker } from 'element-ui';
Vue.use(DatePicker)
import { Message, MessageBox } from 'element-ui';
// Vue.use(Message)
// Vue.use(MessageBox)
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm
import { Pagination } from 'element-ui';
Vue.use(Pagination)


import 'element-ui/lib/theme-chalk/index.css';


import router from './router'


import store from './store'


import './api/mock'


import Cookie from 'js-cookie';


// 添加前置全局导航守卫
router.beforeEach((to, from, next) => {
  //  判断token
  const token = Cookie.get('token')
  if (!token && to.name !== 'login') {
    next({ name: 'login' })
  } else if (token && to.name === 'login') {
    next({ name: 'home'})
  }else{
    next()
  }
})

new Vue({

  router,
  store,

  render: h => h(App),

  created(){
    store.commit('addMenu', router)
  }
}).$mount('#app')
