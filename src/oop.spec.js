const assert = require('assert');
const core = require('./oop');
const {Point3D} = require("./oop");

describe('ООП', () => {
    describe('#Point', () => {
        it('Точка создается с двумя параметрами, которые становятся x и y', () => {
            const point = new core.Point(1, 2);

            assert.strictEqual(point.x, 1);
            assert.strictEqual(point.y, 2);
        });

        it('Точка создается без параметров, x и y принимают нули как значение по умолчанию', () => {
            const point = new core.Point();

            assert.strictEqual(point.x, 0);
            assert.strictEqual(point.y, 0);
        });

        it('Точка создается с одним параметром, x принимает значение, y принимают нуль как значение по умолчанию', () => {
            const point = new core.Point(1);

            assert.strictEqual(point.x, 1);
            assert.strictEqual(point.y, 0);
        });
    });

    describe('#Point3D', () => {
        it('Точка создается с двумя параметрами, которые становятся x и y, z принимает нуль как значение по умолчанию', () => {
            const point = new core.Point3D(1, 2);

            assert.strictEqual(point.x, 1);
            assert.strictEqual(point.y, 2);
            assert.strictEqual(point.z, 0);
        });

        it('Точка создается с тремя параметрами, которые становятся x, y, z', () => {
            const point = new core.Point3D(1, 2.5, -3);

            assert.strictEqual(point.x, 1);
            assert.strictEqual(point.y, 2.5);
            assert.strictEqual(point.z, -3);
        });

        it('Point3D имеет статический метод vectorLength', () => {
            const pointA = new core.Point3D(1, 2, -3);
            const pointB = new core.Point3D(1, -1, 1);

            assert.strictEqual(typeof Point3D.vectorLength, 'function');

            const length = Point3D.vectorLength(pointA, pointB);

            assert.strictEqual(length, 5);
        });
    });

    describe('#Queue', () => {
        it('проверка на инициализацию пустым массивом', () => {
            const queue = new core.Queue([]);
            queue.add('aaa');
            assert.strictEqual(queue.get(), 'aaa');
        });

        it('проверка на инициализацию массивом с undefined и int', () => {
            const queue = new core.Queue([undefined, 10, undefined, 22]);
            assert.strictEqual(queue.get(), 10);
        });

        it('проверка на добавление массива с undefined и int', () => {
            const queue = new core.Queue([1, 4, 5]);
            queue.add([2, undefined, 3, undefined]);
            assert.strictEqual(queue.queue.at(-1).at(-1), 3);
        });

        it('проверка на добавление undefined', () => {
            const queue = new core.Queue([1, 2]);
            queue.add(undefined);
            assert.strictEqual(queue.queue.at(-1), 2);
        });

        it('проверка на смешивание типов данных в очереди', () => {
            const queue = new core.Queue()
            queue.add(4)
            queue.add('string')
            queue.add(['string', 2, null])
            assert.strictEqual(queue.get(), 4)
            assert.strictEqual(queue.get(), 'string')
        });

        it('проверка на пограничные случаи', () => {
            const queue = new core.Queue();
            assert.strictEqual(queue.get(), undefined);
        });

        it('может создаться из массива', () => {
            const queue = new core.Queue([1, 2, 3, 5]);
            assert.strictEqual(queue.get(), 1);
            assert.strictEqual(queue.get(), 2)
        });
    });
});
