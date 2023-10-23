"use strict";

// Функция для преобразования ФИО в формат "Имя Фамилия"
function fioToName(fio) {
    const [lastName, firstName, middleName] = fio.split(' ');
    return `${firstName} ${lastName}`;
}

// Функция для фильтрации уникальных элементов в массиве
function filterUnique(array) {
    return [...new Set(array)];
}

// Функция для определения разницы в зарплатах
function calculateSalaryDifference(array) {
    if (array.length === 0) {
        return 0; // Если массив пустой, возвращаем 0.
    }

    const maxSalary = array.reduce((max, current) => (current > max ? current : max), array[0]);
    const minSalary = array.reduce((min, current) => (current < min ? current : min), array[0]);

    if (minSalary === 0) {
        return "Зарплата не может быть нулевой.";
    }

    return maxSalary / minSalary;
}

// Реализация класса "словарь слов" с использованием Map
class Dictionary {
    constructor() {
        this.words = new Map();
    }

    addWord(key, value) {
        if (typeof key === 'string' && typeof value === 'string') {
            this.words.set(key, value);
        }
    }

    getWord(key) {
        return this.words.get(key);
    }

    deleteWord(key) {
        this.words.delete(key);
    }

    getAllWords() {
        return [...this.words.keys()];
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
