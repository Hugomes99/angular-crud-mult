import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpregadoService } from '../services/empregado.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-funci-add-edit',
  templateUrl: './funci-add-edit.component.html',
  styleUrls: ['./funci-add-edit.component.scss']
})
export class FunciAddEditComponent implements OnInit {

  empForm: FormGroup;

  escolaridade: string[] = [
    'Fundamental incompleto',
    'Fundamental completo',
    'Médio incompleto',
    'Médio completo',
    'Superior incompleto',
    'Superior completo'
  ]

  constructor(private _fb: FormBuilder,
    private _empService: EmpregadoService,
    private _dialogRef: MatDialogRef<FunciAddEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.empForm = this._fb.group({
      primeiroNome: '',
      sobrenome: '',
      email: '',
      nascimento: '',
      genero: '',
      escolaridade: '',
      formacao: '',
    });
  }

  ngOnInit(): void {
    this.empForm.patchValue(this.data);
  }

  onFormSubmit() {
    if (this.empForm.valid) {
      if (this.data) {
        this._empService
          .updateEmpregado(this.data.id, this.empForm.value)
          .subscribe({
            next: (val: any) => {
              alert('Informação do empregado atualizada!');
              this._dialogRef.close(true);
            },
            error: (err: any) => {
              console.error(err)
            }
          });

      } else {
        this._empService.addEmpregado(this.empForm.value).subscribe({
          next: (val: any) => {
            alert('Empregado adicionado com sucesso!');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err)
          }
        });
      }

    }

  }
}
