<template>
  <v-row>
    <v-text-field
      v-model="inputText"
      label="Enter a new todo"
      outlined
      @keyup.enter="emitAddTodo"
    ></v-text-field>

    <v-btn @click="emitAddTodo" color="primary" class="mt-3 ml-3 w-90">
      Add
    </v-btn>
  </v-row>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'TodoInput',
  setup(props, { emit }) {
    const inputText = ref('');

    const emitAddTodo = () => {
      if (inputText.value.trim() !== '') {
        emit('addTodo', inputText.value);
        inputText.value = '';  // To Clear The Text Field After Submiting 
      }
    };

    return { inputText, emitAddTodo };
  },
};
</script>

<style scoped></style>
