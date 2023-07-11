<script setup lang="ts">

import {ref} from "vue";
import _ from 'lodash'

let list = ref(Array.apply(null,{length: 81} as number[]).map((_,index) => {
  return {
    id: index,
    number: (index % 9) + 1
  }
}))

const random = () => {
  list.value = _.shuffle(list.value)
}
console.log(list.value)

</script>

<template>
  <div>
    <button @click="random">random</button>
    <transition-group move-class="move" class="wrap" tag="div">
      <div class="items" v-for="item in list" :key="item.id">{{item.number}}</div>
    </transition-group>
  </div>
</template>

<style scoped lang="scss">
.wrap {
  display: flex;
  flex-wrap: wrap;
  width: calc(25px * 10 + 9px);
  .items {
    width: 25px;
    height: 25px;
    border: 1px solid #ccc;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}

.move {
  transition: all 1s;
}
</style>