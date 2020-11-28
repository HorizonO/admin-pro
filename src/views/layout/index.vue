<template>
  <el-container class="layout-container">
<!--    这里width设置为 auto 才能有效 fold 和 unfold-->
    <el-aside class="aside" width="auto">
        <app-aside
            class="aside-menu"
            :is-collapse="isCollapse"
        >

        </app-aside>
    </el-aside>
    <el-container>
      <el-header class="header">
        <div>
          <i :class="{
                'el-icon-s-fold':isCollapse,
                'el-icon-s-unfold':!isCollapse
              }"
              @click="isCollapse = !isCollapse"
          ></i>
          <span>新会广播有线电视台</span>
        </div>
        <el-dropdown>
          <div class="avatar-wrap">
            <img class="avatar"
                 :src="user.photo"
                 alt="">
            <span>{{ user.name }}</span>
            <i class="el-icon-arrow-down el-icon--right"></i>
          </div>
<!--        <span>-->
<!--            <i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
<!--        </span>-->
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>登录</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>
      <el-main class="main">
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
<!--  -->
<!--    <div>顶部导航栏</div>-->
<!--    <div>侧边导航栏</div>-->
<!--    </div>-->
<!--    子路由出口-->
<!--    <router-view/>-->


</template>

<script>
import AppAside from  './components/aside'
import AppHeader from './components/head'
import { getUserProfile } from "@/api/user";


export default {
  name: "LayoutIndex",
  components: {
    AppAside,
    AppHeader
  },
  props: {},
  data() {
    return {
      user:{},//当前登录用户信息
      isCollapse:false  //侧边菜单栏默认展开状态
    }
  },
  methods: {
    //获取用户信息 请求方法
    //在user.js已经封装好，在这里调用
    //除了登录接口，其他所有接口都需要授权才能请求使用
     loadUserProfile(){
      getUserProfile().then(res=>{
        this.user = res.data.data

      })
    }
  },
  created() {
    //组件初始化好，请求获取用户资料
    this.loadUserProfile()
  }
}
</script>
<style scoped lang="less">
.layout-container{
  //充满整个页面
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0 ;
}
.aside{
  background-color: #d3dce6;
  .aside-menu{
    height: 100%;
  }
}
.header{
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom:1px solid #ccc;
  //background-color: #b3c0d1;
}
.main{
  background-color: #e9eef3;
}
.avatar-wrap{
  display: flex;
  align-items: center;
  .avatar{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }
}
</style>
