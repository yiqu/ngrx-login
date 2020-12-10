import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IIssue } from 'src/app/shared/models/general.model';
import { CoreService } from 'src/app/shared/services/core.service';
import { AppState } from 'src/app/stores/global/app.reducer';
import * as fromRouterSelectors from '../../../stores/router/router.selectors';


@Component({
  selector: 'app-core-issue-detail-view',
  templateUrl: 'view.component.html',
  styleUrls: ['./view.component.css']
})
export class IssueDetailViewComponent implements OnInit, OnDestroy {

  compDest$: Subject<any> = new Subject<any>();
  issue: IIssue | undefined = undefined;

  constructor(private store: Store<AppState>, private router: Router, private route: ActivatedRoute,
    public cos: CoreService) {

  }

  ngOnInit() {
    this.cos.getIssueBySelectedId$.pipe(
      takeUntil(this.compDest$)
    ).subscribe((res) => {
      this.issue = res;
    });
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
