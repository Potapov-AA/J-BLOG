import { defineStore } from "pinia";

const STORE_NAME = "books";

const getValue = () => {
  const value = localStorage.getItem(STORE_NAME);

  return value ? JSON.parse(value) : [];
};

export const useBooksStore = defineStore(STORE_NAME, {
  state: () => ({
    books: getValue(),
  }),
  actions: {
    addBooks(title, author, status) {
      let lengthArray = this.books.length;

      if (lengthArray == 0) {
        this.books.push({ title, author, status, id: 0 });
      } else {
        this.books.push({
          title,
          author,
          status,
          id: this.books[0].id++,
        });
      }

      localStorage.setItem(STORE_NAME, JSON.stringify(this.books));
    },
  },
});
