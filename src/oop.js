class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    distanceToOrigin() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}

class Point3D extends Point {
    constructor(x = 0, y = 0, z = 0) {
        super(x, y);
        this.z = z;
    }

    static vectorLength(a, b) {
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const dz = b.z - a.z;
        return Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2);
    }
}

class Queue {
    constructor(initialArray = []) {
        this.queue = initialArray.slice();
    }

    push(...elements) {
        this.queue.push(...elements);
    }

    pop() {
        return this.queue.shift();
    }

    get size() {
        return this.queue.length;
    }

    clear() {
        this.queue = [];
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
