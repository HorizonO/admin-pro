/**
 *基于axios封装的请求模块
 */
import axios from 'axios'

//创建一个axios实例
//通过这个实例去发请求，把需要的配置配置给这个实例来
const request = axios.create({
    baseURL: 'http://ttapi.research.itcast.cn/'
})


//请求拦截器,request.是因为上面创建了实例
request.interceptors.request.use(
    //任何所有请求都会经过这里
    //参数config ：是当前请求相关的配置信息对象
    //config 是可以修改的
    function (config) {
        const user = JSON.parse(window.localStorage.getItem('user'))
       // 如果有登录用户信息，则统一设置token
       if (user){
           config.headers.Authorization =`Bearer ${user.token}`
       }

    //    这句话很重要
    return config
}, function (error) {
    return Promise.reject(error)
})
//响应拦截器

// 导出请求方法
export default request

//import request from 'request'

