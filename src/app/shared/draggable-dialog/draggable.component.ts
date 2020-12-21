import { AfterViewInit, Component, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { UserAction } from 'src/app/stores/meta/meta.state';
import { AppMetaService } from '../services/meta.service';

@Component({
  selector: 'app-draggable-dialog',
  templateUrl: 'draggable.component.html',
  styleUrls: ['./draggable.component.css']
})
export class DraggableDialogComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild(MatSort)
  sort: MatSort | any;

  @Input()
  cssSelectorBoundaryName: string = ".app-container"; //default

  displayedColumns: string[] = ['time', 'action', 'component'];
  dataSource: MatTableDataSource<UserAction> | undefined;
  compDest$: Subject<any> = new Subject<any>();


  constructor(public ms: AppMetaService) {
  }


  ngOnInit() {
    this.ms.getAllActions$.pipe(
      takeUntil(this.compDest$)
    ).subscribe(
      (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.enablesort();
      }
    )
  }

  ngAfterViewInit() {
  }

  enablesort() {
    setTimeout(() => {
      if (this.dataSource)
      this.dataSource.sort = this.sort;
    }, 500)
  }

  ngOnDestroy() {

  }
}
