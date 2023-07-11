<script setup lang="ts">
import {getCurrentInstance} from 'vue'

const instance = getCurrentInstance() as any


const emit = () => {
  instance?.proxy.$Bus.emit('on-event','mitt')
}


</script>

<template>
  <div>
    <h1>我是A</h1>
    <button @click="emit">emit</button>

  </div>
</template>

<style scoped>

</style>