export class Repository<T> {
    list: T[];

    constructor() {
        this.list = [];
    }

    add(element: T) {
        this.list.push(element);
    }
}

