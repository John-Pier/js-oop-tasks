"use strict";

class Dictionary {
  constructor() {
    this.dictionary = new Map();
  }

  addWord(key, value) {
    if (typeof key === 'string' && typeof value === 'string') {
      this.dictionary.set(key, value);
    } else {
      throw new Error('Both key and value should be strings');
    }
  }

  getDefinition(key) {
    if (typeof key === 'string') {
      return this.dictionary.get(key);
    } else {
      throw new Error('Key should be a string');
    }
  }
}

function fioToName(fio) {
  const [lastName, firstName, middleName] = fio.split(' ').filter(Boolean);
  return `${firstName} ${lastName}`;
}

function filterUnique(array) {
  return Array.from(new Set(array));
}

function calculateSalaryDifference(array) {
  if (array.length === 0) {
    return null; // or any falsy value as per the requirement
  }
  const maxSalary = Math.max(...array);
  const minSalary = Math.min(...array);
  return maxSalary / minSalary;
}

module.exports = {
  fioToName,
  filterUnique,
  Dictionary,
  calculateSalaryDifference
};
