<script setup>
const props = defineProps({
  icon: {
    type: String,
    default: "mdi-skull-scan",
  },
  link: {
    type: String,
    default: "/"
  }
});
</script>

<template>
    <router-link :to="link">
      <v-btn icon>
        <v-icon size="x-large" color="black">{{ icon }}</v-icon>
      </v-btn>
    </router-link>
</template>
