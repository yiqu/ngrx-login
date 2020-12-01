import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IIssue, IssuePriority, PriorityLevel } from 'src/app/shared/models/general.model';
import { CrudService } from 'src/app/shared/services/crud.service';
import * as gUtils from '../../shared/general.utils';


const ISSUE_PATH: string = "issues";

@Component({
  selector: 'app-core-issue-creator',
  templateUrl: 'creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class IssueCreatorComponent implements OnInit, OnDestroy {

  priorityList: IssuePriority[];
  issueFg: FormGroup;
  formInitValue: IIssue;

  constructor(private fb: FormBuilder, private cs: CrudService) {

    this.priorityList = [
      {
        id: PriorityLevel.High,
        display: "High"
      },
      {
        id: PriorityLevel.Medium,
        display: "Medium"
      },
      {
        id: PriorityLevel.Low,
        display: "Low"
      }
    ];
    this.issueFg = new FormGroup({});

    this.formInitValue = {
      id: "testId",
      title: "Test Title",
      description: "Test Desc",
      priority: {
        id: PriorityLevel.Low,
        display: "Low"
      }
    };
  }

  ngOnInit() {
    this.createIssueFg(this.formInitValue);
  }

  createIssueFg(value?: IIssue) {
    this.issueFg = this.fb.group({
      id: gUtils.createFormControl2(null, false),
      title: gUtils.createFormControl2(null, false, [Validators.required]),
      description: gUtils.createFormControl2(null, false, [Validators.required]),
      dateCreated: gUtils.createFormControl2(null, false),
      lastEdited: gUtils.createFormControl2(null, false),
      priority: gUtils.createFormControl2(this.priorityList[1], false, [Validators.required]),
      author: gUtils.createFormControl2("Tester", false),
      reactions: gUtils.createFormControl2(null, false),
    });
    if (value) {
      const prior: IssuePriority | undefined = this.priorityList.find((val: IssuePriority) => {
        return val.id === value.priority?.id;
      });
      this.issueFg.patchValue({
        ...value,
        priority: prior
      });
    }
  }

  onFormReset() {
    this.createIssueFg(this.formInitValue);
  }

  onSubmit() {
    let issueVal: IIssue = this.issueFg.value;
    if (this.issueFg.valid) {
      const data = this.createFullIssueObject(issueVal);
      const docPath: string = ISSUE_PATH + "/" + data.id;

      console.log("valid, saving.....", data);
      this.cs.createDocument(data, docPath);
    }
  }

  createFullIssueObject(i: IIssue): IIssue {
    return {
      ...i,
      dateCreated: new Date().getTime(),
      id: this.cs.createDocId()
    };
  }

  ngOnDestroy() {
  }
}
