import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';
import Swal from 'sweetalert2';




@Component({
  selector: 'app-agregar-empleado',
  templateUrl: './agregar-empleado.component.html'
})
export class AgregarEmpleadoComponent {
  formularioEmpleado: FormGroup;


  constructor(public formulario: FormBuilder, private crudService: CrudService, private redireccionar: Router) {
    this.formularioEmpleado = this.formulario.group({
      nombre: [''],
      fecha_ingreso: [''],
      salario: ['']
    })
  }

  agregarEmpleado(): void {
    this.crudService.AgregarEmpleado(this.formularioEmpleado.value)
      .subscribe(() => {
        Swal.fire({
          title: "¡Excelente!",
          text: "Empleado registrado",
          icon: "success"
        }).then(() => {
          this.redireccionar.navigateByUrl('/listar-empleado');
        })
      });

  }

}
