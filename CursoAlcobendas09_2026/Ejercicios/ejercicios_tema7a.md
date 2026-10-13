# Tema 7A: Objetos y Clases Básicas - Ejercicios

## Objetivo
Practicar la creación y manipulación de objetos en JavaScript usando notación literal y clases ES6.

---

## Ejercicio 1: Crear Objetos Literales

Crea un objeto `coche` con las siguientes propiedades:
- `marca`: "Toyota"
- `modelo`: "Corolla"
- `año`: 2022
- `color`: "azul"
- `velocidad`: 0

Luego:
1. Accede e imprime cada propiedad
2. Cambia el color a "rojo"
3. Aumenta la velocidad a 100
4. Imprime el objeto completo

---

## Ejercicio 2: Métodos en Objetos

Crea un objeto `persona` con:
- `nombre`: "Juan"
- `edad`: 28
- `email`: "juan@example.com"
- Método `presentarse()`: que devuelva "Hola, soy Juan y tengo 28 años"
- Método `cumplirAños()`: que aumente la edad en 1

Llamar ambos métodos y mostrar los resultados.

---

## Ejercicio 3: La palabra `this`

Crea un objeto `cuenta` con:
- `titular`: "María"
- `saldo`: 1000
- Método `consultarSaldo()`: devuelva "La cuenta de [titular] tiene €[saldo]"
- Método `depositar(cantidad)`: aumente el saldo
- Método `retirar(cantidad)`: disminuya el saldo (validar que no sea negativo)

Realiza operaciones: depositar 500, retirar 200, consultar saldo.

---

## Ejercicio 4: Constructores con `function`

Crea un constructor `Libro(titulo, autor, páginas)`.

Agrega métodos:
- `información()`: devuelva "Titulo: [titulo], Autor: [autor], Páginas: [páginas]"
- `esGrande()`: true si páginas > 300

Crea 2 instancias diferentes y prueba ambos métodos.

---

## Ejercicio 5: Clases ES6 (Constructor y Métodos)

Crea una clase `Estudiante` con:
- Constructor que acepte: `nombre`, `edad`, `nota`
- Método `presentacion()`: "Soy [nombre], tengo [edad] años y mi nota es [nota]"
- Método `estaAprobado()`: true si nota >= 5

Crea 3 instancias con diferentes notas (alguno aprobado, otro no) y prueba.

---

## Ejercicio 6: Propiedades y Métodos con `this`

Crea una clase `Producto` con:
- Constructor: `nombre`, `precio`, `stock`
- Método `vender(cantidad)`: disminuya stock, valide que haya stock disponible
- Método `reabastecer(cantidad)`: aumente stock
- Método `estado()`: devuelva "Productos: [nombre], Stock: [stock], Precio: €[precio]"

Realiza operaciones: vender 3, reabastecer 10, consultar estado.

---

## Ejercicio 7: Deletear Propiedades

Crea un objeto `app` con propiedades: `nombre`, `versión`, `activo`.

Luego:
1. Imprime todas las propiedades
2. Usa `delete` para eliminar `versión`
3. Vuelve a imprimir el objeto (no debe tener `versión`)
4. Intenta acceder a `app.versión` (debe ser `undefined`)

---

## Ejercicio 8: typeof y instanceof

Crea:
1. Una variable `numero = 42`
2. Una variable `texto = "hola"`
3. Una clase `Usuario` y una instancia

Comprueba con:
- `typeof numero`, `typeof texto`, `typeof new Usuario()`
- `instanceof Usuario` para la instancia

---

## Ejercicio Bonus: Carrito de Compras

Crea una clase `Carrito` con:
- Array vacío `items` en constructor
- Método `agregarProducto(nombre, precio, cantidad)`: agrega objeto a items
- Método `total()`: suma todos los precios × cantidades
- Método `listar()`: imprime cada item del carrito
- Método `vaciar()`: elimina todos los items

Realiza:
1. Agregar 3 productos diferentes
2. Listar el carrito
3. Mostrar total
4. Vaciar y verificar

---

## 🎯 Puntos Clave a Practicar

✅ Crear objetos literales  
✅ Acceder y modificar propiedades  
✅ Métodos en objetos  
✅ La palabra `this`  
✅ Constructores ES5 (`function`)  
✅ Clases ES6 (`class`)  
✅ Instancias con `new`  
✅ Arrays dentro de objetos  
✅ Validaciones simples  

---

**Tiempo estimado:** 60-90 minutos
