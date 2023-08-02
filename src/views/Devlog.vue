<script setup>
import { useDevlogStore } from "@/stores/devlog";

const devlog = useDevlogStore();

function addArticel() {
  const title = document.getElementById("devlog-title").value;
  const discription = document.getElementById("devlog-description").value;

  devlog.addArticels(title, discription);
}

function Test(id) {
  const cardText = document.getElementById("article-" + id);

  if (cardText.classList.value == "") {
    cardText.classList.add("text-truncate");
  } else {
    cardText.classList.remove("text-truncate");
  }
}
</script>

<template>
  <div class="devlog-content center">
    <div class="text-center mb-3">
      <button
        type="button"
        class="btn btn-light border border-2 text-uppercase"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        <b>Добавить запись</b>
      </button>
    </div>

    <div v-for="articel in devlog.articels" v-bind:key="articel.id">
      <div
        class="devlog-card border border-3 border-black mb-3"
        @click="Test(articel.id)"
      >
        <div class="row">
          <div class="col-12">
            <b>&#60;dev#{{ articel.id + 1 }}&#62; </b>
            <strong class="text-uppercase">
              {{ articel.title }}
            </strong>
          </div>
          <hr class="border border-dark border-1 opacity-100 mt-2" />
        </div>

        <p v-bind:id="'article-' + articel.id" class="text-truncate">
          {{ articel.description }}
        </p>
      </div>
    </div>

    <!-- Модальное окно -->
    <div
      class="modal fade"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Добавление новой записи
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Закрыть"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="devlog-title" class="col-form-label">
                  Название:
                </label>
                <input type="text" class="form-control" id="devlog-title" />
              </div>
              <div class="mb-3">
                <label for="devlog-description" class="col-form-label">
                  Описание:
                </label>
                <textarea class="form-control" id="devlog-description">
                </textarea>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-light border border-2"
              data-bs-dismiss="modal"
              @click="addArticel"
            >
              Добавить
            </button>
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
