import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { IIssue, PriorityLevel } from 'src/app/shared/models/general.model';
import { CoreService } from '../../shared/services/core.service';
import * as fromUtils from '../../shared/general.utils';
import { debounce } from 'lodash';
import { IsMobileService } from 'src/app/shared/services/is-mobile.service';


@Component({
  selector: 'app-core-all-issues',
  templateUrl: 'all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllIssuesLandingComponent implements OnInit {

  compDest$: Subject<any> = new Subject<any>();
  showIssueCreatePane: boolean = false;
  newIssue: IIssue | undefined = undefined;
  searchCtrl: FormControl;

  constructor(private cs: CoreService, private router: Router, private route: ActivatedRoute,
    public ims: IsMobileService) {
    this.searchCtrl = fromUtils.createFormControl2(null, false);
  }

  ngOnInit() {
    this.cs.getQueryParamById$.pipe(
      takeUntil(this.compDest$)
    ).subscribe((res) => {
      this.showIssueCreatePane = !!res;
    });

    this.searchCtrl.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged((a,b) => {
        return a === b;
      }),
      takeUntil(this.compDest$)
    ).subscribe(
      (res: string) => {
        this.searchForIssues(res);
      }
    );

    this.cs.getUserSearchTerm$.pipe(
      takeUntil(this.compDest$)
    ).subscribe(
      (res) => {
        this.searchCtrl.setValue(res, {emitEvent: false});
      }
    )
  }

  onInputActionClick() {
    if (this.searchCtrl.pristine) {
      this.searchForIssues(this.searchCtrl.value);
    } else {
      this.searchCtrl.reset();
    }
  }

  searchForIssues(text: string) {
    let searchTerm: string | null = null;
    if (text && (text.trim() !== "")) {
      searchTerm = text.trim();
    }
    this.cs.getAllIssues(searchTerm);
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
