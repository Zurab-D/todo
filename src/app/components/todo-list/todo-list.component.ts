import { Component, Input } from '@angular/core';
import { ITodo } from '../../chared/todo';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  todos: ITodo[] = [];

  constructor(private dataService: DataService) {
    this.todos = dataService.todos;
  }
}
