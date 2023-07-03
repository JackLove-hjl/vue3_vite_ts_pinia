<script setup lang="ts">
import A from './A.vue'
import B from './B.vue'
import C from './C.vue'
import {reactive, ref, shallowRef} from "vue";

const data = reactive([
  {
    name: 'A组件',
    comp: shallowRef(A),
  },
  {
    name: 'B组件',
    comp: shallowRef(B),
  },
  {
    name: 'C组件',
    comp: shallowRef(C),
  },
])

let active = ref(0)
let compId = shallowRef(A)
const switchComp = (item, index) => {
  compId.value = item.comp
  active.value = index
}
</script>

<template>
  <div style="display: flex">
    <div @click="switchComp(item, index)" :class="[active == index ? 'active' : '']" class="tabs" v-for="(item,index) in data">
      <div>{{item.name}}</div>
    </div>
  </div>
  <component :is="compId"></component>
</template>

<style scoped>
.tabs {
  border: 1px solid #ccc;
  padding: 5px 10px;
  margin: 5px;
  cursor: pointer;
}
.active {
  background-color: skyblue;
}
</style>