<script setup lang="ts">

import {ref} from "vue";

let flag = ref<boolean>(true)


//transition组件生命周期函数
const enterFrom = (el: Element) => {
  console.log('进入之前')
}

const enterActive = (el: Element, done: Function) => {
  console.log('进入过度曲线')
  setTimeout(() => {
    done()
  },2000)
}

const enterTo = (el: Element) => {
  console.log('进入过渡完成')
}

const enterCenter = () => {
  console.log('进入过渡效果被打断')
}

const leaveFrom = (el: Element) => {
  console.log('离开之前')
}

const leaveActive = (el: Element, done: Function) => {
  console.log('离开过度曲线')
  setTimeout(() => {
    done()
  },2000)
}

const leaveTo = (el: Element) => {
  console.log('离开过渡完成')
}

const leaveCenter = () => {
  console.log('离开过渡效果被打断')
}

</script>

<template>
  <div>
    <button @click="flag = !flag">switch</button>
    <transition
        name="fade"
        appear
        @before-enter="enterFrom"
        @enter="enterActive"
        @after-enter="enterTo"
        @enter-cancelled="enterCenter"
        @before-leave="leaveFrom"
        @leave="leaveActive"
        @after-leave="leaveTo"
        @leave-cancelled="leaveCenter"
    >
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

/* 从隐藏到显示的过渡*/
.fade-enter-from {
  width: 0;
  height: 0;
}

.fade-enter-active {
  transition: all 2s ease;
}

.fade-enter-to {
  width: 200px;
  height: 200px;
  transform: rotate(-90deg);
}

/* 从显示到隐藏的过渡*/
.fade-leave-from {
  width: 200px;
  height: 200px;
}

.fade-leave-active {
  transition: all 2s ease;
}

.fade-leave-to {
  width: 0;
  height: 0;
  transform: rotate(90deg);
}
</style>