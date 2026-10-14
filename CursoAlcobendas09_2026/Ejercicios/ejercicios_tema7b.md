# Tema 7B: POO Intermedia - Ejercicios

## Objetivo
Practicar herencia, encapsulación con getters/setters, propiedades privadas, composición y manipulación avanzada de objetos.

---

## Ejercicio 1: Herencia Básica

Crea:
1. Una clase `Animal` con propiedades: `nombre`, `tipo`
2. Métodos en `Animal`: `describirse()`, `hacerSonido()`
3. Una clase `Perro` que herede de `Animal`
4. El método `hacerSonido()` devuelva "¡Guau!" en Perro (sobrescribir)
5. Agrega método `traerPelota()` solo en Perro

**Requisitos:**
- Crea 2 instancias (Perro y otra clase que herede)
- Usa `super()` en el constructor de Perro
- Prueba herencia con `instanceof`

---

## Ejercicio 2: Getters y Setters

Crea una clase `Persona` con:
- Propiedad privada `_edad`
- Getter `edad`: devuelva la edad
- Setter `edad`: valide que edad > 0 y < 120
- Si es inválida, mostrar error y no actualizar
- Método para mostrar "Soy [nombre] y tengo [edad] años"

**Requisitos:**
- Crear instancia
- Intentar asignar edad negativa (debe fallar)
- Intentar asignar edad > 150 (debe fallar)
- Asignar edad válida
- Verificar getter

---

## Ejercicio 3: Métodos Estáticos

Crea una clase `Matemática` con:
- Método estático `sumar(a, b)`: devuelva suma
- Método estático `multiplica(a, b)`: devuelva producto
- Método estático `esPar(numero)`: true/false
- Método estático `factorial(n)`: calcula factorial

**Requisitos:**
- Llamar los métodos sin instanciar la clase
- Usar `Matemática.sumar()`, no `new Matemática().sumar()`

---

## Ejercicio 4: Propiedades Privadas (#)

Crea una clase `CuentaBancaria` con:
- Constructor: `titular`, `saldo` (privada con #)
- Getter `saldo`: devuelva saldo formateado a 2 decimales
- Método `depositar(cantidad)`: aumente saldo privado
- Método `retirar(cantidad)`: disminuya saldo (validar)
- Método privado `#registrarMovimiento(tipo, cantidad)`

**Requisitos:**
- Intenta acceder a `cuenta.#saldo` (debe fallar)
- Usa getter y métodos para acceder
- Valida que retiros no dejen saldo negativo

---

## Ejercicio 5: Composición vs Herencia

Crea un sistema de personajes de videojuego usando **composición**:

```javascript
const capacidades = {
    volar: () => console.log("✈️ Volando..."),
    nadar: () => console.log("🏊 Nadando..."),
    correr: () => console.log("🏃 Corriendo...")
};
```

Crea clase `Personaje` que acepte un array de capacidades en el constructor.

**Requisitos:**
- Personaje tenga método `hacer(accion)` que ejecute la capacidad
- Crea 3 personajes: uno que vuele, otro que nade, otro que haga todo
- Prueba cada uno

---

## Ejercicio 6: Object.keys, values, entries

Crea un objeto `config` con propiedades:
```javascript
const config = {
    puerto: 3000,
    host: "localhost",
    debug: true,
    timeout: 30
};
```

Realiza:
1. Imprime las claves con `Object.keys()`
2. Imprime los valores con `Object.values()`
3. Itera con `Object.entries()` (imprime "clave = valor")
4. Usa `Object.assign()` para actualizar puerto a 5000
5. Usa `Object.freeze()` para hacer config inmutable

---

## Ejercicio 7: Destructuring de Objetos

Dado este objeto:
```javascript
const usuario = {
    nombre: "Juan",
    email: "juan@example.com",
    edad: 28,
    ciudad: "Madrid"
};
```

1. Extrae `nombre` y `email` con destructuring
2. Extrae renombrando: `{ nombre as n, edad as a }`
3. Extrae con valores por defecto: `{ pais = "España" }`
4. Extrae el resto con rest operator: `{ nombre, ...resto }`

---

## Ejercicio 8: Destructuring en Funciones

Crea una función que reciba un objeto producto:
```javascript
function mostrarProducto({ nombre, precio, stock = 0 }) {
    // Usar destructuring en parámetro
}
```

**Requisitos:**
- La función debe mostrar: "Nombre: [nombre], Precio: €[precio], Stock: [stock]"
- `stock` tiene valor por defecto 0
- Llamar con diferentes objetos

---

## Ejercicio 9: Array de Objetos

Crea un array de estudiantes:
```javascript
const estudiantes = [
    { nombre: "Juan", nota: 8.5 },
    { nombre: "María", nota: 9.0 },
    { nombre: "Pedro", nota: 6.5 }
];
```

Realiza:
1. Filtra aprobados (nota >= 7)
2. Calcula promedio de notas con `reduce()`
3. Encuentra el estudiante con mayor nota
4. Ordena por nota descendente
5. Extrae solo nombres con `map()`

---

## Ejercicio 10: Proyecto - Tienda Online

Crea un sistema de tienda con:

```javascript
class Producto {
    constructor(nombre, precio, stock) { }
    // Métodos para vender, reabastecer
}

class Tienda {
    constructor(nombre) { }
    // Métodos: agregarProducto, listarProductos, 
    // comprar(nombreProducto, cantidad), 
    // totalInventario()
}
```

**Requisitos:**
- Tienda tiene array de productos
- Método `agregarProducto(producto)`
- Método `comprar(nombre, cantidad)`: disminuye stock
- Método `totalInventario()`: calcula valor total en €
- Método `listar()`: imprime todos los productos

**Pruebas:**
1. Crear tienda con 3 productos
2. Comprar algunos
3. Listar productos
4. Mostrar total de inventario

---

## 🎯 Puntos Clave a Practicar

✅ Herencia con `extends` y `super()`  
✅ Getters y Setters  
✅ Métodos estáticos (`static`)  
✅ Propiedades privadas (`#`)  
✅ Composición en lugar de herencia  
✅ `Object.keys()`, `Object.values()`, `Object.entries()`  
✅ `Object.assign()`, `Object.freeze()`  
✅ Destructuring de objetos  
✅ Destructuring en parámetros de función  
✅ Métodos de array: `filter()`, `map()`, `find()`, `reduce()`, `sort()`  

---

**Tiempo estimado:** 90-120 minutos
