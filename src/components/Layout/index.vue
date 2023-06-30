<script setup lang="ts">
import Menu from './Menu/index.vue'
import Header from './Header/index.vue'
import Content from './Content/index.vue'


</script>

<template>
  <div class="el-box">
    <div><Menu></Menu></div>
    <div class="el-box__right">
      <Header></Header>
      <Content></Content>
    </div>
  </div>
</template>

<style scoped lang="scss">
@include b(box) {
  @include bfc;
  display: flex;
  @include e(right) {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
}
</style>