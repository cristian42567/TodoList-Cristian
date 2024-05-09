import { Component, signal } from '@angular/core';
import { FilterType } from '../../models/todo';
import { CommonModule } from '@angular/common';
import { TodoModel } from '../../models/todo';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule],
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

  changeFilter(filterString: FilterType) {
    this.filter.set(filterString);
  }

}
