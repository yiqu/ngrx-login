import { Component, OnInit } from '@angular/core';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { MatListOption, MatSelectionListChange } from '@angular/material/list';
import { TodoItem, ToggleStatus } from '../store/todo.state';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-core',
  templateUrl: 'core.component.html',
  styleUrls: ['./core.component.scss']
})
export class TodoCoreComponent implements OnInit {

  selectAllCheckValue = {id: 'selectedAll'};

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
    console.log(selectedIds)
    this.ts.updateItemsSelection(selectedIds);
  }

  onToggleAllChange(change: MatCheckboxChange) {
    console.log(change)
    if (change.checked) {
      this.ts.updateItemsSelection([], ToggleStatus.ALL);
    } else {
      this.ts.updateItemsSelection([], ToggleStatus.NONE);
    }

  }

  onToggleComplete(item: TodoItem) {
    console.log(item)
    this.ts.editItem(item.id, {
      isFinished: !item.isFinished
    });
  }
}
