import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from '../shared/components/error-dialog/error-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private dialog: MatDialog) { }


  showError(message: string) {
    this.dialog.open(ErrorDialogComponent, {
      data : {
        message: message
      }
    });
  }

  showSuccess(message: string) {
    this.dialog.open(ErrorDialogComponent, {
      data : {
        message: message
      }
    });
  }
}
