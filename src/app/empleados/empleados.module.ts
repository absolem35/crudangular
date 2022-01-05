import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AgregarEmpleadoComponent } from './components/agregar-empleado/agregar-empleado.component';
import { ListarEmpleadoComponent } from './components/listar-empleado/listar-empleado.component';
import { EditarEmpleadoComponent } from './components/editar-empleado/editar-empleado.component';


@NgModule({
  declarations: [
    AgregarEmpleadoComponent,
    ListarEmpleadoComponent,
    EditarEmpleadoComponent,
  ],
  exports: [
    AgregarEmpleadoComponent,
    ListarEmpleadoComponent,
    EditarEmpleadoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]

})
export class EmpleadosModule { }
