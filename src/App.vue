<template>
  <v-app>
    <Nabar/>

    <v-content>     
        <router-view/> 
          <v-dialog
            v-model="loading.stado"
            hide-overlay
            persistent
            width="300"
          >
          <v-card
            :color="loading.color"
            dark
          >
            <v-card-text>
             {{loading.titulo}}
              <v-progress-linear
                indeterminate
                color="white"
                class="mb-0"
              ></v-progress-linear>
            </v-card-text>
          </v-card>
        </v-dialog>      
    </v-content>
  </v-app>
</template>

<script>
import {mapState} from 'vuex'
import Nabar from '@/components/Nabar.vue'

export default {
  name: 'App',  
  components:{
    Nabar
  },
  data: () => ({
    //
  }),
  computed: {
    ...mapState(['loading'])
  },
};
</script>
