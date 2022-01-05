import { Component, OnInit } from '@angular/core';


import Swal from 'sweetalert2';
import { CrudService } from 'src/app/service/crud.service';
import { Solicitud } from '../../interfaces/solicitud.interface';


@Component({
  selector: 'app-listar-solicitud',
  templateUrl: './listar-solicitud.component.html',
  styles: [
  ]
})
export class ListarSolicitudComponent implements OnInit {

  Solicitud!: any;

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {

    this.crudService.ObtenerSolicitudes().subscribe(response => {
      this.Solicitud = response.data
    })
  }
  borrarRegistro(idSolicitud: number, fila: number) {

    Swal.fire({
      title: '¿Estás seguro?',
      text: "Si eliminas la solicitud no podras recuperarla.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, ¡eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.crudService.BorrarSolicitud(idSolicitud).subscribe((response) => {
          if (response.status) {

            Swal.fire(
              '¡Eliminar!',
              'El registro se ha eliminado',
              'success'
            )

            this.Solicitud.splice(fila, 1);
          }
        });

      }
    })
  }
}
