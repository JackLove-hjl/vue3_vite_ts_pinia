import {defineComponent, ref} from 'vue'

//1.optionsApi
// export default defineComponent({
//     data() {
//         return {
//             name: 'jack'
//         }
//     },
//
//     render() {
//         return (
//             <div>{this.name}</div>
//         )
//     }
// })

// 2.setup 函数模式
//ref template自动解包.value，tsx并不会
//支持v-show，但不支持v-if
//v-bind 使用{}代替
//props emit
//slot插槽
//v-model

const A = (_,{slots}) => (
    <>
        <div>{slots.default ? slots.default() : '默认值'}</div>
    </>
)
interface Props {
    name?:string
}
export default defineComponent({
    props: {
      name: String
    },
    emits:['on-click'],
    setup (props: Props,{emit}) {
        const flag = ref(false)
        const data = [
            {
                name: 'jack1'
            },
            {
                name: 'jack2'
            },
            {
                name: 'jack3'
            },
        ]
        const fn = (index:number) => {
            console.log('点击了'+index)
            emit('on-click',index)
        }

        const slot = {
            default: () => (
                <div>default slots</div>
            )
        }
        let v = ref<string>('123')
        return () => (
            <>
                <input v-model={v.value} type="text"/>
                <div>{v.value}</div>
                <hr/>
                <A v-slots={slot}></A>
                <hr/>
                <div v-show={flag.value}>jacklove setup</div>
                <div>props:{props.name}</div>
                {data.map((value,index) => {
                    return (
                        <div onClick={() => fn(index)} name={value.name}>{value.name}</div>
                    )
                })}
            </>
        )
    }
})