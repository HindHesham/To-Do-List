import {Injectable} from '@angular/core'

 
@Injectable()
export class TodoService{
    todos=[
    {
      'action':'study angular','done':false
    },
    {
      'action':'study javascript','done':false
    },{
      'action':'study html','done':false
    },
    {
      'action':'deploy angular','done':true
    }
  ]

  getTodo(all:boolean)
  {
    if (all)
    {
      return this.todos;
    }else
    {
      return this.todos.filter(todo => !todo.done);
    }
  }
  addTodo(newTodo:string)
  {
    if (newTodo != "")
    {
    this.todos.push({action:newTodo,done:false});
    }
  };

  removeTodo(index: any)
  {
   this.todos.splice(index, 1);
  };
}