import { Component, signal } from '@angular/core';
import { FilterType } from '../../models/todo';
import { CommonModule } from '@angular/common';
import { TodoModel } from '../../models/todo';
import { FormControl, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  todoList = signal<TodoModel[]>([
    {
      id: 1,
      title: 'Comprar leche',
      completed: false,
      editing: false,
    },
    {
      id: 2,
      title: 'Comprar pan',
      completed: false,
      editing: false,
    },
    {
      id: 3,
      title: 'Comprar queso',
      completed: false,
      editing: false,
    },
  ])

  filter = signal<FilterType>('all');

  newTodo = new FormControl('', {
    nonNullable: true,
    validators: [Validators.required, Validators.minLength(1)]
  })

  changeFilter(filterString: FilterType) {
    this.filter.set(filterString);
  }

  addTodo() {
    const newTodoTitle = this.newTodo.value.trim();
    if (this.newTodo.valid && newTodoTitle !== '') {
      this.todoList.update((prev_todos) => {
        return [
          ...prev_todos,
          { id: Date.now(), title: newTodoTitle, completed: false }
        ];
      });
      this.newTodo.reset();
    } else {
      this.newTodo.reset();
      alert('Por favor, introduce un texto en el campo de entrada.');
    }
  }

  toggleTodo(todoId: number) {
    return this.todoList.update((prev_todos) =>
      prev_todos.map((todo) => {

        return todo.id === todoId? {...todo, completed: !todo.completed}
        :todo;
      })
    )
  }

}
