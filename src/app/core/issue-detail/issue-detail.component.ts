import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IIssue } from 'src/app/shared/models/general.model';
import { CoreService } from 'src/app/shared/services/core.service';
import { AppState } from 'src/app/stores/global/app.reducer';
import * as fromRouterSelectors from '../../stores/router/router.selectors';


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
    private store: Store<AppState>) {

  }

  ngOnInit() {
    this.cs.getIssueByParamId("id").pipe(
      takeUntil(this.compDest$)
    ).subscribe((res) => {
      console.log("det",res)
      this.issue = res;
    })
  }

  goBackToAll() {
    this.router.navigate(['../', 'all'], {relativeTo: this.route});
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
