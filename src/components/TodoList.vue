<template>

  <v-list v-if="todayTodos.length!=0">
    <div>
     <span>Today's Task</span>
        <v-list-item
      v-for="todo in todayTodos"
      :key="todo.id"
      class="d-flex justify-space-between align-center"
    >
      <span :class="{ 'active': todo.isCompleted }" >{{ todo.text }}</span>
      <span :class="{ 'active': todo.isCompleted }" >{{ todo.toDoDate}}</span>
     
      
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

    </div>
    
  
    
  </v-list>

   <v-list v-if="tommorrowTodo.length!=0" >
    <div>
     <span>Tommorow's Task</span>
        <v-list-item
      v-for="todo in tommorrowTodo"
      :key="todo.id"
      class="d-flex justify-space-between align-center"
    >
      <span :class="{ 'active': todo.isCompleted }" >{{ todo.text }}</span>
      <span :class="{ 'active': todo.isCompleted }" >{{ todo.toDoDate}}</span>
     
      
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

    </div>
    
  
    
  </v-list>


  <v-list v-if="futureTodo.length!=0">
    <div>
     <span>Future's Task</span>
        <v-list-item
      v-for="todo in futureTodo"
      :key="todo.id"
      class="d-flex justify-space-between align-center"
    >
      <span :class="{ 'active': todo.isCompleted }" >{{ todo.text }}</span>
      <span :class="{ 'active': todo.isCompleted }" >{{ todo.toDoDate}}</span>
     
      
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

    </div>
    
  
    
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
    todayTodos: {
    type: Array,
    required: true,
    },
    tommorrowTodo: {
    type: Array,
    required: true,  
    },
    futureTodo: {
    type: Array,
    required: true,
    }
                  
    
    
  },
};
</script>

<style scoped>
.active {
  text-decoration: line-through;
}
</style>
