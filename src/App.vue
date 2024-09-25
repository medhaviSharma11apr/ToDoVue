<template>
  <v-app>
    <v-main>
      <!-- <HelloWorld/> -->
       <ToDo/>
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ToDo from './components/ToDo.vue'

export default {
  name: 'App',

  components: {
    // HelloWorld,
    ToDo,
  },

  data: () => ({
    //
  }),
}
</script>
