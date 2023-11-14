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

  updateEmpregado(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/empregados/${id}`, data);
  }

  getEmpregadoList(): Observable<any> {
    return this._http.get('http://localhost:3000/empregados');
  }

  deleteEmpregado(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/empregados/${id}`);
  }
}
