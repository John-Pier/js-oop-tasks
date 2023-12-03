'use strict';
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    const [surname, name] = fio.split(' ');
    return `${name} ${surname}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    return Array.from(new Set(array));
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    const {max, min} = Math;
    const result = array.reduce(
        (acc, currentSalary) => {
            const currentMin = min(acc.min, currentSalary);
            const currentMax = max(acc.max, currentSalary);
            return {min: currentMin, max: currentMax};
        },
        {min: Infinity, max: -Infinity}
    );

    return result.max / result.min;
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

    addWord(word, definition) {
        if (typeof word === 'string' && typeof definition === 'string') {
            this.words.set(word, definition);
        } else {
            throw new Error('');
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
    calculateSalaryDifference,
};
