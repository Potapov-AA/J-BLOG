<script setup>
import { useBooksStore } from "@/stores/books";

const books = useBooksStore();
</script>

<template>
  <div class="books-content">
    <div>ВЛЕВО</div>
    <button
      class="carousel-control-prev"
      type="button"
      data-bs-target="#caruselLibrary"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidenn">Предыдущий</span>
    </button>

    <div
      id="caruselLibrary"
      class="carousel carousel-dark slide"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div v-for="i in Math.floor(books.books.length / 12)" v-bind:key="i">
          <div :class="{ active: i == 1 }" class="carousel-item">
            <div class="books-library" v-for="j in 6" :key="j">
              <div class="card book-card">
                <h5 class="card-title text-break">
                  {{ books.books[j + (i - 1) * 6 - 1].author }}
                </h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  {{ books.books[j + (i - 1) * 6 - 1].title }}
                </h6>
              </div>
            </div>
            <br />
            <div class="books-library" v-for="j in 6" :key="j">
              <div class="card book-card">
                <h5 class="card-title text-break">
                  {{ books.books[j + (i - 1) * 6 - 1 + 6].author }}
                </h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">
                  {{ books.books[j + (i - 1) * 6 - 1].title }}
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  

  <button
    class="carousel-control-next"
    type="button"
    data-bs-target="#caruselLibrary"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidenn">Следующий</span>
  </button>
  <div>ВПРАВО</div>
</div>
</template>
