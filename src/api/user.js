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
export const getUserProfile = () =>{
    // const user = JSON.parse(window.localStorage.getItem('user'))
    // console.log(user)
    return request({
        method:'GET',
        url:'/mp/v1_0/user/profile'
    //    后端要求把需要授权的用户身份放到请求头中
    //    axios可以通过headers选项设置请求头
    //     headers:{
        //    属性名和值都要看后端的接口要求
        //    属性名：Authorization，接口要求的
        //    属性值格式：Bearer空格token数据
        //     Authorization:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2MzgwMDY3MzMsInVzZXJfaWQiOjEsInJlZnJlc2giOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZX0.VDJY7XmiNt5ZR26Bg3weJlS1xJsVPSTwWC9UsD2Gg_Q'
        //     Authorization:`Bearer ${user.token}`
        // }
    })
}
