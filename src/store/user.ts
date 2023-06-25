//定义一个关于user的store
import {defineStore} from 'pinia'

const useUser = defineStore("user",{
    state:()=>({
        name:"紫陌",
        age:18
    })
})

export default useUser
