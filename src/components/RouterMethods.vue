<template>
  <!-- router method -->
  <div>
    <h3 class="text-3xl font-bold">$route : 目前router的屬性值</h3>
    <button
    @click="clickRoute"
    class="my-10 middle none center mr-3 rounded-lg border border-pink-500 py-3 px-6 font-sans text-md font-bold text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
    data-ripple-dark="true">
    顯示$route內容
    </button>
    <div class="p-10">{{ route }}</div>
    <hr/>
    <h3 class="mt-10 text-3xl font-bold">$router : 呼叫router的方法們</h3>
    <div class="flex flex-wrap gap-y-5 my-10">
      <!-- push -->
      <button
      @click="push"
      class="middle none center mr-3 rounded-lg border border-pink-500 py-3 px-6 font-sans text-md font-bold text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      data-ripple-dark="true">
      到DynamicRouter去！
      </button>
      <!-- replace -->
      <button
      @click="replace"
      class="middle none center mr-3 rounded-lg border border-pink-500 py-3 px-6 font-sans text-md font-bold text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      data-ripple-dark="true">
      取代目前頁面（不留紀錄）
      </button>
      <!-- go -->
      <button
      @click="go(-1)"
      class="middle none center mr-3 rounded-lg border border-pink-500 py-3 px-6 font-sans text-md font-bold text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      data-ripple-dark="true">
      回到上一頁
      </button>
      <button
      @click="go(1)"
      class="middle none center mr-3 rounded-lg border border-pink-500 py-3 px-6 font-sans text-md font-bold text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      data-ripple-dark="true">
      回到下一頁
      </button>
      <!-- addRouter -->
      <button
      @click="addRoute"
      class="middle none center mr-3 rounded-lg border border-pink-500 py-3 px-6 font-sans text-md font-bold text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      data-ripple-dark="true">
      新增一個newRouter的router!(新增後再點選sidebar中的New Router)
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showRouteTemplate: false,
      route: {}
    }
  },
  methods: {
    clickRoute () {
      this.route = this.$route
    },
    push () {
      // 也可以用route.name做指向
      const randomNumber = Math.ceil(Math.random() * 999999999)
      console.log('push')
      this.$router.push(`/dynamicRouter/${randomNumber}`)
    },
    replace () {
      console.log('replace : like push(), but no history.')
      const randomNumber = Math.ceil(Math.random() * 999999999)
      console.log('push')
      this.$router.replace(`/dynamicRouter/${randomNumber}`)
    },
    go (number) {
      console.log('go')
      this.$router.go(number)
    },
    addRoute () {
      console.log('add router')
      this.$router.addRoute(
        {
          path: '/newRouter',
          name: 'newRouter',
          component: () => import('../views/newRouter.vue')
        }
      )
    }
  }
}
</script>
