<template>
  <div id="app">
    <!-- 除了Detail页面不被缓存并且还要刷新，其他页面都会缓存 -->
    <keep-alive exclude="Detail">  
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
</style>
