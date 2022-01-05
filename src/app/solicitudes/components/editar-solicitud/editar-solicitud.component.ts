import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { CrudService } from 'src/app/service/crud.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-editar-solicitud',
  templateUrl: './editar-solicitud.component.html',
  styles: [
  ]
})
export class EditarSolicitudComponent implements OnInit {

  formularioSolicitud: FormGroup;
  Empleado!: any;
  idSolicitud!: number;


  constructor(public formulario: FormBuilder, private activeRoute: ActivatedRoute, private crudService: CrudService, private redireccionar: Router) {
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

    this.activeRoute.params
      .pipe(
        switchMap(({ id }) => this.crudService.ObtenerSolicitud(id))
      ).subscribe((solicitud) => {

        this.idSolicitud = solicitud.data[0].id;

        this.formularioSolicitud.setValue({
          codigo: solicitud.data[0]['codigo'],
          descripcion: solicitud.data[0]['descripcion'],
          resumen: solicitud.data[0]['resumen'],
          id_empleado: solicitud.data[0]['id_empleado'].toString()
        });

      })
  }

  agregarSolicitud(): void {

    this.crudService.EditarSolicitud(this.idSolicitud, this.formularioSolicitud.value)
      .subscribe(() => {
        Swal.fire({
          title: "¡Excelente!",
          text: "Solicitud actualizada",
          icon: "success"
        }).then(() => {
          this.redireccionar.navigateByUrl('/listar-solicitud');
        })
      });

  }
}
