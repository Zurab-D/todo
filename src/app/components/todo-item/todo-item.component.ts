import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../../chared/todo';
import { DataService } from '../../services/data.service';

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

  constructor(private dataService: DataService) { }

  onDelete() {
    this.dataService.delete(this.todo);
  }

  cbClicked(evt) {
    this.dataService.done(this.todo, evt.target.checked);
  }
}
