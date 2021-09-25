import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-core',
  templateUrl: 'core.component.html',
  styleUrls: ['./core.component.scss']
})
export class TodoCoreComponent implements OnInit {

  constructor(public ts: TodoService) {

  }

  ngOnInit() {

  }
}
