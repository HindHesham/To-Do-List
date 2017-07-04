import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todos.service'
@Component({
  selector: 'app-addtodo',
  templateUrl: '../addtodo/addtodo.component.html',
  styleUrls:['../addtodo/addtodo.component.css']
})
export class AddtodoComponent implements OnInit {
  textTodo="";
  constructor(private todoService: TodoService) { 

  }

  addTodo(newTodo:string)
  {
    if (newTodo != " " && newTodo.length >= 5)
    {
      this.todoService.addTodo(newTodo);
      this.textTodo = "";
    }
  }

  ngOnInit() {
  }

}
