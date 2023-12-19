"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно (а местами и нужно) дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    const parts = fio.split(' ');

    return parts.length >= 2 ? `${parts[1]} ${parts[0]}` : fio
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    const uniqueSet = new Set(array);
    return [...uniqueSet];
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
function calculateSalaryDifference(array) {
    if (array.length === 0) return false;

    let min = array[0];
    let max = array[0];

    for (const item of array) {
        if (item <= min) {
            min = item;
        }
        if (item >= max) {
            max = item;
        }
    }

    return max / min;
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor() {
        this.wordsMap = new Map();
    }

    addWord(word, definition) {
        const oneOfIsUndefined = word === undefined || definition === undefined;
        const oneOfIsNull = word === null || definition === null;
        const oneOfIsNotString = typeof word !== 'string' || typeof definition !== 'string';

        if (oneOfIsUndefined || oneOfIsNull || oneOfIsNotString) {
            return false;
        }

        this.wordsMap.set(word, definition);

        return true;
    }

    getDefinition(word) {
        return this.wordsMap.get(word);
    }

    removeWord(word) {
        return this.wordsMap.delete(word);
    }

    getAllWords() {
        return Array.from(this.wordsMap.keys());
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
