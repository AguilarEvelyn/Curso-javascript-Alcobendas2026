# Tema 5: Funciones - Reutilizar y Organizar Código

## 📚 Índice
1. [Introducción](#introducción)
2. [¿Qué es una función?](#qué-es-una-función)
3. [Crear funciones](#crear-funciones)
4. [Parámetros y argumentos](#parámetros-y-argumentos)
5. [Return - Devolver valores](#return---devolver-valores)
6. [Scope - Alcance de variables](#scope---alcance-de-variables)
7. [Funciones como parámetros](#funciones-como-parámetros)
8. [Arrow functions](#arrow-functions)
9. [Mejores prácticas](#mejores-prácticas)
10. [Resumen](#resumen)

---

## Introducción

¿Recuerdas cuando creamos la tabla de multiplicar? Tuvimos que escribir prácticamente el mismo código para cada número. **Las funciones son la solución.**

Una función es un bloque de código **reutilizable** que realiza una tarea específica. En lugar de repetir código, lo colocas en una función y la llamas cuando sea necesario.

**Beneficios:**
- ✅ No repites código
- ✅ Código más organizado
- ✅ Fácil de mantener
- ✅ Reutilizable en diferentes partes

---

## ¿Qué es una función?

Una **función** es un bloque de código que realiza una tarea específica y puede ser **llamada** múltiples veces.

### Analogía

Piensa en una función como una máquina expendedora:
1. **Programas** la máquina (crear función)
2. **Insertas monedas** (parámetros)
3. **Presionas un botón** (llamar función)
4. **Obtienes el producto** (return)

### Componentes de una función

1. **Nombre**: Cómo se identifica
2. **Parámetros**: Datos de entrada (opcionales)
3. **Cuerpo**: Código que ejecuta
4. **Return**: Resultado (opcional)

---

## Crear funciones

### Sintaxis básica

```javascript
function nombreFuncion(parámetro1, parámetro2) {
    // Código de la función
    return resultado;
}

// Llamar la función
nombreFuncion(valor1, valor2);
```

### Ejemplo 1: Función sin parámetros

```javascript
function saludar() {
    console.log('Hola, bienvenido a JavaScript');
}

saludar();  // Llamar la función
saludar();  // Llamar de nuevo
saludar();  // Y de nuevo

// Salida:
// Hola, bienvenido a JavaScript
// Hola, bienvenido a JavaScript
// Hola, bienvenido a JavaScript
```

### Ejemplo 2: Función simple

```javascript
function mostrarNombre() {
    const nombre = 'Juan';
    console.log(`Mi nombre es ${nombre}`);
}

mostrarNombre();

// Salida: "Mi nombre es Juan"
```

### Ejemplo 3: Función con lógica

```javascript
function verificarEdad() {
    const edad = 25;
    
    if (edad >= 18) {
        console.log('Eres mayor de edad');
    } else {
        console.log('Eres menor de edad');
    }
}

verificarEdad();

// Salida: "Eres mayor de edad"
```

---

## Parámetros y argumentos

Los **parámetros** son variables que la función recibe. Los **argumentos** son los valores que pasas cuando llamas la función.

### Ejemplo 1: Un parámetro

```javascript
function saludarPersona(nombre) {
    console.log(`Hola ${nombre}, bienvenido`);
}

saludarPersona('Juan');    // Argumento: 'Juan'
saludarPersona('María');   // Argumento: 'María'
saludarPersona('Carlos');  // Argumento: 'Carlos'

// Salida:
// Hola Juan, bienvenido
// Hola María, bienvenido
// Hola Carlos, bienvenido
```

### Ejemplo 2: Múltiples parámetros

```javascript
function sumar(a, b) {
    const resultado = a + b;
    console.log(`${a} + ${b} = ${resultado}`);
}

sumar(5, 3);    // 8
sumar(10, 20);  // 30
sumar(100, 50); // 150
```

### Ejemplo 3: Tabla de multiplicar personalizada

```javascript
function tablaMultiplicar(numero, hasta = 10) {
    for (let i = 1; i <= hasta; i++) {
        console.log(`${numero} x ${i} = ${numero * i}`);
    }
}

tablaMultiplicar(5);       // Usa valor por defecto (10)
tablaMultiplicar(7, 5);    // Personalizado (5 filas)
```

**Conceptos:**
- `hasta = 10` → Parámetro con valor por defecto
- Si no pasas argumento, usa el valor por defecto
- Si pasas un argumento, usa ese valor

---

## Return - Devolver valores

El comando `return` devuelve un **resultado** desde la función.

### Ejemplo 1: Return simple

```javascript
function sumar(a, b) {
    return a + b;
}

const resultado = sumar(5, 3);
console.log(resultado);  // 8

console.log(sumar(10, 20));  // 30
```

### Ejemplo 2: Return con lógica

```javascript
function obtenerCalificacion(nota) {
    if (nota >= 90) {
        return 'A';
    } else if (nota >= 80) {
        return 'B';
    } else if (nota >= 70) {
        return 'C';
    } else {
        return 'F';
    }
}

console.log(obtenerCalificacion(95));  // "A"
console.log(obtenerCalificacion(75));  // "C"
```

### Ejemplo 3: Return con condicional

```javascript
function esAdulto(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

console.log(esAdulto(25));  // true
console.log(esAdulto(15));  // false

// Alternativa (más simple):
function esAdulto(edad) {
    return edad >= 18;
}
```

### Ejemplo 4: Función que retorna múltiples valores (array)

```javascript
function obtenerDatos() {
    const nombre = 'Juan';
    const edad = 30;
    const ciudad = 'Barcelona';
    
    return [nombre, edad, ciudad];
}

const [nom, edades, ciudades] = obtenerDatos();
console.log(nom);      // Juan
console.log(edades);   // 30
console.log(ciudades); // Barcelona
```

### Ejemplo 5: Función que retorna objeto

```javascript
function crearPersona(nombre, edad) {
    return {
        nombre: nombre,
        edad: edad,
        presentarse: function() {
            console.log(`Soy ${this.nombre} y tengo ${this.edad} años`);
        }
    };
}

const persona = crearPersona('María', 28);
persona.presentarse();  // "Soy María y tengo 28 años"
```

---

## Scope - Alcance de variables

El **scope** determina dónde está disponible una variable.

### Global scope

```javascript
const nombre = 'Juan';  // Global - accesible desde cualquier lugar

function saludar() {
    console.log(nombre);  // Puede acceder
}

saludar();  // "Juan"
console.log(nombre);  // "Juan"
```

### Function scope

```javascript
function test() {
    const x = 5;  // Local - solo existe dentro de la función
    console.log(x);  // 5
}

test();
console.log(x);  // ❌ Error: x no está definida
```

### Block scope (let y const)

```javascript
if (true) {
    const x = 5;
    let y = 10;
    console.log(x, y);  // 5, 10
}

console.log(x);  // ❌ Error: x no está definida
console.log(y);  // ❌ Error: y no está definida
```

### Scope anidado

```javascript
const global = 'Soy global';

function externa() {
    const local = 'Soy local en externa';
    
    function interna() {
        const muyLocal = 'Soy local en interna';
        
        console.log(global);     // ✅ Accede a global
        console.log(local);      // ✅ Accede a local de externa
        console.log(muyLocal);   // ✅ Accede a su local
    }
    
    interna();
    console.log(muyLocal);  // ❌ Error: no existe aquí
}

externa();
```

### Regla: Variables locales ocultan globales

```javascript
const nombre = 'Global';

function cambiar() {
    const nombre = 'Local';
    console.log(nombre);  // "Local"
}

cambiar();
console.log(nombre);  // "Global" - Global no cambió
```

---

## Funciones como parámetros

Puedes pasar una función como parámetro a otra función.

### Ejemplo 1: Función que recibe función

```javascript
function operacion(a, b, operador) {
    return operador(a, b);
}

function sumar(x, y) {
    return x + y;
}

function restar(x, y) {
    return x - y;
}

console.log(operacion(10, 5, sumar));    // 15
console.log(operacion(10, 5, restar));   // 5
```

### Ejemplo 2: Función anónima como parámetro

```javascript
const numeros = [1, 2, 3, 4, 5];
let suma = 0;

function procesar(array, callback) {
    for (let i = 0; i < array.length; i++) {
        callback(array[i]);
    }
}

procesar(numeros, function(numero) {
    suma += numero;
});

console.log(suma);  // 15
```

---

## Arrow functions

Las **arrow functions** son una forma más compacta de escribir funciones.

### Sintaxis

```javascript
// Función regular
function sumar(a, b) {
    return a + b;
}

// Arrow function equivalente
const sumar = (a, b) => {
    return a + b;
};

// Arrow function abreviada (un parámetro, una línea)
const sumar = (a, b) => a + b;

// Arrow con parámetro único
const cuadrado = x => x * x;

// Arrow sin parámetros
const saludar = () => 'Hola';
```

### Ejemplos

#### Ejemplo 1: Básica

```javascript
const multiplicar = (a, b) => a * b;
console.log(multiplicar(5, 3));  // 15
```

#### Ejemplo 2: Sin parámetros

```javascript
const obtenerHora = () => new Date();
console.log(obtenerHora());
```

#### Ejemplo 3: Un parámetro

```javascript
const esPositivo = numero => numero > 0;
console.log(esPositivo(5));   // true
console.log(esPositivo(-3));  // false
```

#### Ejemplo 4: Con bloque de código

```javascript
const calcularArea = (radio) => {
    const area = Math.PI * radio * radio;
    return area;
};

console.log(calcularArea(5).toFixed(2));  // 78.50
```

### Arrow vs función regular

```javascript
// Función regular
const sumar1 = function(a, b) {
    return a + b;
};

// Arrow function
const sumar2 = (a, b) => a + b;

// Resultado igual
console.log(sumar1(5, 3));  // 8
console.log(sumar2(5, 3));  // 8
```

---

## Métodos útiles para arrays con funciones

### forEach

```javascript
const numeros = [1, 2, 3, 4, 5];

numeros.forEach((numero) => {
    console.log(numero * 2);
});

// Salida: 2, 4, 6, 8, 10
```

### map

```javascript
const numeros = [1, 2, 3, 4, 5];
const duplicados = numeros.map(numero => numero * 2);

console.log(duplicados);  // [2, 4, 6, 8, 10]
```

### filter

```javascript
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = numeros.filter(numero => numero % 2 === 0);

console.log(pares);  // [2, 4, 6, 8, 10]
```

---

## Errores comunes

### ❌ Error 1: Olvidar parentesis en llamada

```javascript
function saludar() {
    console.log('Hola');
}

saludar;     // ❌ No ejecuta - solo referencia
saludar();   // ✅ Ejecuta
```

### ❌ Error 2: Return no devuelve el valor

```javascript
// ❌ INCORRECTO
function sumar(a, b) {
    const resultado = a + b;
    // Falta: return resultado
}

// ✅ CORRECTO
function sumar(a, b) {
    return a + b;
}
```

### ❌ Error 3: Parámetros vs argumentos

```javascript
function saludar(nombre) {  // 'nombre' es parámetro
    console.log(`Hola ${nombre}`);
}

saludar('Juan');  // 'Juan' es argumento
```

### ❌ Error 4: Scope confusion

```javascript
function test() {
    x = 5;  // ❌ Crea variable global por error
}

// ✅ Mejor: usa let o const
function test() {
    let x = 5;  // Local
}
```

---

## Mejores prácticas

### ✅ 1. Nombres descriptivos

```javascript
// ❌ No está claro
function f(x) {
    return x * 2;
}

// ✅ Mejor
function duplicarNumero(numero) {
    return numero * 2;
}
```

### ✅ 2. Una responsabilidad

```javascript
// ❌ Demasiadas cosas
function procesarDatos() {
    // Valida
    // Transforma
    // Guarda
}

// ✅ Mejor: funciones separadas
function validar(datos) { }
function transformar(datos) { }
function guardar(datos) { }
```

### ✅ 3. Return temprano

```javascript
// ❌ Complejo
function verificar(x) {
    if (x > 0) {
        if (x < 100) {
            return true;
        }
    }
    return false;
}

// ✅ Más simple
function verificar(x) {
    if (x <= 0) return false;
    if (x >= 100) return false;
    return true;
}
```

### ✅ 4. Documenta parámetros

```javascript
/**
 * Calcula el área de un círculo
 * @param {number} radio - Radio del círculo
 * @returns {number} Área del círculo
 */
function areaCirculo(radio) {
    return Math.PI * radio * radio;
}
```

### ✅ 5. Agrupa funciones relacionadas

```javascript
const calculadora = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => a / b
};

console.log(calculadora.sumar(5, 3));  // 8
```

---

## Resumen

| Concepto | Descripción | Ejemplo |
|----------|-------------|---------|
| **Función** | Bloque reutilizable | `function saludar() { }` |
| **Parámetro** | Entrada de función | `function f(x, y)` |
| **Return** | Devuelve valor | `return resultado` |
| **Scope** | Alcance de variable | Local vs Global |
| **Arrow** | Forma compacta | `const f = (x) => x * 2` |

---

## Próximo tema: Tema 6 - Arrays Avanzado

Aprendiste a crear funciones reutilizables. Ahora combinaremos funciones con **arrays avanzados**. En el Tema 6:
- Métodos de array (map, filter, reduce, etc)
- Transformación de datos
- Búsqueda y ordenamiento avanzado

¡Vamos a dominar array!

---

## 💡 Tips finales

- Las funciones son la base de código profesional
- Nombres claros = código entendible
- Una función = una responsabilidad
- Arrow functions: úsalas cuando código es simple
- Devuelve valores en lugar de usar console.log

