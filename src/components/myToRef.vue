<script setup lang="ts">
import { toRef, reactive, toRefs, toRaw } from 'vue'
//toRef只能修改响应式对象的值,非响应式视图没有变化,即只适用于响应式对象
//toRef只是把响应式对象某个属性单独提出来
//reactive响应式对象直接解构出来会失去响应式,要使用toRefs
//toRaw将响应式对象变成普通对象

const person = reactive({name: 'jack', age: 20})
const newName = toRef(person,'name')

let {name, age} = toRefs(person)
console.log(newName)

const newPerson = toRaw(person)
console.log(newPerson)
const change = () => {
  // person.name = 'rose'
  // newName.value = 'rose'
  // console.log(person)
  // console.log(newName)

  name.value = 'rose'
  age.value = 22
}
</script>

<template>
<div>原始:{{person.name}}</div>
<div>toRef:{{newName}}</div>
  <div>{{name}}--{{age}}</div>
  <button @click="change">改变</button>
</template>

<style scoped>

</style>