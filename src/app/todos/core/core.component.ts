import { Component, OnInit } from '@angular/core';
import { MatListOption, MatSelectionListChange } from '@angular/material/list';
import { TodoItem } from '../store/todo.state';
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

  trackByFn(index: number, item: TodoItem): string {
    return item.id;
  }

  onSelectionChange(change: MatSelectionListChange) {
    let selectedIds: string[] = [];
    if (change.source.selectedOptions.selected) {
      selectedIds = change.source.selectedOptions.selected.map((sel) => {
        return sel.value?.id;
      });
    }
    this.ts.updateItemsSelection(selectedIds);
  }
}
