<template>
    <v-container>
      <v-row>
        <v-col cols="12" >
          <v-card class="mx-auto" max-width="800">
            <v-date-picker
            full-width 
            v-model="date"
            locale="es-mx"
            :min="minimo"
            :max="maximo"
            @change="getDolar(date)"
            color="info"
            >

            </v-date-picker>
          </v-card>
          <v-card class="mx-auto" max-width="800" color="accent">
            <v-card-text class="title text-center d-flex justify-content-around ">
                  <select v-model="selected" class="text--darken-1">
                    <option disabled value=""> Currency </option>
                    <option v-for="(value, key) in rates" :key="key" :value="value">{{ key }}</option>                      
                  </select>
                    <span dark>-Rate: {{ selected }}</span>
                
            </v-card-text>
          </v-card>
        </v-col>
       
               
      </v-row>
      
    </v-container>
</template>

<script>
import axios from 'axios'
import {mapMutations} from 'vuex'

export default {
  data(){
    return{
      date: '',
      minimo:'1999',
      maximo: new Date().toISOString().substr(0, 10),
      rates: [],
      selected:'',
      valor:''
    }
  },
  methods: {
    ...mapMutations(['mostrarDialog', 'ocultarDialog']),

      async getDolar(dia){
      this.selected = ''
      // let arrayDia = dia.split(['-'])          /* Invertir las fechas */
      // let ddmmyy = arrayDia[2]+ '-' + arrayDia[1]+ '-' + arrayDia[0]

      
      try {
        this.mostrarDialog({titulo:'Accediendo a Informacion', color:'secundary'})

        let datos = await axios.get(`https://api.exchangeratesapi.io/${dia}`)
          
        if(datos.data.date != null){
          this.rates = datos.data.rates  
          // console.log(datos.data)                    
        }else{
          this.valor = 'Sin resultados'
        }
      } catch (error) {
        
      }finally{
        this.ocultarDialog()
      }
    }
  },
  created() {
    this.getDolar('latest')
  },
 
}
</script>
