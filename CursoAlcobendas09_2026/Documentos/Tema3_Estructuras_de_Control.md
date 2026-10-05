# Tema 3: Estructuras de Control - Tomar Decisiones en JavaScript

## 📚 Índice
1. [Introducción](#introducción)
2. [¿Qué es una sentencia condicional?](#qué-es-una-sentencia-condicional)
3. [La sentencia if](#la-sentencia-if)
4. [La sentencia else](#la-sentencia-else)
5. [La sentencia else if](#la-sentencia-else-if)
6. [Operadores de comparación](#operadores-de-comparación)
7. [Operadores lógicos](#operadores-lógicos)
8. [La sentencia switch](#la-sentencia-switch)
9. [Operador ternario](#operador-ternario)
10. [Resumen y Mejores Prácticas](#resumen-y-mejores-prácticas)

---

## Introducción

En la programación real, raramente queremos que nuestro código haga exactamente lo mismo cada vez que se ejecuta. Piensa en una aplicación bancaria: necesita comportarse diferente si tu saldo es suficiente para un retiro o no. O en un videojuego: el personaje se comporta diferente si está saltando, corriendo o cayendo.

**Las estructuras de control** son el mecanismo que nos permite crear código que toma decisiones basadas en condiciones. Son fundamentales en cualquier lenguaje de programación.

En este tema aprenderás:
- ✅ Cómo crear decisiones en JavaScript
- ✅ Las diferentes formas de escribir condicionales
- ✅ Cuándo usar if, else y switch
- ✅ Cómo combinar múltiples condiciones
- ✅ Patrones y mejores prácticas

---

## ¿Qué es una sentencia condicional?

Una **sentencia condicional** es un bloque de código que se ejecuta SOLO si se cumple una condición específica.

Piénsalo así: es como una puerta que solo se abre si tienes la llave correcta.

### Analogía de la vida real

```
Si es fin de semana
    Entonces: duermete más
Sino
    Entonces: levántate temprano
```

En código JavaScript:
```javascript
const esFDS = true;

if (esFDS) {
    console.log('Duérmete más');
} else {
    console.log('Levántate temprano');
}
```

---

## La sentencia if

La sentencia **if** (si) es la más básica. Solo ejecuta código si la condición es verdadera.

### Sintaxis

```javascript
if (condicion) {
    // Este código se ejecuta SOLO si la condición es verdadera (true)
}
```

### Ejemplos

#### Ejemplo 1: Verificar edad

```javascript
const edad = 18;

if (edad >= 18) {
    console.log('Eres mayor de edad');
}
// Salida: "Eres mayor de edad"
```

Si `edad` fuera 16:
```javascript
const edad = 16;

if (edad >= 18) {
    console.log('Eres mayor de edad');
}
// No hay salida - la condición es falsa
```

#### Ejemplo 2: Verificar cantidad de dinero

```javascript
const dinero = 50;
const precioBoleto = 20;

if (dinero >= precioBoleto) {
    console.log('Puedes comprar el boleto');
}
// Salida: "Puedes comprar el boleto"
```

#### Ejemplo 3: Verificar si un número es positivo

```javascript
const numero = 5;

if (numero > 0) {
    console.log('El número es positivo');
}
// Salida: "El número es positivo"
```

### Cuando la condición es falsa

Si la condición es falsa, el código dentro del if simplemente NO se ejecuta:

```javascript
const pase = false;

if (pase) {
    console.log('Puedes entrar');
}
// No hay salida en consola
```

---

## La sentencia else

A menudo queremos ejecutar código ALTERNATIVO cuando la condición es falsa. Para eso usamos **else** (sino).

### Sintaxis

```javascript
if (condicion) {
    // Se ejecuta si la condición es verdadera
} else {
    // Se ejecuta si la condición es falsa
}
```

### Ejemplos

#### Ejemplo 1: Acceso a una discoteca

```javascript
const edad = 16;

if (edad >= 18) {
    console.log('Acceso permitido');
} else {
    console.log('Acceso denegado - debes ser mayor de edad');
}
// Salida: "Acceso denegado - debes ser mayor de edad"
```

#### Ejemplo 2: Validar cantidad de dinero

```javascript
const dinero = 10;
const precioPelícula = 15;

if (dinero >= precioPelícula) {
    console.log('¡Vamos al cine!');
} else {
    console.log('No tenemos suficiente dinero');
}
// Salida: "No tenemos suficiente dinero"
```

#### Ejemplo 3: Verificar si un número es par

```javascript
const numero = 7;

if (numero % 2 === 0) {
    console.log('Es un número par');
} else {
    console.log('Es un número impar');
}
// Salida: "Es un número impar"
```

**¿Cómo funciona `numero % 2`?**
- El operador `%` (módulo) da el RESTO de una división
- Si `numero % 2 === 0`, el resto es 0 (es par)
- Si `numero % 2 === 1`, el resto es 1 (es impar)

---

## La sentencia else if

Frecuentemente tenemos más de dos opciones. Para eso usamos **else if** (sino si).

Puedes usar múltiples `else if` para crear una cadena de decisiones.

### Sintaxis

```javascript
if (condicion1) {
    // Se ejecuta si condicion1 es verdadera
} else if (condicion2) {
    // Se ejecuta si condicion1 es falsa Y condicion2 es verdadera
} else if (condicion3) {
    // Se ejecuta si condicion1 y condicion2 son falsas Y condicion3 es verdadera
} else {
    // Se ejecuta si todas las condiciones anteriores son falsas
}
```

### Ejemplos

#### Ejemplo 1: Clasificar una calificación

```javascript
const calificacion = 85;

if (calificacion >= 90) {
    console.log('Excelente (A)');
} else if (calificacion >= 80) {
    console.log('Bueno (B)');
} else if (calificacion >= 70) {
    console.log('Satisfactorio (C)');
} else if (calificacion >= 60) {
    console.log('Aprobado (D)');
} else {
    console.log('Reprobado (F)');
}
// Salida: "Bueno (B)"
```

**¿Cómo procesa JavaScript esto?**
1. ¿85 >= 90? No → Continúa
2. ¿85 >= 80? Sí → Ejecuta este bloque y DETIENE

#### Ejemplo 2: Categorizar edad

```javascript
const edad = 25;

if (edad < 13) {
    console.log('Eres un niño');
} else if (edad < 18) {
    console.log('Eres un adolescente');
} else if (edad < 65) {
    console.log('Eres un adulto');
} else {
    console.log('Eres un adulto mayor');
}
// Salida: "Eres un adulto"
```

#### Ejemplo 3: Sistema de descuentos

```javascript
const compra = 150;
let descuento = 0;

if (compra < 50) {
    descuento = 0;
} else if (compra < 100) {
    descuento = 10;
} else if (compra < 200) {
    descuento = 15;
} else {
    descuento = 20;
}

const total = compra - (compra * descuento / 100);
console.log(`Compra: $${compra}, Descuento: ${descuento}%, Total: $${total}`);
// Salida: "Compra: $150, Descuento: 15%, Total: $127.5"
```

#### Ejemplo 4: Identificar un número

```javascript
const numero = 0;

if (numero > 0) {
    console.log('Positivo');
} else if (numero < 0) {
    console.log('Negativo');
} else {
    console.log('Cero');
}
// Salida: "Cero"
```

### ⚠️ Orden importa

En `else if`, el ORDEN es crucial. Se verify = comienza desde arriba y se detiene en la primera condición verdadera.

```javascript
const x = 5;

// ✅ CORRECTO
if (x > 10) {
    console.log('Mayor que 10');
} else if (x > 0) {
    console.log('Mayor que 0');
} else {
    console.log('Menor o igual a 0');
}
// Salida: "Mayor que 0"


// ❌ INCORRECTO (lógica al revés)
if (x > 0) {
    console.log('Mayor que 0');
} else if (x > 10) {
    console.log('Mayor que 10'); // Nunca se ejecutará si x > 0
}
// Salida: "Mayor que 0"
```

---

## Operadores de comparación

Para crear condiciones, necesitamos **operadores de comparación**. Estos devuelven `true` o `false`.

### Tabla de operadores

| Operador | Nombre | Ejemplo | Resultado |
|----------|--------|---------|-----------|
| `==` | Igual (flexible) | `5 == '5'` | `true` |
| `===` | Igual estricto | `5 === '5'` | `false` |
| `!=` | No igual (flexible) | `5 != '5'` | `false` |
| `!==` | No igual estricto | `5 !== '5'` | `true` |
| `>` | Mayor que | `5 > 3` | `true` |
| `<` | Menor que | `5 < 3` | `false` |
| `>=` | Mayor o igual | `5 >= 5` | `true` |
| `<=` | Menor o igual | `5 <= 3` | `false` |

### ⚠️ Importante: === vs ==

**Regla de oro**: Siempre usa `===` y `!==` en lugar de `==` y `!=`

#### ¿Por qué?

JavaScript intenta convertir tipos (esto es malo):

```javascript
// Con == (malo)
5 == '5'      // true (¡JavaScript convierte '5' a número!)
0 == false    // true (¡Convierte false a 0!)
'' == false   // true (¡La cadena vacía se considera false!)
null == undefined  // true

// Con === (correcto)
5 === '5'     // false (tipos diferentes, sin conversión)
0 === false   // false
'' === false  // false
null === undefined  // false
```

### Ejemplos

```javascript
const edad = 18;

// Comparación simple
if (edad === 18) {
    console.log('Tienes exactamente 18 años');
}

// Mayor que
if (edad > 18) {
    console.log('Eres mayor que 18');
}

// Menor o igual
if (edad <= 25) {
    console.log('Tienes 25 años o menos');
}

// No igual
if (edad !== 16) {
    console.log('No tienes 16 años');
}
```

---

## Operadores lógicos

A menudo necesitamos combinar múltiples condiciones. Para eso usamos **operadores lógicos**.

### Los tres principales

| Operador | Nombre | Símbolo | Significado |
|----------|--------|---------|-------------|
| AND | Y | `&&` | TRUE si TODOS son verdaderos |
| OR | O | `\|\|` | TRUE si AL MENOS UNO es verdadero |
| NOT | NO | `!` | Invierte el valor |

### AND (&&)

Devuelve `true` SOLO si TODAS las condiciones son verdaderas.

```javascript
const edad = 25;
const carnetConducir = true;
const coche = true;

if (edad >= 18 && carnetConducir && coche) {
    console.log('Puedes conducir');
} else {
    console.log('No puedes conducir');
}
// Salida: "Puedes conducir"
```

**Analogía**: Es como una puerta que necesita MÚLTIPLES llaves. Si te falta una, no entras.

Otro ejemplo:
```javascript
const temperatura = 25;
const tiempoSeco = true;

if (temperatura > 20 && tiempoSeco) {
    console.log('Perfecto para un picnic');
} else {
    console.log('Mejora los condiciones');
}
// Salida: "Perfecto para un picnic"
```

### OR (||)

Devuelve `true` si AL MENOS UNA condición es verdadera.

```javascript
const esEstudiante = false;
const esJubilado = true;
const esMenorEdad = false;

if (esEstudiante || esJubilado || esMenorEdad) {
    console.log('Tienes descuento');
}
// Salida: "Tienes descuento" (porque esJubilado es true)
```

**Analogía**: Es como múltiples caminos que llevan al mismo destino. Usas el que funcione.

Otro ejemplo:
```javascript
const trabajoFinde = false;
const denunciaFinde = true;
const enfermoFinde = false;

if (trabajoFinde || denunciaFinde || enfermoFinde) {
    console.log('No puedo ir al concierto');
} else {
    console.log('¡Nos vamos al concierto!');
}
// Salida: "No puedo ir al concierto"
```

### NOT (!)

Invierte un valor booleano. `true` se convierte en `false` y viceversa.

```javascript
const esVisiónando = false;

if (!esVisionando) {
    console.log('No es viernes');
}
// Salida: "No es viernes"
```

Otro ejemplo:
```javascript
const tieneEntrada = false;

if (!tieneEntrada) {
    console.log('Debes comprar una entrada');
}
// Salida: "Debes comprar una entrada"
```

### Combinando operadores

Puedes combinar `&&`, `||` y `!`:

```javascript
const edad = 30;
const carnetValido = true;
const sancionado = false;

if (edad >= 18 && carnetValido && !sancionado) {
    console.log('Puedes conducir');
}
// Salida: "Puedes conducir"
```

Tabla de verdad para AND:
```
true && true    → true
true && false   → false
false && true   → false
false && false  → false
```

Tabla de verdad para OR:
```
true || true    → true
true || false   → true
false || true   → true
false || false  → false
```

---

## La sentencia switch

Cuando tienes MUCHAS opciones basadas en un MISMO valor, `switch` es más limpio que múltiples `if/else if`.

### Sintaxis

```javascript
switch (expresion) {
    case valor1:
        // Se ejecuta si expresion === valor1
        break;
    case valor2:
        // Se ejecuta si expresion === valor2
        break;
    default:
        // Se ejecuta si ningún case coincide
}
```

### ⚠️ Importante: El `break`

El `break` es CRUCIAL. Sin él, JavaScript ejecuta el siguiente case (esto se llama "fall-through").

### Ejemplo 1: Día de la semana

```javascript
const dia = 3;
let nomDia = '';

switch (dia) {
    case 1:
        nomDia = 'Lunes';
        break;
    case 2:
        nomDia = 'Martes';
        break;
    case 3:
        nomDia = 'Miércoles';
        break;
    case 4:
        nomDia = 'Jueves';
        break;
    case 5:
        nomDia = 'Viernes';
        break;
    case 6:
        nomDia = 'Sábado';
        break;
    case 7:
        nomDia = 'Domingo';
        break;
    default:
        nomDia = 'Día inválido';
}

console.log(`Día ${dia} es ${nomDia}`);
// Salida: "Día 3 es Miércoles"
```

### Ejemplo 2: Clasificar fruta

```javascript
const fruta = 'manzana';
let color = '';

switch (fruta) {
    case 'manzana':
        color = 'roja o verde';
        break;
    case 'plátano':
        color = 'amarilla';
        break;
    case 'naranja':
        color = 'naranja';
        break;
    case 'uva':
        color = 'morada o verde';
        break;
    default:
        color = 'desconocido';
}

console.log(`Una manzana es ${color}`);
// Salida: "Una manzana es roja o verde"
```

### Ejemplo 3: Operación matemática

```javascript
const numero1 = 10;
const numero2 = 5;
const operacion = '+';
let resultado = 0;

switch (operacion) {
    case '+':
        resultado = numero1 + numero2;
        break;
    case '-':
        resultado = numero1 - numero2;
        break;
    case '*':
        resultado = numero1 * numero2;
        break;
    case '/':
        resultado = numero1 / numero2;
        break;
    default:
        console.log('Operación inválida');
        resultado = 0;
}

console.log(`${numero1} ${operacion} ${numero2} = ${resultado}`);
// Salida: "10 + 5 = 15"
```

### Múltiples cases juntos

Puedes ejecutar el MISMO código para varios valores:

```javascript
const letra = 'a';

switch (letra) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log('Es una vocal');
        break;
    default:
        console.log('Es una consonante');
}
// Salida: "Es una vocal"
```

### ❌ Qué pasa sin break (Fall-through)

```javascript
const numero = 2;

switch (numero) {
    case 1:
        console.log('Uno');
    case 2:
        console.log('Dos');
    case 3:
        console.log('Tres');
    default:
        console.log('Fin');
}

// Salida:
// "Dos"
// "Tres"
// "Fin"
// ⚠️ ¡Ejecutó MÚLTIPLES cases! Esto es generalmente un error.
```

---

## Operador ternario

El **operador ternario** es una forma compacta de escribir un `if/else` simple.

### Sintaxis

```javascript
condicion ? valorSiVerdadero : valorSiFalso
```

### Ejemplos

#### Ejemplo 1: Determinar estado

```javascript
const edad = 18;
const estado = edad >= 18 ? 'adulto' : 'menor';
console.log(estado);
// Salida: "adulto"
```

Equivalente con if/else:
```javascript
const edad = 18;
let estado;
if (edad >= 18) {
    estado = 'adulto';
} else {
    estado = 'menor';
}
console.log(estado);
// Salida: "adulto"
```

#### Ejemplo 2: Mensaje de bienvenida

```javascript
const tieneAcceso = true;
const mensaje = tieneAcceso ? 'Bienvenido' : 'Acceso denegado';
console.log(mensaje);
// Salida: "Bienvenido"
```

#### Ejemplo 3: Calcular descuento

```javascript
const cantidad = 150;
const descuento = cantidad > 100 ? 20 : 5;
console.log(`Descuento: ${descuento}%`);
// Salida: "Descuento: 20%"
```

#### Ejemplo 4: En consola

```javascript
const edad = 25;
console.log(edad >= 18 ? 'Mayor de edad' : 'Menor de edad');
// Salida: "Mayor de edad"
```

### Ternarios anidados (úsalos con cuidado)

Puedes anidar operadores ternarios, pero se vuelven difíciles de leer:

```javascript
// ❌ Difícil de leer
const edad = 25;
const estado = edad < 13 ? 'niño' : edad < 18 ? 'adolescente' : edad < 65 ? 'adulto' : 'jubilado';

// ✅ Mejor con if/else if
let estado;
if (edad < 13) {
    estado = 'niño';
} else if (edad < 18) {
    estado = 'adolescente';
} else if (edad < 65) {
    estado = 'adulto';
} else {
    estado = 'jubilado';
}
```

---

## Estructura completa: Ejemplo de un sistema de recomendaciones

Vamos a implementar un ejemplo completo que usa múltiples conceptos:

```javascript
const temperatura = 25;
const esFinSemana = true;
const presupuesto = 100;

// Recomendación de actividad
let actividad = '';

if (temperatura > 25 && esFinSemana && presupuesto > 50) {
    actividad = 'Ir a la playa';
} else if (temperatura > 15 && esFinSemana) {
    actividad = 'Paseo en el parque';
} else if (presupuesto > 50) {
    actividad = 'Ir al cine';
} else if (esFinSemana) {
    actividad = 'Jugar videojuegos en casa';
} else {
    actividad = 'Estudiar o trabajar';
}

console.log(`Temperatura ${temperatura}°C, fin de semana: ${esFinSemana}`);
console.log(`Presupuesto: $${presupuesto}`);
console.log(`Recomendación: ${actividad}`);

// Salida:
// Temperatura 25°C, fin de semana: true
// Presupuesto: $100
// Recomendación: Ir a la playa
```

---

## Errores comunes

### ❌ Error 1: Asignación en lugar de comparación

```javascript
// ❌ INCORRECTO
const edad = 18;
if (edad = 21) {  // ¡Esto asigna, no compara!
    console.log('Mayor de edad');
}

// ✅ CORRECTO
const edad = 18;
if (edad === 21) {  // Esto compara
    console.log('Mayor de edad');
}
```

### ❌ Error 2: Olvidar break en switch

```javascript
// ❌ INCORRECTO
switch (dia) {
    case 1:
        console.log('Lunes');
    case 2:
        console.log('Martes');
    // Ejecutará ambos cases si dia === 1
}

// ✅ CORRECTO
switch (dia) {
    case 1:
        console.log('Lunes');
        break;
    case 2:
        console.log('Martes');
        break;
}
```

### ❌ Error 3: Usar == en lugar de ===

```javascript
// ❌ Evita esto
if (numero == '5') {
    // Puede funcionar pero es impredecible
}

// ✅ Haz esto
if (numero === 5) {
    // Explícito y seguro
}
```

### ❌ Error 4: Orden incorrecto en else if

```javascript
// ❌ INCORRECTO
const edad = 15;
if (edad > 18) {
    console.log('Adulto');
} else if (edad > 13) {  // Esto nunca se ejecutará como esperamos
    console.log('Mayor a 13');
} else if (edad > 0) {
    console.log('Positivo');
}

// ✅ CORRECTO
if (edad < 13) {
    console.log('Menor de 13');
} else if (edad < 18) {
    console.log('Entre 13 y 18');
} else {
    console.log('Adulto');
}
```

---

## Mejores prácticas

### ✅ 1. Usar === para comparaciones

Siempre usa `===` y `!==`:

```javascript
if (valor === 5) {  // ✅ Bueno
    // ...
}

if (valor == 5) {   // ❌ Evitar
    // ...
}
```

### ✅ 2. Mantén las condiciones simples

```javascript
// ❌ Demasiado complejo
if ((edad > 18 && carnet || jubilado) && !sancionado || tieneExcusa) {
    // Difícil de entender
}

// ✅ Más claro
const puedeConducir = edad >= 18 && carnet;
const esExcepcion = jubilado || tieneExcusa;
if ((puedeConducir || esExcepcion) && !sancionado) {
    // Más legible
}
```

### ✅ 3. Usa switch para múltiples opciones del mismo valor

```javascript
// ❌ Muchos if/else if
if (dia === 1) console.log('Lunes');
else if (dia === 2) console.log('Martes');
else if (dia === 3) console.log('Miércoles');

// ✅ Switch es más claro
switch (dia) {
    case 1: console.log('Lunes'); break;
    case 2: console.log('Martes'); break;
    case 3: console.log('Miércoles'); break;
}
```

### ✅ 4. No anides demasiado

```javascript
// ❌ Muchos niveles de anidamiento
if (condicion1) {
    if (condicion2) {
        if (condicion3) {
            if (condicion4) {
                // Muy profundo
            }
        }
    }
}

// ✅ Extrae lógica
if (!condicion1) return;
if (!condicion2) return;
if (!condicion3) return;
if (!condicion4) return;
// Código principal aquí
```

### ✅ 5. Usa operador ternario para asignaciones simples

```javascript
// ✅ Bueno para casos simples
const estado = edad >= 18 ? 'adulto' : 'menor';

// Pero para lógica compleja, usa if/else
```

---

## Resumen

En este tema aprendiste:

| Concepto | Descripción | Cuándo usar |
|----------|-------------|-----------|
| **if** | Ejecuta si la condición es verdadera | Decisiones simples |
| **else** | Ejecuta si la condición anterior es falsa | Dos posibilidades |
| **else if** | Múltiples condiciones sucesivas | Más de dos opciones |
| **switch** | Elige basado en un valor | Muchas opciones del mismo valor |
| **Ternario** | Asignación condicional compacta | Decisiones simples de una línea |
| **&&** | AND lógico | Todas las condiciones deben ser verdaderas |
| **\|\|** | OR lógico | Al menos una debe ser verdadera |
| **!** | NOT lógico | Invertir un booleano |

### Flujo de decisión

```
¿Necesitas ejecutar código condicionalmente?
    ↓
¿Es una decisión simple (2 opciones)?
    ├─ Sí → Usa if/else o ternario
    └─ No → ¿Es basado en un solo valor?
        ├─ Sí → Usa switch
        └─ No → Usa if/else if

¿Necesitas múltiples condiciones?
    ├─ Todas deben ser verdaderas → Usa &&
    ├─ Al menos una → Usa ||
    └─ Invertir → Usa !
```

---

## Próximo tema: Tema 4 - Bucles

Ahora que sabes cómo tomar decisiones, necesitarás **repetir código** multiples veces. En el Tema 4 aprenderás sobre:
- Bucles `for`
- Bucles `while`
- Bucles `do-while`
- Cómo controlar bucles con `break` y `continue`

¡Vamos a automatizar tareas repetitivas!

---

## 💡 Tips finales

- Las estructuras de control son la BASE de la programación
- Practica escribiendo código que toma decisiones complejas
- Siempre prueba los "edge cases" (casos límite)
- Lee código de otros para ver diferentes patrones
- Recuerda: `===` es tu amigo, `==` es tu enemigo

