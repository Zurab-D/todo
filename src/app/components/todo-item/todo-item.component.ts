import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../../chared/todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent {
  @Input() todo: ITodo;
  @Output() delTodo: EventEmitter<ITodo> = new EventEmitter();
  @Output() checked: EventEmitter<ITodo> = new EventEmitter();
  @Output() unchecked: EventEmitter<ITodo> = new EventEmitter();

  constructor() { }

  onDelete() {
    this.delTodo.emit(this.todo);
  }

  cbClicked(evt) {
    if (evt.target.checked) {
      this.checked.emit(this.todo);
    } else {
      this.unchecked.emit(this.todo);
    }
  }
}
