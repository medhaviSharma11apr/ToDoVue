<template>
  <v-app>
    <v-container>
      <v-row>
        
        <v-col cols="12">
          <h1 class="text-center">Vuetify Todo App with Vuex</h1>

          <!-- Input form to add a new todo -->

          <v-row>
             <v-text-field
            v-model="newTodo"
            label="Enter a new todo"
            outlined
          ></v-text-field>
        

          <v-btn i @click="handleAddTodo" color="primary" class="mt-3 ml-3 w-90">Add</v-btn>

      
          </v-row>
         
        </v-col>

        <!-- Todo List -->
        <v-col cols="10">
          <v-list>
            <v-list-item
              v-for="todo in todos"
              :key="todo.id"
              class="d-flex justify-space-between align-center"
            >
              <span>{{ todo.text }}</span>

              
              <v-btn @click="removeTodo2(todo.id)" color="red" text>
                Remove
              </v-btn>
                 <v-btn @click="openModal(todo)" color="primary">
              Open Modal
             </v-btn>

            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-container>



     <!-- Vuetify Modal (v-dialog) -->
    <v-dialog v-model="dialog" max-width="500">
      <!-- Modal content -->
      <v-card>
        <v-card-title class="text-h5">
         Edit Task
        </v-card-title>
        
        
       
      
    
          <v-text-field
            v-model="modalData"
            label="Input Data"
            placeholder="Enter some text"
          
          ></v-text-field>
         
      
       
        <!-- Modal actions (Close button) -->
        <v-card-actions>
            <!-- <v-btn color="green" text @click="saveData"> -->
            <v-btn color="green" text @click="editTodo2(modalId, modalData)">
            Save
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="dialog = false">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { ref } from 'vue';
export default {
  name: 'App',
  data() {
    return {
      newTodo: '',
    };
  },

  setup() {
    // Reactive variable to control dialog visibility
    const dialog = ref(false);
    const modalData = ref('');
    const modalId = ref('');
    // Reactive variable to hold the data for the modal

    // Function to open modal and set data
    const openModal = (data) => {
      console.log(data);
      modalData.value = data.text; // Set the data to be displayed in the modal
      modalId.value = data.id;
      dialog.value = true; // Open the modal
    };
    const saveData = () => {
      dialog.value = false; // Close the modal after saving
    };
    return { dialog, modalData, openModal, saveData, modalId };
  },
  computed: {
    ...mapGetters(['allTodos']), // Map the getter for todos
  },
  methods: {
    ...mapActions(['addTodo', 'removeTodo','editTodo']), // Map the actions for adding and removing todos
   // Custom method to handle adding todo without causing recursion
    handleAddTodo() {
      if (this.newTodo.trim() !== '') {
        this.addTodo(this.newTodo);
        this.newTodo = ''; 
      }
    },
    editTodo2(todoId, newText) {
      console.log(newText);
      
      this.editTodo({ id: todoId, text: newText });

      console.log('nato');
      this.saveData();
    },

    removeTodo2(todoId) {
      this.removeTodo(todoId); 
    },
  },
  // eslint-disable-next-line no-dupe-keys
  computed: {
    todos() {
      return this.$store.getters.allTodos; // Access todos from the store
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 20px;
}
</style>






