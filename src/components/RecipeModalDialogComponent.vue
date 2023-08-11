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
    <v-dialog v-model="dialog" scrollable width="800">
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
        <v-card-subtitle>
          <div v-if="isFood">
            <div>
              <v-icon size="20" color="black">
                mdi-clock-time-eight-outline
              </v-icon>
              <strong class="ml-1">
                {{ recipes.foods[id].time }}
              </strong>
            </div>
            <div>
              <strong class="ml-1 text-uppercase"> сложность: </strong>
              <v-icon
                v-for="i in recipes.foods[id].difficulty"
                :key="i"
                size="25"
                color="black"
                class="pb-1"
              >
                mdi-star-circle
              </v-icon>
            </div>
          </div>
          <div v-else>
            <div>
              <strong class="ml-1 text-uppercase"> сложность: </strong>
              <v-icon
                v-for="i in recipes.drinks[id].difficulty"
                :key="i"
                size="25"
                color="black"
                class="pb-1"
              >
                mdi-star-circle
              </v-icon>
            </div>
          </div>

          <div class="pt-2" v-if="isFood">
            <strong>Белки: </strong>{{ recipes.foods[id].calories.proteins
            }}<br />
            <strong>Жиры: </strong>{{ recipes.foods[id].calories.fats }}<br />
            <strong>Углеводы: </strong
            >{{ recipes.foods[id].calories.carbohydrates }}
          </div>
        </v-card-subtitle>

        <v-card-text>
          <div>
            <p class="text-center text-uppercase text-h6 mt-4"><b>рецепт</b></p>
          </div>

          <div v-if="isFood">
            <p><b>Ингридиенты:</b></p>
            <p v-for="i in recipes.foods[id].ingridients" :key="i">
              {{ i[0] }}: <span v-if="!isNaN(i[1])">{{ i[1] }}</span> {{ i[2] }}.
            </p>
          </div>
          <div v-else>
            <p><b>Ингридиенты:</b></p>
            <p v-for="i in recipes.drinks[id].ingridients" :key="i">
              {{ i[0] }}: <span v-if="!isNaN(i[1])">{{ i[1] }}</span> {{ i[2] }}.
            </p>
          </div>

          <div v-if="isFood">
            <p class="text-center text-uppercase text-h7"><b>Шаги</b></p>
            <p v-for="i in recipes.foods[id].steps" :key="i">
              <b>Шаг {{ recipes.foods[id].steps.indexOf(i) + 1 }}.</b>
              {{ i }}
            </p>
          </div>
          <div v-else>
            <p class="text-center text-uppercase text-h7"><b>Шаги</b></p>
            <p v-for="i in recipes.drinks[id].steps" :key="i">
              <b>Шаг {{ recipes.drinks[id].steps.indexOf(i) + 1 }}.</b>
              {{ i }}
            </p>
          </div>
          
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="black" variant="text" @click="dialog = false">
            Закрыть
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
