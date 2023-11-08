"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) 
{
    let arr = fio.split(' ');
    if(arr.length == 3)
        return arr[1] + ' ' + arr[0];
    else if (arr.length == 2)
        return arr[1] + ' ' + arr[0];
}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) 
{
    let mySet = new Set(array);
    array = Array.from(mySet);
    return array;
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) 
{
    if(array.length==0)
    return false;
    let maxVal = array.reduce((max, cur) => max < cur ? max = cur: max = max);
    let minVal = array.reduce((min, cur) => min > cur ? min = cur: min = min);
    return maxVal/minVal;
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary 
{
    dict = new Map();

    Add(string1, string2)
    {
        if(typeof(string1) !== 'string')
            return false;
        if(typeof(string2) !== "string")
            return false;
        this.dict.set(string1, string2);
    }

    FindMeaning(string1)
    {
        if(typeof(string1) !== "string")
            return false;
        if (this.dict.has(string1))
            return this.dict.get(string1)
        else return false;
    }

    Clear()
    {
        this.dict.clear();
    }

    GetSize()
    {
        return this.dict.size;
    }

    Remove(string1)
    {
        if(typeof(string1) !== 'string')
            return false;
        if(this.dict.has(string1))
            this.dict.delete(string1);
    }

    ShowAllWords()
    {
        for (let item of this.dict)
            console.log(`${item[0]} - ${item[1]}`);
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
