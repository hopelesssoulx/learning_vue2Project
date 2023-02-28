<template>
  <div id="app">

    <!-- 路由出口 -->
    <!-- 路由匹配到的组件在此渲染 -->
    <!-- <router-view></router-view> -->
    <RouterView />
  </div>
</template>


<script>
import { RouterView } from 'vue-router';


export default {
    name: "App",
    components: { RouterView }
}
</script>


<style lang="less">
  html, body, h3, p{
    margin: 0;
    padding: 0;
  }
</style>

