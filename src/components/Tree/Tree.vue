<script setup lang="ts">
import {reactive} from "vue";
import TreeItem from './TreeItem.vue'
interface Tree {
  name: string,
  checked: boolean,
  children?: Tree[]
}

const data = reactive<Tree[]>([
  {
    name: '1',
    checked: false,
    children: [
      {
        name: '1-1',
        checked: false,
      },
      {
        name: '1-2',
        checked: false,
        children: [
          {
            name: '1-2-1',
            checked: true,
          }
        ]
      }
    ]
  },
  {
    name: '1',
    checked: false
  },
  {
    name: '1',
    checked: false
  },
])
</script>

<template>
  <tree-item :data="data"/>
</template>

<style scoped>

</style>