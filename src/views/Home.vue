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
            @change="getDolar(date, base)"
            color="info"
            >

            </v-date-picker>
          </v-card>
          <v-card class="mx-auto" max-width="800" color="accent">
            <v-card-text class="title">
                  <v-row justify="center" no-gutters>
                    <v-col xs="2"><p class="font-weight-black">From:</p></v-col>
                    <v-col xs="2">
                      <select v-model="base" class="font-weight-medium" @change="getDolar(date, base)">
                        <option disabled value="" > {{ base }} </option>
                        <option v-for="(value, key) of rates" :key="key" :value="key">{{ key }}</option>                      
                      </select>
                    </v-col>
                    <v-col xs="2"><p class="font-weight-black">To:</p></v-col>
                    <v-col xs="2">
                       <select v-model="selected" class="font-weight-medium">
                        <option disabled value=""> Currency </option>
                        <option v-for="(value, key) in rates" :key="key" :value="value">{{ key }}</option>                      
                      </select>
                    </v-col>
                   <v-col xs="2">
                      <span dark>Rate: {{ selected }}</span>                     
                   </v-col>
                  
                  </v-row>                
                
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
      date: new Date().toISOString().substr(0, 10),
      minimo:'1999',
      maximo: new Date().toISOString().substr(0, 10),
      rates: [],
      selected:'',
      round:'',
      base:'USD',
      valor:''
    }
  },
  methods: {
    ...mapMutations(['mostrarDialog', 'ocultarDialog']),

      async getDolar(dia, base){
      this.selected = ''
      // let arrayDia = dia.split(['-'])          /* Invertir las fechas */
      // let ddmmyy = arrayDia[2]+ '-' + arrayDia[1]+ '-' + arrayDia[0]

      
      try {
        this.mostrarDialog({titulo:'Accediendo a Informacion', color:'secundary'})

        let datos = await axios.get(`https://api.exchangeratesapi.io/${dia}?base=${base}`)
          
        if(datos.data.date != null){
          this.rates = datos.data.rates  
                      console.log( datos.data)
        }else{
          this.valor = 'Sin resultados'
        }
      } catch (error) {
        
      }finally{
        this.ocultarDialog()
      }
    },
    // roundNumber(number){
    //   let a = parseInt(number)      
    //   // this.round = a.toFixed(3)
    //   console.log(a)
    // }
  },
  created() {
    this.getDolar('latest', this.base)
  }
  
 
}
</script>
