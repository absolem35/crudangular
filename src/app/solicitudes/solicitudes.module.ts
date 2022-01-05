import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarSolicitudComponent } from './components/listar-solicitud/listar-solicitud.component';
import { AgregarSolicitudComponent } from './components/agregar-solicitud/agregar-solicitud.component';
import { EditarSolicitudComponent } from './components/editar-solicitud/editar-solicitud.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ListarSolicitudComponent,
    AgregarSolicitudComponent,
    EditarSolicitudComponent
  ],
  exports: [
    ListarSolicitudComponent,
    AgregarSolicitudComponent,
    EditarSolicitudComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SolicitudesModule { }
