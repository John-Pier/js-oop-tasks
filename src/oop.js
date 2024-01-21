/**
 * Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
 * Если координаты не переданы - 0,0; Аналогично если только 1 координата.
 * Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
 */
class Point {
    constructor(x, y) {
        this.x = x ?? 0;
        this.y = y ?? 0;
    }

    distanceFromStart() {
        return (Math.abs(this.x) ** 2 + Math.abs(this.y) ** 2) ** 0.5;
    }
}

/**
 * Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
 * который будет наследоваться от точки в двумерном пространстве.
 * Реализовать статический метод, который возвращает расстояние между Point3D.
 */
class Point3D extends Point {
    constructor(x, y, z) {
        super(x, y);
        this.z = z ?? 0;
    }

    static vectorLength(a, b) {
        return ((b.x - a.x) ** 2 + (b.y - a.y) ** 2 + (b.z - a.z) ** 2) ** 0.5;
    }
}

/**
 * Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала.
 * Предусмотреть 2 варианта инициализации - массивом в конструкторе (из него создается очередь) и без параметров.
 * Со звездочкой: написать тесты методы класса (oop.spec.js)
 */
class Queue {
    constructor(items = []) {
        this.items = items.slice();
        this.size = this.items.length;
    }

    push(...elements) {
        this.items.push(...elements);
        this.size = this.items.length;
    }

    pop() {
        if (this.isEmpty()) {
            return undefined;
        }
        this.size = Math.max(0, this.size - 1);
        return this.items.shift();
    }

    clear() {
        this.items = [];
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
