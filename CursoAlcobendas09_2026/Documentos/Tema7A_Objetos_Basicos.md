# Tema 7A: Objetos y Clases Básicas

## 📚 Índice
1. [¿Qué es un Objeto?](#qué-es-un-objeto)
2. [Creando Objetos Literales](#creando-objetos-literales)
3. [Accediendo a Propiedades](#accediendo-a-propiedades)
4. [Métodos en Objetos](#métodos-en-objetos)
5. [La Palabra `this`](#la-palabra-this)
6. [Constructores (function)](#constructores-function)
7. [Clases ES6](#clases-es6)
8. [Instancias con `new`](#instancias-con-new)
9. [Operadores `typeof` e `instanceof`](#operadores-typeof-e-instanceof)
10. [Resumen](#resumen)

---

## ¿Qué es un Objeto?

Un **objeto** es una colección de datos relacionados y funciones que actúan sobre esos datos.

### Analogía del Mundo Real

Un objeto `Coche` podría tener:
- **Propiedades:** marca, modelo, color, velocidad
- **Métodos:** acelerar(), frenar(), encender()

### Sintaxis Básica

```javascript
const miObjeto = {
    propiedad: valor,
    propiedadNumerica: 42,
    propiedadBoleana: true,
    metodo: function() {
        // código aquí
    }
};
```

---

## Creando Objetos Literales

La forma más simple de crear un objeto es usando **notación literal** con llaves.

### Ejemplo 1: Objeto Simple

```javascript
const persona = {
    nombre: "Juan",
    edad: 28,
    color_ojos: "azul"
};

console.log(persona);
// { nombre: 'Juan', edad: 28, color_ojos: 'azul' }
```

### Ejemplo 2: Objeto Anidado

```javascript
const estudiante = {
    nombre: "María",
    edad: 20,
    direccion: {
        calle: "Calle Principal",
        numero: 123,
        ciudad: "Madrid"
    }
};

console.log(estudiante.direccion.calle);  // "Calle Principal"
```

### Ejemplo 3: Objeto Vacío

```javascript
const objVacio = {};  // Se puede llenar después

objVacio.nombre = "Pedro";
objVacio.edad = 25;

console.log(objVacio);  // { nombre: 'Pedro', edad: 25 }
```

---

## Accediendo a Propiedades

Hay **dos formas** de acceder a las propiedades de un objeto:

### 1. Notación de Punto (recomendada)

```javascript
const libro = {
    titulo: "1984",
    autor: "Orwell",
    año: 1949
};

console.log(libro.titulo);  // "1984"
console.log(libro.autor);   // "Orwell"
```

### 2. Notación de Corchetes

```javascript
console.log(libro["titulo"]);  // "1984"
console.log(libro["autor"]);   // "Orwell"

// Útil cuando la propiedad es dinámica
const prop = "año";
console.log(libro[prop]);  // 1949
```

### 3. Modificando Propiedades

```javascript
const coche = {
    marca: "Toyota",
    color: "rojo"
};

coche.color = "azul";        // Cambiar existente
coche.velocidad = 0;         // Agregar nueva

console.log(coche);
// { marca: 'Toyota', color: 'azul', velocidad: 0 }
```

### 4. Eliminando Propiedades

```javascript
const app = {
    nombre: "MyApp",
    version: "1.0.0",
    autor: "Juan"
};

delete app.version;

console.log(app);
// { nombre: 'MyApp', autor: 'Juan' }
```

### 5. Comprobando si Existe una Propiedad

```javascript
const usuario = {
    nombre: "Juan",
    email: "juan@example.com"
};

console.log("nombre" in usuario);      // true
console.log("password" in usuario);    // false

// Alternativa
console.log(usuario.nombre !== undefined);   // true
```

---

## Métodos en Objetos

Un **método** es una función dentro de un objeto. Los métodos permiten que los objetos realicen acciones.

### Ejemplo 1: Método Simple

```javascript
const persona = {
    nombre: "Juan",
    edad: 28,
    
    saludar: function() {
        console.log("¡Hola! Mi nombre es Juan");
    }
};

persona.saludar();  // ¡Hola! Mi nombre es Juan
```

### Ejemplo 2: Método con `this`

```javascript
const coche = {
    marca: "Ferrari",
    modelo: "F8",
    velocidad: 0,
    
    acelerar: function() {
        this.velocidad += 10;
        console.log("Velocidad: " + this.velocidad + " km/h");
    }
};

coche.acelerar();  // Velocidad: 10 km/h
coche.acelerar();  // Velocidad: 20 km/h
```

### Ejemplo 3: Sintaxis Abreviada (ES6)

```javascript
const cuenta = {
    titular: "María",
    saldo: 1000,
    
    // Método sin "function"
    consultarSaldo() {
        return "€ " + this.saldo;
    },
    
    depositar(cantidad) {
        this.saldo += cantidad;
    }
};

console.log(cuenta.consultarSaldo());  // € 1000
cuenta.depositar(500);
console.log(cuenta.consultarSaldo());  // € 1500
```

---

## La Palabra `this`

**`this`** se refiere al objeto al que pertenece el método. Su valor depende del contexto.

### Ejemplo 1: `this` en Métodos

```javascript
const libro = {
    titulo: "Don Quijote",
    autor: "Cervantes",
    
    resumen: function() {
        return "El libro '" + this.titulo + "' fue escrito por " + this.autor;
    }
};

console.log(libro.resumen());
// El libro 'Don Quijote' fue escrito por Cervantes
```

### Ejemplo 2: Múltiples Objetos

```javascript
const auto = {
    marca: "Toyota",
    arrancar: function() {
        console.log(this.marca + " está arrancando");
    }
};

const moto = {
    marca: "Yamaha",
    arrancar: function() {
        console.log(this.marca + " está arrancando");
    }
};

auto.arrancar();   // Toyota está arrancando
moto.arrancar();   // Yamaha está arrancando
```

### ⚠️ Cuidado con las Arrow Functions

```javascript
const persona = {
    nombre: "Juan",
    
    // ❌ NO usar arrow function con this
    saludar_mal: () => {
        console.log("Hola, soy " + this.nombre);  // ❌ this = ventana/global
    },
    
    // ✅ Usar function común
    saludar_bien: function() {
        console.log("Hola, soy " + this.nombre);  // ✅ this = persona
    }
};

persona.saludar_bien();   // Hola, soy Juan
persona.saludar_mal();    // Hola, soy undefined
```

---

## Constructores (function)

Un **constructor** es una función que crea nuevas instancias de un objeto. Usa la palabra clave `new`.

### Sintaxis ES5

```javascript
function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    
    this.presentarse = function() {
        console.log("Soy " + this.nombre + " y tengo " + this.edad + " años");
    };
}

const persona1 = new Persona("Juan", 28);
const persona2 = new Persona("María", 25);

persona1.presentarse();  // Soy Juan y tengo 28 años
persona2.presentarse();  // Soy María y tengo 25 años
```

### Con Prototype

```javascript
function Libro(titulo, autor) {
    this.titulo = titulo;
    this.autor = autor;
}

// Agregar métodos al prototype (más eficiente)
Libro.prototype.obtenerInfo = function() {
    return this.titulo + " de " + this.autor;
};

const libro1 = new Libro("1984", "Orwell");
console.log(libro1.obtenerInfo());  // 1984 de Orwell
```

---

## Clases ES6

Las **clases** (introducidas en ES6 2015) son una forma moderna y legible de crear constructores.

### Sintaxis Básica

```javascript
class Estudiante {
    constructor(nombre, edad, matricula) {
        this.nombre = nombre;
        this.edad = edad;
        this.matricula = matricula;
    }
    
    presentarse() {
        console.log("Soy " + this.nombre + " de la carrera " + this.matricula);
    }
}

const est1 = new Estudiante("Juan", 20, "Informática");
est1.presentarse();  // Soy Juan de la carrera Informática
```

### Comparación: function vs class

```javascript
// ANTES (ES5 - function)
function Coche_ES5(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

Coche_ES5.prototype.conducir = function() {
    console.log("Conduciendo un " + this.marca);
};

// AHORA (ES6 - class)
class Coche_ES6 {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    
    conducir() {
        console.log("Conduciendo un " + this.marca);
    }
}
```

### Propiedades por Defecto

```javascript
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
        this.vendido = false;  // propiedad por defecto
    }
}

const prod = new Producto("Mouse", 25);
console.log(prod.vendido);  // false
```

---

## Instancias con `new`

La palabra clave **`new`** crea una nueva instancia de un objeto.

### Proceso Interno

```javascript
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    hacerSonido() {
        console.log(this.nombre + " hace un sonido");
    }
}

// Cuando escribimos: const perro = new Animal("Rex")
// JavaScript hace internamente:

// 1. Crea un objeto vacío {}
// 2. Establece el prototipo
// 3. Llama constructor con this = nuevoObjeto
// 4. Devuelve el objeto

const perro = new Animal("Rex");
const gato = new Animal("Mimi");
```

### Sin `new` (❌ Error Común)

```javascript
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

const p1 = new Persona("Juan");      // ✅ Correcto
// const p2 = Persona("María");      // ❌ Error
```

---

## Operadores `typeof` e `instanceof`

### `typeof` - Devuelve el Tipo de Dato

```javascript
console.log(typeof 42);              // "number"
console.log(typeof "hola");          // "string"
console.log(typeof true);            // "boolean"
console.log(typeof { a: 1 });        // "object"
console.log(typeof [1, 2, 3]);       // "object" (arrays son objetos)
console.log(typeof undefined);       // "undefined"
console.log(typeof function() {});   // "function"
```

### `instanceof` - Verifica Herencia

```javascript
class Vehículo { }
class Auto extends Vehículo { }

const miAuto = new Auto();

console.log(miAuto instanceof Auto);      // true
console.log(miAuto instanceof Vehículo);  // true
console.log(miAuto instanceof Object);    // true (todo es Object)

const num = 42;
console.log(num instanceof Number);       // false (literal)
console.log(new Number(42) instanceof Number);  // true (objeto)
```

### Tabla de Comparación

| Expresión | Resultado | Tipo |
|-----------|-----------|------|
| `typeof 5` | "number" | Primitivo |
| `typeof "texto"` | "string" | Primitivo |
| `typeof true` | "boolean" | Primitivo |
| `typeof { }` | "object" | Objeto |
| `typeof undefined` | "undefined" | Especial |
| `typeof null` | "object" | ⚠️ Quirk de JS |

---

## Resumen

### Conceptos Clave

✅ **Objetos:** Colecciones de propiedades y métodos  
✅ **Propiedades:** Datos dentro del objeto  
✅ **Métodos:** Funciones dentro del objeto  
✅ **this:** Refiere al objeto actual  
✅ **Constructores:** Blueprints para crear objetos  
✅ **Clases ES6:** Sintaxis moderna de constructores  
✅ **new:** Operador para crear instancias  
✅ **typeof:** Devuelve tipo de dato  
✅ **instanceof:** Verifica pertenencia a clase  

### Flujo de Aprendizaje

```
1. Objetos literales { }
        ↓
2. Acceder a propiedades . o [ ]
        ↓
3. Métodos en objetos
        ↓
4. La palabra this
        ↓
5. Constructores function
        ↓
6. Clases ES6 class
        ↓
7. Instancias new
```

### Patrón Típico

```javascript
// 1. Definir clase
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    
    obtenerInfo() {
        return this.nombre + ": €" + this.precio;
    }
}

// 2. Crear instancias
const p1 = new Producto("Laptop", 899);
const p2 = new Producto("Mouse", 25);

// 3. Usar métodos
console.log(p1.obtenerInfo());  // Laptop: €899
console.log(p2.obtenerInfo());  // Mouse: €25
```

---

## 🎓 Próximo: Tema 7B

En el siguiente tema aprenderemos:
- **Herencia** entre clases
- **Getters y Setters** para validación
- **Métodos Estáticos** de la clase
- **Composición** de objetos
- **Objetos Avanzados**
