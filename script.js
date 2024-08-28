const textArea = document.querySelector(".area_texto");
const mensaje = document.querySelector(".mensaje_encriptado");
const logoImagen = document.getElementById("logoImagen"); // Seleccionamos la imagen

function botonEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"; // Asegúrate de que el fondo no esté presente
    ocultarImagen(); // Ocultamos la imagen al encriptar
}

function botonDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none"; // Asegúrate de que el fondo no esté presente
    ocultarImagen(); // Ocultamos la imagen al desencriptar
}

function encriptar(stringEncriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptado.includes(matrizCodigo[i][0])) {
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptado;
}

function desencriptar(stringDesencriptado) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptado.includes(matrizCodigo[i][1])) {
            stringDesencriptado = stringDesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptado;
}

function copiarTexto() {
    mensaje.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}

function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}



// Mostramos la imagen si el área de texto queda vacía
textArea.addEventListener("input", function() {
    if (textArea.value.trim() === "") {
        mostrarImagen(); // Mostramos la imagen si el área de texto está vacía
    } else {
        ocultarImagen(); // Ocultamos la imagen si hay texto
    }
});
















