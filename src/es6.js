"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно (а местами и нужно) дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    const [фамилия, имя] = fio.split(' ');
    return `${имя} ${фамилия}`;
}
// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    return [...new Set(array)];
}
// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
function calculateSalaryDifference(array) {
    const максЗарплата = Math.max(...array);
    const минЗарплата = Math.min(...array);
    return максЗарплата / минЗарплата;
}
// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor() {
        this.words = new Map();
    }

    addWord(key, value) {
        if (typeof key === 'string' && typeof value === 'string') {
            this.words.set(key, value);
        } else {
            throw new Error('Ключ и значение должны быть строками');
        }
    }

    getDefinition(key) {
        return this.words.get(key);
    }

    removeWord(key) {
        this.words.delete(key);
    }
}
module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};