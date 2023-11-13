import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpregadoService {

  constructor(private _http: HttpClient) { }

  addEmpregado(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/empregados', data);
  }

  getEmpregadoList(): Observable<any> {
    return this._http.get('http://localhost:3000/empregados');
  }

}
