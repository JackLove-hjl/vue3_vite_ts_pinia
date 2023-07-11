<script setup lang="ts">
import tsx from '../App'

const getIndex = (index:number) => {
  console.log('收到了',index)
}
</script>

<template>
  <tsx @on-click="getIndex" name="jack props"></tsx>
</template>

<style scoped>

</style>