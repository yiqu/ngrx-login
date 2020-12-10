import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CoreService } from '../../../shared/services/core.service';

@Component({
  selector: 'app-core-issue-display',
  templateUrl: 'display.component.html',
  styleUrls: ['./display.component.css']
})
export class IssueDisplayComponent implements OnInit, OnDestroy {

  compDest$: Subject<any> = new Subject<any>();

  constructor(public cs: CoreService) {

  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
