<script setup lang="ts">

import {getCurrentInstance} from "vue";

const instance = getCurrentInstance() as any

const Bus = (msg:any) => {
  console.log(msg)
}
instance?.proxy.$Bus.on('on-event',Bus)

const cencel = () => {
  instance?.proxy.$Bus.off('on-event',Bus)
}

const cencelAll = () => {
  instance?.proxy.$Bus.all.clear()
}
</script>

<template>
  <div>
    <h1>我是B</h1>
    <button @click="cencel">取消事件</button>
    <button @click="cencelAll">取消所有事件</button>
  </div>
</template>

<style scoped>

</style>