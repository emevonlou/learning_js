// Implementing a Queue

class Queue {
    constructor() {
        this.data = [];
    }

    add(record) {
        this.data.unshift(record);
    }

    remove() {
        return this.data.pop();
    }

    Peek() {
        return this.data[this.data.length - 1];
    }
}

