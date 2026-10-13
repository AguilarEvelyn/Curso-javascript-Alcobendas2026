# 💻 Set de Ejercicios Avanzados de JavaScript: Arrays y Desestructuración

Este set contiene 20 ejercicios prácticos diseñados para consolidar el uso de métodos funcionales de arrays (`map`, `filter`, `reduce`), búsquedas complejas, ordenación correcta de datos y el uso del operador *spread* junto a la desestructuración (ES6+).

---

## 🛒 Bloque 1: Transformación y Filtrado de Datos

### 1. El Validador del Carrito
**Contexto:** Tienes un array de productos donde algunos no tienen stock disponible.
**Objetivo:** Escribe una función que reciba el carrito, filtre los productos que sí tienen stock, calcule el precio final de cada uno aplicándole un 21% de IVA y devuelva ese nuevo array sin modificar el original.

```javascript
const carrito = [
  { nombre: "Teclado Mecánico", precio: 60, stock: true },
  { nombre: "Ratón Gaming", precio: 35, stock: false },
  { nombre: "Monitor 24''", precio: 150, stock: true }
];
```

### 2. Buscador de Usuarios Activos y Mayores de Edad
**Contexto:** Un sistema de suscripciones necesita enviar un correo solo a usuarios específicos.
**Objetivo:** Utiliza `.filter()` para obtener los usuarios que tengan la propiedad `activo: true` y cuya edad sea mayor o igual a 18 años.

```javascript
const usuarios = [
  { nombre: "Ana", edad: 17, activo: true },
  { nombre: "Carlos", edad: 22, activo: false },
  { nombre: "Lucía", edad: 19, activo: true },
  { nombre: "Marcos", edad: 30, activo: true }
];
```

### 3. Detector de Duplicados en el Registro
**Contexto:** Al importar nombres de una base de datos antigua, se han colado varios registros idénticos.
**Objetivo:** Crea una función que reciba el array de nombres y devuelva un nuevo array sin ningún nombre duplicado utilizando los métodos aprendidos (como `filter` e `indexOf`).

```javascript
const invitados = ["Juan", "María", "Pedro", "Juan", "Lucas", "María", "Pedro"];
```

### 4. Formateador de Precios para Etiquetas
**Contexto:** Una tienda física necesita imprimir las etiquetas de precio con el símbolo de la moneda al final.
**Objetivo:** Usa `.map()` para transformar un array de números flotantes en un array de strings con el formato `"XX.XX€"`. Asegúrate de que todos tengan exactamente dos decimales usando `.toFixed(2)`.

```javascript
const precios = [9.99, 25.5, 100, 5.758];
```

### 5. Extractor de Iniciales de Clientes
**Contexto:** Quieres crear avatares circulares automáticos usando las iniciales de los usuarios.
**Objetivo:** Dado un array de nombres completos (Nombre y Apellido), genera un nuevo array que contenga únicamente las iniciales en mayúsculas separadas por un punto (ej: `"Juan Pérez"` -> `"J.P."`).

```javascript
const nombres = ["samuel eeto", "Marta Gómez", "diego armando maradona"];
```

---

## 📊 Bloque 2: Búsquedas, Verificaciones y Reducción a un Valor

### 6. Auditoría de Cuentas VIP
**Contexto:** El departamento de finanzas quiere saber si **todos** los clientes de la lista han realizado al menos una compra mínima.
**Objetivo:** Usa `.every()` para verificar si todos los clientes del array tienen un saldo gastado (`gastado`) superior a 50€. Muestra el resultado booleano por consola.

```javascript
const clientes = [
  { nombre: "Luis", gastado: 120 },
  { nombre: "Elena", gastado: 85 },
  { nombre: "Javier", gastado: 45 },
  { nombre: "Sofía", gastado: 300 }
];
```

### 7. Alerta de Stock Crítico
**Contexto:** El almacén necesita disparar una alerta visual si detecta que **al menos un** producto se ha quedado a cero.
**Objetivo:** Utiliza `.some()` para comprobar si existe algún producto cuyo stock o unidades sea igual a 0.

```javascript
const almacen = [
  { ref: "A12", unidades: 10 },
  { ref: "B45", unidades: 0 },
  { ref: "C89", unidades: 5 }
];
```

### 8. Encontrar el Administrador de la Plataforma
**Contexto:** Al cargar una vista del panel de control, necesitas extraer los datos completos del primer usuario del array que tenga el rol de administrador.
**Objetivo:** Utiliza `.find()` para localizar al objeto del administrador y extrae su índice en el array original usando `.findIndex()`.

```javascript
const plantilla = [
  { nombre: "Empleado A", rol: "user" },
  { nombre: "Empleado B", rol: "admin" },
  { nombre: "Empleado C", rol: "user" }
];
```

### 9. El Contable Automático (Reduce)
**Contexto:** Necesitas calcular el coste total de las nóminas del mes de la empresa.
**Objetivo:** Utiliza el método `.reduce()` para sumar los salarios de todos los empleados partiendo de un valor inicial de `0`.

```javascript
const empleados = [
  { puesto: "Developer", sueldo: 2500 },
  { puesto: "Designer", sueldo: 2100 },
  { puesto: "Manager", sueldo: 3200 }
];
```

