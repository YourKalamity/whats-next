import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-input.component.html',
  styleUrls: ['./todo-input.component.css']
})
export class TodoInputComponent {
  todoTitle: string = '';
  todoEmoji: string = '';
  todoService = inject(TodoService);

  addTodo() {
    if (this.todoTitle.trim()) {
      console.log('Todo added:', this.todoTitle);
      this.todoService.addTodo(this.todoTitle);
      this.todoTitle = '';
    }
  }
}