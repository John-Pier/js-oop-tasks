"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) { 
    let parts = [];
    parts = fio.split(" ");
    return parts[1] + " " + parts[0];
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    let newset = new Set(array);
    return Array.from(newset);
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    if (array.length !== 0) {
        let max = array.reduce(function(max, item){
            if(item > max) return item;
            else return max;
    
        })
        let min = array.reduce(function(min, item){
            if(item < min) return item;
            else return min;
        })
        return max/min;
    }
    return false;
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

    addWord(word, description) {
        if(typeof word == 'string' || typeof description == 'string') {
            this.words.set(word, description);
            return true;
        }
        return false;
    }

    getWord(word) {
        if (typeof(word) === "string") {
            if(this.words.has(word)) return this.words.get(word);
            return false;
        }
        return false;
    }

    deleteWord(word) {
        if (typeof(word) === "string") {
            if(this.words.has(word)) return this.words.delete(word);
            return false;
        }
        return false;
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};