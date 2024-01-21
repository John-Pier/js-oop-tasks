"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно (а местами и нужно) дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    const [surname, name, ...rest] = fio.trim().split(' ')
    return `${name} ${surname}`
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    return Array.from(new Set(array))
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
function calculateSalaryDifference(array) {
    if (array.length === 0) {
        return null
    }

    let maxNumber = array.reduce((max, current) => {
        return max > current ? max : current;
    });

    let minNumber = array.reduce((min, current) => {
        return min < current ? min : current;
    });

    return maxNumber / minNumber
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
        if (typeof word === "string" && typeof definition === "string") {
            this.wordsMap.set(word, definition);
        } else {
            console.error("Слово и его определение должны быть непустыми строками");
        }
    }

    getDefinition(word) {
        if (typeof word === "string")  {
            if (this.wordsMap.has(word)) {
                return this.wordsMap.get(word);
            } else {
                console.error("Такого слова нет в словаре")
            }
        } else {
            console.error("Слово должно быть строкой и не может быть null или undefined");
        }
    }

    removeWord(word) {
        if (typeof word === "string") {
            this.wordsMap.delete(word);
        } else {
            console.error("Слово должно быть строкой и " +
                "не может быть null или undefined");
        }
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
