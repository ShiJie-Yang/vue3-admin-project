<template>
  <div class="login-form">
    <div class="login wrap">
      <div class="h1">Login</div>
      <el-form :model="formData">
        <el-form-item>
          <el-input class="input" v-model="formData.userName" placeholder="UserName" id="email" name="email" type="text" />
          <el-input class="input" v-model="formData.passWord" placeholder="Password" id="password" name="password" :type="inputType" @input="handleChange"/>
        </el-form-item>
      </el-form>
      <el-button value="Login" class="btn" type="submit" @click="handleClick">Login</el-button>
      <View class="icon" v-show="showIcon === 'show'" @click="handleShowIcon"/>
      <Hide class="icon" v-show="showIcon === 'hide'" @click="handleShowIcon" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
const router = useRouter()
const showIcon = ref<string>('none')
const inputType = ref<string>('password')
interface FormData {
  userName: string,
  passWord: string
}

const formData = ref<FormData>({
  userName: '',
  passWord: ''
})

const handleChange = () => {
  if (formData.value.passWord) {
    showIcon.value = 'show'
  } else {
    showIcon.value = 'none'
  }
}

const handleShowIcon = () => {
  if (showIcon.value === 'show') {
    showIcon.value = 'hide'
    inputType.value = 'text'
  } else {
    showIcon.value = 'show'
    inputType.value = 'password'
  }
}

const handleClick = () => {
  if (formData.value.userName === '') {
    ElMessage.warning('请输入用户名')
  } else if (formData.value.passWord === '') {
    ElMessage.warning('请输入密码')
  } else {
    router.push({ path: '/home' });
  }
}


</script>

<style lang="scss" scope>
.login-form {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;

  .icon {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 180px;
    right: 60px;
    z-index: 999;
  }

  .input{
    margin-bottom: 10px;
    .el-input__wrapper {
      padding: 0;
      border-radius: 19px;
      background-color: #38A2B9 !important;
      box-shadow: none !important;
      .el-input__inner {
        margin: 0;
      }
    }
  }


  .login {
    width: 340px;
    height: 400px;
    background: #38A2B9;
    padding: 47px;
    padding-bottom: 57px;
    color: #fff;
    border-radius: 17px;
    padding-bottom: 50px;
    font-size: 1.3em;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    position: relative;
  }

  .login input[type="text"],
  .login input[type="password"] {
    opacity: 1;
    display: block;
    border: none;
    outline: none;
    width: 100%;
    height: 100%;
    padding: 13px 18px;
    margin: 20px 0 0 0;
    font-size: 0.8em;
    border-radius: 100px;
    background: #3c3c3c;
    color: #fff;
  }

  .login input:focus {
    animation: bounce 1s;
    -webkit-appearance: none;
  }

  .login input[type=submit],
  .login input[type=button],
  .h1 {
    border: 0;
    outline: 0;
    width: 100%;
    padding: 13px;
    margin: 40px 0 0 0;
    border-radius: 500px;
    font-weight: 600;
    animation: bounce2 1.6s;
  }

  .h1 {
    padding: 0;
    position: relative;
    top: -35px;
    display: block;
    margin-bottom: -0px;
    font-size: 1.3em;
  }

  .btn {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    background: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
    color: #fff;
    padding: 16px !important;
    margin-top: 90px;
  }

  .btn:hover {
    background: linear-gradient(144deg, #1e1e1e , 20%,#1e1e1e 50%,#1e1e1e );
    color: rgb(255, 255, 255);
    padding: 16px !important;
    cursor: pointer;
    transition: all 0.4s ease;
  }

  .login input[type=text] {
    animation: bounce 1s;
    -webkit-appearance: none;
  }

  .login input[type=password] {
    animation: bounce1 1.3s;
  }

  .ui {
    font-weight: bolder;
    background: -webkit-linear-gradient(#B563FF, #535EFC, #0EC8EE);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-bottom: 4px solid transparent;
    border-image: linear-gradient(0.25turn, #535EFC, #0EC8EE, #0EC8EE);
    border-image-slice: 1;
    display: inline;
  }

  @media only screen and (max-width: 600px) {
    .login {
      width: 70%;
      padding: 3em;
    }
  }

  @keyframes bounce {
    0% {
      transform: translateY(-250px);
      opacity: 0;
    }
  }

  @keyframes bounce1 {
    0% {
      opacity: 0;
    }

    40% {
      transform: translateY(-100px);
      opacity: 0;
    }
  }

  @keyframes bounce2 {
    0% {
      opacity: 0;
    }

    70% {
      transform: translateY(-20px);
      opacity: 0;
    }
  }
}
</style>