<script setup lang="ts">
import {storeToRefs} from 'pinia'
import useUser from '../store/user'

const userStore = useUser()

const {name,age} = storeToRefs(userStore)

//直接修改stats中的数据
const updateStore1 = () => {
    userStore.name = "zimo"
    userStore.age = 20
}

//通过$patch修改
const updateStore2 = () => {
    userStore.$patch({
        name: "zimo",
        age: 20
    })
}

const reset = () => {
    userStore.$reset()
}
</script>

<template>
    <div>
        <h2>名字是：{{name}}</h2>
        <h2>年龄是：{{age}}</h2>
        <button @click="updateStore1">直接修改Store数据</button>
        <button @click="updateStore2">$patch修改Store数据</button>
        <button @click="reset">reset Store数据</button>
    </div>
</template>

<style scoped>
</style>