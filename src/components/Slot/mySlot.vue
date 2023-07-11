<script setup lang="ts">
import {reactive} from "vue";

type names = {
  name: string,
  age: number
}

const data = reactive<names[]>([
  {
    name: '插槽1',
    age: 20
  },
  {
    name: '插槽2',
    age: 21
  },
  {
    name: '插槽3',
    age: 22
  },
  {
    name: '插槽4',
    age: 23
  },
])
</script>

<template>
  <div>
    <header class="header">
      <slot name="header"></slot>
    </header>
    <main class="main">
      <div>作用域插槽</div>
      <div v-for="item in data">
        <slot :data="item"></slot>
      </div>
    </main>
    <footer class="footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<style scoped>
.header {
  height: 200px;
  background: red;
  color: #fff;
}

.main {
  height: 200px;
  background: green;
  color: #fff;
}

.footer {
  height: 200px;
  background: blue;
  color: #fff;
}
</style>