<template>

  <v-list v-if="todayTodos.length != 0">
   
       <v-list-subheader id="list-header">Today's Task</v-list-subheader>
        <v-list-item v-for="todo in todayTodos" :key="todo.id" class="tile">
           <template v-slot:prepend>
          <v-checkbox-btn @update:model-value="$emit('markComplete', todo.id, !todo.isCompleted,)" :style="{width:'50px'}"></v-checkbox-btn>
           </template>

         <v-list-item-title >
           <span :class="{ 'active': todo.isCompleted }">{{ todo.text }}</span>
         </v-list-item-title>
         
        <v-list-item-subtitle>
          <span :class="{ 'active': todo.isCompleted }">{{ todo.toDoDate }}</span>
        </v-list-item-subtitle>
       

       <template v-slot:append>
        <v-btn @click="$emit('removeTodo', todo.id)" color="red" class="btn">
          Remove
          <v-icon
          dark
          right
 >
          mdi-cancel
        </v-icon>
        </v-btn>
        <v-btn @click="$emit('editTodo', todo)" color="primary" class="btn">Edit Task</v-btn>

        </template>
    

      </v-list-item>

 </v-list>

   <v-list v-if="tommorrowTodo.length != 0">
   
       <v-list-subheader id="list-header">Tomorrow's Task</v-list-subheader>
        <v-list-item v-for="todo in tommorrowTodo" :key="todo.id" class="tile">
           <template v-slot:prepend>
          <v-checkbox-btn @update:model-value="$emit('markComplete', todo.id, !todo.isCompleted,)" :style="{width:'50px'}"></v-checkbox-btn>
           </template>

         <v-list-item-title >
           <span :class="{ 'active': todo.isCompleted }">{{ todo.text }}</span>
         </v-list-item-title>
         
        <v-list-item-subtitle>
          <span :class="{ 'active': todo.isCompleted }">{{ todo.toDoDate }}</span>
        </v-list-item-subtitle>
       

       <template v-slot:append>
        <v-btn @click="$emit('removeTodo', todo.id)" color="red" class="btn">
          Remove
          <v-icon
          dark
          right
 >
          mdi-cancel
        </v-icon>
        </v-btn>
        <v-btn @click="$emit('editTodo', todo)" color="primary" class="btn">Edit Task</v-btn>

        </template>

      </v-list-item>

 </v-list>




    <v-list v-if="futureTodo.length != 0">
   
       <v-list-subheader id="list-header">Future's Task</v-list-subheader>
        <v-list-item v-for="todo in futureTodo" :key="todo.id" class="tile">
           <template v-slot:prepend>
          <v-checkbox-btn @update:model-value="$emit('markComplete', todo.id, !todo.isCompleted,)" :style="{width:'50px'}"></v-checkbox-btn>
           </template>

         <v-list-item-title >
           <span :class="{ 'active': todo.isCompleted }">{{ todo.text }}</span>
         </v-list-item-title>
         
        <v-list-item-subtitle>
          <span :class="{ 'active': todo.isCompleted }">{{ todo.toDoDate }}</span>
        </v-list-item-subtitle>
       

       <template v-slot:append>
        <v-btn @click="$emit('removeTodo', todo.id)" color="red" class="btn">
          Remove
          <v-icon
          dark
          right
 >
          mdi-cancel
        </v-icon>
        </v-btn>
        <v-btn @click="$emit('editTodo', todo)" color="primary" class="btn">Edit Task</v-btn>

        </template>

      </v-list-item>

 </v-list>

  


</template>

<script>
export default {
  name: 'TodoList',
  emits: ['removeTodo', 'editTodo', 'markComplete'],
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

#list-header{
  font-weight: bold;
  font-size: 18px;
}

.active {
  text-decoration: line-through;
}
.btn{
  height: 30px;
  width: 100px;
  margin: 5px;
}
 .tile {
  height: 80px;
  width: 800px;

  border-radius: 10px;
  background-color:rgb(177, 203, 242);
}



.tile:active {
  background-color:gray;
}

@media only screen and (max-width: 700px) {
 
   .tile {
margin-left: 14px;
margin-top: 10px;
}
  }
</style>



<!-- <v-list v-if="tommorrowTodo.length != 0">
    <div>
      <span>Tommorow's Task</span>
      <v-list-item v-for="todo in tommorrowTodo" :key="todo.id" class="d-flex justify-space-between align-center">
        <span :class="{ 'active': todo.isCompleted }">{{ todo.text }}</span>
        <span :class="{ 'active': todo.isCompleted }">{{ todo.toDoDate }}</span>


        <v-btn @click="$emit('removeTodo', todo.id)" color="red" text>
          Remove
        </v-btn>
        <v-btn @click="$emit('editTodo', todo)" color="primary">Edit Task</v-btn>
        <v-btn @click="$emit('markComplete', todo.id, !todo.isCompleted,)" color="primary">

          <v-icon>
            {{ todo.isCompleted ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}
          </v-icon>
        </v-btn>

      </v-list-item>

    </div>



  </v-list> -->



  <!-- <v-list v-if="futureTodo.length != 0">
    <div>
      <span>Future's Task</span>
      <v-list-item v-for="todo in futureTodo" :key="todo.id" class="d-flex justify-space-between align-center">
        <span :class="{ 'active': todo.isCompleted }">{{ todo.text }}</span>
        <span :class="{ 'active': todo.isCompleted }">{{ todo.toDoDate }}</span>


        <v-btn @click="$emit('removeTodo', todo.id)" color="red" text>
          Remove
        </v-btn>
        <v-btn @click="$emit('editTodo', todo)" color="primary">Edit Task</v-btn>
        <v-btn @click="$emit('markComplete', todo.id, !todo.isCompleted,)" color="primary">

          <v-icon>
            {{ todo.isCompleted ? 'mdi-checkbox-marked' : 'mdi-checkbox-blank-outline' }}
          </v-icon>
        </v-btn>

      </v-list-item>

    </div>



  </v-list> -->