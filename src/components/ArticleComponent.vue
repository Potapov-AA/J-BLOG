<script setup>
import { useDevlogStore } from "@/stores/devlog";

const props = defineProps({
  id: {
    type: Number,
    default: 0,
  },
});

const devlog = useDevlogStore();

function showText(id) {
  const cardText = document.getElementById("article-" + id);

  if (cardText.classList.value == "") {
    cardText.classList.add("text-truncate");
  } else {
    cardText.classList.remove("text-truncate");
  }
}
</script>

<template>
  <div class="d-flex justify-center mb-4" >
    <v-card border width="60%" @click="showText(devlog.articels[id].id)">
      <v-card-title class="text-subtitle-2 py-2">
        <b>&#60;dev#{{ devlog.articels[id].id + 1 }}&#62; </b>
        <strong class="text-uppercase">
          {{ devlog.articels[id].title }}
        </strong>
      </v-card-title>
      <v-card-text>
        <p
          v-bind:id="'article-' + devlog.articels[id].id"
          class="text-truncate"
        >
          {{ devlog.articels[id].description }}
        </p>
      </v-card-text>
    </v-card>
  </div>
</template>
