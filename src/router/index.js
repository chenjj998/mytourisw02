import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component:() => import('@/pages/home/Home')   //异步加载组件(js过多的时候用)
    },{
    	path:'/city',
    	name:'City',
      component:() => import('@/pages/city/City')
    },{
    	path:'/detail/:id',   //绑定动态路由的ID传给后端
    	name:'Detail',
      component:() => import('@/pages/detail/Detail')
    }
  ],
  scrollBehavior (to,from,savedPosition) {
    return { x:0, y:0}
  }
})
