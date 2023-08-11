<script setup>
import { ref} from "vue";

import FoodListComponent from "@/components/FoodListComponent.vue";
import DrinkListComponent from "@/components/DrinkListComponent.vue";


const tabs = [FoodListComponent, DrinkListComponent];

const currentList = ref(FoodListComponent);
</script>

<template>
  <div class="mt-5">
    <div class="d-flex justify-center">
      <v-icon @click="currentList = tabs[0]" size="80" color="black mx-10">
        mdi-noodles
      </v-icon>
      <v-icon @click="currentList = tabs[1]" size="80" color="black mx-10">
        mdi-glass-mug
      </v-icon>
    </div>
    <currentList></currentList>

  </div>
</template>
