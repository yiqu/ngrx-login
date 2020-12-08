import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import * as firebase from 'firebase/app';
import { Subject } from 'rxjs';
// import 'firebase/analytics';
// import 'firebase/auth';
// import 'firebase/database';
import { environment } from 'src/environments/environment';
import { IsMobileService } from './shared/services/is-mobile.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  footerTitle: string = "@KQ 2020";
  myUrl: string = "https://yiqu.github.io/";
  compDest$: Subject<any> = new Subject<any>();

  @ViewChild("snav")
  sideNav!: MatSidenav;

  mobileQuery!: MediaQueryList;
  private _mobileQueryListener!: () => void;

  constructor(public changeDetectorRef: ChangeDetectorRef, private ims: IsMobileService, public media: MediaMatcher) {
    this.setMobileDetection();
  }

  ngOnInit() {

  }

    /**
   * Detect if deive is mobile size, then re-run detection change
   */
  setMobileDetection() {
    this.mobileQuery = this.media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => this.changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    this.ims.mediaQList = this.mobileQuery;
  }

  /**
   * Initialize Firebase.
   * NOTE: Injecting AngularFire will auto initializeApp
   */
  initFirebase() {
    firebase.default.initializeApp(environment.firebaseConfig);
  }

  onTopNavMenuClick() {
    if (this.sideNav) {
      this.sideNav.toggle();
    }
  }

  onNavClose() {
    if (this.sideNav) {
      this.sideNav.close();
    }
  }

}
