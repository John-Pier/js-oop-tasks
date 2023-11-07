"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    const [lastName, firstName] = fio.split(' ');
    return `${firstName} ${lastName}`;
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
let newSet = new Set(array);
let newArray =Array.from(newSet);
return newArray;

}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    if (array.length === 0) {
      return 0; 
    }

    let maxSalary = array.reduce((max, current) => Math.max(max, current), array[0]);
    let minSalary = array.reduce((min, current) => Math.min(min, current), array[0]);
    
    let salaryDifference = maxSalary / minSalary;
  
    return salaryDifference;
}
  
// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor () {
        this.map = new Map();
    }

    set(key, value) {
        if (typeof(key) !== 'string' || typeof(value) !== 'string') return;
        this.map.set(key, value);
        return true;
    }

    get(key) {
        return this.map.get(key);
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
