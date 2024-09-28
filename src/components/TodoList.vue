<template>
  <v-list>
    <v-list-item
      v-for="todo in todos"
      :key="todo.id"
      class="d-flex justify-space-between align-center"
    >
      <span :class="{ 'active': todo.isCompleted }" >{{ todo.text }}</span>

      <v-btn @click="$emit('removeTodo', todo.id)" color="red" text>
        Remove
      </v-btn>
      <v-btn  @click="$emit('editTodo',todo)" color="primary">Edit Task</v-btn>
      <v-btn  @click="$emit('markComplete',todo.id, !todo.isCompleted,)" color="primary" >

         <v-icon>
      {{ todo.isCompleted ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}
    </v-icon>
      </v-btn>
    
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: 'TodoList',
  props: {
    todos: {
      type: Array,
      required: true,
    },
  },
  
 
};
</script>

<style scoped>
.active {
  text-decoration: line-through;
}
</style>
