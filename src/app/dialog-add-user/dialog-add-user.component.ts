import { Component, inject } from '@angular/core';
import { User } from 'src/models/user.class';
import { FirestoreService } from '../firestore.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss'],
})
export class DialogAddUserComponent {
  user = new User();

  sending: boolean = false;

  firestoreService = inject(FirestoreService);

  constructor(private dialogRef: MatDialogRef<DialogAddUserComponent>) {}

  onNoClick() {
    this.dialogRef.close();
  }

  async saveUser() {
    this.sending = true;
    this.user.birthDate = this.user.birthDate.getTime();
    await this.firestoreService.newUser(this.user.toJSON());
    this.sending = false;
    this.dialogRef.close();
  }
}
