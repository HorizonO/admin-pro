/**
 *基于axios封装的请求模块
 */
import axios from 'axios'

//创建一个axios实例
//通过这个实例去发请求，把需要的配置配置给这个实例来
const request = axios.create({
    baseURL: 'http://ttapi.research.itcast.cn/'
})
// 导出请求方法
export default request

//
import request from 'request'

