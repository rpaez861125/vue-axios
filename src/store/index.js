import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading:{
      titulo: '',
      color: 'primary',
      stado: false
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
    }

  },
  actions: {
  },
  modules: {
  }
})
