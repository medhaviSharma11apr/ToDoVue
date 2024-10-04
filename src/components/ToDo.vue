<template>
  <v-app class="">
    <v-container class="m-5">
      <v-row>
        <v-col cols="12">
          <h1 class="text-center">ADD TODO</h1>
          <!-- Input form to add a new todo -->
          <TodoInput @addTodo="handleAddTodo" />
        </v-col>

        <!-- Todo List -->
        
        <v-col  >
                <TodoList
                  :todos="todos"
                  :todayTodos="todayTodos"
                  :tommorrowTodo="tommorrowTodo"
                  :futureTodo="futureTodo"
                  @removeTodo="removeTodo2"
                  @editTodo="openModal" 
                  @markComplete="markComplete2"
                />
        </v-col>
      </v-row>
    </v-container>

    <!-- Edit Todo Modal -->
              <TodoModal
                :dialog="dialog"
                :modalData="modalData"
                :modalId="modalId"
                :isCompleted="isCompleted"
                @close="dialog = false"
                @save="editTodo2"
                @markComplete="markComplete2"
                />

  </v-app>
</template>

<script>
import { ref } from 'vue';
import { mapGetters, mapActions } from 'vuex';
import TodoInput from './TodoInput.vue';
import TodoList from './TodoList.vue';
import TodoModal from './TodoModal.vue';

export default {
  name: 'TodoApp',
  components: {
    TodoInput,
    TodoList,
    TodoModal,
  },
  setup() {
   

    const dialog = ref(false);
    const modalData = ref('');
    const modalId = ref('');
    const isCompleted = ref(false)

  
    
    
    function openModal(todo) {
      modalData.value = todo.text;
      modalId.value = todo.id;
      dialog.value = true;
      isCompleted.value = todo.isCompleted;
}

    return { dialog, modalData, modalId, openModal , isCompleted};
  },
  computed: {
    ...mapGetters(['allTodos','todayTodos',]),
    todos() {
      return this.$store.getters.allTodosFilter;  
    },
    todayTodos() {
      return this.$store.getters.todayTodos;
    },
    tommorrowTodo() {
      return this.$store.getters.tommorrowTodo;
    },
    futureTodo() { 
        return this.$store.getters.futureTodo;
    }
    
    
   
  },
  methods: {
    ...mapActions(['addTodo', 'removeTodo', 'editTodo', 'markComplete']),
    
    handleAddTodo(newTodo) {
      console.log('new Todo', newTodo);
      if (newTodo.inputText.trim() !== '') {
        console.log("main" + newTodo.inputText);
        this.addTodo({inputText: newTodo.inputText, date:newTodo.date});
      }
    },
    markComplete2(todoId, isCompleted) {
     
       const todo = this.todos.find((todo) => todo.id === todoId);
      if (todo) {
        todo.isCompleted = isCompleted; // Update isCompleted based on emitted value
      }
    },

    editTodo2(todoId, newText) {
      
      this.editTodo({ id: todoId, text: newText });  
      this.dialog = false; 
    },

    close() {
      this.dialog = false;
    },
    
    removeTodo2(todoId) {
      this.removeTodo(todoId);  // Call Vuex action to remove
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>
