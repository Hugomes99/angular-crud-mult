import { Component } from '@angular/core';

@Component({
  selector: 'app-funci-add-edit',
  templateUrl: './funci-add-edit.component.html',
  styleUrls: ['./funci-add-edit.component.scss']
})
export class FunciAddEditComponent {
  escolaridade: string[] = [
    'Fundamental incompleto',
    'Fundamental completo',
    'Médio incompleto',
    'Médio completo',
    'Superior incompleto',
    'Superior completo'
  ]

}
