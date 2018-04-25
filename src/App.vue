<template>
  <div id="app">
    <img src="./assets/logo.png">
    <BlogPosts />
  </div>
</template>

<script>
import BlogPosts from '@/components/blog/BlogPosts'

export default {
  name: 'App',
  components: {
    BlogPosts
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
