import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreService } from 'src/app/shared/services/core.service';
import { IssueCreatorComponent } from '../../all/issue-creator/creator.component';

@Component({
  selector: 'app-core-issue-detail-edit',
  templateUrl: 'edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class IssueDetailEditComponent implements OnInit, OnDestroy {

  @ViewChild(IssueCreatorComponent)
  public issueCreator: IssueCreatorComponent | undefined;

  constructor(public cs: CoreService) {
    this.cs.toggleIssueEditMode(true);
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.cs.toggleIssueEditMode(false);
  }
}
