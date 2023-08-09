<script setup>
import { useDevlogStore } from "@/stores/devlog";
import ArticleComponent from "@/components/ArticleComponent.vue";

const devlog = useDevlogStore();

function addArticel() {
  const title = document.getElementById("devlog-title").value;
  const discription = document.getElementById("devlog-description").value;

  devlog.addArticels(title, discription);
}
</script>

<template>
  <div class="center">
    <div v-for="articel in devlog.articels.length" v-bind:key="articel.id">
      <ArticleComponent :id="articel - 1" />
    </div>
  </div>
</template>
