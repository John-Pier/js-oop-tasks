"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    const [surname, name, patronymic] = fio.split(" ");
    return `${name} ${surname}`;
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
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    if (array.length === 0) return false;

    const maxSalary = array.reduce((max, current) => (current > max ? current : max), array[0]);
    const minSalary = array.reduce((min, current) => (current < min ? current : min), array[0]);
    
    return maxSalary / minSalary;
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    #words;

    constructor() {
        this.words = new Map();
        this.size = function() {return this.getSize();}
    }

    set(k, v) {
        if (typeof k === 'string' && typeof v === 'string')
            this.#words.set(k, v);
    }

    get(k) {
        return this.#words.get(k);
    }

    delete(k) {
        return this.#words.delete(k);
    }

    keys() {
        return [...this.#words.keys()];
    }

    getSize() {
        return this.#words.size;
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
