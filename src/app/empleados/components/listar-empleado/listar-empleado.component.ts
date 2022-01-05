import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../../service/crud.service';

import Swal from 'sweetalert2';
import { Empleado } from '../../interfaces/empleado.interface';

@Component({
  selector: 'app-listar-empleado',
  templateUrl: './listar-empleado.component.html',
})
export class ListarEmpleadoComponent implements OnInit {

  Empleados: any;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.ObtenerEmpleados().subscribe(response => {
      this.Empleados = response.data;
    })
  }
  borrarRegistro(idEmpleado: any, fila: number) {

    Swal.fire({
      title: '¿Estás seguro?',
      text: "Si elimina el registro no podras recuperarlo.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, ¡eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Eliminar!',
          'El registro se ha eliminado',
          'success'
        )
        this.crudService.BorrarEmpleado(idEmpleado).subscribe((response) => {
          this.Empleados.splice(fila, 1);
        });
      }
    })
  }

}
