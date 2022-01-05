export interface Empleado {
  data: [
    {
      id: number;
      nombre: string,
      salario: number,
      fecha_ingreso: string
    }
  ]

}

export interface Response {
  status: boolean;
  response: string;
}