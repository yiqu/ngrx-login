import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IIssue } from 'src/app/shared/models/general.model';
import { CoreService } from 'src/app/shared/services/core.service';
import { AppState } from 'src/app/stores/global/app.reducer';
import * as fromRouterSelectors from '../../stores/router/router.selectors';
import * as fromUtils from '../../shared/general.utils';
import { Update } from '@ngrx/entity';
import { CrudService } from 'src/app/shared/services/crud.service';
import { MatDialog } from '@angular/material/dialog';
import { DialogConfirmComponent } from 'src/app/shared/dialog/dialog.component';

@Component({
  selector: 'app-core-issue-display-detail',
  templateUrl: 'issue-detail.component.html',
  styleUrls: ['./issue-detail.component.css']
})
export class IssueDetailComponent implements OnInit, OnDestroy {

  compDest$: Subject<any> = new Subject<any>();
  issueId: string | undefined = undefined;
  issue: IIssue | undefined= undefined;

  constructor(private router: Router, private route: ActivatedRoute, public cs: CoreService,
    private store: Store<AppState>, private crs: CrudService, public dialog: MatDialog) {

  }

  ngOnInit() {
    this.cs.getIssueByParamId("id").pipe(
      takeUntil(this.compDest$)
    ).subscribe((res) => {
      this.issue = res;
    });

    fromUtils.scrollToElementById("action-row");
  }

  goBackToAll() {
    this.router.navigate(['../', 'all'], {relativeTo: this.route});
  }

  onOpenCloseToggleIssue() {
    if (this.issue) {
      this.openConfirmDialog().subscribe(
        (res) => {
          if (res && this.issue) {
            this.cs.toggleOpenCloseIssue(this.issue);
          }
        }
      )
    }
  }

  openConfirmDialog() {
    const txt = this.issue?.open ? "close" : "reopen";
    const dialogRef = this.dialog.open(DialogConfirmComponent, {
      minWidth: '300px',
      data: {actionName: (txt + " this issue?")}
    });

    return dialogRef.afterClosed().pipe(
      takeUntil(this.compDest$)
    );
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
