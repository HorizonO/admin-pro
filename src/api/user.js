/*
用户相关请求模块
*/




//用户登录函数
import request from "@/utils/request";

export const login = data  =>{
    return request({
        method: 'POST',
        url: '/mp/v1_0/authorizations',
        // data: data   同名可以简写
        data
    })
}


//获取用户信息
