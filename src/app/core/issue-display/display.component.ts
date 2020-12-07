import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CoreService } from 'src/app/shared/services/core.service';

const ISSUES_PATH: string = "issues";

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
    this.cs.getAllIssues(ISSUES_PATH);
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
