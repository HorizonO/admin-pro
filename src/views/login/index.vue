<template>
<div class="login-container">
  <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="手机号">
      <el-input v-model="form.mobile"></el-input>
    </el-form-item>

    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="验证码">
        <el-input v-model="form.code"></el-input>
      </el-form-item>
    </el-form>


    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</div>
</template>

<script>
export default {
  name: "LoginIndex",
  components:{},
  data() {
    return {
      form: {
        mobile: '',
        code: ''
      }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped></style>
