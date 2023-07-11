<script setup lang="ts">
import 'animate.css'

import {ref} from "vue";

let flag = ref<boolean>(true)
</script>

<template>
  <div>
    <button @click="flag = !flag">switch</button>
    <transition :duration="1000" leave-active-class="animate__animated animate__fadeOut" enter-active-class="animate__animated animate__fadeIn" name="fade">
      <div class="box" v-if="flag"></div>
    </transition>

  </div>
</template>

<style scoped>
.box {
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>