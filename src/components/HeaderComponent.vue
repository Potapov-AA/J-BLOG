<script setup>
import HeaderLinkComponent from "@/components/HeaderLinkComponent.vue";
</script>

<template>
  <v-app-bar :elevation="8">
    <v-app-bar-title>
      <b>J-БЛОГ</b>
    </v-app-bar-title>
    <HeaderLinkComponent :icon="'mdi-home'" :link="'/'"></HeaderLinkComponent>
    <HeaderLinkComponent :icon="'mdi-developer-board'" :link="'/devlog'"></HeaderLinkComponent>
    <HeaderLinkComponent :icon="'mdi-bookshelf'" :link="'/books'"></HeaderLinkComponent>
    <HeaderLinkComponent :icon="'mdi-chef-hat'" :link="'/recipes'"></HeaderLinkComponent>
    <v-spacer></v-spacer>
  </v-app-bar>
</template>
