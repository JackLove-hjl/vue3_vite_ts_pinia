<template>
  <div class="login-container">
    <el-form
        ref="ruleFormRef"
        :model="loginForm"
        class="login-form"
        :rules="rules"
    >
      <div class="title-container">
        <h3 class="title">用户登录</h3>
      </div>
      <!-- 账号 -->
      <el-form-item prop="username">
        <!-- <svg-icon
          class="svg-container"
          iconName="user"
          iconSize="20"
        ></svg-icon> -->
        <el-input v-model="loginForm.username"></el-input>
      </el-form-item>
      <!-- 密码 -->
      <el-form-item prop="password">
        <!-- <svg-icon
          class="svg-container"
          iconName="password"
          iconSize="20"
        ></svg-icon> -->
        <el-input
            v-model="loginForm.password"
            type="password"
            showPassword
        ></el-input>
      </el-form-item>
      <!-- 登录按钮 -->
      <el-button
          type="primary"
          class="login-button"
          @click="handleLogin(ruleFormRef)"
      >
        登录
      </el-button>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { FormInstance, FormRules } from 'element-plus'

const loginForm = ref({
  username: 'admin',
  password: '123456',
})

const ruleFormRef = ref<FormInstance>()

const rules = reactive<FormRules>({
  username: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
  ],
  password: [
    { required: true, message: 'Please input password', trigger: 'blur' },
  ],
})
// 登录点击
const handleLogin = async (formEl: FormInstance | undefined) => {
  if (!formEl) return
  console.log('click login button')
}
</script>

<style lang="scss" scoped>
$bg: #2d3a4b;
$dark_gray: #889aa4;
$light_gray: #eee;
$cursor: #fff;

.login-container {
  width: 100vw;
  height: 100vh;
  background-color: $bg;
  display: flex;
  align-items: center;
  justify-content: center;

  .login-form {
    width: 520px;
    overflow: hidden;
    display: flex;
    flex-direction: column;

    :deep(.el-form-item) {
      border: 1px solid rgba(255, 255, 255, 0.1);
      background: white;
      border-radius: 5px;
    }

    :deep(.el-input) {
      height: 47px;
      width: 92%;
      padding: 12px 5px;
      color: #000;
      height: 47px;

      .el-input__wrapper {
        background: transparent;
        box-shadow: none;
      }
    }
    .login-button {
      width: 50%;
      height: 40px;
      margin: 0 auto;
    }
  }
  .title-container {
    .title {
      color: $light_gray;
      font-size: 26px;
      font-weight: bold;
      text-align: center;
      margin-bottom: 20px;
    }
  }

  .svg-container {
    padding: 6px 5px 6px 15px;
    color: $dark_gray;
    vertical-align: middle;
    display: inline-block;
  }
}
</style>