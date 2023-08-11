<script>
import { useRecipeStore } from "@/stores/recipe";

export default {
  data() {
    return {
      dialog: false,
      recipes: useRecipeStore(),
    };
  },
  props: {
    id: Number,
    isFood: Boolean,
  },
};
</script>

<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" width="800">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props"> Подробнее </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span v-if="isFood" class="text-h5">
            {{ recipes.foods[id].title }}
          </span>
          <span v-else class="text-h5">{{ recipes.drinks[id].title }}</span>
        </v-card-title>
        <v-card-text>
          Здесь будет текст по шагам, а вот эта id данной карты
          {{ id }}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="green-darken-1" variant="text" @click="dialog = false">
            Disagree
          </v-btn>
          <v-btn color="green-darken-1" variant="text" @click="dialog = false">
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
