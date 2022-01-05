import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
import { Empleado, Response } from '../empleados/interfaces/empleado.interface';
import { Solicitud } from '../solicitudes/interfaces/solicitud.interface';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private _urlApi: string = 'http://localhost/api_rest/'

  constructor(private clienteHttp: HttpClient) { }

  AgregarEmpleado(datosEmpleado: Empleado): Observable<any> {
    return this.clienteHttp.post(`${this._urlApi}empleados`, datosEmpleado)
  }

  ObtenerEmpleados(): Observable<Empleado> {
    return this.clienteHttp.get<Empleado>(`${this._urlApi}empleados`);
  }

  BorrarEmpleado(idEmpleado: any): Observable<any> {
    return this.clienteHttp.delete(`${this._urlApi}empleados/${idEmpleado}`);
  }

  ObtenerEmpleado(idEmpleado: number): Observable<Empleado> {
    return this.clienteHttp.get<Empleado>(`${this._urlApi}empleados/${idEmpleado}`);
  }

  EditarEmpleado(idEMpleado: any, datosEmpleado: Empleado): Observable<Response> {
    return this.clienteHttp.post<Response>(`${this._urlApi}empleado/${idEMpleado}`, datosEmpleado);
  }

  ObtenerSolicitudes(): Observable<Solicitud> {
    return this.clienteHttp.get<Solicitud>(`${this._urlApi}solicitudes`);
  }

  AgregarSolicitud(datosSolicitud: Solicitud): Observable<any> {
    return this.clienteHttp.post(`${this._urlApi}solicitudes`, datosSolicitud)
  }

  ObtenerSolicitud(idSolicitud: number): Observable<Solicitud> {
    return this.clienteHttp.get<Solicitud>(`${this._urlApi}solicitudes/${idSolicitud}`);
  }

  EditarSolicitud(idSolicitud: any, datosSolicitud: Empleado): Observable<Response> {
    return this.clienteHttp.post<Response>(`${this._urlApi}solicitud/${idSolicitud}`, datosSolicitud);
  }

  BorrarSolicitud(idSolicitud: number): Observable<Response> {
    return this.clienteHttp.delete<Response>(`${this._urlApi}solicitudes/${idSolicitud}`);
  }

}
