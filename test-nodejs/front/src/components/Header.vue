<template>
  <v-card class="overflow-hidden">
    <div class="center">
      <v-toolbar-title>Nom de l'entreprise</v-toolbar-title> 
     <v-btn>
      <router-link to="/"><strong>Home</strong></router-link>
    </v-btn>
    <v-btn>
 <router-link to="/"><strong>Contact</strong></router-link> 
    </v-btn>
    <v-btn>
 <router-link to="/"><strong>About us</strong></router-link>
    </v-btn>
  </div>
  </v-card>
</template>



<style>
.center{
    text-align: center;
}
</style>