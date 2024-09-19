import { Component, inject } from '@angular/core';
import { TodoService } from '../todo.service';
import { CommonModule } from '@angular/common';
import { CdkDragDrop, DragDropModule } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-todo-list',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todos$;

  constructor(private todoService: TodoService) {
    this.todos$ = this.todoService.todos$;
  }

  drop(event: CdkDragDrop<string[]>) {
    this.todoService.moveTodo(event.previousIndex, event.currentIndex);
  }

  remove(todo: string) {
    this.todoService.removeTodo(todo);
  }
  
}