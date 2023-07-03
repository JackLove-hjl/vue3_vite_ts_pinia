<script setup lang="ts">

// 方式一,不使用ts
// const prop = defineProps({
//   name: {
//     type: String,
//     default: '默认值',
//   },
//   arr: {
//     type: Array,
//     default: []
//   }
// })
//
// console.log(prop.name, prop.arr)

// 方式二,使用ts
type Props = {
  name: string,
  arr: number[]
}
withDefaults(defineProps<Props>(),{
  name: '默认值',
  arr: () => [4,5,6]
})

//方式一，不使用ts
// const emit = defineEmits(['on-click'])
// const send = () => {
//   emit('on-click','我是子组件传过来的值')
// }

//方式二，使用ts
const emit = defineEmits<{
  (e:'on-click',value:string):void
}>()
const send = () => {
  emit('on-click','我是子组件传过来的值')
}

//给父组件暴露方法或变量
defineExpose({
  childExport: '我是子组件给父组件暴露的值',
  open: () => {
    return '111'
  }
})
</script>

<template>
<div>{{name}} - {{arr}}</div>
<button @click="send">给父组件传值</button>
</template>

<style scoped>

</style>