export interface ITodo {
    id: number;
    name: string;
    done: boolean;
}

export class Todo implements ITodo {
    id: number;
    name: string;
    done: boolean;
    constructor (id: number, name: string, done: boolean) {
        this.id = id;
        this.name = name;
        this.done = done;
    }
}
