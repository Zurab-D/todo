import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoInputComponent } from './components/todo-input/todo-input.component';
import { SearchDirective } from './directives/search.directive';
import { PrefixPipe } from './pipes/prefix.pipe';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoItemComponent,
    TodoListComponent,
    TodoInputComponent,
    SearchDirective,
    PrefixPipe
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [ DataService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
