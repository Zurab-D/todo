import { Injectable } from '@angular/core';
import { ITodo, Todo } from '../chared/todo';
import { todos } from '../chared/todo-data';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todos: ITodo[] = [];

  constructor() {
    todos.forEach(todo =>
      this.todos.push(new Todo(todo.id, todo.name, todo.done))
    );
  }

  add(newTodo: ITodo) {
    newTodo.id || (newTodo.id = (this.todos.map(item => item.id).sort((a, b) => b - a)[0] || 0) + 1);
    this.todos.push(newTodo);
  }

  delete(item: ITodo) {
    this.todos.splice(this.todos.indexOf(item), 1);
  }

  done(item: ITodo, isDone: boolean = true) {
    this.todos[this.todos.indexOf(item)].done = isDone;
  }
}
