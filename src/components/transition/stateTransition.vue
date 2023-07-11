<script setup lang="ts">
import gasp from "gsap"
import {reactive, watch} from "vue";

const num = reactive({
  current: 0,
  tweenedNumber: 0
})

watch(() => num.current, (newVal, oldVal) => {
  gasp.to(num, {
    duration: 1,
    tweenedNumber: newVal
  })
})
</script>

<template>
  <div>
    <input v-model="num.current" type="number" step="20">
    <div>{{num.tweenedNumber.toFixed(0)}}</div>
  </div>
</template>

<style scoped>

</style>