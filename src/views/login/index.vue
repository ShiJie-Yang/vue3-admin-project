<template>
  <div class="login-wrapper">
    <LoginForm />
  </div>
</template>

<script setup lang="ts">
import LoginForm from "./components/LoginForm.vue";

</script>

<style lang="scss" scope>
body {
  overflow: hidden;
}
html {
  overflow: hidden;
}
.login-wrapper {
  width: 100%;
  background-image: url("@/images/login.webp");
  background-size: cover;
  background-position: center;
  height: 100%;
  margin: 0;
}
</style>