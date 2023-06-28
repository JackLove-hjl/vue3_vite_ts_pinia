<script setup lang="ts">

import {ref, watchEffect} from "vue";

let msg1 = ref<string>('jack')
let msg2 = ref<string>('rose')

//watchEffect中使用的变量会自动监听变化
// oninvalidate会被先执行，可以在里面清除一些副作用
const stop = watchEffect((oninvalidate) => {
  console.log(msg1.value)
  // console.log(msg2);
  oninvalidate(() => {
    console.log('before')
  })
})

//停止监听
const stopWatch = () => stop()
</script>

<template>
  <div>
    <input type="text" v-model="msg1">
    <br>
    <input type="text" v-model="msg2">
    <br>
    <button @click="stopWatch">结束监听</button>
  </div>
</template>

<style scoped>

</style>