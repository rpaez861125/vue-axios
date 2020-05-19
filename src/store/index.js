import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading:{
      titulo: '',
      color: 'primary',
      stado: false
    },
    loadingAlert:{
      titulo:'',
      stado: false,
      color:'error'
    }
    
  },
  mutations: {

    mostrarDialog(state, payLoad){
      state.loading.titulo = payLoad.titulo
      state.loading.color = payLoad.color
      state.loading.stado = true
    },

    ocultarDialog(state){
      state.loading.stado = false
    },

    mostrarAlert(state, payLoad){
      state.loadingAlert.titulo = payLoad.titulo
      state.loadingAlert.stado = true
    },

    ocultarAlert(state){
      state.loadingAlert.stado = false
    }


  },
  actions: {
  },
  modules: {
  }
})
