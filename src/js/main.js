import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "@/App.vue";

import router from "@/router";

import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

import "bootstrap-icons/font/bootstrap-icons.css";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap";

import "@/scss/style.scss";

const pinia = createPinia(App);

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).use(router).use(pinia).mount("#app");
