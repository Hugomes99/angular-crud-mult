import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FunciAddEditComponent } from './funci-add-edit/funci-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-crud-mult';

  constructor(private _dialog: MatDialog) { }

  openAddEditFunciForm() {
    this._dialog.open(FunciAddEditComponent);
  }
}
