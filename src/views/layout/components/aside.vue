<template>

<!--
  EL-MENU的index不能重复，否则会互相影响
-->

  <el-menu
      class="nav-menu"
    default-active="/"
    background-color="#002033"
    text-color="#fff"
    active-text-color= pink
    router
      :collapse="isCollapse"
  >
<!--    <div class="asideLogo"></div>-->
    <el-menu-item index="/">
      <i class="iconfont iconhome"></i>
      <span slot="title">首页</span>
    </el-menu-item>
    <el-menu-item index="/article">
      <i class="iconfont iconfile"></i>
      <span slot="title">内容管理</span>
    </el-menu-item>
    <el-menu-item index="/image">
      <i class="iconfont iconimage"></i>
      <span slot="title">素材管理</span>
    </el-menu-item>
    <el-menu-item index="/publish">
      <i class="iconfont iconpublish"></i>
      <span slot="title">发布文章</span>
    </el-menu-item>
    <el-menu-item index="/comment">
      <i class="iconfont iconcomment"></i>
      <span slot="title">评论管理</span>
    </el-menu-item>
    <el-menu-item index="/fans">
      <i class="iconfont iconfollower"></i>
      <span slot="title">粉丝管理</span>
    </el-menu-item>
    <el-menu-item index="/settings">
      <i class="iconfont iconsetting"></i>
      <span slot="title">个人设置</span>
    </el-menu-item>

  </el-menu>
</template>

<script>
export default {
  name: "AppAside",
  data(){
    return {
      // isCollapse:false
    }
  },
  props:['is-collapse'],
  methods: {

  }
}
</script>

<style scoped lang="less">
.nav-menu{
  .iconfont{
    margin-right: 5px;
    padding-left: 5px;
  }
}
.asideLogo{
  width: 159px;
  height: 40px;
  margin:10px;
  background: url("logo_admin.png") no-repeat;
}
</style>
