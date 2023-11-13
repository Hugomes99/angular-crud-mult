import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmpregadoService } from '../services/empregado.service';
import { DialogRef } from '@angular/cdk/dialog';

@Component({
  selector: 'app-funci-add-edit',
  templateUrl: './funci-add-edit.component.html',
  styleUrls: ['./funci-add-edit.component.scss']
})
export class FunciAddEditComponent {

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
    private _dialogRef: DialogRef<FunciAddEditComponent>) {
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

  onFormSubmit() {
    if (this.empForm.valid) {
      this._empService.addEmpregado(this.empForm.value).subscribe({
        next: (val: any) => {
          alert('Empregado adicionado com sucesso!');
          this._dialogRef.close();
        },
        error: (err: any) => {
          console.error(err)
        }
      })
    }

  }
}
