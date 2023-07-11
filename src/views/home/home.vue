<script setup lang="ts">
// import Counter from '../../components/Counter.vue'
// import User from '../../components/User.vue'
// import myRef from '../../components/myRef.vue'
// import myReactive from '../../components/myReactive.vue'
// import myToRef from '../../components/myToRef.vue'
// import myComputed from '../../components/myComputed.vue'
// import myWatch from '../../components/myWatch.vue'
// import myWatchEffect from '../../components/myWatchEffect.vue'
// import Layout from '../../components/Layout/index.vue'
// import myChild from '../../components/myChild.vue'
// import tree from '../../components/Tree/Tree.vue'
// import myComp from '../../components/dymicComp/index.vue'
// import Dialog from '../../components/Slot/index.vue'
// import myTransition from '../../components/transition/index.vue'
// import myMitt from '../../components/Mitt/index.vue'
import myTsx from '../../components/myTsx.vue'
import {onMounted, ref} from "vue";

// const name = ref('jack')
//
// const getName = (value:string) => {
//   console.log(value)
// }
//
// const child = ref<InstanceType<typeof myChild>>()
//
// onMounted(() => {
//   console.log(child.value.childExport)
//   console.log(child.value.open())
// })
</script>

<template>
<!--  <my-child ref="child" :name="name" :arr="[1,2,3]" @on-click="getName"/>-->
<!--  <my-comp />-->
<!--  <Dialog />-->
<!--  <my-transition></my-transition>-->
<!--  <my-mitt></my-mitt>-->
  <my-tsx></my-tsx>
</template>

<style lang="scss">
#app {
  @include bfc;
}
</style>