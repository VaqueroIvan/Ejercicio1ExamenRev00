let notaAlumno: number[] = [7, 6, 9, 5, 8, 7, 10, 4, 8];
let arregloMes: string[] = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre"
];
let i: number = 0;
let promedioNota: number = 0;

function mesesDesaprobados() {
  for (i = 0; i < 9; i++) {
    if (notaAlumno[i] < 6) {
      console.log("desaprobaste: " + arregloMes[i]);
    }
  }
}
//*******************************
function mesMenorNota() {
  if (
    notaAlumno[0] < notaAlumno[1] &&
    notaAlumno[0] < notaAlumno[2] &&
    notaAlumno[0] < notaAlumno[3] &&
    notaAlumno[0] < notaAlumno[4] &&
    notaAlumno[0] < notaAlumno[5] &&
    notaAlumno[0] < notaAlumno[6] &&
    notaAlumno[0] < notaAlumno[7] &&
    notaAlumno[0] < notaAlumno[8]
  ) {
    console.log(
      "El mes de la nota mas baja es: " +
        arregloMes[0] +
        " y la nota es: " +
        notaAlumno[0]
    );
  }
  if (
    notaAlumno[1] < notaAlumno[0] &&
    notaAlumno[1] < notaAlumno[2] &&
    notaAlumno[1] < notaAlumno[3] &&
    notaAlumno[1] < notaAlumno[4] &&
    notaAlumno[1] < notaAlumno[5] &&
    notaAlumno[1] < notaAlumno[6] &&
    notaAlumno[1] < notaAlumno[7] &&
    notaAlumno[1] < notaAlumno[8]
  ) {
    console.log(
      "El mes de la nota mas baja es: " +
        arregloMes[1] +
        " y la nota es: " +
        notaAlumno[1]
    );
  }
  if (
    notaAlumno[2] < notaAlumno[0] &&
    notaAlumno[2] < notaAlumno[1] &&
    notaAlumno[2] < notaAlumno[3] &&
    notaAlumno[2] < notaAlumno[4] &&
    notaAlumno[2] < notaAlumno[5] &&
    notaAlumno[2] < notaAlumno[6] &&
    notaAlumno[2] < notaAlumno[7] &&
    notaAlumno[2] < notaAlumno[8]
  ) {
    console.log(
      "El mes de la nota mas baja es: " +
        arregloMes[2] +
        " y la nota es: " +
        notaAlumno[2]
    );
  }
  if (
    notaAlumno[3] < notaAlumno[0] &&
    notaAlumno[3] < notaAlumno[1] &&
    notaAlumno[3] < notaAlumno[2] &&
    notaAlumno[3] < notaAlumno[4] &&
    notaAlumno[3] < notaAlumno[5] &&
    notaAlumno[3] < notaAlumno[6] &&
    notaAlumno[3] < notaAlumno[7] &&
    notaAlumno[3] < notaAlumno[8]
  ) {
    console.log(
      "El mes de la nota mas baja es: " +
        arregloMes[3] +
        " y la nota es: " +
        notaAlumno[3]
    );
  }
  if (
    notaAlumno[4] < notaAlumno[0] &&
    notaAlumno[4] < notaAlumno[1] &&
    notaAlumno[4] < notaAlumno[2] &&
    notaAlumno[4] < notaAlumno[3] &&
    notaAlumno[4] < notaAlumno[5] &&
    notaAlumno[4] < notaAlumno[6] &&
    notaAlumno[4] < notaAlumno[7] &&
    notaAlumno[4] < notaAlumno[8]
  ) {
    console.log(
      "El mes de la nota mas baja es: " +
        arregloMes[4] +
        " y la nota es: " +
        notaAlumno[4]
    );
  }
  if (
    notaAlumno[5] < notaAlumno[0] &&
    notaAlumno[5] < notaAlumno[1] &&
    notaAlumno[5] < notaAlumno[2] &&
    notaAlumno[5] < notaAlumno[3] &&
    notaAlumno[5] < notaAlumno[4] &&
    notaAlumno[5] < notaAlumno[6] &&
    notaAlumno[5] < notaAlumno[7] &&
    notaAlumno[5] < notaAlumno[8]
  ) {
    console.log(
      "El mes de la nota mas baja es: " +
        arregloMes[5] +
        " y la nota es: " +
        notaAlumno[5]
    );
  }
  if (
    notaAlumno[6] < notaAlumno[0] &&
    notaAlumno[6] < notaAlumno[1] &&
    notaAlumno[6] < notaAlumno[2] &&
    notaAlumno[6] < notaAlumno[3] &&
    notaAlumno[6] < notaAlumno[4] &&
    notaAlumno[6] < notaAlumno[5] &&
    notaAlumno[6] < notaAlumno[7] &&
    notaAlumno[6] < notaAlumno[8]
  ) {
    console.log(
      "El mes de la nota mas baja es: " +
        arregloMes[6] +
        " y la nota es: " +
        notaAlumno[6]
    );
  }
  if (
    notaAlumno[7] < notaAlumno[0] &&
    notaAlumno[7] < notaAlumno[1] &&
    notaAlumno[7] < notaAlumno[2] &&
    notaAlumno[7] < notaAlumno[3] &&
    notaAlumno[7] < notaAlumno[4] &&
    notaAlumno[7] < notaAlumno[5] &&
    notaAlumno[7] < notaAlumno[6] &&
    notaAlumno[7] < notaAlumno[8]
  ) {
    console.log(
      "El mes de la nota mas baja es: " +
        arregloMes[7] +
        " y la nota es: " +
        notaAlumno[7]
    );
  }
  if (
    notaAlumno[8] < notaAlumno[0] &&
    notaAlumno[8] < notaAlumno[1] &&
    notaAlumno[8] < notaAlumno[2] &&
    notaAlumno[8] < notaAlumno[3] &&
    notaAlumno[8] < notaAlumno[4] &&
    notaAlumno[8] < notaAlumno[5] &&
    notaAlumno[8] < notaAlumno[6] &&
    notaAlumno[8] < notaAlumno[7]
  ) {
    console.log(
      "El mes de la nota mas baja es: " +
        arregloMes[8] +
        " y la nota es: " +
        notaAlumno[8]
    );
  }
}
//******************************* */
function mesMayorNota() {
  if (
    notaAlumno[0] > notaAlumno[1] &&
    notaAlumno[0] > notaAlumno[2] &&
    notaAlumno[0] > notaAlumno[3] &&
    notaAlumno[0] > notaAlumno[4] &&
    notaAlumno[0] > notaAlumno[5] &&
    notaAlumno[0] > notaAlumno[6] &&
    notaAlumno[0] > notaAlumno[7] &&
    notaAlumno[0] > notaAlumno[8]
  ) {
    console.log(
      "El mes de la nota mas alta es: " +
        arregloMes[0] +
        " y la nota es: " +
        notaAlumno[0]
    );
  }
  if (
    notaAlumno[1] > notaAlumno[0] &&
    notaAlumno[1] > notaAlumno[2] &&
    notaAlumno[1] > notaAlumno[3] &&
    notaAlumno[1] > notaAlumno[4] &&
    notaAlumno[1] > notaAlumno[5] &&
    notaAlumno[1] > notaAlumno[6] &&
    notaAlumno[1] > notaAlumno[7] &&
    notaAlumno[1] > notaAlumno[8]
  ) {
    console.log(
      "El mes de la nota mas alta es: " +
        arregloMes[1] +
        " y la nota es: " +
        notaAlumno[1]
    );
  }
  if (
    notaAlumno[2] > notaAlumno[0] &&
    notaAlumno[2] > notaAlumno[1] &&
    notaAlumno[2] > notaAlumno[3] &&
    notaAlumno[2] > notaAlumno[4] &&
    notaAlumno[2] > notaAlumno[5] &&
    notaAlumno[2] > notaAlumno[6] &&
    notaAlumno[2] > notaAlumno[7] &&
    notaAlumno[2] > notaAlumno[8]
  ) {
    console.log(
      "El mes de la nota mas alta es: " +
        arregloMes[2] +
        " y la nota es: " +
        notaAlumno[2]
    );
  }
  if (
    notaAlumno[3] > notaAlumno[0] &&
    notaAlumno[3] > notaAlumno[1] &&
    notaAlumno[3] > notaAlumno[2] &&
    notaAlumno[3] > notaAlumno[4] &&
    notaAlumno[3] > notaAlumno[5] &&
    notaAlumno[3] > notaAlumno[6] &&
    notaAlumno[3] > notaAlumno[7] &&
    notaAlumno[3] > notaAlumno[8]
  ) {
    console.log(
      "El mes de la nota mas alta es: " +
        arregloMes[3] +
        " y la nota es: " +
        notaAlumno[3]
    );
  }
  if (
    notaAlumno[4] > notaAlumno[0] &&
    notaAlumno[4] > notaAlumno[1] &&
    notaAlumno[4] > notaAlumno[2] &&
    notaAlumno[4] > notaAlumno[3] &&
    notaAlumno[4] > notaAlumno[5] &&
    notaAlumno[4] > notaAlumno[6] &&
    notaAlumno[4] > notaAlumno[7] &&
    notaAlumno[4] > notaAlumno[8]
  ) {
    console.log(
      "El mes de la nota mas alta es: " +
        arregloMes[4] +
        " y la nota es: " +
        notaAlumno[4]
    );
  }
  if (
    notaAlumno[5] > notaAlumno[0] &&
    notaAlumno[5] > notaAlumno[1] &&
    notaAlumno[5] > notaAlumno[2] &&
    notaAlumno[5] > notaAlumno[3] &&
    notaAlumno[5] > notaAlumno[4] &&
    notaAlumno[5] > notaAlumno[6] &&
    notaAlumno[5] > notaAlumno[7] &&
    notaAlumno[5] > notaAlumno[8]
  ) {
    console.log(
      "El mes de la nota mas alta es: " +
        arregloMes[5] +
        " y la nota es: " +
        notaAlumno[5]
    );
  }
  if (
    notaAlumno[6] > notaAlumno[0] &&
    notaAlumno[6] > notaAlumno[1] &&
    notaAlumno[6] > notaAlumno[2] &&
    notaAlumno[6] > notaAlumno[3] &&
    notaAlumno[6] > notaAlumno[4] &&
    notaAlumno[6] > notaAlumno[5] &&
    notaAlumno[6] > notaAlumno[7] &&
    notaAlumno[6] > notaAlumno[8]
  ) {
    console.log(
      "El mes de la nota mas alta es: " +
        arregloMes[6] +
        " y la nota es: " +
        notaAlumno[6]
    );
  }
  if (
    notaAlumno[7] > notaAlumno[0] &&
    notaAlumno[7] > notaAlumno[1] &&
    notaAlumno[7] > notaAlumno[2] &&
    notaAlumno[7] > notaAlumno[3] &&
    notaAlumno[7] > notaAlumno[4] &&
    notaAlumno[7] > notaAlumno[5] &&
    notaAlumno[7] > notaAlumno[6] &&
    notaAlumno[7] > notaAlumno[8]
  ) {
    console.log(
      "El mes de la nota mas alta es: " +
        arregloMes[7] +
        " y la nota es: " +
        notaAlumno[7]
    );
  }
  if (
    notaAlumno[8] > notaAlumno[0] &&
    notaAlumno[8] > notaAlumno[1] &&
    notaAlumno[8] > notaAlumno[2] &&
    notaAlumno[8] > notaAlumno[3] &&
    notaAlumno[8] > notaAlumno[4] &&
    notaAlumno[8] > notaAlumno[5] &&
    notaAlumno[8] > notaAlumno[6] &&
    notaAlumno[8] > notaAlumno[7]
  ) {
    console.log(
      "El mes de la nota mas alta es: " +
        arregloMes[8] +
        " y la nota es: " +
        notaAlumno[8]
    );
  }
}
function promedio() {
  for (i = 0; i < 9; i++) {
    promedioNota = promedioNota + notaAlumno[i];
  }
  console.log("El promedio es: " + promedioNota / 9);
}
mesesDesaprobados();
mesMenorNota();
mesMayorNota();
promedio();
