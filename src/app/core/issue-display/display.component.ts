import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-issue-display',
  templateUrl: 'display.component.html',
  styleUrls: ['./display.component.css']
})
export class IssueDisplayComponent implements OnInit, OnDestroy {

  someHtml = "<b>HELLO</b> <br>Break line</br> <br>Break line</br>";

  constructor() {

  }

  ngOnInit() {

  }

  ngOnDestroy() {

  }
}
