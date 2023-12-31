import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';
import { FirestoreService } from '../firestore.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent {
  constructor(
    public dialog: MatDialog,
    private firestoreService: FirestoreService
  ) {}

  displayedColumns: string[] = ['Name', 'E-mail'];
  dataSource = this.firestoreService.users$;
  clickedRows = new Set<any>();

  openDialog() {
    this.dialog.open(DialogAddUserComponent);
  }
}
