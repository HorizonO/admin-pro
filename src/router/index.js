import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/views/login/'
import Home from '@/views/home/'
import Layout from '@/views/layout/'
import Article from '@/views/article/'

Vue.use(VueRouter)
//路由配置表
const routes = [
    {
        path: '/login',
        name: 'login',
        component: Login
    },
    //嵌套路由
    {
        path: '/',
        // name:'layout',
        component: Layout,
        //作为子路由，保留侧边栏和头
        children: [
            {
                path: '',  //path为空，会作为默认子路由渲染
                name: 'home',
                component: Home
            },
            {
                path: '/article',
                name: 'article',
                component: Article
            }
        ]
    }

]

const router = new VueRouter({
    routes
})
//路由导航守卫：就是所有页面的导航都会经过这里
//守卫页面的导航，拦截页面的
//参数说明：
//to：要去的路由信息
//from：来自哪里的路由信息
//next：放行方法
// router.beforeEach((to,from,next)=>{
    //如果要访问的页面不是 /login 就校验登录状态
    //如果没有登录，则跳转到登录页面
    //如果登录了，允许通过

    // const  user = JSON.parse(window.localStorage.getItem('user'))
    // //校验非登录页面的登录状态
    // if (to.path !== '/login'){
    //     if (user){
    //         //已登录，允许通过
    //         next()
    //     }else {
    //         //没有登录，跳转到登录页面
    //         next('/login')
    //     }
    // }else {
    // //    登录页面，正常放行
    //     next()
    // }
// })
export default router
