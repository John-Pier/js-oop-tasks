"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    let parts;
    parts = fio.split(" ");
    return parts[1] + " " + parts[0];
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    let newSet = new Set(array);
    return Array.from(newSet);
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
        this.dict = new Map()
    }

    addWord(key, value) {
        if (!(typeof key === "string" && typeof value === "string") || key == '' || value == '') {
            return
        }
        this.dict.set(key, value)
    }

    getDefinition(key) {
        return this.dict.get(key)
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};