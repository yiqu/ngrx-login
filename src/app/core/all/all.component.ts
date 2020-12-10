import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { IIssue, PriorityLevel } from 'src/app/shared/models/general.model';
import { CoreService } from '../../shared/services/core.service';

@Component({
  selector: 'app-core-all-issues',
  templateUrl: 'all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllIssuesLandingComponent implements OnInit {

  compDest$: Subject<any> = new Subject<any>();
  showIssueCreatePane: boolean = false;
  newIssue: IIssue | undefined = undefined;

  constructor(private cs: CoreService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.cs.getQueryParamById$.pipe(
      takeUntil(this.compDest$)
    ).subscribe((res) => {
      this.showIssueCreatePane = !!res;
    })
  }

  onSearch() {

  }

  onNewIssue() {
    this.router.navigate(['./'], {queryParams: {
      newIssuePane: "open"
    }});

    const testissue = {
      id: "",
      title: undefined,
      description: "Test Desc",
      priority: {
        id: PriorityLevel.Low,
        display: "Low"
      },
      created: false,
      loading: false,
      open: true,
      issueNumber: this.cs.currentIssueCounter
    };

    this.newIssue = undefined;
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }

}
