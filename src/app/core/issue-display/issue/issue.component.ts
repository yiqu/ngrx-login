import { Component, Input, OnInit } from '@angular/core';
import { IIssue } from 'src/app/shared/models/general.model';

@Component({
  selector: 'app-core-issue-display-issue',
  templateUrl: 'issue.component.html',
  styleUrls: ['./issue.component.css']
})

export class SingleIssueComponent implements OnInit {

  @Input()
  issue: IIssue | undefined;

  constructor() {

  }

  ngOnInit() { }
}
