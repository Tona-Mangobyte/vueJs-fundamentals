<template>
  <div class="home">
    <h3>{{ myName }}</h3>
    <label for="message">Message:</label>
    <input name="message" ref="inputRef" type="text" v-model="message" />
    <br/>
    <label for="name">Name:</label>
    <input name="name" type="text" v-model="user.name" />
    <label for="name">Age:</label>
    <input name="name" type="number" v-model="user.age" />
  </div>
</template>

<script setup lang="ts">
import { ref, computed, reactive, shallowRef, shallowReactive, onBeforeMount, onMounted, onUpdated, watch } from 'vue'
import { useMyComposable } from '@/composables/useMyComposable'

const inputRef = ref(null)
const message = ref<string>('Hello')
const myName = computed<string>(
  () => `${message.value} World`
)
const user = reactive({
  name: 'John',
  age: 30
})
const user2 = shallowRef({
  name: 'John',
  age: 30
})
const user3 = shallowReactive({
  name: 'John',
  age: 30
})
console.log(user)
console.log(user2)
console.log(user3)
const myComposableData = useMyComposable()
console.log(myComposableData)
onBeforeMount(() => {
  console.log('beforeMount triggered')
})
onMounted(() => {
  console.log('component instance: ', inputRef.value)
})
onUpdated(() => {
  console.log('DOM instance after updated: ', inputRef.value)
})

/* watch(user, (newValue, oldValue) => {
  console.log('user changed from: ', oldValue, ' to: ', newValue)
}) */
/* watch(
  () => user.name,
  (newValue, oldValue) => {
    console.log('user.name changed from: ', oldValue, ' to: ', newValue)
  }
) */
watch(
  [() => user.name, () => user.age],
  ([newName, newAge], [oldName, oldAge]) => {
    console.log(
      'user changed from: ',
      { name: oldName, age: oldAge },
      ' to: ',
      { name: newName, age: newAge }
    )
  }
)
</script>
