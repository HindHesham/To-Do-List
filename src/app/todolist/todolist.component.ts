import { Component } from '@angular/core';
import {TodoService} from '../../services/todos.service';

@Component({
    selector: "app-todolist",
    templateUrl: './todolist.component.html',
})
export class TodoListComponent{
    todos = [];
    all :boolean = true;
    index :number;
    constructor(private todoService:TodoService)
    {
       
    }
    getTodo()
    {
       return this.todoService.getTodo(this.all);
    }

    removeTodo(index)
    {
       return this.todoService.removeTodo(index);
    }

}