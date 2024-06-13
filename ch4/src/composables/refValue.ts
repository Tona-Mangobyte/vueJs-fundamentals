import { ref, Ref, reactive, toValue } from 'vue'

interface Counter {
  count: number
}
export function useRefValue () {
  const count:Ref<number> = ref<number>(1)
  const obj: Counter = reactive({ count })

  // ref will be unwrapped
  console.log(obj.count === count.value) // true

  // it will update `obj.count`
  count.value++
  console.log('count', toValue(count.value)) // 2
  console.log('obj', toValue(obj.count)) // 2

  // it will also update `count` ref
  obj.count++
  console.log('obj', toValue(obj.count)) // 3
  console.log('count', toValue(count.value)) // 3
}
