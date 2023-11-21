class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    distanceToCenter() {
        return Math.sqrt(this.x ** 2 + this.y ** 2);
    }
}

class Point3D extends Point {
    constructor(x = 0, y = 0, z = 0) {
        super(x, y);
        this.z = z;
    }

    static vectorLength(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dz = a.z - b.z;
        return Math.sqrt(dx ** 2 + dy ** 2 + dz ** 2);
    }
}

class Queue {
    constructor(elements = []) {
        this.elements = elements;
    }

    enqueue(element) {
        this.elements.push(element);
    }

    dequeue() {
        return this.elements.shift();
    }
}
module.exports = {
    Point,
    Point3D,
    Queue,
};
