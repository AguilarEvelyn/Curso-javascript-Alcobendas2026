ejercicios_tema5.md
100 %
# Tema 5: Funciones - Ejercicios

## Nivel Básico (5 ejercicios)

### 1. Función Saludar
Escribe una función que no tenga parámetros y devuelva el string "Hola JavaScript".

**Requisitos:**
- Usar function
- No tener parámetros
- Usar return

---

### 2. Función con Parámetros
Crea una función que reciba dos números y devuelva su suma.

**Requisitos:**
- Dos parámetros
- Devolver la suma
- Llamarla con al menos dos ejemplos

---

### 3. Función Cuadrado
Escribe una función que devuelva el cuadrado de un número.

**Requisitos:**
- Recibir un número como parámetro
- Demostrar con números: 3, 5, 10

---

### 4. Función Descuento
Crea una función que calcule el precio con descuento del 10%.

**Requisitos:**
- Recibir precio original
- Calcular con descuento
- Devolver precio final

---

### 5. Función Edad
Escribe una función que determine si una persona es adulto (18+).

**Requisitos:**
- Recibir edad
- Devolver true o false
- Demostrar con varias edades

---

## Nivel Intermedio (7 ejercicios)

### 6. Operación Elegida
Crea una función que sume, reste, multiplique o divida según un parámetro.

**Requisitos:**
- Parámetros: num1, num2, operación
- Operación puede ser: '+', '-', '*', '/'
- Devolver el resultado

---

### 7. Convertir Temperatura
Crea una función que convierta Celsius a Fahrenheit.

**Requisitos:**
- Fórmula: (C × 9/5) + 32
- Parámetro: temperatura en Celsius
- Devolver Fahrenheit

---

### 8. Contar Caracteres
Escribe una función que cuente cuántos caracteres tiene un string.

**Requisitos:**
- Parámetro: string
- Devolver cantidad de caracteres
- Usar .length

---

### 9. Invertir String
Crea una función que devuelva un string invertido.

**Requisitos:**
- Ejemplo: "hola" → "aloh"
- Usar .split().reverse().join()

---

### 10. Número Primo
Escribe una función que determine si un número es primo.

**Requisitos:**
- Parámetro: número
- Devolver true si es primo, false si no
- Primo = solo divisible por 1 y sí mismo

---

### 11. Llamar Función desde Función
Crea dos funciones: una que calcule área, otra que la use.

**Requisitos:**
- Función 1: areaRectangulo(base, altura)
- Función 2: mostrarArea() que llame a la primera

---

### 12. Parámetros con Defecto
Crea una función con parámetros que tengan valores por defecto.

**Requisitos:**
- Función: presentacion(nombre = 'Anonimo', edad = 18)
- Llamarla de diferentes formas

---

## Nivel Avanzado (8 ejercicios)

### 13. Arrow Function Básica
Enseña la equivalencia entre function y arrow function.

**Requisitos:**
- Versión con function tradicional
- Versión con flechas
- Deben hacer lo mismo

---

### 14. map() - Transformar Array
Usa map para multiplicar por 2 cada número de un array.

**Requisitos:**
- Array: [1, 2, 3, 4, 5]
- Multiplicar cada uno por 2
- Mostrar resultado

---

### 15. filter() - Números Pares
Usa filter para obtener solo los números pares.

**Requisitos:**
- Array con números del 1 al 20
- Filtrar pares
- Mostrar cantidad y lista

---

### 16. forEach() - Mostrar Lista
Usa forEach para mostrar cada elemento con índice.

**Requisitos:**
- Array de frutas
- Mostrar: "0: manzana, 1: plátano..."

---

### 17. reduce() - Precio Total
Usa reduce para sumar precios de un carrito.

**Requisitos:**
- Array: [{precio: 10}, {precio: 20}, {precio: 15}]
- Usar reduce para sumar
- Mostrar total

---

### 18. find() - Buscar Usuario
Usa find para encontrar un usuario por ID.

**Requisitos:**
- Array de usuarios con {id, nombre}
- Buscar por ID específico
- Mostrar datos del usuario

---

### 19. Clasificador de Notas
Crea una función que califique según puntuación.

**Requisitos:**
- 90-100 = A, 80-89 = B, 70-79 = C, <70 = F
- Parámetro: puntuación
- Devolver la calificación

---

### 20. Generador de Contraseña
Crea una función que genere contraseñas aleatorias.

**Requisitos:**
- Parámetro: longitud
- Usar caracteres: letras, números, símbolos
- Devolver contraseña aleatoria

---

## 🎯 Bonus: Proyecto Integrador

### 21. Calculadora Completa con Funciones
Crea una calculadora que use funciones para cada operación.

**Requisitos:**
- Funciones: sumar(), restar(), multiplicar(), dividir()
- Función: calculadora(a, b, operacion)
- Arrow functions para operaciones básicas
- Validar números