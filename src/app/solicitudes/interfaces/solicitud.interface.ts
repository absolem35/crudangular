export interface Solicitud {
  data: [
    {
      id: number;
      codigo: string,
      descripcion: string,
      resumen: string,
      id_empleado: number
    }
  ]
}