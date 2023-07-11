<script setup lang="ts">
import mySlot from './mySlot.vue'
import {reactive, ref} from "vue";

let name = ref('footer')
</script>

<template>
  <div>
<!--    <my-slot>-->
<!--      <template v-slot:header>-->
<!--        <div>-->
<!--          我是父组件插入子组件header的具名插槽-->
<!--        </div>-->
<!--      </template>-->
<!--      <template v-slot="{data}">-->
<!--        <div>-->
<!--          {{data.name}}-{{data.age}}-->
<!--        </div>-->
<!--      </template>-->
<!--      <template v-slot:footer>-->
<!--        <div>-->
<!--          我是父组件插入子组件footer的具名插槽-->
<!--        </div>-->
<!--      </template>-->
<!--    </my-slot>-->
    <my-slot>
      <template #[name]>
        <div>
          我是父组件插入子组件footer的动态插槽
        </div>
      </template>
    </my-slot>
  </div>
</template>

<style scoped>

</style>