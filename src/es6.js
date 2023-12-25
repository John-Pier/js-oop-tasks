// 1
function fioToName(fio) {
  const [lastName, firstName] = fio.split(' ');
  return `${firstName} ${lastName}`;
}

// 2
function filterUnique(array) {
  return [...new Set(array)];
}

// 3
function calculateSalaryDifference(array) {
  if (array.length === 0) {
    return 0; // Предположим, что в случае пустого массива разница равна 0
  }

  const maxSalary = Math.max(...array);
  const minSalary = Math.min(...array);

  if (minSalary === 0) {
    return Infinity; // Избегаем деления на ноль
  }

  return maxSalary / minSalary;
}

// 4
class Dictionary {
  constructor() {
    this.wordsMap = new Map();
  }

  addWord(key, value) {
    if (typeof key === 'string' && typeof value === 'string' && key !== '' && value !== '') {
      this.wordsMap.set(key, value);
    } else {
      throw new Error('Ключ и значение должны быть строками и не могут быть пустыми.');
    }
  }

  getWord(key) {
    return this.wordsMap.get(key);
  }

  deleteWord(key) {
    this.wordsMap.delete(key);
  }

  containsWord(key) {
    return this.wordsMap.has(key);
  }
}

module.exports = {
  fioToName,
  filterUnique,
  Dictionary,
  calculateSalaryDifference,
};

