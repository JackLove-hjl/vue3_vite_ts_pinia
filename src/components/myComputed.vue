<script setup lang="ts">
import {computed, reactive, ref} from "vue";

let firstName = ref('张')
let lastName = ref('三')

//1.选项式写法，支持一个对象传入get和set自定义操作
let name = computed<string>({
  get() {
    return firstName.value + '-' + lastName.value
  },
  set(newVal) {
    let [f,l] = newVal.split('-')
    firstName.value = f
    lastName.value = l
  }
})

//2.函数式写法，只支持getter，不允许修改值
let _name = computed(() => firstName.value + '-' + lastName.value)
const change = () => {
  name.value = '李-四'

  //不允许修改
  // _name.value = '李-四'
}

type Data = {
  name: string,
  price: number,
  num: number,
}
let keyWord = ref<string>("")
let data = reactive<Data[]>([
  {
    name: '绿帽子',
    price: 10,
    num: 1
  },
  {
    name: '红帽子',
    price: 50,
    num: 1
  },
  {
    name: '黑短裤',
    price: 30,
    num: 1
  },
])

const total = computed(() => {
  return data.reduce((prev: number,next: Data) => {
    return prev + next.price * next.num
  },0)
})

const del = (index: number) => {
  return data.splice(index, 1)
}

const searchData = computed(() => {
  return data.filter((item: Data) => {
    return item.name.includes(keyWord.value)
  })
})

</script>

<template>
  <div>{{name}}</div>
  <div>{{_name}}</div>
  <button @click="change">更改</button>
  <br>

  <div>
    <div>
      <input type="text" placeholder="搜索" v-model="keyWord">
    </div>
    <div style="margin-top: 20px">
      <table border width="600" cellpadding="0" cellspacing="0">
        <thead>
        <tr>
          <th>物品名称</th>
          <th>物品单价</th>
          <th>物品数量</th>
          <th>物品总价</th>
          <th>操作</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(item, index) in searchData">
          <td>{{item.name}}</td>
          <td>{{item.price}}</td>
          <td>
            <button @click="item.num > 1 ? item.num -- : null">-</button>
            {{item.num}}
            <button @click="item.num ++">+</button>
          </td>
          <td>{{item.price * item.num}}</td>
          <td><button @click="del(index)">删除</button></td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
          <td colspan="5" align="right">总价：{{total}}</td>
        </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<style scoped>

</style>