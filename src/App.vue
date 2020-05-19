<template>
  <v-app>
    <Nabar/>

    <v-content>     
        <router-view/> 
        <!-- Proceso de acceso a los datos -->
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

       <!-- Alerta cuando hay errores  -->
       <v-dialog
            v-model="loadingAlert.stado"
            hide-overlay
            persistent
            width="400"
          >
          <v-alert v-model="loadingAlert.stado" type="error" dismissible="true" absolute="true">
           {{loadingAlert.titulo}} 
          </v-alert>         
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
    ...mapState(['loading', 'loadingAlert'])
  },
};
</script>
