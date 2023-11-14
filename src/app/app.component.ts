import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FunciAddEditComponent } from './funci-add-edit/funci-add-edit.component';
import { EmpregadoService } from './services/empregado.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from './core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  displayedColumns: string[] = [
    'id',
    'primeiroNome',
    'sobrenome',
    'email',
    'genero',
    'nascimento',
    'escolaridade',
    'formacao',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor(
    private _dialog: MatDialog,
    private _empService: EmpregadoService,
    private _coreService: CoreService
  ) { }

  ngOnInit(): void {
    this.getEmpregadoList();
  }

  openAddEditFunciForm() {
    const dialogRef = this._dialog.open(FunciAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmpregadoList();
        }
      },
    });
  }

  getEmpregadoList() {
    this._empService.getEmpregadoList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteEmpregado(id: number) {
    this._empService.deleteEmpregado(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Empregado deletado!', 'OK');
        this.getEmpregadoList();
      },
      error: console.log,
    })
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(FunciAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmpregadoList();
        }
      },
    });

  }


}
