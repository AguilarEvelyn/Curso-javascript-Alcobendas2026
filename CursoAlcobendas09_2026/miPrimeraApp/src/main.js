import '@ionic/core/css/ionic.bundle.css';
import { defineCustomElements } from '@ionic/core/loader';

// defineCustomElements es asíncrona: registra los Web Components en el navegador.
// Toda la lógica de la app debe ir dentro del .then() para asegurarse
// de que los elementos ya existen en el DOM cuando intentamos acceder a ellos.
defineCustomElements(window).then(() => {
  const boton = document.getElementById('btn-saludar');
  const salida = document.getElementById('salida');

  boton.addEventListener('click', () => {
    salida.textContent = '¡Funciona con JS Puro y Vite!';
  });
});