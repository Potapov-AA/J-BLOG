<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<template>
  <div>
    <v-app>
      <HeaderComponent></HeaderComponent>

      <v-main class="mt-4 content">
        <router-view></router-view>
      </v-main>

      <FooterComponent></FooterComponent>
    </v-app>
  </div>
</template>
