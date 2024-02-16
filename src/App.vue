<template>
  <NavComponent>
    <template #nav1xl>
      <router-link to="/" class=" text-white rounded-md px-3 py-2 text-sm font-medium">Home</router-link>
    </template>
    <template #nav2xl>
      <router-link to="/about" class=" text-white rounded-md px-3 py-2 text-sm font-medium">About</router-link>
    </template>
    <template #nav3xl>
      <!-- 傳送物件binding到to -->
      <router-link :to="{name : '饒特'}" class=" text-white rounded-md px-3 py-2 text-sm font-medium">Router</router-link>
    </template>
    <template #nav1>
      <router-link to="/" class=" text-white block rounded-md px-3 py-2 text-base font-medium">Home</router-link>
    </template>
    <template #nav2>
      <router-link to="/about" class=" text-white block rounded-md px-3 py-2 text-base font-medium">About</router-link>
    </template>
    <template #nav3>
      <!-- 傳送物件binding到to -->
      <router-link :to="{name : '饒特'}" class=" text-white block rounded-md px-3 py-2 text-base font-medium">Router</router-link>
    </template>
  </NavComponent>
  <router-view/>
</template>
<script>
import NavComponent from '@/components/NavComponent.vue'
export default {
  components: {
    NavComponent
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
