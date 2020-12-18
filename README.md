## Issue Manager

[![Build Status](https://travis-ci.com/yiqu/ngrx-login.svg?branch=master)](https://travis-ci.com/yiqu/ngrx-login)

Stable: https://ngrx-qu.web.app/

Dev: https://yiqu.github.io/ngrx-login/

## Track your issues with Issue Manager 

The purpose of this application is to showcase [NgRx](https://ngrx.io/) and [Firebase Firestore](https://firebase.google.com/docs/firestore/quickstart) in Angular.

### Using Firebase

To use Firestore in an Angular application is very simple. You have the two choices: 1) use the [Firestore](https://firebase.google.com/docs/firestore/quickstart) straight from Firebase, or 2) use [AngularFire](https://github.com/angular/angularfire) directly.

You will need to first create a Firebase account through Google, and then create a new project. [Follow the steps here to get started with the Firebase CLI](https://code.tutsplus.com/tutorials/how-to-deploy-an-angular-cli-application-to-firebase--cms-31574).
The offical Angular docs also has [instructions on how to deploy an app using Firebase](https://angular.io/start/start-deployment#hosting-an-angular-app-on-firebase).

### NgRx 

[NgRx](https://ngrx.io/docs) is a state management library inspired by the [Redux pattern](https://redux.js.org/understanding/thinking-in-redux/three-principles).

In this app, every meaningful state flows [unidirectional](https://www.tutorialspoint.com/redux/redux_data_flow.htm) which makes it very easy to debug.

### Demo

In this app, users can create, update or close/open issues. Searching is done purely using [Firestore queries](https://firebase.google.com/docs/firestore/query-data/queries), the data can obviously filtered and sorted in the selector files, but I have decided to only use Firestore to modify the data.
