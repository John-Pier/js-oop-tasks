
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
        return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2 + (a.z - b.z) ** 2);
    }
}


class Queue {
    constructor(initialArray = []) {
        this.queue = Array.isArray(initialArray) ? initialArray : [];
    }

    push(element) {
        this.queue.push(element);
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
