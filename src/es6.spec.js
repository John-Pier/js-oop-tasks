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
        it('экземпляр класса создается', () => {
            const dic = new core.Dictionary();
        });
        it('добавление элемента в словарь', () => {
            const dic = new core.Dictionary();
            dic.add('key1', 'value1');
            assert.strictEqual(dic.hasKey('key1'), true);
            assert.strictEqual(dic.getValue('key1'), 'value1');
        });

        it('удаление элемента из словаря', () => {
            const dic = new core.Dictionary();
            dic.add('key1', 'value1');
            dic.add('key2', 'value2');
            assert.strictEqual(dic.remove('key1'), true);
            assert.strictEqual(dic.hasKey('key1'), false);
            assert.strictEqual(dic.hasKey('key2'), true);
        });
            // TODO
            assert.strictEqual(!!dic, true);
        });
    });
});
