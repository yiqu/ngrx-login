import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CoreService } from '../shared/services/core.service';

@Component({
  selector: 'app-core',
  templateUrl: 'core.component.html',
  styleUrls: ['./core.component.css']
})
export class CoreComponent implements OnInit, OnDestroy {

  compDest$: Subject<any> = new Subject<any>();
  showIssueCreatePane: boolean = false;

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
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
