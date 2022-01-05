import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CrudService } from '../../../service/crud.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Empleado } from 'src/app/empleados/interfaces/empleado.interface';
import { Observable } from 'rxjs';




@Component({
  selector: 'app-agregar-solicitud',
  templateUrl: './agregar-solicitud.component.html',
})
export class AgregarSolicitudComponent implements OnInit {

  formularioSolicitud: FormGroup;
  Empleado!: any;


  constructor(public formulario: FormBuilder, private crudService: CrudService, private redireccionar: Router) {
    this.formularioSolicitud = this.formulario.group({
      codigo: [''],
      descripcion: [''],
      resumen: [''],
      id_empleado: ['']
    })
  }

  ngOnInit() {
    this.crudService.ObtenerEmpleados().subscribe(datos => {
      this.Empleado = datos.data
    })
  }

  agregarSolicitud(): void {

    this.crudService.AgregarSolicitud(this.formularioSolicitud.value)
      .subscribe(() => {
        Swal.fire({
          title: "¡Excelente!",
          text: "Solicitud registrada",
          icon: "success"
        }).then(() => {
          this.redireccionar.navigateByUrl('/listar-solicitud');
        })
      });

  }

}
