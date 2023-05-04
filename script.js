//Variables//
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Función para encriptar//
function encriptar(stringEncriptada) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
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
}

//Conectar función a su respectivo botón en el HTML//
function btnDesencriptar() {
    const textEncriptado = desencriptar(textArea.value);
    mensaje.value = textEncriptado;
    textArea.value = ""; //limpio el campo    
}

//Función para desencriptar
function desencriptar(stringDesencriptada) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll( matrizCodigo[i][1],matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}


    //Capturar el texto escrito en el campo del input del HTML//

    //Desarrollar la lógica de la encriptación//

    //Mostrar en la pantalla el resultado del texto encriptado//