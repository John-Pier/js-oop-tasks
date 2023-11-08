/**
 * Напишите класс геометрической точки, принимающей в конструкторе координаты X и Y
 * Если координаты не переданы - 0,0; Аналогично если только 1 координата.
 * Со звездочкой: реализовать метод, который возвращает расстояние от точки до центра координат (0, 0)
 */
class Point 
{
    constructor(x = 0, y = 0)
    {
        this.x = x;
        this.y = y;
    }

    GetMetric()
    {
        return Math.sqrt(this.x**2 + this.y**2);
    }
}

/**
 * Напишите класс геометрической точки в трехмерном пространстве (x, y, z),
 * который будет наследоваться от точки в двумерном пространстве.
 * Реализовать статический метод, который возвращает расстояние между Point3D.
 */
class Point3D extends Point 
{
    constructor(x, y, z = 0)
    {
        super(x, y);
        this.z = z;
    }

    static vectorLength(point1, point2) 
    {
        return Math.sqrt((point2.x-point1.x)**2 + (point2.y-point1.y)**2 + (point2.z-point1.z)**2);
    }
}

/**
 * Напишите класс "очередь", в котором можно добавить элемент в конец и получить из начала.
 * Предусмотреть 2 варианта инициализации - массивом в конструкторе (из него создается очередь) и без параметров.
 * Со звездочкой: написать тесты методы класса (oop.spec.js)
 */
class Queue 
{
    constructor(array = [])
    {
        this.queue = array;
    }

    Dequeue()
    {
        let stack = [];

        while(this.queue.length > 0)
            stack.push(this.queue.pop());

        let val = stack.pop();

        while(stack.length>0)
            this.Enqueue(stack.pop());

        return val;
    }

    Enqueue(item)
    {
        this.queue.push(item);
    }

    Show()
    {
        for(let i = 0; i<this.queue.length;i++)
            console.log(this.queue[i]);
    }
}

module.exports = {
    Point,
    Point3D,
    Queue,
};
