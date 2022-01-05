import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import Swal from 'sweetalert2';
import { CrudService } from 'src/app/service/crud.service';
import { Empleado } from '../../interfaces/empleado.interface';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
})
export class EditarEmpleadoComponent implements OnInit {

  formularioEmpleado!: FormGroup;
  Empleado!: Empleado;
  idEmpleado!: number;

  constructor(public formulario: FormBuilder, private activeRoute: ActivatedRoute, private crudService: CrudService, private redireccionar: Router) {

    this.formularioEmpleado = this.formulario.group({
      nombre: [''],
      fecha_ingreso: [''],
      salario: ['']
    })

  }

  ngOnInit() {
    this.activeRoute.params
      .pipe(
        switchMap(({ id }) => this.crudService.ObtenerEmpleado(id))
      ).subscribe((empleado) => {

        this.idEmpleado = empleado.data[0].id;

        this.formularioEmpleado.setValue({
          nombre: empleado.data[0]['nombre'],
          fecha_ingreso: empleado.data[0]['fecha_ingreso'],
          salario: empleado.data[0]['salario']
        });

      })
  }




  agregarDatos(): any {
    this.crudService.EditarEmpleado(this.idEmpleado, this.formularioEmpleado.value)
      .subscribe(response => {

        if (response.status) {
          Swal.fire({
            title: "¡Excelente!",
            text: "Los datos se han actualizado",
            icon: "success"
          })
        }
        this.redireccionar.navigateByUrl('/listar-empleado');
      })
  }
}
