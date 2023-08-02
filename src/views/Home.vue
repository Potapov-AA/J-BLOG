<script setup>
import { ref } from "vue";

const isShow = ref(true);
</script>

<template>
  <div v-if="isShow == true" class="text-center" @click="isShow = !isShow">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100"
      height="100"
      fill="currentColor"
      class="bi bi-plus-square"
      viewBox="0 0 16 16"
    >
      <path
        d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"
      />
      <path
        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
      />
    </svg>
  </div>

  <div v-else>
    <form action="" class="border p-2">
      <div @click="isShow = !isShow" class="border">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-x"
          viewBox="0 0 16 16"
        >
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"
          />
        </svg>
      </div>
      <label for="inputTitle" class="form-label">название</label>
      <input type="text" class="form-control" id="inputTitle" />
      <label for="inputAuthor" class="form-label">автор</label>
      <input type="text" class="form-control" id="inputAuthor" />
      <select class="status-select">
        <option selected>статус</option>
        <option value="1">запланировано</option>
        <option value="2">читаю</option>
        <option value="3">прочтена</option>
      </select>
    </form>
  </div>
</template>
