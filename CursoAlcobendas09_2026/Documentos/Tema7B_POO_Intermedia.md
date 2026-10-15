# Tema 7B: Programación Orientada a Objetos (POO) Intermedia

## 📚 Índice
1. [Herencia - extends](#herencia---extends)
2. [Super - Llamando al Padre](#super---llamando-al-padre)
3. [Sobrescritura de Métodos](#sobrescritura-de-métodos)
4. [Getters y Setters](#getters-y-setters)
5. [Métodos Estáticos](#métodos-estáticos)
6. [Propiedades Privadas (#)](#propiedades-privadas-)
7. [Composición vs Herencia](#composición-vs-herencia)
8. [Object - Métodos Útiles](#object---métodos-útiles)
9. [Destructuring de Objetos](#destructuring-de-objetos)
10. [Resumen](#resumen)

---

## Herencia - `extends`

La **herencia** permite que una clase herede propiedades y métodos de otra clase.

### Concepto

```
Clase Padre (superclase)
        ↑
        |
Clase Hija (subclase) ← hereda de
```

### Sintaxis Básica

```javascript
class Vehículo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    
    encender() {
        console.log(this.marca + " está encendido");
    }
}

class Coche extends Vehículo {
    constructor(marca, modelo, puertas) {
        super(marca, modelo);  // Llamar constructor padre
        this.puertas = puertas;
    }
}

const miCoche = new Coche("Toyota", "Corolla", 4);
console.log(miCoche.marca);      // Toyota
console.log(miCoche.puertas);    // 4
miCoche.encender();              // Toyota está encendido (heredado)
```

### Verificando Herencia con `instanceof`

```javascript
class Animal { }
class Perro extends Animal { }

const perro = new Perro();

console.log(perro instanceof Perro);    // true
console.log(perro instanceof Animal);   // true ✨ Importante
console.log(perro instanceof Object);   // true
```

### Múltiples Niveles de Herencia

```javascript
class Ser { }
class Animal extends Ser { }
class Mamífero extends Animal { }
class Perro extends Mamífero { }

const perro = new Perro();
console.log(perro instanceof Mamífero);  // true
console.log(perro instanceof Ser);       // true
```

---

## `super` - Llamando al Padre

**`super`** permite acceder a métodos y propiedades del constructor padre.

### Uso en Constructor

```javascript
class Persona {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

class Empleado extends Persona {
    constructor(nombre, edad, departamento) {
        super(nombre, edad);  // ← OBLIGATORIO si usas constructor en hijo
        this.departamento = departamento;
    }
}

const emp = new Empleado("Juan", 30, "Ventas");
console.log(emp.nombre);          // Juan (heredado)
console.log(emp.departamento);    // Ventas (propio)
```

### Uso en Métodos

```javascript
class Animal {
    presentarse() {
        console.log("Soy un animal");
    }
}

class Gato extends Animal {
    presentarse() {
        super.presentarse();  // Llamar método padre
        console.log("Específicamente, soy un gato");
    }
}

const gato = new Gato();
gato.presentarse();
// Soy un animal
// Específicamente, soy un gato
```

---

## Sobrescritura de Métodos

Una clase hija puede **sobrescribir** (overwrite) métodos del padre con su propia implementación.

### Ejemplo Clásico

```javascript
class Animal {
    hacerSonido() {
        console.log("Sonido genérico");
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log("¡Guau guau!");
    }
}

class Gato extends Animal {
    hacerSonido() {
        console.log("¡Miauu!");
    }
}

const animales = [
    new Perro(),
    new Gato(),
    new Animal()
];

animales.forEach(a => a.hacerSonido());
// ¡Guau guau!
// ¡Miauu!
// Sonido genérico
```

### Combinando `super` con Sobrescritura

```javascript
class Vehículo {
    encender() {
        console.log("Motor encendido");
    }
}

class Auto extends Vehículo {
    encender() {
        super.encender();          // Código del padre
        console.log("Luces encendidas");  // Código propio
    }
}

const auto = new Auto();
auto.encender();
// Motor encendido
// Luces encendidas
```

---

## Getters y Setters

Los **getters** y **setters** permiten controlar cómo se leen y escriben las propiedades.

### Getters (Lectura)

```javascript
class Persona {
    constructor(nombre, fechaNacimiento) {
        this.nombre = nombre;
        this.fechaNacimiento = fechaNacimiento;
    }
    
    // Getter: se accede como propiedad
    get edad() {
        const hoy = new Date();
        const nacimiento = new Date(this.fechaNacimiento);
        return hoy.getFullYear() - nacimiento.getFullYear();
    }
}

const persona = new Persona("Juan", "1995-05-15");
console.log(persona.edad);  // Se ve como propiedad, no función
```

### Setters (Escritura con Validación)

```javascript
class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this._precio = precio;  // Usar _ por convención
    }
    
    get precio() {
        return this._precio;
    }
    
    set precio(nuevoPrecio) {
        if (nuevoPrecio < 0) {
            console.log("❌ Error: precio no puede ser negativo");
            return;
        }
        this._precio = nuevoPrecio;
        console.log("✅ Precio actualizado a €" + nuevoPrecio);
    }
}

const producto = new Producto("Laptop", 899);
console.log(producto.precio);    // 899

producto.precio = 799;           // ✅ Precio actualizado a €799
producto.precio = -50;           // ❌ Error: precio no puede ser negativo
```

### Getters Calculados

```javascript
class Carrito {
    constructor() {
        this.items = [];
    }
    
    agregarItem(precio) {
        this.items.push(precio);
    }
    
    // Getter que calcula sobre la marcha
    get total() {
        return this.items.reduce((sum, precio) => sum + precio, 0);
    }
    
    get cantidadItems() {
        return this.items.length;
    }
}

const carrito = new Carrito();
carrito.agregarItem(25);
carrito.agregarItem(50);
carrito.agregarItem(100);

console.log(carrito.cantidadItems);  // 3
console.log(carrito.total);          // 175
```

---

## Métodos Estáticos

Los métodos **estáticos** pertenecen a la clase, no a las instancias. Se llaman con `NombreClase.metodo()`.

### Sintaxis

```javascript
class Matemáticas {
    static sumar(a, b) {
        return a + b;
    }
    
    static restar(a, b) {
        return a - b;
    }
    
    static esPar(número) {
        return número % 2 === 0;
    }
}

// Llamar sin instanciar
console.log(Matemáticas.sumar(5, 3));    // 8
console.log(Matemáticas.restar(10, 4));  // 6
console.log(Matemáticas.esPar(8));       // true
```

### Uso Práctico: Factory Pattern

```javascript
class Usuario {
    constructor(nombre, tipo) {
        this.nombre = nombre;
        this.tipo = tipo;
    }
    
    // Método estático que crea usuarios
    static crearAdmin(nombre) {
        return new Usuario(nombre, "admin");
    }
    
    static crearUsuario(nombre) {
        return new Usuario(nombre, "user");
    }
}

const admin = Usuario.crearAdmin("Juan");
const usuario = Usuario.crearUsuario("María");

console.log(admin.tipo);      // admin
console.log(usuario.tipo);    // user
```

### Propiedades Estáticas

```javascript
class Contador {
    static count = 0;
    
    constructor(nombre) {
        this.nombre = nombre;
        Contador.count++;
    }
    
    static obtenerTotal() {
        return "Total de instancias: " + Contador.count;
    }
}

const c1 = new Contador("A");
const c2 = new Contador("B");
const c3 = new Contador("C");

console.log(Contador.obtenerTotal());  // Total de instancias: 3
```

---

## Propiedades Privadas (#)

Las propiedades privadas (con `#`) son verdaderamente privadas en JavaScript moderno.

### Sintaxis

```javascript
class CuentaBancaria {
    #saldo;  // Privada
    
    constructor(titular, saldoInicial) {
        this.titular = titular;     // Pública
        this.#saldo = saldoInicial; // Privada
    }
    
    // Método privado
    #registrarMovimiento(tipo, cantidad) {
        console.log("[" + tipo + "] €" + cantidad);
    }
    
    // Método público que usa privado
    depositar(cantidad) {
        this.#saldo += cantidad;
        this.#registrarMovimiento("DEPÓSITO", cantidad);
    }
    
    // Getter para acceder a saldo privado
    get saldo() {
        return this.#saldo;
    }
}

const cuenta = new CuentaBancaria("Juan", 1000);
cuenta.depositar(500);

console.log(cuenta.saldo);        // 1500 (a través de getter)
console.log(cuenta.titular);      // Juan

// ❌ Esto falla:
// console.log(cuenta.#saldo);   // SyntaxError: Private field '#saldo'
// cuenta.#registrarMovimiento();  // SyntaxError
```

### Ventajas de Propiedades Privadas

```javascript
class Persona {
    #contraseña;
    
    constructor(nombre, pwd) {
        this.nombre = nombre;
        this.#contraseña = pwd;
    }
    
    validar(pwd) {
        return this.#contraseña === pwd;
    }
}

const p = new Persona("Juan", "secreto123");

console.log(p.nombre);              // Juan ✅
// console.log(p.#contraseña);     // Error ✅ Privada
console.log(p.validar("secreto123")); // true ✅

// No aparece en Object.keys()
console.log(Object.keys(p));        // ['nombre']
```

---

## Composición vs Herencia

**Composición** (relación "tiene-un") vs **Herencia** (relación "es-un").

### El Problema de Herencia Rígida

```javascript
// ❌ Diseño problemático
class Ave {
    volar() {}
}

class Pinguino extends Ave {
    volar() {
        throw new Error("Los pingüinos no pueden volar");
    }
}
```

### ✅ Solución con Composición

```javascript
// Capacidades como objetos
const capacidades = {
    volar: () => console.log("✈️ Volando"),
    nadar: () => console.log("🏊 Nadando"),
    correr: () => console.log("🏃 Corriendo")
};

// Clase flexible
class Personaje {
    constructor(nombre, capacidades) {
        this.nombre = nombre;
        this.capacidades = capacidades;
    }
    
    hacer(accion) {
        if (this.capacidades[accion]) {
            this.capacidades[accion]();
        }
    }
}

const aguila = new Personaje("Águila", {
    volar: capacidades.volar,
    correr: capacidades.correr
});

const pinguino = new Personaje("Pingüino", {
    nadar: capacidades.nadar,
    correr: capacidades.correr
});

aguila.hacer("volar");     // ✈️ Volando
pinguino.hacer("nadar");   // 🏊 Nadando
pinguino.hacer("volar");   // No hace nada ✅
```

### Composición con Object.assign()

```javascript
const caminante = {
    caminar: () => console.log("Caminando...")
};

const saltador = {
    saltar: () => console.log("Saltando...")
};

class Atleta {
    constructor(nombre) {
        this.nombre = nombre;
        // Agregar capacidades
        Object.assign(this, caminante, saltador);
    }
}

const atleta = new Atleta("Juan");
atleta.caminar();  // Caminando...
atleta.saltar();   // Saltando...
```

---

## Object - Métodos Útiles

### Object.keys() - Obtener Claves

```javascript
const persona = {
    nombre: "Juan",
    edad: 28,
    ciudad: "Madrid"
};

const claves = Object.keys(persona);
console.log(claves);  // ['nombre', 'edad', 'ciudad']
```

### Object.values() - Obtener Valores

```javascript
const valores = Object.values(persona);
console.log(valores);  // ['Juan', 28, 'Madrid']
```

### Object.entries() - Pares Clave-Valor

```javascript
Object.entries(persona).forEach(([clave, valor]) => {
    console.log(clave + " = " + valor);
});
// nombre = Juan
// edad = 28
// ciudad = Madrid
```

### Object.assign() - Copiar/Fusionar

```javascript
const original = { nombre: "Juan", edad: 25 };
const actualizacion = { edad: 26, ciudad: "Madrid" };

const merged = Object.assign({}, original, actualizacion);
console.log(merged);
// { nombre: 'Juan', edad: 26, ciudad: 'Madrid' }
```

### Object.freeze() - Inmutable

```javascript
const config = {
    puerto: 3000,
    host: "localhost"
};

Object.freeze(config);

config.puerto = 5000;  // No funciona
console.log(config.puerto);  // 3000
```

### Object.hasOwn() - Verificar Propiedad

```javascript
const obj = { nombre: "Juan" };

console.log(Object.hasOwn(obj, "nombre"));    // true
console.log(Object.hasOwn(obj, "email"));     // false
console.log(Object.hasOwn(obj, "toString"));  // false (no de Object.prototype)
```

---

## Destructuring de Objetos

El **destructuring** permite extraer propiedades de un objeto de forma elegante.

### Sintaxis Básica

```javascript
const usuario = {
    nombre: "Juan",
    email: "juan@example.com",
    edad: 28
};

// Sin destructuring
const nombre = usuario.nombre;
const email = usuario.email;

// Con destructuring
const { nombre, email } = usuario;

console.log(nombre);  // Juan
console.log(email);   // juan@example.com
```

### Renombrando Variables

```javascript
const { nombre: n, email: e } = usuario;
console.log(n);  // Juan
console.log(e);  // juan@example.com
```

### Valores por Defecto

```javascript
const { nombre, pais = "España" } = usuario;
console.log(pais);  // España (por defecto, no existe)
```

### Rest Operator (...)

```javascript
const { nombre, ...resto } = usuario;
console.log(nombre);   // Juan
console.log(resto);    // { email: 'juan@example.com', edad: 28 }
```

### En Parámetros de Función

```javascript
function mostrarProducto({ nombre, precio, stock = 0 }) {
    console.log(nombre + ": €" + precio + " (stock: " + stock + ")");
}

const producto = {
    nombre: "Laptop",
    precio: 899,
    stock: 5
};

mostrarProducto(producto);
// Laptop: €899 (stock: 5)
```

---

## Resumen

### Conceptos Clave de POO

✅ **Herencia:** Clase hija extends Clase padre  
✅ **Super:** Acceso al constructor/métodos del padre  
✅ **Sobrescritura:** Redefinir métodos en clase hija  
✅ **Getters:** Lectura de propiedades controlada  
✅ **Setters:** Escritura de propiedades con validación  
✅ **Métodos Estáticos:** Funciones de la clase (sin instancia)  
✅ **Propiedades Privadas (#):** Verdadera privacidad  
✅ **Composición:** Alternativa flexible a herencia  
✅ **Object methods:** Manipulación avanzada de objetos  
✅ **Destructuring:** Extracción elegante de propiedades  

### Flujo de Aprendizaje

```
Herencia (extends, super)
        ↓
Sobrescritura de métodos
        ↓
Getters y Setters
        ↓
Métodos estáticos
        ↓
Propiedades privadas (#)
        ↓
Composición vs Herencia
        ↓
Object methods
        ↓
Destructuring
```

---

## 🎓 Próximo: Tema 7C

En el siguiente tema aprenderemos **Patrones Profesionales Avanzados**:
- **Factory Functions**
- **Mixins**
- **Observer Pattern**
- **Strategy Pattern**
- **Proxy & Reflect**
- **Generators**
- **Async/Await**
- **WeakMap & Symbol**
