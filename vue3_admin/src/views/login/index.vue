<template>
  <div class="login">
    <div class="login-form">
      <div class="title"></div>
      <div class="form">
        <el-form ref="loginRef" size="large" :model="loginForm">
          <el-form-item>
            <el-input v-model="loginForm.username" placeholder="username" />
          </el-form-item>
          <el-form-item>
            <el-input v-model="loginForm.password" placeholder="password" />
          </el-form-item>
          <el-form-item>
            <el-row :gutter="12" style="width: 100%">
              <el-col :span="18">
                <el-input v-model="loginForm.code" placeholder="Code" />
              </el-col>
              <el-col :span="6">
                <div class="login-code" v-html="codeUrl" @click="getCode"></div>
              </el-col>
            </el-row>
          </el-form-item>
          <el-form-item>
            <el-button style="width: 100%" type="primary" @click="onSubmit">
              Login
            </el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, ref } from 'vue'
import { getCodeImg } from '@/api/login'
import { useUserStore } from '@/stores/userStore'
import { useRouter } from 'vue-router'
const router = useRouter()
const userStore = useUserStore()
const loginForm = reactive({
  username: 'admin',
  password: 'admin123',
  code: '',
  uuid: ''
})
const loginRef = ref(null)
const codeUrl = ref('')

onMounted(() => {
  getCode()
})

const getCode = () => {
  getCodeImg().then((res) => {
    codeUrl.value = res.img
    loginForm.uuid = res.uuid
  })
}
const onSubmit = () => {
  if (!loginRef.value) return
  loginRef.value.validate((valid) => {
    if (valid) {
      userStore.Login(loginForm).then(() => {
        router.push('/')
      })
    }
  })
}
</script>

<style lang="scss" scoped>
.login {
  height: 100%;
  position: relative;
  .login-form {
    position: absolute;
    width: 400px;
    padding: 20px;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
  }
}
.login-code {
  cursor: pointer;
  width: 100%;
}
</style>
