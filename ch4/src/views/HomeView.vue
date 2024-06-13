<script lang="ts" setup>
import { ref, inject, onMounted, computed, Ref, provide } from 'vue'
import SimpleForm from '../components/SimpleForm.vue'
import SimpleCounter from '../components/SimpleCounter.vue'
import SimplePerson from '../components/SimplePerson.vue'
import { useRefValue } from '@/composables/refValue'

interface SimpleCallback {
  incrementCallback: () => void
}

useRefValue()

// Dependency Injection
provide('say', 'Hello from Home')
provide('form', 'Form Auth')

const val = ref(0)
const actionCounter: Ref<SimpleCallback | null> = ref(null)

const computedVal = computed(() => val.value + 2)

const count = ref(1)
const plusOne = computed({
  get: () => count.value + 1,
  set: (val) => {
    count.value = val - 1
  }
})
plusOne.value = 1
console.info('plusOne: ', count.value) // 0

onMounted(() => {
  console.log('Home view mounted')
})
</script>
<template>
  <div class="home">
    <h1>{{ inject('say') }}</h1>
    <h3>{{ computedVal }}</h3>
    <SimpleForm>
      <input type="text" name="user" ref="user" />
      <button type="submit">Submit</button>
    </SimpleForm>
    <SimplePerson title="Counter" description="make simple" />
    <SimpleCounter ref="actionCounter" />
    <button @click="() => {
      // console.log(actionCounter)
      if(actionCounter?.incrementCallback) {
        actionCounter.incrementCallback()
      }
    }">Click</button>
  </div>
</template>
