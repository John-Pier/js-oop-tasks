"use strict";

function fioToName(fio) {
    const [lastName, firstName] = fio.split(' ');
    return `${firstName} ${lastName}`;
}

function filterUnique(array) {
    return [...new Set(array)];
}

function calculateSalaryDifference(array) {
    if (array.length === 0) {
        return null; // or any other appropriate falsy value
    }

    const maxSalary = Math.max(...array);
    const minSalary = Math.min(...array);

    if (minSalary === 0) {
        throw new Error("Minimum salary should not be zero");
    }

    return maxSalary / minSalary;
}

class Dictionary {
    constructor() {
        this.entries = {};
    }

    add(key, value) {
        this.entries[key] = value;
    }

    remove(key) {
        if (this.hasKey(key)) {
            delete this.entries[key];
            return true;
        }
        return false;
    }

    hasKey(key) {
        return key in this.entries;
    }

    getValue(key) {
        return this.entries[key];
    }

    getKeys() {
        return Object.keys(this.entries);
    }

    getValues() {
        return Object.values(this.entries);
    }

    getCount() {
        return Object.keys(this.entries).length;
    }

    clear() {
        this.entries = {};
    }
}


module.exports = {
    fioToName,
    filterUnique,
    Dictionary,
    calculateSalaryDifference
};
