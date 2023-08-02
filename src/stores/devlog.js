import { defineStore } from "pinia";

const STORE_NAME = "devlog";

const defaultValue = [
  {
    id: 1,
    title: "Доделал devlog",
    description:
      "Доделал devlog до планируемого состояния. Сейчас занимаюсь чисто визуальной состовляющей сайта, поэтому не подсасываю никаких API. По сути сейчас все данные записей devlog-а храняться в локальном хранилище браузера. Из плюсов быстрая реализация и заодно разобрался, как работать с локальным хранилищем. Из минусов, данные легко потерять. Поэтому решил полноценные записи, которые потом перекочуют в БД (предположительно в MongoDB) сделать как дефолтную константу, которую можно потерять, если только удалить ее.",
  },
  {
    id: 0,
    title: "Начал делать devlog",
    description:
      'Начал проробавтывать внешний вид раздела "Дневник разработчика", прописал дефолтные значения для первой записи. Нарисовал на бумаге быстрый эскиз того что хочу увидет по итогу для каждой записи. В целом получилось минималистично и очень приятно.',
  },
];

const getValue = () => {
  const value = localStorage.getItem(STORE_NAME);

  return value ? JSON.parse(value) : defaultValue;
};

export const useDevlogStore = defineStore(STORE_NAME, {
  state: () => ({
    articels: getValue(),
  }),
  actions: {
    addArticels(title, description) {
      let lengthArray = this.articels.length;

      if (lengthArray == 0) {
        this.articels.push({ id: 0, title, description });
      } else {
        this.articels.push({
          id: this.articels[0].id + 1,
          title,
          description,
        });
      }

      this.articels.sort((a, b) => {
        return a.id < b.id ? 1 : -1;
      });

      localStorage.setItem(STORE_NAME, JSON.stringify(this.articels));
    },
  },
});