"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    let arr = fio.split(" ");
    arr.splice(2,1)
    return arr.reverse().join(" ");
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
    array.sort()
    return array[array.length - 1] / array[0] || false;
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor() {
        this.dict = new Map();
    };

    _inputIsNotString(key, description) {
        return typeof key !== "string" || typeof description !== "string"
    }
    set(key, description) {
        if (this._inputIsNotString(key, description)) {
            throw new Error('Invalid argument type');
        }

        this.dict.set(key, description);
    }

    get(key) {
        var desription = this.dict.get(key);
        if (!desription) {
            throw new Error("This word is not in the dictionary")
        }

        return desription;
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};