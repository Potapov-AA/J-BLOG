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
  <div
    class="devlog-card border border-3 border-black mb-3"
    @click="showText( devlog.articels[id].id)"
  >
    <div class="row">
      <div class="col-12">
        <b>&#60;dev#{{ devlog.articels[id].id + 1 }}&#62; </b>
        <strong class="text-uppercase">
          {{ devlog.articels[id].title }}
        </strong>
      </div>
      <hr class="border border-dark border-1 opacity-100 mt-2" />
    </div>

    <p v-bind:id="'article-' + devlog.articels[id].id" class="text-truncate">
      {{ devlog.articels[id].description }}
    </p>
  </div>
</template>


