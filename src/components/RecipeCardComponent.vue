<script setup>
import { useRecipeStore } from "@/stores/recipe";
import RecipeModalDialogComponent from "@/components/RecipeModalDialogComponent.vue";

const recipes = useRecipeStore();

const props = defineProps({
  id: {
    type: Number,
    default: 0,
  },
  isFood: {
    type: Boolean,
    default: true,
  },
});
</script>

<template>
  <v-card
    :elevation="15"
    width="400px"
    height="200px"
    class="pa-3 d-flex flex-column justify-space-between"
  >
    <div v-if="isFood">
      <v-row class="mb-1">
        <v-col>
          <strong class="text-h5">{{ recipes.foods[id].title }}</strong>
        </v-col>
        <v-col align="end" class="d-flex justify-end">
          <v-icon
            v-if="recipes.foods[id].isFavorite"
            size="x-large"
            color="red"
          >
            mdi-heart-box
          </v-icon>
          <v-icon size="x-large" color="black">
            mdi-clock-time-eight-outline
          </v-icon>
          <strong class="ml-1 text-h5">{{ recipes.foods[id].time }}</strong>
        </v-col>
      </v-row>
      <v-divider class="border-opacity-75"></v-divider>
      <div class="mt-2">
        <p>
          Количество шагов: <b>{{ recipes.foods[id].steps.length }}</b>
        </p>
      </div>
      <div class="my-2">
        <p>
          Количество ингридиентов:
          <b>{{ recipes.foods[id].ingridients.length }}</b>
        </p>
      </div>
      <v-divider class="border-opacity-75"></v-divider>
      <v-row class="mt-2">
        <v-col class="d-flex justify-start">
          <strong class="text-h6">Сложность:</strong>
          <v-icon
            v-for="i in recipes.foods[id].difficulty"
            :key="i"
            size="x-large"
            color="black"
            class="pt-1"
          >
            mdi-star-circle
          </v-icon>
          <v-spacer></v-spacer>
          <v-col align="end" class="">
            <RecipeModalDialogComponent :id="recipes.foods[id].id" :isFood="true"></RecipeModalDialogComponent>
          </v-col>
        </v-col>
      </v-row>
    </div>

    <div v-else>
      <v-row class="mb-1">
        <v-col>
          <strong class="text-h5">{{ recipes.drinks[id].title }}</strong>
        </v-col>
        <v-col align="end" class="d-flex justify-end">
          <v-icon
            v-if="recipes.drinks[id].isFavorite"
            size="x-large"
            color="red"
          >
            mdi-heart-box
          </v-icon>
        </v-col>
      </v-row>
      <v-divider class="border-opacity-75"></v-divider>
      <div class="mt-2">
        <p>
          Количество шагов: <b>{{ recipes.drinks[id].steps.length }}</b>
        </p>
      </div>
      <div class="my-2">
        <p>
          Количество ингридиентов:
          <b>{{ recipes.drinks[id].ingridients.length }}</b>
        </p>
      </div>
      <v-divider class="border-opacity-75"></v-divider>
      <v-row class="mt-2">
        <v-col class="d-flex justify-start">
          <strong class="text-h6">Сложность:</strong>
          <v-icon
            v-for="i in recipes.drinks[id].difficulty"
            :key="i"
            size="x-large"
            color="black"
            class="pt-1"
          >
            mdi-star-circle
          </v-icon>
          <v-spacer></v-spacer>
          <v-col align="end">
            <RecipeModalDialogComponent :id="recipes.foods[id].id" :isFood="false"></RecipeModalDialogComponent>
          </v-col>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>
