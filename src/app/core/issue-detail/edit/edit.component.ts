import { Component, OnDestroy, OnInit } from '@angular/core';
import { CoreService } from 'src/app/shared/services/core.service';

@Component({
  selector: 'app-core-issue-detail-edit',
  templateUrl: 'edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class IssueDetailEditComponent implements OnInit, OnDestroy {

  constructor(public cs: CoreService) {
    this.cs.toggleIssueEditMode(true);
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.cs.toggleIssueEditMode(false);
  }
}
