//定义关于counter的store
import {defineStore} from 'pinia'
import useUser from "./user"

/*defineStore 是需要传参数的，其中第一个参数是id，就是一个唯一的值，
简单点说就可以理解成是一个命名空间.
第二个参数就是一个对象，里面有三个模块需要处理，第一个是 state，
第二个是 getters，第三个是 actions。
*/
const useCounter = defineStore("counter",{
    state:() => ({
        count:66,
        list: null
    }),
    persist: {
        enabled: true, // 开启缓存  默认会存储在本地localstorage
        strategies: [
            {
              // 自定义key
              key: 'countInfo',
              // 自定义存储方式，默认sessionStorage
              storage: sessionStorage,
              // 指定要持久化的数据，默认所有 state 都会进行缓存，可以通过 paths 指定要持久化的字段，其他的则不会进行持久化。
              paths: ['count']
            }
          ]
    },
    
    getters:{
        //getter类似vue中的computed
        //getter中this和state都是指向当前实例
        doubleCount(state) {
            return state.count * 2
        },
        doubleCountAddTwo(): number{
            return this.doubleCount + 2
        },
        //getters中用别的store中的数据
        showMessage(state){
            //获取user信息，拿到useUser模块
            const userStore = useUser()
            return `name：${userStore.name}--count:${state.count}`
        }
    },

    actions:{
        //actions没有state，只能通过this拿store
        //异步和同步都是在actions中处理
        increment(){
            this.count++
        },
        incrementNum(num: number){
            this.count += num
        },
        async axiosData(){
            const res: any = await fetch("http://-----------------")
            if(res.code == 200){
                //收到数据保存到store
                this.list = res.data.list
                return "ok"
            }
        }
    }
})

//暴露这个useCounter模块
export default useCounter
