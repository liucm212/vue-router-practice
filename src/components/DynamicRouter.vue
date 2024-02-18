<template>
  <div class="container mx-auto mt-20">
    <h2 class="text-4xl font-bold">可以做「多個person的card rendering」</h2>
    <p class="mt-10 text-gray-500">這頁的最後的<span class="text-red-500">數字</span>可以換換看，會跳出不同的人(記得refresh)</p>
    <div class="mt-20">
      <div v-if="userData.location" class="hover:bg-gray-300 transition-colors relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
        <div class="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
            :src="userData.img"
            alt="img-blur-shadow"
            class="object-cover object-center w-full transform -translate-y-1/4"
          />
        </div>
        <div class="p-6">
          <h5 class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
            {{userData.name}}
          </h5>
          <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
            {{userData.location.country}} {{ userData.location.city }}
          </p>
        </div>
        <div class="p-6 pt-0">
          <button
            class="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            More About {{ userData.name }}
          </button>
        </div>
      </div>
    </div>
    <!-- <div v-if="userData.location" class="card" style="width: 18rem;">
      <img :src="userData.img" class="card-img-top object-fit" :alt="userData.name">
      <div class="card-body">
        <h5 class="card-title">{{userData.name}}</h5>
        <p class="card-text">{{ userData.location.country }}</p>
        <p class="card-text">{{ userData.location.city }}</p>
        <a href="#" class="btn btn-primary">Add As Friend</a>
      </div>
    </div> -->
  </div>
</template>

<script>
// import axios
import axios from 'axios'
export default {
  data () {
    return {
      userData: {},
      seed: ''
    }
  },
  created () {
    this.seed = this.$route.params.seed
    axios.get(`https://randomuser.me/api/?seed=${this.seed}`).then((res) => {
      const tempData = res.data.results[0]
      console.log(tempData)
      this.userData = {
        name: `${tempData.name.first} ${tempData.name.last}`,
        img: tempData.picture.large,
        location: {
          country: tempData.location.country,
          city: tempData.location.city
        }
      }
    })
  }
}
</script>
