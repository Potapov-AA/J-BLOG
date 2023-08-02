import { defineStore } from "pinia";

const STORE_NAME = "books";

const defaultValue = [
  {
    id: 0,
    title: "История с кладбищем",
    author: "Н. Гейман",
    status: "Прочтена",
    isFavorite: false,
  },
  {
    id: 1,
    title: "Никогде",
    author: "Н. Гейман",
    status: "Прочтена",
    isFavorite: true,
  },
  {
    id: 2,
    title: "Американские Боги",
    author: "Н. Гейман",
    status: "Прочтена",
    isFavorite: false,
  },
  {
    id: 3,
    title: "Океан в конце дороги",
    author: "Н. Гейман",
    status: "Прочтена",
    isFavorite: true,
  },
  {
    id: 4,
    title: "Звёздная пыль",
    author: "Н. Гейман",
    status: "Прочтена",
    isFavorite: true,
  },
  {
    id: 5,
    title: "Сыновья Ананси",
    author: "Н. Гейман",
    status: "Читаю",
    isFavorite: false
  },
  {
    id: 6,
    title: "Благие знамения",
    author: "Н. Гейман, Т. Пратчетт",
    status: "Запланирована",
    isFavorite: false
  },
  {
    id: 0,
    title: "Истори123я с кладбищем",
    author: "Н. Гейман",
    status: "Прочтена",
    isFavorite: false,
  },
  {
    id: 1,
    title: "Никог123де",
    author: "Н. Гейман",
    status: "Прочтена",
    isFavorite: true,
  },
  {
    id: 2,
    title: "Американские Боги",
    author: "Н. Г123213ейман",
    status: "Прочтена",
    isFavorite: false,
  },
  {
    id: 3,
    title: "Океан в конце дороги",
    author: "Н. Г32332ейман",
    status: "Прочтена",
    isFavorite: true,
  },
  {
    id: 4,
    title: "Звёздная пыль",
    author: "Н. Г33333ейман",
    status: "Прочтена",
    isFavorite: true,
  },
  {
    id: 5,
    title: "Сыновья 333Ананси",
    author: "Н. Гейман",
    status: "Читаю",
    isFavorite: false
  },
  {
    id: 6,
    title: "Благие знамения",
    author: "Н. Гейман, Т. Пратчетт",
    status: "Запланирована",
    isFavorite: false
  },
  {
    id: 0,
    title: "История с кладбищем",
    author: "Н. Гейман",
    status: "Прочтена",
    isFavorite: false,
  },
  {
    id: 1,
    title: "Никогде",
    author: "Н. Гейман",
    status: "Прочтена",
    isFavorite: true,
  },
  {
    id: 2,
    title: "Америка123233нские Боги",
    author: "Н. Гейман",
    status: "Прочтена",
    isFavorite: false,
  },
  {
    id: 3,
    title: "Океан в конце дороги",
    author: "Н. Гейман",
    status: "Прочтена",
    isFavorite: true,
  },
  {
    id: 4,
    title: "Звёздная пыль",
    author: "Н. Гейман",
    status: "Прочтена",
    isFavorite: true,
  },
  {
    id: 5,
    title: "Сыновья Ананси",
    author: "Н. Гейман",
    status: "Читаю",
    isFavorite: false
  },
  {
    id: 6,
    title: "Благие знамения",
    author: "Н. Гейман, Т. Пратчетт",
    status: "Запланирована",
    isFavorite: false
  },
  {
    id: 2,
    title: "Америка123233нские Боги",
    author: "Н. Гейман",
    status: "Прочтена",
    isFavorite: false,
  },
  {
    id: 2,
    title: "Америка123233нские Боги",
    author: "Н. Гейман",
    status: "Прочтена",
    isFavorite: false,
  },
  {
    id: 2,
    title: "Америка123233нские Боги",
    author: "Н. Гейман",
    status: "Прочтена",
    isFavorite: false,
  },
  {
    id: 2,
    title: "Америка123233нские Боги",
    author: "Н. Гейман",
    status: "Прочтена",
    isFavorite: false,
  },
  {
    id: 2,
    title: "Америка123233нские Боги",
    author: "Н. Гейман",
    status: "Прочтена",
    isFavorite: false,
  },
  {
    id: 2,
    title: "Америка123233нские Боги",
    author: "Н. Гейман",
    status: "Прочтена",
    isFavorite: false,
  },
  {
    id: 2,
    title: "Америка123233нские Боги",
    author: "Н. Гейман",
    status: "Прочтена",
    isFavorite: false,
  },
  {
    id: 2,
    title: "Америка123233нские Боги",
    author: "Н. Гейман",
    status: "Прочтена",
    isFavorite: false,
  },
  {
    id: 2,
    title: "Америка123233нские Боги",
    author: "Н. Гейман",
    status: "Прочтена",
    isFavorite: false,
  },
  {
    id: 2,
    title: "Америка123233нские Боги",
    author: "Н. Гейман",
    status: "Прочтена",
    isFavorite: false,
  },
  
];

const getValue = () => {
  const value = localStorage.getItem(STORE_NAME);

  return value ? JSON.parse(value) : defaultValue;
};

export const useBooksStore = defineStore(STORE_NAME, {
  state: () => ({
    books: getValue(),
  }),
  actions: {
    addBooks(title, author, status, isFavorite) {
      let lengthArray = this.books.length;

      if (lengthArray == 0) {
        this.books.push({id: 0, title, author, status, isFavorite});
      } else {
        this.books.push({
          id: this.books[lengthArray-1].id++,
          title,
          author,
          status,
          isFavorite
        });
      }

      localStorage.setItem(STORE_NAME, JSON.stringify(this.books));
    },
  },
});
