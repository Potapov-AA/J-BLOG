<script setup>
import HeaderComponent from '@/components/HeaderComponent.vue'
      
</script>

<template>
  <div>
    <v-app>
      <v-content>
        <v-container>
          <HeaderComponent></HeaderComponent>

            <router-view></router-view>

          <footer class="fixed-bottom bg-white">
            <hr class="border border-dark border-2 opacity-100" />
            <p class="text-center">miniblog@mail.ru <br /></p>
            <p class="text-center text-body-secondary text-uppercase">
              © copyright 2023
            </p>
          </footer>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>
