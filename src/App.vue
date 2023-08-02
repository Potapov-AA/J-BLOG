<script setup></script>

<template>
  <div>
    <header class="d-flex flex-column">
      <h1 class="text-center">miniBOOKLIST</h1>

      <div class="d-flex flex-row justify-content-center">
        <div class="px-4">
          <router-link class="btn btn-light" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-house-add-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 1 1-1 0v-1h-1a.5.5 0 1 1 0-1h1v-1a.5.5 0 0 1 1 0Z"
              />
              <path
                d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5Z"
              />
              <path
                d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293l6-6Z"
              />
            </svg>
          </router-link>
        </div>
        <div class="px-4">
          <router-link class="px-2 btn btn-light" to="/books">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="50"
              height="50"
              fill="currentColor"
              class="bi bi-book-half"
              viewBox="0 0 16 16"
            >
              <path
                d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"
              />
            </svg>
          </router-link>
        </div>
      </div>

      <hr class="border border-dark border-2 opacity-100" />
    </header>

    <div class="content center">
      <router-view></router-view>
    </div>

    <footer class="fixed-bottom">
      <hr class="border border-dark border-2 opacity-100" />
      <p class="text-center">
        +7 (999) 99-000-00 <br />
        mail@mail.ru <br />
      </p>
      <p class="text-center text-body-secondary text-uppercase">
        © copyright 2023
      </p>
    </footer>
  </div>
</template>
