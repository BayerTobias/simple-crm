import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss'],
})
export class DialogEditUserComponent {
  user: User;
  userId!: string;
  sending: boolean = false;

  constructor(
    public dialogRef: MatDialogRef<DialogAddUserComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private firestoreService: FirestoreService
  ) {
    this.user = data.user;
    this.userId = data.userId;
  }

  async saveUser() {
    this.sending = true;
    await this.firestoreService.editUser(
      'users',
      this.userId,
      this.user.toJSON()
    );
    this.sending = false;
    this.dialogRef.close();
  }
}
