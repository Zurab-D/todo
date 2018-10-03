import { Component, Output, EventEmitter, Input, OnChanges } from '@angular/core';
import { ITodo, Todo } from '../../chared/todo';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent implements OnChanges {
  @Input() todos = [];

  constructor(private dataService: DataService) { }

  onSubmit(name: HTMLInputElement) {
    this.dataService.add(new Todo(undefined, name.value, false));
    name.value = '';
  }

  ngOnChanges(ch) {
    console.log(ch);
  }
}
