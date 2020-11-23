import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/database';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'login-ngrx';

  constructor() {
    this.initFirebase();
  }

  ngOnInit() {
    let database = firebase.default.database();
    let ref = database.ref("test");
    ref.on('value', (snapshot) => {
      console.log("changed")
      console.log(snapshot.val());
    });
  }

  /**
   * Initialize Firebase.
   * NOTE: Injecting AngularFire will auto initializeApp
   */
  initFirebase() {
    firebase.default.initializeApp(environment.firebaseConfig);
  }

}
