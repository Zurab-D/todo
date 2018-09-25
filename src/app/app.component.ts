import { Component } from '@angular/core';
import { ITodo, Todo } from './chared/todo';
import { todos } from './chared/todo-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  newItem: ITodo = undefined;
  todos: ITodo[] = [];

  constructor() {
    todos.forEach(todo =>
        this.todos.push(new Todo(todo.id, todo.name, todo.done))
    )
  }

  onItemAdded(newTodo: ITodo) {
    console.dir(newTodo);
    this.newItem = newTodo;
  }
}
