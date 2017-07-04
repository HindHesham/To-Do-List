import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {TodoService} from '../services/todos.service';
import { AppComponent } from './app.component';
import {TodoListComponent} from './todolist/todolist.component';
import {AddtodoComponent} from './addtodo/addtodo.component';
@NgModule({
  declarations: [
    AppComponent, TodoListComponent, AddtodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
