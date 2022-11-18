const d = document;

const ejercicio01 = () => {
  const primerValor = Number(
    d.getElementById("txtPrimerValorEjercicio01").value
  );
  const segundoValor = Number(
    d.getElementById("txtSegundoValorEjercicio01").value
  );

  // Inicio Código Base
  let multipli = function (x, y) {
    return x * y;
  };

  let expon = function (x, y) {
    return Math.pow(x, y);
  };

  let suma = (x, y) => {
    return x + y;
  };
  // Fin Código base

  const resta = (x, y) => x - y;

  d.getElementById("txtMultiplicacionEjercicio01").value = multipli(
    primerValor,
    segundoValor
  );

  d.getElementById("txtPotenciaEjercicio01").value = expon(
    primerValor,
    segundoValor
  );

  d.getElementById("txtSumaEjercicio01").value = suma(
    primerValor,
    segundoValor
  );

  d.getElementById("txtRestaEjercicio01").value = resta(
    primerValor,
    segundoValor
  );
};

const ejercicio02 = () => {
  const farenheit = Number(d.getElementById("txtFarenheit").value);

  const deFarenheitACelcius = (grado) => (grado - 32) * (5 / 9);

  d.getElementById("txtCelcius").value =
    deFarenheitACelcius(farenheit).toFixed(2);
};

const ejercicio03 = () => {
  const primerValor = Number(
    d.getElementById("txtPrimerValorEjercicio03").value
  );
  const segundoValor = Number(
    d.getElementById("txtSegundoValorEjercicio03").value
  );

  const suma = (x, y) => x + y;

  d.getElementById("txtSumaEjercicio03").value = suma(
    primerValor,
    segundoValor
  );
};

d.getElementById("btnCalcular1").addEventListener("click", ejercicio01);
d.getElementById("btnCalcular2").addEventListener("click", ejercicio02);
d.getElementById("btnCalcular3").addEventListener("click", ejercicio03);
