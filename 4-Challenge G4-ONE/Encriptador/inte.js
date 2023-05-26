// Obtener los elementos del DOM
const textoACifrar = document.getElementById('texto-a-cifrar');
const textoCifrado = document.getElementById('texto-cifrado');
const encriptarBtn = document.getElementById('encriptar-btn');
const desencriptarBtn = document.getElementById('desencriptar-btn');
const textoDescifrado = document.getElementById('texto-descifrado');
const copiarBtn = document.getElementById('copiar-btn');

// Definir las llaves de encriptación
const llaves = {
  'e': 'enter',
  'i': 'imes',
  'a': 'ai',
  'o': 'ober',
  'u': 'ufat'
};

// Función para encriptar un texto
function encriptarTexto(texto) {
  let textoEncriptado = '';
  for (let i = 0; i < texto.length; i++) {
    const letra = texto[i].toLowerCase();
    if (letra in llaves) {
      textoEncriptado += llaves[letra];
    } else {
      textoEncriptado += letra;
    }
  }
  return textoEncriptado;
}

// Función para desencriptar un texto
function desencriptarTexto(texto) {
  let textoDesencriptado = '';
  let i = 0;
  while (i < texto.length) {
    const letra = texto[i].toLowerCase();
    if (letra in llaves) {
      const llave = llaves[letra];
      if (texto.substr(i, llave.length) === llave) {
        textoDesencriptado += letra;
        i += llave.length;
      } else {
        textoDesencriptado += texto[i];
        i++;
      }
    } else {
      textoDesencriptado += letra;
      i++;
    }
  }
  return textoDesencriptado;
}

// Función para copiar el resultado al portapapeles
function copiarResultado(texto) {
  navigator.clipboard.writeText(texto)
    .then(() => alert('Texto copiado al portapapeles'))
    .catch(() => alert('Error al copiar el texto al portapapeles'));
}

// Eventos de los botones
encriptarBtn.addEventListener('click', () => {
  const texto = textoACifrar.value;
  const textoEncriptado = encriptarTexto(texto);
  textoCifrado.value = textoEncriptado;
});

desencriptarBtn.addEventListener('click', () => {
  const texto = textoCifrado.value;
  const textoDesencriptado = desencriptarTexto(texto);
  textoDescifrado.value = textoDesencriptado;
});

copiarBtn.addEventListener('click', () => {
  const texto = textoDescifrado.value;
  copiarResultado(texto);
});
