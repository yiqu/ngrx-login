import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {
  horizontalPosition: MatSnackBarHorizontalPosition = 'start';
  verticalPosition: MatSnackBarVerticalPosition = 'bottom';

  constructor(private ts: ToastrService, private _snackBar: MatSnackBar) {

  }

  getSuccess(msg: string, duration?: number, clearOthers?: boolean) {
    if (clearOthers) {
      this.clearAll();
    }
    this.ts.success(msg, "Success");
  }

  getError(msg: string) {
    this.ts.error(msg, "Error occured");
  }

  getInfo(msg: string) {
    this.ts.info(msg, "Info");
  }

  getSnackbar(msg: string, dur?: number) {
    if (msg.slice(-1) !== ".") {
      msg = msg + ".";
    }
    this.openSnackBar(msg, dur);
  }

  clearAll() {
    this.ts.clear();
  }

  private openSnackBar(msg: string, dur: number = 3000) {
    this._snackBar.open(msg, '', {
      duration: dur,
      panelClass: 'app-snackbar',
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
