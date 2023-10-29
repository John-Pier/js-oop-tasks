"use strict";

// Функция преобразования ФИО в строку формата "Имя Фамилия"
function fioToName(fio) {
  const [surname, name] = fio.split(' ').slice(0, 2);
  return `${name} ${surname}`;
}

// Преобразование массива чисел, оставляя только уникальные элементы
function filterUnique(array) {
  return [...new Set(array)];
}

// Определение во сколько раз зарплата самого высокооплачиваемого сотрудника
// превышает зарплату самого низкооплачиваемого
function calculateSalaryDifference(array) {
  if (array.length === 0) return 0;

  const maxSalary = array.reduce((max, salary) => Math.max(max, salary), array[0]);
  const minSalary = array.reduce((min, salary) => Math.min(min, salary), array[0]);

  return maxSalary / minSalary;
}

// Класс "словарь слов"
class Dictionary {
  constructor() {
    this.words = new Map();
  }

  addWord(word, definition) {
    if (typeof word === 'string' && typeof definition === 'string') {
      this.words.set(word, definition);
    } else {
      throw new Error('Both word and definition should be strings');
    }
  }

  getDefinition(word) {
    return this.words.get(word);
  }

  deleteWord(word) {
    this.words.delete(word);
  }

  getWords() {
    return Array.from(this.words.keys());
  }

  clearDictionary() {
    this.words.clear();
  }
}

module.exports = {
  fioToName,
  filterUnique,
  Dictionary,
  calculateSalaryDifference
};
