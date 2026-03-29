import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm-delete',
  templateUrl: './confirm-delete.component.html',
  styleUrls: ['./confirm-delete.component.css'],
})
export class ConfirmDeleteComponent {
  isDelete: boolean = false;

  constructor(private dialogRef: MatDialogRef<ConfirmDeleteComponent>) {}

  onDelete() {
    console.log('Delete record');
  }

  onClose() {
    this.dialogRef.close();
  }
}
