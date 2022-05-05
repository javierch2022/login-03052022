rotulo1.innerHTML = "Por favor ingrese el usuario:";
rotulo2.innerHTML = "Por favor ingrese la clave:";

btnIngresar.addEventListener("click", () => {
  let usuario: string = "juan";
  let clave: string = "clavejuan";
  let userIngresado: string = dato1.value;
  let claveIngresada: string = dato2.value;
  if (usuario === userIngresado && clave === claveIngresada) {
    console.log("Bienvenido");
  } else {
    console.log("El usuario o la clave son incorrectos");
  }
});
