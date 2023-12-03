"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно (а местами и нужно) дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    const [surname, name, patronymic] = fio.split(' ');
    return name + " " + surname;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) { return [...new Set(array)];}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
function calculateSalaryDifference(array) {
    const maxSalary = Math.max(...array);
    const minSalary = Math.min(...array);
    return maxSalary / minSalary;
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor() {
        this.dictionary = new Map();
    }
    
    

    addWord(word, definition) {
        if (typeof word !== 'string' || typeof definition !== 'string') {
            throw new Error('Both word and definition should be strings');
        }
        this.dictionary.set(word, definition);
        
    }

    getDefinition(word) {
        if (typeof word !== 'string') {
            throw new Error('Word should be a string');
        }
        return this.dictionary.get(word);
    }

    removeWord(word) {
        if (typeof word !== 'string') {
            throw new Error('Word should be a string');
        }
        this.dictionary.delete(word);
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
