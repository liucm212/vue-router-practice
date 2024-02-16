<template>
  <div class="p-4">
    <h2 class="text-4xl font-bold">具名router-view（左右各一個）</h2>
    <div class="flex flex-row mt-5">
      <div class="basis-1/2 border rounded">
        <router-view name="left" class="p-3"></router-view>
      </div>
      <div class="basis-1/2 border">
        <router-view name="right" class="p-3"></router-view>
      </div>
    </div>
  </div>
</template>
