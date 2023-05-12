//Variables//
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Defino constante con arrays dentro de un array.

const matrizCodigo = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

//Validacion previa a encriptar
function validar() {
  let acentos = document.getElementById("paste-bin").value;

  if (acentos == "á") {
    alert("hay un acento!");
  } else {
    btnEncriptar();
  }
}

// Función para encriptar//
function encriptar(stringEncriptada) {
  stringEncriptada = stringEncriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringEncriptada.includes(matrizCodigo[i][0])) {
      stringEncriptada = stringEncriptada.replaceAll(
        matrizCodigo[i][0],
        matrizCodigo[i][1]
      );
    }
  }
  return stringEncriptada;
}

//Conectar función a su respectivo botón en el HTML//
function btnEncriptar() {
  const textEncriptado = encriptar(textArea.value);
  mensaje.value = textEncriptado;
  textArea.value = ""; //limpio el campo
  mensaje.style.backgroundImage = "none"; //saco la imagen
  document.getElementById("parrafo1").style.display = "none";
  document.getElementById("parrafo2").style.display = "none";
}

//Conectar función a su respectivo botón en el HTML//
function btnDesencriptar() {
  const textEncriptado = desencriptar(textArea.value);
  mensaje.value = textEncriptado;
  textArea.value = ""; //limpio el campo
}

//Función para desencriptar
function desencriptar(stringDesencriptada) {
  stringDesencriptada = stringDesencriptada.toLowerCase();

  for (let i = 0; i < matrizCodigo.length; i++) {
    if (stringDesencriptada.includes(matrizCodigo[i][1])) {
      stringDesencriptada = stringDesencriptada.replaceAll(
        matrizCodigo[i][1],
        matrizCodigo[i][0]
      );
    }
  }
  return stringDesencriptada;
}

//EXTRA: botón copiar
function btnCopiar() {
  //Obtengo el campo de texto
  var textoCopiado = document.getElementById("miInput");

  //Selecciono el campo de texto
  textoCopiado.select();
  textoCopiado.setSelectionRange(0, 99999); //para celulares

  //Copiar el texto dentro del campo de texto
  navigator.clipboard.writeText(textoCopiado.value);

  //Aparece el boton pegar
  document.getElementById("paste").style.display = "show";
  document.getElementById("paste").style.display = "inherit";

  //Alert que el texto ha sido copiado
  alert(
    "Se ha copiado el siguiente texto en el portapapeles: \n" +
      textoCopiado.value
  );
}

//EXTRA 2: boton pegar?
const COPY = document.querySelector("#copy");
const PASTE = document.querySelector("#paste");
const VALUE = document.querySelector("#value");
const BIN = document.querySelector("#paste-bin");

PASTE.addEventListener("click", async () => {
  const READ = await navigator.clipboard.readText();
  BIN.value = READ;
});
