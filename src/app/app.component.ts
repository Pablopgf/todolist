import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todo = ''
  todos: any[] = []

  addTodo() {
    if (this.todo != '') {
      this.todos = [...this.todos, this.todo]
      this.todo = '';
    }
  }
  completed(index: number) {
    this.todos.splice(index, 1);
  }
}