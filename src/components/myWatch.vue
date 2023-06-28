<script setup lang="ts">
import {reactive, ref, watch} from "vue";

let msg1 = ref('jack')
let msg2 = ref('rose')
let msg3 = reactive({
  foo: {
    bar: {
      name:'jack',
      age: 22
    }
  }
})
//可以监听多个源
watch([msg1,msg2],([newVal1,newVal2],[oldVal1,oldVal2]) => {
  console.log(newVal1,oldVal1)
  console.log(newVal2,oldVal2)
})

//reactive定义的变量默认开启深度监听
//ref定义的变量默认不开启
// watch(msg3,(newVal, oldValue) => {
//   console.log(newVal, oldValue)
// },{
//   deep: true //深度监听
// })

// 只监听对象某一个属性,把源变成一个函数
watch(() => msg3.foo.bar.name,(newVal, oldValue) => {
  console.log(newVal, oldValue)
},{
  immediate: true, //立即执行一次，默认为false
  flush: 'pre' //pre组件更新之前调用， sync同步执行  post组件更新之后调用
})
</script>

<template>
<div>
  <input type="text" v-model="msg1">
  <br>
  <input type="text" v-model="msg2">
  <br>
  <input type="text" v-model="msg3.foo.bar.name">
  <br>
  <input type="text" v-model="msg3.foo.bar.age">
</div>
</template>

<style scoped>

</style>