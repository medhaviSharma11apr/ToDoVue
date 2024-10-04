<template>
  <v-row class="v-row">
    <!-- Todo Input Field -->
    <v-text-field  v-model="inputText" label="Enter a new todo" outlined @keyup.enter="emitAddTodo" class="addTodo">
    </v-text-field>

    <!-- Date Input Field -->
    <v-text-field v-model="formattedDate" id="textFieldDate" label="Date"  append-inner-icon="mdi-calendar" class="date"
      @click="showPicker = true"></v-text-field>

    <!-- Date Picker Dialog -->
    <v-dialog v-model="showPicker" max-width="290px" ref="hide" >
      <v-date-picker v-model="date" :min="new Date().toISOString().substr(0, 10)" />
    </v-dialog>

    <!-- Add Todo Button -->
    <v-btn @click="emitAddTodo" color="primary" class="btn">
      Add
    </v-btn>
  </v-row>

</template>

<script>
import { ref, watch } from 'vue';
export default {
  emits: ['addTodo'],
  setup(__, { emit }) {

    const inputText = ref('');
    const date = ref(null);
    const showPicker = ref(false);
    const formattedDate = ref(null);

    // Method to emit the new todo
    const emitAddTodo = () => {
      if (inputText.value.trim() !== '') {
        emit('addTodo', { inputText: inputText.value, date: formattedDate.value });
        inputText.value = '';
        date.value = null;
        formattedDate.value = null;
        console.log(inputText.value, formattedDate.value);
      }
    };

    watch(date, (newValue) => {
      if (newValue) {
        formattedDate.value = new Intl.DateTimeFormat('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        }).format(new Date(date.value));
        showPicker.value = false;
      }

    })

    return {
      inputText,
      date,
      showPicker,
      formattedDate,
      emitAddTodo,
    };
  },
};
</script>


<style scoped>

.date{
margin: 5px;
}
.addTodo{
margin:5px;
}
.btn{
  margin-top: 15px;
  margin-left: 5px;
}

@media (min-width: 700px) and (max-width: 960px) {
  .v-row{
  margin: 10px;
}
}
@media only screen and (max-width: 700px) {
  .v-row {
    display: flex;
    flex-direction: column;
    margin: 10px;
  }
  .date{
   
  }
}

</style>