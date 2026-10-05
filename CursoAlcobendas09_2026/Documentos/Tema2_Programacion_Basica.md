# Tema 2: Programación Básica - Variables y Tipos de Datos

## 📚 Índice
1. [Introducción](#introducción)
2. [¿Qué es una Variable?](#qué-es-una-variable)
3. [Formas de Declarar Variables](#formas-de-declarar-variables)
4. [Tipos de Datos](#tipos-de-datos)
5. [Operadores](#operadores)
6. [Conversión de Tipos](#conversión-de-tipos)
7. [Scope y Hoisting](#scope-y-hoisting)
8. [Errores Comunes](#errores-comunes)
9. [Mejores Prácticas](#mejores-prácticas)
10. [Resumen](#resumen)

---

## Introducción

El Tema 2 es fundamental en cualquier lenguaje de programación. Las variables son como los "bloques de construcción" de todo programa. Sin entender bien cómo trabajar con variables y tipos de datos, te resultará muy difícil programar.

En este tema aprenderás:
- **Cómo crear variables** - Las tres formas: var, let, const
- **Tipos de datos** - Qué información podemos almacenar
- **Operaciones** - Cómo trabajar con los datos
- **Conversiones** - Cómo cambiar de un tipo a otro
- **Mejores prácticas** - Cómo escribir código profesional

Este es probablemente el tema más importante del curso, ya que forma la base de todo lo que viene después.

---

## ¿Qué es una Variable?

### Definición Conceptual

Una **variable** es un espacio en la memoria de tu computadora donde almacenas información que tu programa necesita usar. Es como una caja etiquetada donde pones algo dentro, y más tarde puedes abrir la caja y recuperar lo que guardaste.

### Analogía: La Caja

Imagina que tienes una caja física:

```
┌─────────────────────────────────┐
│         📦 CAJA                 │
├─────────────────────────────────┤
│ Etiqueta: "nombre"              │
│ Contenido: "Juan"               │
└─────────────────────────────────┘
```

En JavaScript:
```javascript
let nombre = "Juan";
```

- **Etiqueta de la caja** = `nombre` (identificador)
- **Contenido de la caja** = `"Juan"` (valor)
- **Forma de crear la caja** = `let` (palabra clave)

### ¿Por qué necesitamos variables?

Sin variables, el código sería muy limitado. Veamos un ejemplo:

**Sin variables (muy limitado):**
```javascript
alert('Juan');  // Mostramos un nombre fijo
alert('Barcelona');  // Mostramos una ciudad fija
// Si quiero mostrar otros datos, tengo que cambiar el código
```

**Con variables (mucho más flexible):**
```javascript
let nombre = 'Juan';
let ciudad = 'Barcelona';

alert(nombre);   // Mostrar el nombre guardado
alert(ciudad);   // Mostrar la ciudad guardada

// Puedo cambiar los valores sin escribir alert de nuevo
nombre = 'María';
alert(nombre);   // Muestra "María"
```

### Características de las variables

1. **Tienen un nombre único** - No pueden haber dos variables con el mismo nombre
2. **Guardan un valor** - La información que queremos almacenar
3. **Ocupan memoria** - JavaScript gestiona automáticamente dónde guardar
4. **Pueden cambiar** - (excepto const) El valor puede ser modificado
5. **Tienen tipo** - String, Number, Boolean, etc.

---

## Formas de Declarar Variables

### Historia: var, let, const

Durante muchos años, la única forma de crear variables era con `var`. Luego, en 2015 (ES6), se introdujeron `let` y `const`, que son mucho mejores.

Hoy en día, casi nunca usamos `var`. Es como si `var` fuera la "forma antigua" de hacer las cosas, y `let`/`const` fueran la "forma moderna".

### 1. var - La forma antigua (¡Evita usarla!)

```javascript
var nombre = 'Juan';
```

**Características de `var`:**
- Scope global o función (no de bloque)
- Puede ser redeclarado
- Sufre hoisting: el comportamiento donde las declaraciones de variables se mueven al inicio del scope (antes de que se ejecute el código)
- Menos predecible

**Ejemplo de problema con var:**

```javascript
if (true) {
    var edad = 25;
}

console.log(edad);  // 25 (¡Existe aquí también!)
// Con let/const, no existiría fuera del bloque if
```

**¿Por qué evitar var?**
- Puede causar errores impredecibles
- El hoisting la hace confusa
- Se puede redeclarar accidentalmente
- Todos los lenguajes modernos la consideran una mala práctica

### 2. let - La forma moderna para variables (Recomendado)

```javascript
let edad = 25;
```

**Características de `let`:**
- Scope de bloque (más seguro)
- No puede ser redeclarado
- Puede ser reasignado ✅
- Más predecible que `var`

**Ejemplo:**

```javascript
let contador = 0;
console.log(contador);  // 0

contador = 5;  // ✅ Reasignación permitida
console.log(contador);  // 5

let contador = 10;  // ❌ Error: Identifier 'contador' has already been declared
```

**Cuándo usar `let`:**
- Cuando necesitas una variable que cambiará de valor
- Es la opción más segura y predecible
- En 99% de los casos, usa `let`

### 3. const - La forma moderna para constantes (Preferido)

```javascript
const PI = 3.14159;
```

**Características de `const`:**
- Scope de bloque (como `let`)
- No puede ser redeclarado
- NO puede ser reasignado ❌
- La más predecible

**Ejemplo:**

```javascript
const PI = 3.14159;
console.log(PI);  // 3.14159

PI = 3.14;  // ❌ Error: Assignment to constant variable

// Pero puedes mutarla si es un objeto:
const persona = { nombre: 'Juan' };
persona.nombre = 'María';  // ✅ Esto SÍ funciona
persona = {};  // ❌ Pero reasignarla, no
```

**Cuándo usar `const`:**
- Por defecto, SIEMPRE usa `const`
- Solo cambia a `let` si necesitas reasignar
- Esto hace que tu código sea más seguro y predecible

### Comparativa: var vs let vs const

| Característica | var | let | const |
|---|---|---|---|
| Scope | Función | Bloque | Bloque |
| Redeclarable | ✅ Sí | ❌ No | ❌ No |
| Reasignable | ✅ Sí | ✅ Sí | ❌ No |
| Hoisting | ✅ (confuso) | ❌ | ❌ |
| Recomendación | ❌ Evitar | ✅ Usar si necesitas cambiar | ✅ Preferido |

### Regla de oro para declarar variables

```
SIEMPRE:
1. Intenta usar const
2. Si necesitas cambiar el valor, usa let
3. NUNCA uses var (excepto código muy antiguo)
```

### Reglas para Nombres de Variables

Los nombres de variables en JavaScript deben seguir estas reglas:

**✅ PERMITIDO:**
- Letras (a-z, A-Z)
- Números (0-9), pero NO al inicio
- Guiones bajos (_)
- Símbolo de dólar ($)
- camelCase (primera palabra minúscula, resto capitalize)

**❌ NO PERMITIDO:**
- Espacios en blanco
- Empezar con número
- Símbolos especiales (!, @, #, %, &, etc.)
- Palabras reservadas de JavaScript (const, let, if, etc.)

**Ejemplos válidos:**
```javascript
const nombre = 'Juan';
const edad25 = 25;
const _privado = 'oculto';
const $precio = 100;
const nombreUsuario = 'admin';
const mi_variable = 'guion bajo';
```

**Ejemplos INVÁLIDOS:**
```javascript
const 25edad = 25;           // ❌ Empieza con número
const nombre usuario = 'Juan'; // ❌ Contiene espacio
const let = 100;             // ❌ Es palabra reservada
const nombre! = 'Juan';      // ❌ Tiene símbolo especial
const for = 10;              // ❌ Es palabra reservada (for, if, else, etc.)
```

**Recomendación:** Usa nombres descriptivos en formato camelCase

```javascript
// ✅ BIEN
const precioProducto = 29.99;
const esActivo = true;
const numeroCuentas = 5;

// ❌ EVITAR
const p = 29.99;           // Nombre muy corto
const PRECIO_PRODUCTO = 29.99; // Reservado para constantes globales
const PrecioProducto = 29.99;  // PascalCase no es usado en variables
```

---

## Tipos de Datos

JavaScript tiene varios tipos de datos. Entender estos tipos es crucial para programar correctamente.

### Clasificación de tipos

```
┌─────────────────────────────────────────────────┐
│         TIPOS DE DATOS EN JAVASCRIPT            │
├─────────────────┬───────────────────────────────┤
│ PRIMITIVOS      │ COMPLEJOS                     │
├─────────────────┼───────────────────────────────┤
│ • String        │ • Object                      │
│ • Number        │ • Array                       │
│ • Boolean       │ • Function                    │
│ • undefined     │ • Date                        │
│ • null          │ • RegExp                      │
│ • Symbol        │ • Map, Set                    │
└─────────────────┴───────────────────────────────┘
```

### Tipos Primitivos

Los tipos primitivos son los más básicos. No se pueden modificar directamente, sino que se crean nuevos valores.

#### 1. String (Texto)

**Definición:** Representa texto - cualquier secuencia de caracteres.

```javascript
let nombre = 'Juan';
let saludo = "Hola mundo";
let titulo = `Mi título`;

// Las tres formas son válidas:
// - Comillas simples: 'texto'
// - Comillas dobles: "texto"
// - Template literals: `texto`
```

**Template literals (backticks):**

Template literals permiten insertar variables dentro del texto:

```javascript
let nombre = 'Juan';
let edad = 25;

// Forma antigua (concatenación):
console.log('Mi nombre es ' + nombre + ' y tengo ' + edad + ' años');

// Forma moderna (template literal):
console.log(`Mi nombre es ${nombre} y tengo ${edad} años`);
```

**Propiedades y métodos útiles:**

```javascript
let texto = 'JavaScript';

console.log(texto.length);           // 10 (cantidad de caracteres)
console.log(texto.toUpperCase());    // JAVASCRIPT
console.log(texto.toLowerCase());    // javascript
console.log(texto[0]);               // J (primer carácter)
console.log(texto.includes('Script')); // true
console.log(texto.charAt(0));        // J
console.log(texto.substring(0, 4));  // Java
```

**Escapar caracteres especiales:**

```javascript
let comilla = 'Dijo: "Hola"';       // Comillas anidadas
let salto = 'Línea 1\nLínea 2';    // \n es salto de línea
let tabulacion = 'Indentado\tTexto'; // \t es tabulación
let barra = 'C:\\Users\\nombre';    // \\ es una barra invertida
```

#### 2. Number (Número)

**Definición:** Representa números - pueden ser enteros o decimales.

```javascript
let entero = 42;
let decimal = 3.14159;
let negativo = -10;
let cientifico = 1.5e3;  // 1500

// Además de números normales:
let infinito = Infinity;
let noNumero = NaN;  // Not-a-Number
```

**Operaciones numéricas:**

```javascript
let a = 10;
let b = 3;

console.log(a + b);   // 13 (suma)
console.log(a - b);   // 7 (resta)
console.log(a * b);   // 30 (multiplicación)
console.log(a / b);   // 3.333... (división)
console.log(a % b);   // 1 (módulo/resto)
console.log(a ** b);  // 1000 (potencia)
```

**Métodos útiles:**

```javascript
let numero = 3.14159;

console.log(Math.round(numero));    // 3 (redondear)
console.log(Math.floor(numero));    // 3 (piso)
console.log(Math.ceil(numero));     // 4 (techo)
console.log(Math.abs(-10));         // 10 (valor absoluto)
console.log(Math.pow(2, 3));        // 8 (potencia)
console.log(Math.sqrt(16));         // 4 (raíz cuadrada)
console.log(numero.toFixed(2));     // "3.14" (decimales)
```

**Errores comunes con números:**

```javascript
let resultado = 0.1 + 0.2;
console.log(resultado);  // 0.30000000000000004 (¡Imprecisión de punto flotante!)

// Solución:
console.log(resultado.toFixed(2));  // "0.30"
console.log(Math.round(resultado * 100) / 100);  // 0.3
```

#### 3. Boolean (Verdadero/Falso)

**Definición:** Solo puede ser `true` o `false`. Muy usado en condicionales.

```javascript
let activo = true;
let inactivo = false;

console.log(typeof true);   // "boolean"
console.log(typeof false);  // "boolean"
```

**Conversión a Boolean:**

```javascript
// ¡Cuidado! Algunos valores se convierten de forma sorprendente:

Boolean(true);      // true
Boolean(false);     // false
Boolean(1);         // true
Boolean(0);         // false
Boolean('texto');   // true
Boolean('');        // false
Boolean(null);      // false
Boolean(undefined); // false
Boolean([]);        // true (¡array vacío es true!)
Boolean({});        // true (¡objeto vacío es true!)
```

**Tabla de valores "falsy" vs "truthy":**

| Falsy | Truthy |
|-------|--------|
| false | true |
| 0 | cualquier número ≠ 0 |
| "" (string vacío) | cualquier string no vacío |
| null | arrays |
| undefined | objetos |
| NaN | funciones |

#### 4. null y undefined

**undefined:** Significa que una variable fue declarada pero no inicializada.

```javascript
let variable;
console.log(variable);  // undefined
console.log(typeof undefined);  // "undefined"
```

**null:** Significa "sin valor intencional". Se asigna deliberadamente.

```javascript
let variable = null;
console.log(variable);  // null
console.log(typeof null);  // "object" (¡esto es un bug en JavaScript!)
```

**Diferencia:**

```javascript
let a;           // undefined (no inicializada)
let b = null;    // null (asignado deliberadamente como "vacío")

console.log(a == b);   // true (comparación flexible)
console.log(a === b);  // false (comparación estricta)
```

### Tipos Complejos

#### 1. Array (Lista)

**Definición:** Una colección ordenada de elementos (pueden ser de cualquier tipo).

```javascript
let numeros = [1, 2, 3, 4, 5];
let colores = ['rojo', 'azul', 'verde'];
let mixto = [1, 'texto', true, null, { nombre: 'Juan' }];
let vacio = [];
```

**Acceso a elementos:**

```javascript
let frutas = ['manzana', 'banana', 'naranja'];

console.log(frutas[0]);      // 'manzana' (índice 0)
console.log(frutas[1]);      // 'banana' (índice 1)
console.log(frutas[2]);      // 'naranja' (índice 2)
console.log(frutas.length);  // 3

// Último elemento:
console.log(frutas[frutas.length - 1]);  // 'naranja'
```

**Métodos útiles de arrays:**

```javascript
let numeros = [1, 2, 3];

// Agregar elementos
numeros.push(4);        // Agrega al final → [1, 2, 3, 4]
numeros.unshift(0);     // Agrega al inicio → [0, 1, 2, 3, 4]

// Eliminar elementos
numeros.pop();          // Elimina el último → [0, 1, 2, 3]
numeros.shift();        // Elimina el primero → [1, 2, 3]

// Buscar
numeros.indexOf(2);     // 1 (posición de 2)
numeros.includes(2);    // true

// Transformar
numeros.join(',');      // "1,2,3" (convierte a string)
numeros.reverse();      // Invierte el orden
numeros.sort();         // Ordena
```

**Arrays multidimensionales:**

```javascript
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matriz[0][0]);  // 1
console.log(matriz[1][2]);  // 6
console.log(matriz[2][1]);  // 8
```

#### 2. Object (Objeto)

**Definición:** Una colección de pares clave-valor. Perfecto para representar entidades complejas.

```javascript
let persona = {
    nombre: 'Juan',
    edad: 28,
    ciudad: 'Madrid',
    profesion: 'Desarrollador',
    activo: true
};
```

**Acceso a propiedades:**

```javascript
// Forma 1: Notación de punto (punto)
console.log(persona.nombre);     // 'Juan'
console.log(persona.edad);       // 28

// Forma 2: Notación de corchetes (bracket)
console.log(persona['nombre']);  // 'Juan'
console.log(persona['edad']);    // 28

// Útil cuando la clave es dinámina:
let propiedad = 'nombre';
console.log(persona[propiedad]);  // 'Juan'
```

**Modificar propiedades:**

```javascript
let persona = { nombre: 'Juan', edad: 28 };

// Cambiar valor
persona.edad = 29;
console.log(persona);  // { nombre: 'Juan', edad: 29 }

// Agregar nueva propiedad
persona.ciudad = 'Barcelona';
console.log(persona);  // { nombre: 'Juan', edad: 29, ciudad: 'Barcelona' }

// Eliminar propiedad
delete persona.ciudad;
console.log(persona);  // { nombre: 'Juan', edad: 29 }
```

**Métodos de objetos:**

```javascript
let persona = { nombre: 'Juan', edad: 28, ciudad: 'Madrid' };

// Obtener todas las claves
Object.keys(persona);      // ['nombre', 'edad', 'ciudad']

// Obtener todos los valores
Object.values(persona);    // ['Juan', 28, 'Madrid']

// Obtener pares clave-valor
Object.entries(persona);   // [['nombre', 'Juan'], ['edad', 28], ...]

// Combinar objetos
let datos = { ciudad: 'Madrid' };
let resultado = Object.assign({}, persona, datos);
```

**Objetos anidados:**

```javascript
let empresa = {
    nombre: 'TechCorp',
    ubicacion: {
        ciudad: 'Madrid',
        pais: 'España',
        coordenadas: {
            latitud: 40.4168,
            longitud: -3.7038
        }
    },
    empleados: ['Juan', 'María', 'Pedro']
};

console.log(empresa.ubicacion.ciudad);  // 'Madrid'
console.log(empresa.ubicacion.coordenadas.latitud);  // 40.4168
console.log(empresa.empleados[1]);  // 'María'
```

---

## Operadores

### Operadores Aritméticos

```javascript
let a = 10;
let b = 3;

// Suma
console.log(a + b);   // 13

// Resta
console.log(a - b);   // 7

// Multiplicación
console.log(a * b);   // 30

// División
console.log(a / b);   // 3.3333...

// Módulo (resto de la división)
console.log(a % b);   // 1
console.log(10 % 3);  // 1
console.log(10 % 5);  // 0 (sin resto)

// Potencia
console.log(a ** b);  // 1000 (10 a la 3)
console.log(2 ** 3);  // 8
```

**Order de operaciones (PEMDAS):**

```javascript
// Potencia, Multiplicación, División (de izquierda a derecha)
// Luego Suma, Resta (de izquierda a derecha)

console.log(2 + 3 * 4);    // 14 (no 20, porque * tiene prioridad)
console.log((2 + 3) * 4);  // 20 (paréntesis primero)
console.log(2 ** 3 * 4);   // 32 (potencia primero: 8 * 4)
```

### Operadores de Asignación

```javascript
let x = 10;

// Asignación simple
x = 5;

// Suma y asigna
x += 2;  // x = x + 2 → x = 7

// Resta y asigna
x -= 1;  // x = x - 1 → x = 6

// Multiplicación y asigna
x *= 2;  // x = x * 2 → x = 12

// División y asigna
x /= 3;  // x = x / 3 → x = 4

// Módulo y asigna
x %= 2;  // x = x % 2 → x = 0

// Potencia y asigna
x **= 2; // x = x ** 2 → x = 0
```

### Operadores de Comparación

Estos operadores comparan dos valores y devuelven `true` o `false`.

```javascript
let a = 10;
let b = 5;
let c = 10;

// Mayor que
console.log(a > b);    // true (10 > 5)
console.log(a > c);    // false (10 no es > 10)

// Menor que
console.log(b < a);    // true (5 < 10)
console.log(a < c);    // false (10 no es < 10)

// Mayor o igual
console.log(a >= c);   // true (10 >= 10)
console.log(a >= b);   // true (10 >= 5)

// Menor o igual
console.log(a <= c);   // true (10 <= 10)
console.log(b <= a);   // true (5 <= 10)

// Igual (flexible - convierte tipos)
console.log(10 == '10');  // true (número 10 == string '10')

// Igual estricto (no convierte tipos)
console.log(10 === '10');  // false (number !== string)

// No igual (flexible)
console.log(10 != '10');  // false

// No igual estricto
console.log(10 !== '10');  // true
```

**Regla de oro: Usa siempre === y !== en lugar de == y !=**

```javascript
// Errores comunes con ==:
console.log(0 == false);      // true
console.log('' == false);     // true
console.log(null == undefined); // true
console.log('10' == 10);      // true

// Con ===:
console.log(0 === false);      // false
console.log('' === false);     // false
console.log(null === undefined); // false
console.log('10' === 10);      // false
```

### Operadores Lógicos

```javascript
let a = true;
let b = false;

// AND (Y) - Ambos deben ser true
console.log(true && true);    // true
console.log(true && false);   // false
console.log(false && false);  // false

// OR (O) - Al menos uno debe ser true
console.log(true || false);   // true
console.log(false || false);  // false
console.log(false || true);   // true

// NOT (NO) - Invierte el valor
console.log(!true);           // false
console.log(!false);          // true
```

**Ejemplos prácticos:**

```javascript
let edad = 25;
let tieneCarnet = true;

// Puede conducir si tiene licencia Y edad >= 18
console.log(edad >= 18 && tieneCarnet);  // true

let permiso = false;

// Puede conducir si tiene licencia O pasó un examen especial
console.log(tieneCarnet || permiso);  // true

// Es menor de edad
console.log(!(edad >= 18));  // false
```

### Operador typeof

```javascript
console.log(typeof 'texto');        // "string"
console.log(typeof 42);             // "number"
console.log(typeof 3.14);           // "number"
console.log(typeof true);           // "boolean"
console.log(typeof false);          // "boolean"
console.log(typeof undefined);      // "undefined"
console.log(typeof null);           // "object" (¡bug!)
console.log(typeof [1, 2, 3]);      // "object"
console.log(typeof { nombre: 'Juan' }); // "object"
console.log(typeof function() {});  // "function"
```

---

## Conversión de Tipos

A veces necesitas cambiar un tipo de dato a otro. Esto se llama "type casting" o "conversión de tipos".

### Conversión de String a Number

```javascript
// Forma 1: Number()
let str = '42';
let num = Number(str);
console.log(num);       // 42
console.log(typeof num); // "number"

// Forma 2: parseInt() - Convierte a entero
console.log(parseInt('42'));      // 42
console.log(parseInt('42.99'));   // 42 (ignora decimales)
console.log(parseInt('42px'));    // 42 (ignora texto)
console.log(parseInt('abc'));     // NaN (no se puede convertir)

// Forma 3: parseFloat() - Convierte considerando decimales
console.log(parseFloat('3.14'));     // 3.14
console.log(parseFloat('3.14abc'));  // 3.14

// Forma 4: Multiplicar por 1 (truco)
console.log('42' * 1);  // 42
console.log('3.14' * 1); // 3.14
```

### Conversión de Number a String

```javascript
// Forma 1: String()
let num = 42;
let str = String(num);
console.log(str);       // "42"
console.log(typeof str); // "string"

// Forma 2: toString()
console.log((42).toString());    // "42"
console.log((3.14).toString());  // "3.14"

// Forma 3: Concatenar con ''
console.log(42 + '');   // "42"
console.log('' + 42);   // "42"
```

### Conversión a Boolean

```javascript
// Forma 1: Boolean()
console.log(Boolean(1));           // true
console.log(Boolean(0));           // false
console.log(Boolean('texto'));     // true
console.log(Boolean(''));          // false
console.log(Boolean(null));        // false
console.log(Boolean(undefined));   // false

// Forma 2: Operador doble negación (!!)
console.log(!!1);       // true
console.log(!!0);       // false
console.log(!!'texto'); // true
console.log(!!'');      // false
```

### Ejemplos de conversión en la práctica

**Ejemplo 1: Entrada de usuario**

```javascript
let edadInput = prompt('¿Cuántos años tienes?');
console.log(typeof edadInput);  // "string" (prompt siempre devuelve string)

let edad = Number(edadInput);
console.log(typeof edad);  // "number"

// Ahora podemos comparar numéricamente
if (edad >= 18) {
    console.log('Eres mayor de edad');
}
```

**Ejemplo 2: Parseando datos de formularios**

```javascript
// Usuario ingresa "42" en un campo de edad
let edadDelFormulario = '42';

// Convertimos a número para operaciones matemáticas
let edad = parseInt(edadDelFormulario);
let añoNacimiento = 2026 - edad;  // 1984

console.log(`Naciste aproximadamente en ${añoNacimiento}`);
```

---

## Scope y Hoisting

### Scope (Ámbito)

El **scope** determina dónde en el código una variable es accesible.

#### Scope Global

Una variable es global si se declara fuera de cualquier función o bloque.

```javascript
let nombre = 'Juan';  // Global

function saludar() {
    console.log(nombre);  // Puede acceder a la variable global
}

saludar();  // Imprime: Juan
console.log(nombre);  // Imprime: Juan
```

#### Scope de Función

Una variable declarada dentro de una función solo es accesible dentro de esa función.

```javascript
function ejemplo() {
    let variableLocal = 'Solo dentro de la función';
    console.log(variableLocal);  // Funciona
}

ejemplo();
console.log(variableLocal);  // ❌ Error: variableLocal is not defined
```

#### Scope de Bloque

Con `let` y `const`, las variables tienen scope de bloque (dentro de `{}`).

```javascript
if (true) {
    let mensajeLocal = 'Solo dentro del if';
    console.log(mensajeLocal);  // Funciona
}

console.log(mensajeLocal);  // ❌ Error (con let/const)
```

**Comparación con var:**

```javascript
if (true) {
    var viejoBug = 'Con var';
}

console.log(viejoBug);  // Funciona (con var sí existe)
// Esto es confuso, otro motivo para evitar var
```

#### Anidación de Scopes

El scope interior puede acceder al exterior, pero no viceversa.

```javascript
let global = 'Global';

{
    let bloque1 = 'Bloque 1';
    
    {
        let bloque2 = 'Bloque 2';
        console.log(global);   // Accede a global
        console.log(bloque1);  // Accede a bloque1
        console.log(bloque2);  // Accede a bloque2
    }
    
    console.log(bloque2);  // ❌ Error: bloque2 no existe en este scope
}
```

### Hoisting

**Hoisting** es el comportamiento (confuso) donde las declaraciones se mueven al inicio del scope.

#### Con var

```javascript
console.log(x);  // undefined (no error)
var x = 5;

// JavaScript lo interpreta como:
// var x;           // Declaración se mueve arriba
// console.log(x);  // x existe pero no tiene valor (undefined)
// x = 5;           // La asignación se queda abajo
```

#### Con let y const

```javascript
console.log(y);  // ❌ Error: Cannot access 'y' before initialization
let y = 5;

// let y está en la "Temporal Dead Zone" hasta su declaración
```

**Regla:** Siempre declara variables al principio del scope. Evita confusiones.

---

## Errores Comunes

### Error 1: Confundir == con ===

```javascript
// ❌ INCORRECTO
if (edad == 18) {
    // ...
}

// ✅ CORRECTO
if (edad === 18) {
    // ...
}

// Las conversiones de == pueden ser confusas:
console.log('10' == 10);   // true (¡el string se convierte!)
console.log('10' === 10);  // false (no se convierte)
```

### Error 2: Olvidar comillas en strings

```javascript
// ❌ ERROR
let nombre = Juan;  // ReferenceError: Juan is not defined

// ✅ CORRECTO
let nombre = 'Juan';
```

### Error 3: Hacer aritmética con strings

```javascript
// ❌ INCORRECTO
let edad = '25';
let proximo = edad + 1;  // '251' (concatenación, no suma)

// ✅ CORRECTO
let edad = '25';
let proximo = Number(edad) + 1;  // 26

// O mejor todavía:
let edad = 25;  // Ya es número
let proximo = edad + 1;  // 26
```

### Error 4: No inicializar constantes

```javascript
// ❌ ERROR
const nombre;  // SyntaxError: Missing initializer

// ✅ CORRECTO
const nombre = 'Juan';
```

### Error 5: Redeclarar con let

```javascript
// ❌ ERROR
let contador = 0;
let contador = 1;  // Identifier 'contador' has already been declared

// ✅ CORRECTO - Reasignar
let contador = 0;
contador = 1;
```

### Error 6: Acceder a propiedades de null/undefined

```javascript
let persona = null;

// ❌ ERROR
console.log(persona.nombre);  // TypeError: Cannot read property 'nombre' of null

// ✅ CORRECTO - Verificar primero
if (persona) {
    console.log(persona.nombre);
}
```

### Error 7: Arrays y objetos vacíos como condición

```javascript
// ❌ Fácil de olvidar
let lista = [];
if (lista) {
    console.log('Lista tiene elementos');  // ¡Se ejecuta! (arrays vacíos son truthy)
}

// ✅ CORRECTO
if (lista.length > 0) {
    console.log('Lista tiene elementos');
}
```

---

## Mejores Prácticas

### 1. Siempre usa const por defecto

```javascript
// El 80% del tiempo:
const PI = 3.14159;

// El 20% del tiempo:
let contador = 0;

// Casi nunca:
var antiguo = 'evitar';
```

### 2. Nombres descriptivos

```javascript
// ❌ NO HAGAS ESTO
let x = 25;
let d = 'Madrid';
let a = true;

// ✅ HAZ ESTO
let edad = 25;
let ciudad = 'Madrid';
let activo = true;
```

### 3. Usa camelCase para variables

```javascript
// ❌
let mi_nombre = 'Juan';
let EDAD = 25;

// ✅
let miNombre = 'Juan';
let edad = 25;
```

### 4. Declara cerca de donde usas

```javascript
// ❌
const PI = 3.14159;
const E = 2.71828;
// ... 50 líneas de código ...
let resultado = PI * radio * radio;

// ✅
let resultado;
{
    const PI = 3.14159;
    resultado = PI * radio * radio;
}
```

### 5. Comenta tipos complejos

```javascript
// ✅ Útil para tipos complejos
const usuario = {
    nombre: 'Juan',        // string
    edad: 28,              // number
    hobbies: ['', '', ''], // array de strings
    direccion: {           // object anidado
        calle: '',
        ciudad: ''
    }
};
```

### 6. Evita variables globales

```javascript
// ❌ Malo - Variable global
let contador = 0;

function incrementar() {
    contador++;
}

// ✅ Mejor - Variable local
function crearContador() {
    let contador = 0;
    
    return function () {
        contador++;
        return contador;
    };
}
```

### 7. Inicializa con valores apropiados

```javascript
// ✅
let edad = 0;          // número se inicializa con 0
let nombre = '';       // string se inicializa vacío
let activo = false;    // boolean se inicializa con false
let lista = [];        // array se inicializa vacío
let objeto = {};       // object se inicializa vacío
```

---

## Resumen

### Conceptos Clave

**Variables:**
- Contenedores para guardar datos
- Se declaran con `let` o `const`
- Tienen nombres, valores y tipos

**Three Ways to Declare:**
1. `const` - Por defecto (no reasignable)
2. `let` - Cuando necesitas cambiar (reasignable)
3. `var` - NUNCA (antiguo)

**Tipos Primitivos:**
- **String**: Texto entre comillas
- **Number**: Números (enteros o decimales)
- **Boolean**: true o false
- **undefined**: Variable sin inicializar
- **null**: Valor nulo intencional
- **Symbol**: Único (tema avanzado)

**Tipos Complejos:**
- **Array**: Lista de elementos [1, 2, 3]
- **Object**: Pares clave-valor {nombre: 'Juan'}
- **Function**: Bloques de código reutilizable
- **Date, RegExp, Map, Set**: Especializados

**Operadores:**
- Aritméticos: +, -, *, /, %, **
- Asignación: =, +=, -=, *=, /=
- Comparación: >, <, >=, <=, ===, !==
- Lógicos: &&, ||, !
- typeof: Verificar tipo

**Conversión:**
- String → Number: Number(), parseInt(), parseFloat()
- Number → String: String(), toString()
- → Boolean: Boolean(), !!

**Buenas Prácticas:**
- Usa const por defecto
- Nombres descriptivos en camelCase
- === en lugar de ==
- Declara cerca de donde usas
- Evita variables globales

---

## ¿Qué viene después?

En el **Tema 3**, aprenderás sobre:
- **Estructuras de Control**: if, else if, else
- **Operador Ternario**: Condiciones en una línea
- **Switch**: Múltiples opciones

Esto te permitirá escribir código que toma decisiones basadas en el valor de las variables que aprendiste aquí en el Tema 2.

---

¡Has aprendido los fundamentos! 🎓 Ahora práctica con los ejercicios en el archivo separado.
