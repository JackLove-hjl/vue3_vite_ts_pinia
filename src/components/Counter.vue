<script setup lang="ts">
import {storeToRefs} from 'pinia'
// 首先需要引入一下我们刚刚创建的store
import useCounter from '../store/counter'
// 因为是个方法，所以我们得调用一下
const counterStore = useCounter()

//解构出来的值失去响应式
// let {count} = counterStore

//使用storeToRefs
let { count } = storeToRefs(counterStore)

const addCount = () => {
	counterStore.count ++
}

const changeState = () => {
	  counterStore.increment()
}
const incrementNum = () => {
  counterStore.incrementNum(20)
}

// counterStore.axiosData().then(res =>{
//   console.log("成功",res);
// })
</script>

<template>
  <div>展示pinia的counter的count值：{{counterStore.count}}</div>
  <div>展示解构出来的pinia的counter的count值：{{count}}</div>
  <button @click="addCount">count+1</button>
  <h1>getters的使用</h1>
  <h2>doubleCount:{{counterStore.doubleCount}}</h2>
  <h2>doubleCountAddTwo:{{counterStore.doubleCountAddTwo}}</h2>
  <h2>showMessage:{{counterStore.showMessage}}</h2>
  <button @click="changeState">count+1</button>
  <button @click="incrementNum">count+20</button>
</template>

<style scoped>

</style>
