import { Component, Output, EventEmitter, Input } from '@angular/core';
import { ITodo, Todo } from '../../chared/todo';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {
  private names: string[];

  @Input() set data(todos: ITodo[]) {
    this.names = todos.map(item => item.name);
  };

  @Output() addItem: EventEmitter<ITodo> = new EventEmitter();

  constructor() { }

  onSubmit(name: HTMLInputElement) {
    this.addItem.emit(new Todo(undefined, name.value, false));
    name.value = '';
  }

}
