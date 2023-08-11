<script setup>
import RecipeCardComponent from "@/components/RecipeCardComponent.vue";

import { useRecipeStore } from "@/stores/recipe";

const recipes = useRecipeStore();

function getPageCount() {
  if (recipes.foods.length % 2 > 0) {
    return Math.floor(recipes.foods.length / 2 + 1);
  } else {
    return Math.floor(recipes.foods.length / 2);
  }
}

function getCountRecipeOnPage(page) {
  if (page == getPageCount()) {
    if (recipes.foods.length % 2 != 0) {
      return recipes.foods.length % 2;
    }
  }
  return -1;
}
</script>

<template>
  <div>
    <div v-for="i in getPageCount()" :key="i" cover>
      <div
        v-if="getCountRecipeOnPage(i) == -1"
        class="d-flex flex-row justify-center"
      >
        <RecipeCardComponent
          v-for="j in 2"
          :key="j"
          :id="(i - 1) * 2 + j - 1"
          :isFood="true"
          class="ma-5"
        ></RecipeCardComponent>
      </div>
      <div v-else class="d-flex flex-row justify-center">
        <RecipeCardComponent
          v-for="j in getCountRecipeOnPage(i)"
          :key="j"
          :id="(i - 1) * 2 + j - 1"
          :isFood="true"
          class="ma-5"
        ></RecipeCardComponent>
      </div>
    </div>
  </div>
</template>
