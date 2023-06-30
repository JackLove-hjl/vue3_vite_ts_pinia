<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />

<!--  <div class="el-test">-->
<!--    jacklove-->
<!--    <div class="el-test__inner">el</div>-->
<!--    <div class="el-test&#45;&#45;success">test</div>-->
<!--  </div>-->
</template>

<style scoped lang="scss">
@include b(test) {
  color: red;
  @include e(inner) {
    color: blue;
  }
  @include m(success) {
    color: green;
  }
}
</style>
