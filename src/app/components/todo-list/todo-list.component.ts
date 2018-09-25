import { Component, Input } from '@angular/core';
import { ITodo } from '../../chared/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @Input() todos: ITodo[] = [];

  @Input()
  set newItem(todo: ITodo) {
    if (todo) {
      this.addItem(todo);
    }
  }

  constructor() { }

  addItem(newTodo: ITodo) {
    newTodo.id = (this.todos.map(item => item.id).sort((a, b) => b - a)[0] || 0) + 1;
    this.todos.push(newTodo);
  }

  deleteItem(item: ITodo) {
    this.todos.splice(this.todos.indexOf(item), 1);
  }

  itemChecked(item: ITodo, isDone: boolean) {
    this.todos[this.todos.indexOf(item)].done = isDone;
  }
}
