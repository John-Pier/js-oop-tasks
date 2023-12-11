"use strict";

// Используйте возможности ES6 для решения задач


function fioToName(fio) {
   
    let [surname, name] = fio.split(' ');
    
    return `${name} ${surname}`;
}


function filterUnique(array) {
   
    return [...new Set(array)];
}


function calculateSalaryDifference(array) {

    if (array.length === 0) return 0;

    let maxSalary = Math.max(...array);
    let minSalary = Math.min(...array);

    return maxSalary / minSalary;
}


class Dictionary {
    constructor() {
        this.map = new Map();
    }

    add(key, value) {
        if (typeof key !== 'string' || typeof value !== 'string') {
            throw new Error('Both key and value must be strings');
        }
        this.map.set(key, value);
    }


    get(key) {
        return this.map.get(key);
    }

    remove(key) {
        this.map.delete(key);
    }

    get size() {
        return this.map.size;
    }
}

// Экспорт функций и класса для использования в других файлах или тестах
module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
