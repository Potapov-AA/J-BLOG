<script setup>
import { useBooksStore } from "@/stores/books";

const books = useBooksStore();

const props = defineProps({
  id: {
    type: Number,
    default: 0,
  },
});
</script>

<template>
  <v-card
    :elevation="15"
    width="200px"
    height="300px"
    class="pa-3 d-flex flex-column justify-space-between"
  >
    <h4>
      {{ books.books[id].author }}
    </h4>
    <v-divider></v-divider>
    <h5>
      {{ books.books[id].title }}
    </h5>
    <v-divider></v-divider>

    <div>
      <v-row no-gutters>
        <v-col v-if="books.books[id].status == 'Прочтена'">
          <v-icon size="x-large" color="black">mdi-book</v-icon>
        </v-col>
        <v-col v-else-if="books.books[id].status == 'Читаю'">
          <v-icon size="x-large" color="black"
            >mdi-book-open-page-variant
          </v-icon>
        </v-col>
        <v-col v-else-if="books.books[id].status == 'Запланирована'">
          <v-icon size="x-large" color="black">mdi-book-outline</v-icon>
        </v-col>
        <v-col v-if="books.books[id].isFavorite">
          <v-icon class="float-end" size="x-large" color="red"
            >mdi-heart-box
          </v-icon>
        </v-col>
      </v-row>
    </div>
  </v-card>
</template>
