import { AfterViewInit, Component, ElementRef, HostListener, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IIssue, IssuePriority, PriorityLevel } from 'src/app/shared/models/general.model';
import { CoreService } from 'src/app/shared/services/core.service';
import { CrudService } from 'src/app/shared/services/crud.service';
import * as gUtils from '../../../shared/general.utils';
import * as fromValidators from '../../../shared/form-validators/general-form.validator';
import { Update } from '@ngrx/entity';
import { Observable } from 'rxjs';
import { WindoConfirmService } from 'src/app/shared/services/confirm.service';

const ISSUE_PATH: string = "issues";

@Component({
  selector: 'app-core-issue-creator',
  templateUrl: 'creator.component.html',
  styleUrls: ['./creator.component.css']
})
export class IssueCreatorComponent implements OnInit, OnChanges, AfterViewInit, OnDestroy {

 /**
   * Check before letting page refresh
   * RETURN false to pop out dialog
   */
  @HostListener('window:beforeunload', ['$event'])
  unloadNotification($event: any) {
    if (this.changesSaved) {
      return true;
    }
    return false;
  }

  @Input()
  issueData: IIssue | undefined = undefined;

  @Input()
  isEditMode: boolean | null | undefined = false;

  @ViewChild("titleInput")
  titleInput?: ElementRef;

  priorityList: IssuePriority[];
  issueFg: FormGroup | undefined;

  get titleValue(): FormControl | undefined {
    if (this.issueFg && this.issueFg.get('title')) {
      return <FormControl>this.issueFg.get("title");
    }
    return undefined;
  }

  get changesSaved(): boolean | undefined {
    return this.issueFg?.pristine;
  }

  constructor(private fb: FormBuilder, private cs: CrudService, private router: Router,
    private route: ActivatedRoute, public cos: CoreService, private confirmService: WindoConfirmService) {
      this.priorityList = gUtils.PRIORITY_LIST;
      this.issueFg = undefined;
      this.createInitIssueFg();
  }

  ngOnChanges() {
    this.createIssueFg(this.issueData);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.titleInput?.nativeElement.focus();
    },300);
  }

  createIssueFg(value?: IIssue) {
    if (value) {
      const priorSelection: IssuePriority | undefined = this.priorityList.find((val: IssuePriority) => {
        return val.id === value.priority?.id;
      });

      this.issueFg!.patchValue({
        ...value,
        priority: priorSelection
      });
    }
  }

  onFormReset() {
    if (this.issueData) {
      this.createIssueFg(this.issueData);
    }
  }

  onSubmit() {
    let issueVal: IIssue = this.issueFg?.value;
    if (this.issueFg?.valid) {
      if (this.isEditMode && this.issueData) {
        const update: Update<IIssue> = {
          id: this.issueData?.id,
          changes: {
            ...issueVal,
            loading: true
          }
        }
        this.cos.editIssue(update, this.issueData);
      } else {
        const data = this.createFullIssueObject(issueVal);
        const docPath: string = ISSUE_PATH + "/" + data.id;
        this.cs.addNewIssue(data, docPath);
        this.onIssueCancel();
      }
    }
    this.issueFg?.markAsPristine();
  }

  createFullIssueObject(i: IIssue): IIssue {
    return {
      ...i,
      dateCreated: new Date().getTime(),
      id: this.cs.createDocId(),
      open: true,
      author: "Tester",
      reactions: 0,

      created: false,
      loading: true,
      issueNumber: this.cos.currentIssueCounter
    };
  }

  onIssueCancel() {
    this.router.navigate(['./']);
  }

  createInitIssueFg() {
    this.issueFg = this.fb.group({
      title: gUtils.createFormControl2(null, false, [fromValidators.customRequiredValidator, fromValidators.custom256CountValidator]),
      description: gUtils.createFormControl2(null, false, [fromValidators.customRequiredValidator]),
      priority: gUtils.createFormControl2(this.priorityList[1], false, [Validators.required]),
    });
  }

  ngOnDestroy() {
  }
}
