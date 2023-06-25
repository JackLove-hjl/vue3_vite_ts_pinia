<script setup lang="ts">
import { reactive, readonly, shallowReactive} from 'vue'
//reactive只支持引用类型 Array Object Map Set,不需要加.value
//ref支持所有类型,取值赋值都需要加.value
//readonly将一个reactive对象变成一个只读的
//shallowRef浅层响应式
//reactive 数组异步赋值会导致页面脱离响应式
//解决方案一: 使用解构+push
let team = reactive<string[]>([])
//解决方案二: 包裹一层对象
type Team = {
  list?: Array<string>
}
let team2 = reactive<Team>({
  list: []
})

//reactive 数组异步赋值会导致页面脱离响应式
const add = () => {
  setTimeout(() => {
    team = ['EDG','RNG','JDG']
    console.log(team)
  },1000)
}

//解决方案一: 使用解构+push
const add2 = () => {
  setTimeout(() => {
    const arr = ['EDG','RNG','JDG']
    team.push(...arr)
    console.log(team)
  },1000)
}

//解决方案二: 包裹一层对象
const add3 = () => {
  setTimeout(() => {
    const arr = ['EDG','RNG','JDG']
    team2.list = arr
    console.log(team2)
  },1000)
}
</script>

<template>
  <div>
    <ul>
      <li v-for="item in team">{{item}}</li>
      <li v-for="item in team2.list">{{item}}</li>
    </ul>
      <button @click.prevent="add">异步赋值</button>
      <button @click.prevent="add2">解构+push</button>
      <button @click.prevent="add3">包裹一层对象</button>
  </div>
</template>

<style scoped>

</style>