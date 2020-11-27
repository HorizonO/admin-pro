<template>
  <div class="login-container">
    <div class="login-head"></div>

    <!--
      配置Form表单验证：
      1、必须给el-form组件绑定model为表单数据对象
      2、给需要验证的表单项，绑定prop属性
      注意：prop属性需要指定表单对象中的数据名称
      3、通过el-form组件的rules属性配置验证规则


      手动触发表单验证
      1、给el-form设置ref起个名字
      2、调用ref获取el-form组件，调用组件的validate进行验证
    -->
    <el-form class="login-form" ref="login-form"
             :model="user"
             :rules="formRules">

      <el-form-item prop="mobile">
        <el-input v-model="user.mobile" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input v-model="user.code" placeholder="请输入验证码"></el-input>
      </el-form-item>
      <el-form-item prop="agree">
        <el-checkbox v-model="user.agree">我已阅读并同意用户协议和隐私条款</el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button class="login-btn" type="primary" @click="onLogin" :loading="loginLoading">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
// import request from "@/utils/request.js";
import {login} from '@/api/user'

export default {
  name: "LoginIndex",
  components: {},
  data() {
    return {
      user: {
        mobile: '13911111111', //手机号
        code: '246810',  //验证码
        agree: false,   //是否同意协议
      },
      // checked: false,
      loginLoading: false,
      //表单验证规则示例
      formRules: {
        mobile: [
          {required: true, message: '请输入正确的手机号', trigger: 'change'},
        ],
        code: [
          {required: true, message: '验证码不能为空', trigger: 'change'},
          {pattern: /^\d{6}$/, message: '请输入正确的验证码格式'}
        ],
        agree: [
          //  自定义验证规则validator
          //  验证通过：callback（）
          //  验证失败：callbacl（new error('message')）
          {
            validator: (rule, value, callback) => {
              if (value) {
                callback()
              } else {
                callback(new Error('请同意用户协议'))
              }
            },
            // message:'请勾选同意用户协议',
            trigger: 'change'
          }
        ]
      }
    }
  },
  methods: {
    onLogin() {
      // 获取表单数据
      // const user = this.user;
      // 表单验证
      this.$refs['login-form'].validate(valid => {
        if (!valid) {
          return
        }
        this.login()
      })

    },
    login() {
      //开启loading
      this.loginLoading = true;


      //对于代码中的请求操作
      //1、接口请求可能需要重用
      //2、实际工作中，接口非常容易变动，改起来麻烦
      //3、建议把所有的请求都封装成函数然后统一的组织到模块中进行管理
      //这样做的好处：管理维护更方便，也好重用。
      //  验证通过，提交登录
      login(this.user).then(res => {
        console.log(res)
        //登录成功提示
        this.$message({
          message: '登录成功',
          type: 'success'
        });

        //关闭loading
        this.loginLoading = false


      //  登录成功，跳转到首页
      //  this.$router.push('/')
        this.$router.push({
          name:'home'
        })
      }).catch(err => {
        console.log("登录失败", err)
        //登录失败提示
        this.$message.error('登录失败，手机号或验证码错误');
        //关闭loading
        this.loginLoading = false
      })
      // 处理后端响应结果
      //成功
      //失败
    }
  }
}
</script>

<style scoped lang="less">
.login-head {
  width: 300px;
  height: 57px;
  background: url("./logo_index.png") no-repeat;
  margin-bottom: 30px;
}

.login-container {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url("login_bg.jpg") no-repeat;
  background-size: cover;

  .login-form {
    background-color: white;
    padding: 50px;

    .login-btn {
      width: 100%;
    }
  }
}


</style>
