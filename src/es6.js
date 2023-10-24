"use strict";
// в данных задачах нужно использовать возможности es6
// ко всем заданиям можно дописать свои тесты в файле es6.spec.js
// Можно менять параметры функций (например сделать им значения по умолчанию)

// Напишите функцию, которая принимает ФИО пользователя и возвращает
// строку формата Имя Фамилия
function fioToName(fio) {
    // Разделяем ФИО по пробелам
    const parts = fio.split(' ');
    // Берем первое слово как фамилию и второе слово как имя
    const lastName = parts[0];
    const firstName = parts[1];
    // Собираем итоговую строку
    return `${firstName} ${lastName}`;

}

// преобразуйте массив чисел так, чтобы в нем остались только
// уникальные элементы
// присмотритесь к коллекции "Set"
function filterUnique(array) {
    // Создаем Set из массива, что автоматически уберет дубликаты
    const uniqueSet = new Set(array);
    // Преобразуем Set обратно в массив
    const uniqueArray = [...uniqueSet];

    return uniqueArray;
}

// Задача: разница зарплат
// в функцию приходит массив из n зарплат сотрудников фирмы
// ваша задача определить, во сколько раз зарплата самого высокооплачиваемого
// сотрудника превышает зарплату самого низкооплачиваемого
// присмотритесь к методу .reduce
function calculateSalaryDifference(array) {
    // Используем метод .reduce для нахождения минимальной и максимальной зарплаты.
    const [minSalary, maxSalary] = array.reduce(
        (acc, currentSalary) => {
            return [
                Math.min(acc[0], currentSalary), // Минимальная зарплата
                Math.max(acc[1], currentSalary), // Максимальная зарплата
            ];
        },
        [Infinity, -Infinity] // Начальные значения для minSalary и maxSalary
    );

    if (minSalary === maxSalary) {
        return 0; // Если зарплаты самого низкооплачиваемого и самого высокооплачиваемого сотрудников одинаковы, возвращаем 0.
    }

    return maxSalary / minSalary; // Рассчитываем разницу зарплат.
}

// Реализуйте класс "словарь слов" (как толковый словарь)
// класс должен быть безопасным и работать только со словами
// присмотритесь к коллекции "Map"
// Словарь - (string, string), и все это не null и не undefined
// * покройте класс тестами
class Dictionary {
    constructor() {
        this.entries = new Map();
    }

    // Метод для добавления слова и его определения в словарь
    addWord(word, definition) {
        if (typeof word === 'string' && word !== '' && typeof definition === 'string' && definition !== '') {
            this.entries.set(word, definition);
        }
    }

    // Метод для получения определения слова из словаря
    getDefinition(word) {
        if (typeof word === 'string' && word !== '' && this.entries.has(word)) {
            return this.entries.get(word);
        } else {
            return "Слово не найдено в словаре";
        }
    }

    // Метод для удаления слова из словаря
    removeWord(word) {
        if (typeof word === 'string' && word !== '' && this.entries.has(word)) {
            this.entries.delete(word);
        }
    }
}

module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};