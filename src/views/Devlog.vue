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
    <v-sheet width="500" class="mx-auto mb-8">
      <v-form @submit.prevent>
        <v-text-field
          id="devlog-title"
          v-model="title"
          :rules="titleRules"
          label="Заголовок"
        ></v-text-field>
        <v-textarea
          id="devlog-description"
          v-model="description"
          :rules="descriptionRules"
          label="Описание"
        ></v-textarea>
        <v-btn
          type="submit"
          block
          density="default"
          @click="addArticel"
          >Добавить запись</v-btn
        >
      </v-form>
    </v-sheet>

    <div v-for="articel in devlog.articels.length" v-bind:key="articel.id">
      <ArticleComponent :id="articel - 1" />
    </div>
  </div>
</template>
