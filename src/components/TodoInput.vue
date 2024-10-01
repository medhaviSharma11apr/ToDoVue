
<template>
  <v-row>
    <!-- Todo Input Field -->
    <v-text-field
      v-model="inputText"
      label="Enter a new todo"
      outlined
      @keyup.enter="emitAddTodo"
    >
    </v-text-field>

    <!-- Date Input Field -->
    <v-text-field
      v-model="date"
      id="textFieldDate"
      label="Date"
      append-icon="mdi-calendar"
      @click="showPicker = true"
    ></v-text-field>

    <!-- Date Picker Dialog -->
    <v-dialog
      v-model="showPicker"
      max-width="290px"
      ref="hide"
      @keyup.enter="closePicker"
    >
      <v-date-picker
        v-model="date"
        @input="closePicker"
        :min="new Date().toISOString().substr(0, 10)"
      />
    </v-dialog>

    <!-- Add Todo Button -->
    <v-btn @click="emitAddTodo" color="primary" class="mt-3 ml-3 w-90">
      Add
    </v-btn>
  </v-row>
</template>

<script>
import { ref } from 'vue';


export default {
  emits: ['addTodo'],
  setup(__,{emit}) {
 
    const inputText = ref(''); 
    const date = ref(null); 
    const showPicker = ref(false); 

    // Method to emit the new todo
    const emitAddTodo = () => {
    
      var selectedDate = new Date(date.value) ;
      selectedDate = new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }).format(new Date(date.value));
    
      
      
      
      if (inputText.value.trim() !== '')
      {
          emit('addTodo', {inputText:inputText.value ,date:selectedDate});
        inputText.value = '';  
        date.value = null;
       
      }
    };

    // Method to close the date picker dialog
    const closePicker = () => {
      showPicker.value = false;
    };

    // Return all reactive values and methods so they can be used in the template
    return {
      inputText,
      date,
      showPicker,
      emitAddTodo,
      closePicker,
    };
  },
};
</script>














 
