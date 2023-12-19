const assert = require('assert');
const core = require('./es6');

describe('es6', () => {
    describe('#fioToName', () => {
        it('ФИО в Имя Фамилия корректно', () => {
            assert.strictEqual(core.fioToName('Иванов Иван Иванович'), 'Иван Иванов');
        });

        it('ФИ в Имя Фамилия', () => {
            assert.strictEqual(core.fioToName('Петров Петр'), 'Петр Петров');
        });
    });

    describe('#filterUnique', () => {
        it('массив с уникальными равен сам себе', () => {
            assert.deepStrictEqual(core.filterUnique([1, 2, 3]), [1, 2, 3]);
        });

        it('массив с неуникальными отфильтрован', () => {
            assert.deepStrictEqual(core.filterUnique([1, 1, 1, 1]), [1]);
        });

        it('пустой массив', () => {
            assert.deepStrictEqual(core.filterUnique([]), []);
        });
    });

    describe('#calculateSalaryDifference', () => {
        it('считает разницу корректно', () => {
            assert.strictEqual(core.calculateSalaryDifference([1, 2, 3]), 3);
        });

        it('на пустой массив возвращается falsy значение', () => {
            assert.strictEqual(!!core.calculateSalaryDifference([]), false);
        });
    });

    describe('#Dictionary', () => {
        let dictionary;

        beforeEach(() => {
            dictionary = new core.Dictionary();
        });

        it('Добавляется слово с его определением', () => {
            assert.strictEqual(dictionary.addWord('apple', 'a fruit'), true);
        });

        it('Не добавляются слова с неопределенными или нулевыми значениями', () => {
            assert.strictEqual(dictionary.addWord(undefined, 'a fruit'), false);
            assert.strictEqual(dictionary.addWord('apple', undefined), false);
            assert.strictEqual(dictionary.addWord(null, 'a fruit'), false);
            assert.strictEqual(dictionary.addWord('apple', null), false);
        });

        it('Не добавляются слова с нестроковыми значениями', () => {
            assert.strictEqual(dictionary.addWord(123, 'a fruit'), false);
            assert.strictEqual(dictionary.addWord('apple', 456), false);
        });

        it('Определение слова выдается корректно', () => {
            dictionary.addWord('apple', 'a fruit');
            assert.strictEqual(dictionary.getDefinition('apple'), 'a fruit');
        });

        it('Возвращает undefined для неизвестного слова', () => {
            assert.strictEqual(dictionary.getDefinition('unknown'), undefined);
        });

        it('Удаляет слово', () => {
            dictionary.addWord('apple', 'a fruit');
            assert.strictEqual(dictionary.removeWord('apple'), true);
            assert.strictEqual(dictionary.getDefinition('apple'), undefined);
        });

        it('Возвращает false при попытке удалить неизвестное слово', () => {
            assert.strictEqual(dictionary.removeWord('unknown'), false);
        });

        it('Возвращает все слова в виде массива', () => {
            dictionary.addWord('apple', 'a fruit');
            dictionary.addWord('book', 'a written or printed work');
            const allWords = dictionary.getAllWords();
            assert.deepStrictEqual(allWords, ['apple', 'book']);
        });
    });
});