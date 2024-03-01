<template>
  <div>
    <input
      type="checkbox"
      :checked="task.completed"
      @change="onTaskCompleted"
    />
    <span>{{ task.title }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { Task } from '@/interfaces/task'

export default defineComponent({
  name: 'ToDoItem',
  props: {
    task: {
      type: Object as PropType<Task>,
      required: true
    }
  },
  methods: {
    onTaskCompleted (event: Event) {
      this.$emit('task-completed-toggle', {
        ...this.task,
        completed: (event.target as HTMLInputElement)?.checked
      })
    }
  }
})
</script>
