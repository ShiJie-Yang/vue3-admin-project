<template>
  <div class="content flex">
    <img
      src="@/images/404.png"
      class="img"
    >
    <div>
      <div class="text">
        页面不知道飞向何方了.........
      </div>
      <el-button
        type="primary"
        @click="backHome"
      >
        返回首页
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router'
const backHome = () => router.go(-1)
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  align-items: center;
  .img {
    margin-left: 100px;
  }
  .text {
    font-size: 60px;
    color: rgb(4, 155, 243);
    margin-bottom: 40px;
  }
}
</style>