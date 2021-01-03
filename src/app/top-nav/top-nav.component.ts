import { Component, OnInit, EventEmitter, Output, OnDestroy, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, timer } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
import { headShakeAnimation, rotateAnimation, tadaAnimation } from 'angular-animations';
import { MenuItem } from '../shared/models/nav-item.model';
import { environment } from '../../environments/environment';
import { CoreService } from '../shared/services/core.service';
import { FormControl } from '@angular/forms';
import { createFormControl2 } from '../shared/general.utils';
import { AppMetaService } from '../shared/services/meta.service';
import { IsMobileService } from '../shared/services/is-mobile.service';

const defaultProfileImg: string = "assets/user/default-user5.png";

@Component({
  selector: 'app-top-nav',
  templateUrl: 'top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
  animations: [
    // headShakeAnimation(),
    // rotateAnimation(),
    // tadaAnimation(),
  ]
})
export class TopNavComponent implements OnInit, OnDestroy, AfterViewInit {

  headerTitle: string = "Issue Manager";
  compDest$: Subject<any> = new Subject<any>();
  logoShakeState: boolean = false;
  leftNavMenuState: boolean = false;
  swingState: boolean = false;
  userMenuItems: MenuItem[] = [];
  avartarImgSrc: string = defaultProfileImg;
  actionTrackerCtrl: FormControl;

  @Output()
  navToggle: EventEmitter<any> = new EventEmitter<any>();

  @Output()
  logoClick: EventEmitter<any> = new EventEmitter<any>();

  constructor(public router: Router, public route: ActivatedRoute, private ms: AppMetaService,
    public ims: IsMobileService) {
    this.actionTrackerCtrl = createFormControl2(false, false);

    this.userMenuItems.push(
      new MenuItem("record_voice_over", "Sign in", "signin")
    )
  }

  ngOnInit() {
    this.animateLogoOnStart();

    this.actionTrackerCtrl.valueChanges.pipe(
      takeUntil(this.compDest$)
    ).subscribe(
      (res) => {
        this.ms.toggleActionTracker();
      }
    )
  }

  ngAfterViewInit() {
  }

  onLogoClick() {
    this.logoClick.emit();
  }

  onMenuClick() {
    this.leftNavMenuState = !this.leftNavMenuState;
    this.navToggle.emit(true);
  }

  animateLogoOnStart() {
    const logoAnimateTimer = timer(600);
    logoAnimateTimer.pipe(
      take(1)
    ).subscribe((val) => {
      this.swingState = true;
    })
  }

  onAuthClick() {
    this.router.navigate(['auth']);
  }

  onMenuItemClick(item: MenuItem) {
    if (item.id === "account") {
      this.router.navigate(['/', 'my-account']);
    } else if (item.id === "signout") {
      this.onSignoutClick();
    } else if (item.id === "signin") {
      this.onAuthClick();
    }
  }

  onSignoutClick() {
  }


  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
