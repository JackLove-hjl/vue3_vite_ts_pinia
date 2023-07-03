<script setup lang="ts">
interface Tree {
  name: string,
  checked: boolean,
  children?: Tree[]
}
defineProps<{
  data?: Tree[]
}>()

const clickTap = (item, e) => {
  console.log(item, e)
}
</script>

<template>
  <div v-for="item in data" class="tree" @click.stop="clickTap(item, $event)">
    <input v-model="item.checked" type="checkbox">
    <span>{{item.name}}</span>
    <!--    全局注册的组件-->
    <tree v-if="item?.children?.length" :data="item.children"/>
  </div>
</template>

<style scoped>
.tree {
  margin-left: 10px;
}
</style>