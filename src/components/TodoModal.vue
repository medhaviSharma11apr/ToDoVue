
<template>
  <v-dialog
    
    v-model="editModal"
    max-width="500"
    @update:modelValue="$emit('update:dialog', $event)"
  
  >
    <v-card>
      <v-card-title class="text-h5">Edit Task</v-card-title>

      <v-text-field
        v-model="localModalData"
        label="Input Data"
        placeholder="Enter some text"
        @keyup.enter="emitSave"
        
      ></v-text-field>

      <v-card-actions>
        <v-btn color="green" text @click="emitSave" >Save</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="red" text @click="closeModal">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { ref, watch } from 'vue';

export default {
  name: 'TodoModal',
    props: {

    
    dialog: {
      type: Boolean,
          required: true,
      
    },
    modalData: {
      type: String,
      required: true,
    },
    modalId: {
      type: [String, Number],
      required: true,
      },
      isCompleted: {
         type: Boolean,
          required: true,
    }
  },
  emits: ['update:dialog', 'update:modalData', 'save', 'close' , 'markComplete'],
  setup(props, { emit }) {
    const localModalData = ref('');
    const editModal = ref(false);
     console.log("ModalVal"+props.dialog)
    // Sync prop with local data
    watch(
      () => props.modalData,
      (newValue) => {
        localModalData.value = newValue;
      }
    );
    watch(() => props.dialog, (newValue) => {
      if (newValue) {
        editModal.value = newValue;
        
      }
    })

    const emitSave = () => {

      emit('save', props.modalId, localModalData.value);
    
      if (props.modalData !== localModalData.value) {
        const abc = false;
       emit('markComplete',props.modalId ,abc)
       }
     
      editModal.value = false;
    
    };
  
    const closeModal = () => {

     emit('close')
     editModal.value = false;
     localModalData.value =props.modalData

    }
   

    return { localModalData, emitSave, editModal , closeModal };
  },
};
</script>







