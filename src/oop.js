/**
 * Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
 * Если координаты не переданы - 0,0; Аналогично если только 1 координата.
 * Реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
 */
class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y
    }

    getDistanceToOrigin() {
        // Используем формулу расстояния между двумя точками в декартовой системе координат
        const distance = Math.sqrt(this.x ** 2 + this.y ** 2);
        return distance;
    }
}

/**
 * Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
 * который будет наследоваться от точки в двумерном пространстве.
 * Реализовать статический метод, который возвращает расстояние между Point3D.
 */
class Point3D extends Point {
    constructor(x = 0, y = 0, z = 0) {
        super(x, y);
        this.z = z;
    }
    static vectorLength(a, b) {
        const distance = Math.sqrt((b.x - a.x) ** 2 + (b.y - a.y) ** 2 + (b.z - a.z) ** 2);
        return distance;
    }
}

/**
 * Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала.
 * Предусмотреть 2 варианта инициализации - массивом в конструкторе (из него создается очередь) и без параметров.
 * Для тех, кто доверяет, но проверяет: написать тесты на методы класса (oop.spec.js)
 */
class Queue {
    constructor(items = []) {
        this.items = items;
    }

    push(...items) {
        this.items.push(...items);
    }

    get size() {
        return this.items.length;
    }

    pop() {
        if (this.isEmpty()) return undefined;
        else return this.items.shift();
    }

    isEmpty() {
        return this.size === 0;
    }

    clear() {
        this.items = [];
    }
}


module.exports = {
    Point,
    Point3D,
    Queue,
};
