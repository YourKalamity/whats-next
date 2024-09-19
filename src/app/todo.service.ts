import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private todosSubject = new BehaviorSubject<string[]>(this.loadTodos());
  todos$ = this.todosSubject.asObservable();

  private loadTodos(): string[] {
    return JSON.parse(localStorage.getItem('todos') || '[]');
  }

  getTodos(): string[] {
    return this.todosSubject.value;
  }

  addTodo(todo: string) {
    const todos = [...this.todosSubject.value, todo];
    localStorage.setItem('todos', JSON.stringify(todos));
    this.todosSubject.next(todos);
  }

  moveTodo(previousIndex: number, currentIndex: number) {
    const todos = [...this.todosSubject.value];
    const [movedItem] = todos.splice(previousIndex, 1);
    todos.splice(currentIndex, 0, movedItem);
    this.updateTodos(todos);
  }

  private updateTodos(todos: string[]) {
    localStorage.setItem('todos', JSON.stringify(todos));
    this.todosSubject.next(todos);
  }

  removeTodo(todo: string) {
    const todos = this.todosSubject.value.filter(t => t !== todo);
    this.updateTodos(todos);
  }


  constructor() {}
}
