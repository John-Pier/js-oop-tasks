// Задача 1
class Point {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  distanceToOrigin() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

// Задача 2
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

// Задача 3
class Queue {
  constructor(initialArray = []) {
    this.queue = [...initialArray];
  }

  push(element) {
    this.queue.push(element);
  }

  pop() {
    return this.queue.shift();
  }

  size() {
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

