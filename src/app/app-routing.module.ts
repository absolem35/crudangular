import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AgregarEmpleadoComponent } from "./empleados/components/agregar-empleado/agregar-empleado.component";
import { EditarEmpleadoComponent } from './empleados/components/editar-empleado/editar-empleado.component';
import { ListarEmpleadoComponent } from './empleados/components/listar-empleado/listar-empleado.component';
import { ListarSolicitudComponent } from './solicitudes/components/listar-solicitud/listar-solicitud.component';
import { AgregarSolicitudComponent } from './solicitudes/components/agregar-solicitud/agregar-solicitud.component';
import { EditarSolicitudComponent } from './solicitudes/components/editar-solicitud/editar-solicitud.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'agregar-empleado'
  },
  {
    path: 'agregar-empleado',
    component: AgregarEmpleadoComponent
  },
  {
    path: 'listar-empleado',
    component: ListarEmpleadoComponent
  },
  {
    path: 'editar-empleado/:id',
    component: EditarEmpleadoComponent
  },
  {
    path: 'listar-solicitud',
    component: ListarSolicitudComponent
  },
  {
    path: 'agregar-solicitud',
    component: AgregarSolicitudComponent
  },
  {
    path: 'editar-solicitud/:id',
    component: EditarSolicitudComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