### 10. Contador de Categorías (Reduce Avanzado)
**Contexto:** Tienes un listado de libros y necesitas un reporte estadístico rápido.
**Objetivo:** Usa `.reduce()` para devolver un **objeto** que cuente cuántos libros hay de cada género. El resultado esperado debería ser: `{ Terror: 2, SciFi: 1, Drama: 1 }`.

```javascript
const libreria = [
  { titulo: "Drácula", genero: "Terror" },
  { titulo: "Dune", genero: "SciFi" },
  { titulo: "El Resplandor", genero: "Terror" },
  { titulo: "Hamlet", genero: "Drama" }
];
```

---

## 🔀 Bloque 3: Ordenación e Inversión de Datos

### 11. El Ranking de Puntuaciones
**Contexto:** Tienes una lista de las puntuaciones obtenidas por los usuarios de un juego interactivo.
**Objetivo:** Ordena el array de números de forma **descendente** (de mayor a menor). Recuerda pasar la función de comparación correcta a `.sort()`.

```javascript
const puntuaciones = [12, 43, 24, 100, 8, 28];
```

### 12. Ordenación Alfabética Inversa de Ciudades
**Contexto:** Un filtro de una web de viajes permite ordenar los destinos de la Z a la A.
**Objetivo:** Ordena el array de ciudades alfabéticamente en sentido inverso. Evita que el array original mute modificándose permanentemente; hazlo sobre una copia.

```javascript
const ciudades = ["Madrid", "Barcelona", "Valencia", "Sevilla", "Bilbao"];
```

### 13. Agenda por Edad Compleja
**Contexto:** Quieres mostrar un listado de usuarios ordenados desde el más joven al más mayor.
**Objetivo:** Aplica `.sort()` sobre un array de objetos comparando la propiedad numérica `edad`.

```javascript
const personas = [
  { nombre: "Rocío", edad: 42 },
  { nombre: "Manuel", edad: 19 },
  { nombre: "Gema", edad: 28 }
];
```

### 14. El Historial Invertido
**Contexto:** Un navegador web guarda las páginas visitadas en orden cronológico, pero el usuario quiere ver primero las más recientes en su pantalla.
**Objetivo:** Invierte el orden del siguiente historial utilizando el operador spread para clonarlo antes y mantener intacto el registro original.

```javascript
const historial = ["google.com", "github.com", "stackoverflow.com", "mdn.org"];
```

---

## ⚡ Bloque 4: Operador Spread y Desestructuración

### 15. Clonación Profunda de Arrays Aninados
**Contexto:** Tienes una matriz de coordenadas que representa un tablero y necesitas duplicarla para calcular movimientos futuros sin alterar la partida actual.
**Objetivo:** Crea una copia del array `matrix` utilizando el operador spread. Demuestra qué ocurre si modificas un número dentro del primer subarray de la copia y cómo afecta al original si no se hace de manera profunda.

```javascript
const matrix = [[1, 2], [3, 4]];
```

### 16. Fusión de Configuraciones de Sistema
**Contexto:** Tu aplicación web tiene unos parámetros por defecto que pueden ser sobrescritos por las preferencias que el usuario ha guardado en su perfil.
**Objetivo:** Une ambos arrays de configuraciones usando el operador *spread* en una única lista limpia.

```javascript
const configBase = ["Tema: Oscuro", "Notificaciones: Sí", "Idioma: ES"];
const configUsuario = ["Notificaciones: No", "Fuente: Grande"];
```

### 17. Intercambio de Variables Elegante (Swap)
**Contexto:** En un algoritmo de ordenación necesitas cambiar la posición del elemento A por el elemento B.
**Objetivo:** Intercambia los valores de las variables `izquierda` y `derecha` en una sola línea utilizando desestructuración de arrays, sin declarar variables temporales auxiliares.

```javascript
let izquierda = "Código Azul";
let derecha = "Código Rojo";
// Tu línea de código aquí
```

### 18. Extracción Selectiva de Datos
**Contexto:** Al recibir una respuesta de una API de geolocalización, solo te interesan el primer y el tercer dato del array de coordenadas del servidor.
**Objetivo:** Usa la desestructuración omitiendo elementos (dejando espacios vacíos entre comas) para almacenar el primer elemento en una variable llamada `latitud` y el tercero en `altitud`.

```javascript
const respuestaApi = [40.4167, -3.7037, 657, "Madrid", "España"];
```

### 19. El Asistente por Defecto
**Contexto:** Estás diseñando un componente que recibe colores de configuración en un array, pero el cliente no siempre envía la paleta completa.
**Objetivo:** Desestructura el array asignando valores por defecto (`"negro"`) a las variables secundario y fondo si los elementos correspondientes son `undefined`.

```javascript
const coloresRecibidos = ["verde"];
// Mapea a variables: primario, secundario, fondo
```

### 20. Desestructuración en Parámetros de Funciones
**Contexto:** Tienes una función que renderiza una tarjeta de usuario en el navegador y recibe los datos empaquetados en un array de dos posiciones `[nombre, edad]`.
**Objetivo:** Reescribe la declaración de la función utilizando desestructuración directamente en la zona de parámetros de la función para usar `nombre` y `edad` como variables limpias in su interior.

```javascript
function pintarTarjeta(datosUsuario) {
  // Actualmente accede como datosUsuario[0] y datosUsuario[1]
  console.log(`Nombre: ${datosUsuario[0]}, Edad: ${datosUsuario[1]}`);
}

pintarTarjeta(["Roberto", 34]);
```
