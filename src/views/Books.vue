<script setup>
import { useBooksStore } from "@/stores/books";
import BookCardComponent from "@/components/BookCardComponent.vue";

const books = useBooksStore();

function getPageCount() {
  if (books.books.length % 5 > 0) {
    return Math.floor(books.books.length / 5 + 1);
  } else {
    return Math.floor(books.books.length / 5);
  }
}

function getCountBooksOnPage(page) {
  if (page == getPageCount()) {
    if (books.books.length % 5 != 0) {
      return books.books.length % 5;
    }
  }
  return -1;
}
</script>

<template>
  <div>
    <div class="d-flex flex-row justify-center">
      <div class="mx-4">
        <v-icon size="x-large" color="black">mdi-book-outline</v-icon>
        <b class="ml-2">Запланировано</b>
      </div>
      <div class="mx-4">
        <v-icon size="x-large" color="black"
          >mdi-book-open-page-variant
        </v-icon>
        <b class="ml-2">Читаю</b>
      </div>
      <div class="mx-4">
        <v-icon size="x-large" color="black">mdi-book</v-icon>
        <b class="ml-2">Прочел</b>
      </div>
    </div>

    <div v-for="i in getPageCount()" :key="i" cover>
      <div
        v-if="getCountBooksOnPage(i) == -1"
        class="d-flex flex-row justify-center"
      >
        <BookCardComponent
          v-for="j in 5"
          :key="j"
          :id="(i - 1) * 5 + j - 1"
          class="ma-5"
        ></BookCardComponent>
      </div>
      <div v-else class="d-flex flex-row justify-center">
        <BookCardComponent
          v-for="j in getCountBooksOnPage(i)"
          :key="j"
          :id="(i - 1) * 5 + j - 1"
          class="ma-5"
        ></BookCardComponent>
      </div>
    </div>
  </div>
</template>
