<script setup lang="ts">
import {ref, shallowRef, triggerRef, customRef, onMounted} from 'vue'

//ref 深层次响应式,不要和shallowRef一起使用
//shallowRef 浅层次响应式,如果有ref,则shallowRef也会变成深层次响应式
//triggerRef会强制更新收集依赖
//customRef将触发依赖和收集依赖交给用户去自定义

// const man = ref({name: 'jack', age: 20})
const man2 = shallowRef({name: 'rose', age: 18})
console.log(man2)
const obj = MyRef<string>('我叫jack') //也是一个ref对象
console.log(obj)
const dom = ref() //变量名与template元素中ref名称相同


const change = () => {
  // man.value.name = 'kobe'
  man2.value.name = 'ming'
  triggerRef(man2)
  obj.value = '我叫love'
}

function MyRef<T>(value: T) {
  return customRef((track, trigger) => {
    return {
      get () {
        //收集依赖
        track()
        return value
      },
      set (newVal) {
        value = newVal
        //触发依赖
        trigger()
      }
    }
  })
}

onMounted(() => {
  console.log(dom)
})
</script>

<template>
<!--  <div>ref: {{ man }}</div>-->
  <br>
  <div>shallowRef: {{ man2 }}</div>
  <br>
  <div>customRef: {{obj}}</div>
  <div ref="dom">我是dom元素</div>
  <button @click="change">更改</button>
</template>

<style scoped>

</style>