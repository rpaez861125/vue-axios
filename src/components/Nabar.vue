<template>
  <div>
    <v-app-bar
      color="deep-purple accent-4"
      dense
      dark
      app
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

        <v-toolbar-title> 
            <v-btn style="text-transform: none" text :to="{name: 'Home'}" exact>Axios</v-btn> 
        </v-toolbar-title>
        <v-btn 
        text 
        style="text-transform: none"       
        :to="{name: 'Currency'}"
        >
        Currency
        </v-btn>
        <v-btn 
        text 
        style="text-transform: none"       
        :to="{name: 'Weather'}"
        >
        Weather
        </v-btn>
        
        <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <Drawer/>
  </div>
</template>
<script>
import Drawer from '@/components/Drawer.vue'

export default {
    name: 'Nabar',
    components:{
        Drawer
    }
}
</script>