<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
</script>

<template>
  <div>
    <v-app>
      <HeaderComponent></HeaderComponent>
    </v-app>
    <div>
      <router-view></router-view>
    </div>

    <footer class="fixed-bottom bg-white">
      <hr class="border border-dark border-2 opacity-100" />
      <p class="text-center">miniblog@mail.ru <br /></p>
      <p class="text-center text-body-secondary text-uppercase">
        © copyright 2023
      </p>
    </footer>
  </div>
</template>
