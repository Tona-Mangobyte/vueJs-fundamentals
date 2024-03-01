<template>
  <ul style="list-style: none;">
    <li v-for="task in tasks" :key="task.id">
      <ToDoItem :task="task" @task-completed-toggle="onTaskCompleted"/>
    </li>
  </ul>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import ToDoItem from '@/components/ToDoItem.vue'
import { Task } from '@/interfaces/task'

export default defineComponent({
  name: 'ToDoList',
  components: {
    ToDoItem
  },
  data () {
    return {
      tasks: [
        { id: 1, title: 'Learn Vue', completed: false },
        { id: 2, title: 'Learn TypeScript', completed: false },
        { id: 3, title: 'Learn Vite', completed: false }
      ] as Task[]
    }
  },
  methods: {
    onTaskCompleted (task: Task) {
      // console.log(task)
      const index = this.tasks.findIndex(t => t.id === task.id)
      this.tasks[index] = task
    }
  }
})
</script>
