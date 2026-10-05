# Diccionario de programación

Este diccionario reúne palabras muy usadas en programación con definiciones simples, en orden alfabético.

El nivel aparece como etiqueta dentro de los corchetes: **Básico**, **Intermedio** o **Avanzado**.

## Etiquetas de tema

- JS: JavaScript y sintaxis del lenguaje.
- Web: navegador, frontend y APIs web.
- Datos: estructuras de datos, almacenamiento y transformación.
- Backend: servidor, APIs y arquitectura del lado servidor.
- Seguridad: autenticación, autorización y protección.
- Rendimiento: optimización, caché y velocidad.
- Arquitectura: diseño de software y organización del código.
- Testing: pruebas y calidad.
- Funciones: firma, parámetros, retorno y composición.
- Patrones: patrones de diseño y soluciones reutilizables a problemas comunes.
- Python: lenguaje multiparadigma muy usado en backend, datos y automatización.
- Dart: lenguaje usado en Flutter para apps móviles, web y escritorio.
- Flutter: framework UI multiplataforma basado en Dart.
- Ionic: framework para apps multiplataforma con tecnologías web.
- Kotlin: lenguaje moderno para Android, backend y multiplataforma.
- Swift: lenguaje principal para desarrollo en ecosistema Apple.
- TypeScript: superconjunto tipado de JavaScript, clave en Angular e Ionic.

## Niveles

- **Básico**: conceptos fundamentales para empezar a programar.
- **Intermedio**: conceptos para estructurar mejor el código.
- **Avanzado**: conceptos de arquitectura, calidad y sistemas.

---

### A

- Abstracción [Arquitectura, Intermedio]: principio de POO que consiste en modelar lo esencial de un objeto, ocultando detalles innecesarios.

  **Ejemplo 1 (Python):**
  ```python
  from abc import ABC, abstractmethod
  
  class Animal(ABC):
    @abstractmethod
    def hablar(self):
      pass
  ```

- Acoplamiento [Arquitectura, Intermedio]: grado de dependencia entre módulos; cuanto menor, mejor mantenibilidad.
- Algoritmo [JS, Arquitectura, Básico]: secuencia de pasos para resolver un problema.
- Alta cohesión [Arquitectura, Intermedio]: cuando un módulo tiene responsabilidades relacionadas y bien definidas.
- Antipatrón [Arquitectura, Avanzado]: solución común pero incorrecta que empeora el software.
- API [Web, Backend, Básico]: interfaz que permite que una aplicación se comunique con otra.

  **Ejemplo 1 (JavaScript):**
  ```js
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=2')
    .then(resp => resp.json())
    .then(data => console.log(data));
  ```

- Argumento [JS, Funciones, Básico]: valor que se pasa a una función cuando se llama.
- Argumentos nombrados (patrón con objeto) [JS, Funciones, Intermedio]: envío de opciones en un objeto para evitar errores de orden.
- Argumentos posicionales [JS, Funciones, Intermedio]: argumentos enviados según el orden de los parámetros.
- Aridad [JS, Funciones, Intermedio]: número de parámetros que espera una función.

  **Ejemplo 1 (JavaScript):**
  ```js
  function sumar(a, b) {
    return a + b;
  }
  console.log(sumar.length); // 2
  ```

- Arquitectura cliente-servidor [Arquitectura, Backend, Web, Intermedio]: separación entre quien consume y quien provee recursos.
- Arquitectura limpia [Arquitectura, Backend, Avanzado]: enfoque que separa capas y protege las reglas de negocio de detalles externos.
- Array [JS, Datos, Básico]: colección ordenada de elementos.
- Arrow function [JS, Funciones, Básico]: forma corta de escribir una función en JavaScript; no tiene su propio `this`.

- Aserción (assertion) [Testing, Básico]: comprobación que valida que un resultado real coincide con el esperado en una prueba.

  **Ejemplo 1 (Python):**
  ```python
  def sumar(a, b):
    return a + b
  
  assert sumar(2, 3) == 5
  ```

  **Ejemplo 1 (JavaScript):**
  ```js
  const doble = n => n * 2;
  const saludar = nombre => `Hola, ${nombre}`;
  console.log(doble(4)); // 8
  ```

- Asincronía [JS, Web, Intermedio]: ejecución no bloqueante de tareas (promises, async/await, callbacks).

  **Ejemplo 1 (JavaScript):**
  ```js
  async function cargarUsuarios() {
    const resp = await fetch('/api/usuarios');
    return await resp.json();
  }
  ```

- Autenticación [Seguridad, Backend, Intermedio]: proceso para verificar la identidad de un usuario.
- Autorización [Seguridad, Backend, Intermedio]: proceso para decidir qué acciones puede realizar un usuario.

### B

- Backend [Backend, Web, Básico]: parte de la aplicación que se ejecuta en el servidor.
- BDD (Behavior Driven Development) [Testing, Intermedio]: enfoque de desarrollo basado en comportamiento, expresado con escenarios legibles para negocio y equipo técnico.
- Boolean [JS, Datos, Básico]: tipo de dato con dos valores: true o false.
- Boy Scout Rule [Arquitectura, Testing, Avanzado]: dejar el código un poco mejor de cómo lo encontraste.
- Buenas prácticas [Arquitectura, Testing, Avanzado]: conjunto de técnicas para mejorar legibilidad, mantenibilidad y calidad del software.
- Bug [JS, Testing, Básico]: error o fallo en el código.

### C

- Cachear [Rendimiento, Datos, Básico]: guardar temporalmente un dato o recurso para reutilizarlo más rápido sin volver a pedirlo o recalcularlo.

  **Ejemplo 1 (JavaScript):**
  ```js
  const cache = new Map();
  
  function obtenerUsuario(id) {
    if (cache.has(id)) return cache.get(id);
    const usuario = { id, nombre: 'Ana' };
    cache.set(id, usuario);
    return usuario;
  }
  ```

- Callback [JS, Funciones, Intermedio]: función que se pasa como argumento para ejecutarse después.
- Capa de aplicación [Arquitectura, Avanzado]: coordina casos de uso y flujo de la aplicación.
- Capa de dominio [Arquitectura, Avanzado]: contiene reglas de negocio puras e independientes.
- Capa de infraestructura [Arquitectura, Backend, Avanzado]: implementa acceso a BD, red, archivos y servicios externos.
- Capa de presentación [Arquitectura, Web, Avanzado]: gestiona interfaz de usuario, validaciones de entrada y salida.
- Caso de uso [Arquitectura, Backend, Avanzado]: acción de negocio concreta que la aplicación ejecuta.
- CI/CD [Arquitectura, Testing, Avanzado]: integración y despliegue continuo para automatizar pruebas y entregas.

  **Ejemplo 1 (YAML):**
  ```yaml
  name: CI
  on: [push]
  jobs:
    test:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - run: npm test
  ```

- Clase [JS, Arquitectura, Básico]: plantilla para crear objetos (POO).
- Cliente [Web, Backend, Básico]: aplicación que consume servicios de un servidor.
- Closure [JS, Funciones, Intermedio]: función que recuerda las variables del ámbito donde fue creada, incluso después de que ese ámbito haya terminado.

  **Ejemplo 1 (JavaScript):**
  ```js
  function contador() {
    let cuenta = 0;
    return function () {
      cuenta++;
      return cuenta;
    };
  }
  const contar = contador();
  console.log(contar()); // 1
  console.log(contar()); // 2
  ```

- Code review [Arquitectura, Testing, Avanzado]: revisión entre pares para detectar errores y mejorar calidad.
- Compilar [JS, Básico]: transformar código fuente en otro formato ejecutable o interpretable.
- Complejidad temporal (Big O) [Rendimiento, Intermedio]: forma de describir cómo crece el tiempo de ejecución de un algoritmo según el tamaño de la entrada.

- Composición [Arquitectura, Intermedio]: técnica de POO para construir objetos combinando otros objetos, en lugar de depender solo de herencia.

  **Ejemplo 1 (JavaScript):**
  ```js
  class Motor {
    arrancar() { return 'motor on'; }
  }
  
  class Coche {
    constructor() {
      this.motor = new Motor();
    }
  }
  ```

  **Ejemplo 1 (JavaScript):**
  ```js
  function buscarLineal(arr, objetivo) {
    for (const n of arr) {
      if (n === objetivo) return true;
    }
    return false;
  }
  // buscarLineal es O(n): recorre hasta n elementos
  ```

- Condicional [JS, Básico]: estructura que ejecuta código según una condición (if/else).
- Constante [JS, Básico]: valor que no debe cambiar durante la ejecución.
- Contrato de función [JS, Arquitectura, Intermedio]: expectativas de entrada y salida que debe cumplir una función.
- Convención de nombres [Arquitectura, Avanzado]: reglas para nombrar variables, funciones y archivos de forma consistente.
- Cookie [Web, Datos, Básico]: pequeño dato guardado por el navegador, útil para sesión y preferencias.

  **Ejemplo 1 (JavaScript):**
  ```js
  document.cookie = 'tema=oscuro; path=/; max-age=86400';
  ```

- CORS [Web, Seguridad, Avanzado]: política del navegador que controla peticiones entre distintos orígenes.
- CSRF [Seguridad, Web, Avanzado]: ataque que fuerza acciones no deseadas en sesiones autenticadas.
- CSS [Web, Básico]: lenguaje de estilos que define la presentación visual de páginas web (colores, fuentes, layout).
- Coroutine [Funciones, Kotlin, Intermedio]: unidad de concurrencia ligera en Kotlin que permite escribir código asíncrono de forma secuencial.

  **Ejemplo 1 (Kotlin):**
  ```kotlin
  import kotlinx.coroutines.*
  
  fun main() = runBlocking {
    val resultado = async { 21 * 2 }
    println(resultado.await())
  }
  ```

- Currying [JS, Funciones, Avanzado]: transformar una función de múltiples argumentos en una cadena de funciones de un solo argumento.

  **Ejemplo 1 (JavaScript):**
  ```js
  const sumar = a => b => a + b;
  const sumar10 = sumar(10);
  console.log(sumar10(5)); // 15
  ```

### D

- Debounce [JS, Rendimiento, Avanzado]: técnica para retrasar ejecución hasta que termine una ráfaga de eventos.
- Dataclass [Datos, Python, Intermedio]: clase en Python orientada a representar datos, generando automáticamente constructor, comparación y representación textual.

  **Ejemplo 1 (Python):**
  ```python
  from dataclasses import dataclass
  
  @dataclass
  class Usuario:
    id: int
    nombre: str
  
  u = Usuario(1, 'Ana')
  ```

- Debug [JS, Testing, Básico]: proceso de encontrar y corregir errores.
- Decorador [JS, TypeScript, Ionic, Arquitectura, Intermedio]: función especial que añade comportamiento a una clase, método o propiedad sin modificar su código. Muy usado en Angular/Ionic.

  **Ejemplo 1 (TypeScript):**
  ```ts
  // Angular/Ionic
  @Component({
    selector: 'app-home',
    templateUrl: 'home.page.html'
  })
  export class HomePage {}
  ```

- Dependencia [Arquitectura, Básico]: librería externa que usa un proyecto.
- Deploy [Backend, Arquitectura, Básico]: publicación de una aplicación en un entorno real.
- Desestructuración de parámetros [JS, Funciones, Intermedio]: extraer campos de un objeto directamente en los parámetros.
- Desnormalización [Datos, Arquitectura, Avanzado]: duplicar datos para leer más rápido a cambio de más complejidad de escritura.
- Deuda técnica [Arquitectura, Avanzado]: coste futuro generado por decisiones rápidas o atajos en el código.
- DOM [Web, JS, Básico]: representación del documento HTML como objetos.
- DTO [Datos, Arquitectura, Backend, Intermedio]: objeto usado para transportar datos entre capas sin lógica de negocio.

### E

- Efecto secundario [JS, Funciones, Intermedio]: cambio externo producido por una función (DOM, storage, red, etc.).
- Encadenamiento [JS, Funciones, Intermedio]: técnica de llamar varias operaciones seguidas sobre el mismo valor para transformar datos de forma fluida.

  **Ejemplo 1 (JavaScript):**
  ```js
  const resultado = [1, 2, 3, 4]
    .filter(n => n % 2 === 0)
    .map(n => n * 10)
    .join(', ');
  ```

- Encadenamiento opcional (?.) [JS, Datos, Intermedio]: operador que permite acceder a propiedades o métodos sin lanzar error si una parte intermedia es null o undefined.

  **Ejemplo 1 (JavaScript):**
  ```js
  const ciudad = usuario?.direccion?.ciudad;
  const nombre = usuario?.obtenerNombre?.();
  ```

- Encapsulamiento [Arquitectura, JS, Intermedio]: ocultar detalles internos y exponer solo lo necesario.
- Endpoint [Web, Backend, Básico]: URL específica de una API.
- Endpoint RESTful [Web, Backend, Intermedio]: ruta de API diseñada siguiendo principios REST.
- Estado global [JS, Arquitectura, Intermedio]: datos compartidos por varias partes de la aplicación.
- Event loop [JS, Funciones, Intermedio]: mecanismo que coordina tareas asíncronas en JavaScript.
- Evento [Web, JS, Básico]: acción detectada por el sistema (click, keydown, submit).
- Excepción [JS, Básico]: error que se produce durante la ejecución.
- Extension method [Funciones, Dart, Kotlin, Swift, Intermedio]: método que añade funcionalidad a un tipo existente sin modificar su definición original (común en Dart, Kotlin y Swift).

  **Ejemplo 1 (Dart):**
  ```dart
  extension StringCasing on String {
    String capitalizar() => this[0].toUpperCase() + substring(1);
  }
  
  void main() {
    print('hola'.capitalizar()); // Hola
  }
  ```

### F

- Fallback [JS, Rendimiento, Básico]: plan B que se usa cuando la opción principal falla.

  **Ejemplo 1 (JavaScript):**
  ```js
  const idioma = usuario.idioma || 'es';
  ```

- Fetch [JS, Web, Básico]: API de JavaScript para hacer peticiones HTTP.
- Fixture [Testing, Intermedio]: conjunto de datos y estado previo necesarios para ejecutar una prueba de forma repetible.

  **Ejemplo 1 (Python):**
  ```python
  usuario_fixture = {
    'id': 1,
    'nombre': 'Ana',
    'activo': True
  }
  ```

- Firma de función (function signature) [JS, Funciones, Intermedio]: forma en la que se define una función, incluyendo nombre y parámetros.
- Framework [Arquitectura, Web, Básico]: conjunto de herramientas y reglas para desarrollar software.
- Future [Funciones, Dart, Flutter, Intermedio]: valor que estará disponible más adelante tras una operación asíncrona (muy usado en Dart).

  **Ejemplo 1 (Dart):**
  ```dart
  Future<int> obtenerEdad() async {
    await Future.delayed(Duration(milliseconds: 100));
    return 25;
  }
  ```

- Frontend [Web, Básico]: parte visual e interactiva de una aplicación.
- Función [JS, Funciones, Básico]: bloque reutilizable de código que realiza una tarea.
- Función de orden superior [JS, Funciones, Intermedio]: función que recibe funciones o devuelve funciones.
- Función pura [JS, Funciones, Intermedio]: función sin efectos secundarios y con salida determinista para la misma entrada.

### G

- Garbage collector (GC) [Rendimiento, Intermedio]: mecanismo automático de lenguajes como JavaScript, Python o Dart que libera memoria de objetos que ya no se usan.

  **Ejemplo 1 (JavaScript):**
  ```js
  let usuario = { nombre: 'Ana' };
  usuario = null;
  // El objeto anterior queda elegible para recolección de basura
  ```

- Generics (genéricos) [Datos, Intermedio]: técnica para definir estructuras y funciones reutilizables que trabajan con distintos tipos de datos manteniendo seguridad de tipos.

  **Ejemplo 1 (TypeScript):**
  ```ts
  function primero<T>(lista: T[]): T {
    return lista[0];
  }
  const n = primero<number>([10, 20, 30]);
  ```

- Git [Arquitectura, Básico]: sistema de control de versiones.
- GitHub [Arquitectura, Básico]: plataforma para alojar repositorios Git y colaborar.
- Guard clause [JS, Funciones, Intermedio]: validación temprana para salir de la función cuando no se cumplen requisitos.

### H

- Herencia [JS, Arquitectura, Intermedio]: mecanismo por el que una clase hija adquiere propiedades y métodos de una clase padre.

  **Ejemplo 1 (JavaScript):**
  ```js
  class Animal {
    hablar() { return 'sonido'; }
  }
  class Perro extends Animal {
    hablar() { return 'guau'; }
  }
  const p = new Perro();
  console.log(p.hablar()); // guau
  ```

- HTML [Web, Básico]: lenguaje de marcado para estructurar páginas web.
- HTTP [Web, Backend, Básico]: protocolo de comunicación en la web.

### I

- IDE [Arquitectura, Básico]: entorno de desarrollo integrado (ejemplo: VS Code).
- Idempotencia [Backend, Arquitectura, Intermedio]: repetir una operación produce el mismo resultado final.
- IndexedDB [Web, Datos, Intermedio]: base de datos del navegador para almacenar grandes cantidades de datos estructurados de forma persistente.
- Isolate [Rendimiento, Dart, Flutter, Avanzado]: modelo de concurrencia de Dart donde cada isolate tiene su propia memoria y se comunica por mensajes, evitando problemas de estado compartido.

  **Ejemplo 1 (Dart):**
  ```dart
  import 'dart:isolate';
  
  void tarea(SendPort sendPort) {
    sendPort.send('Hecho desde otro isolate');
  }
  ```

- Inmutabilidad [JS, Arquitectura, Intermedio]: evitar modificar objetos originales; crear nuevas versiones.
- Instancia [JS, Arquitectura, Básico]: objeto creado a partir de una clase.
- Integer [JS, Datos, Básico]: número entero.
- Interfaz (interface) [JS, TypeScript, Arquitectura, Intermedio]: contrato que define qué propiedades y métodos debe tener un objeto o clase. Muy usado en TypeScript.

  **Ejemplo 1 (TypeScript):**
  ```ts
  interface Usuario {
    id: number;
    nombre: string;
    activo: boolean;
  }
  ```

- Inversión de dependencias (DIP) [Arquitectura, Backend, Avanzado]: los módulos de alto nivel no dependen de detalles concretos, sino de abstracciones.
- Inyección de dependencias [Arquitectura, Backend, Intermedio]: pasar dependencias desde fuera para desacoplar código.
- Iteración [JS, Básico]: repetición de pasos en un bucle.

### J

- JSON [Datos, Web, Básico]: formato de intercambio de datos basado en texto.

### K

- Key-Value (clave-valor) [Datos, Básico]: modelo de datos donde cada valor se almacena y recupera mediante una clave única.

  **Ejemplo 1 (JavaScript):**
  ```js
  const perfil = {
    id: 101,
    nombre: 'Lucia'
  };
  console.log(perfil['nombre']);
  ```

### L

- Lazy loading [Web, Rendimiento, Intermedio]: cargar recursos solo cuando se necesitan.
- Librería [Arquitectura, JS, Básico]: conjunto de funciones reutilizables.
- Local Storage [Web, Datos, Básico]: almacenamiento persistente en el navegador (clave-valor).

  **Ejemplo 1 (JavaScript):**
  ```js
  localStorage.setItem('idioma', 'es');
  const idiomaGuardado = localStorage.getItem('idioma');
  ```

- Logging [Backend, Arquitectura, Intermedio]: registro de eventos para diagnóstico y auditoría.
- Loop [JS, Básico]: estructura que repite instrucciones (for, while).

### M

- Map [JS, Datos, Básico]: estructura de datos que guarda pares clave-valor y permite usar cualquier tipo de clave.

  **Ejemplo 1 (JavaScript):**
  ```js
  const usuarios = new Map();
  usuarios.set(1, 'Ana');
  usuarios.set(2, 'Luis');
  console.log(usuarios.get(1));
  ```

- Memoización [JS, Rendimiento, Intermedio]: cachear resultados de funciones para evitar cálculos repetidos.
- Método [JS, Funciones, Básico]: función definida dentro de un objeto o clase.
- Microservicios [Arquitectura, Backend, Avanzado]: arquitectura con servicios pequeños e independientes.
- Middleware [Backend, Arquitectura, Avanzado]: capa intermedia que procesa peticiones/respuestas.

- Mock [Testing, Intermedio]: doble de prueba que simula una dependencia y permite verificar interacciones (llamadas, argumentos, número de ejecuciones).

  **Ejemplo 1 (JavaScript):**
  ```js
  const apiMock = {
    guardar: jest.fn()
  };
  
  apiMock.guardar({ id: 1 });
  expect(apiMock.guardar).toHaveBeenCalledTimes(1);
  ```

- Módulo [JS, Arquitectura, Básico]: archivo o unidad de código separada y reutilizable.
- Monolito [Arquitectura, Backend, Avanzado]: arquitectura donde toda la aplicación vive en una sola unidad.

### N

- NaN [JS, Datos, Básico]: valor especial de JavaScript que indica "Not a Number"; resultado de operaciones matemáticas inválidas.

  **Ejemplo 1 (JavaScript):**
  ```js
  console.log(0 / 0);       // NaN
  console.log(isNaN('abc')); // true
  ```

- npm [Arquitectura, Básico]: gestor de paquetes de Node.js; permite instalar, actualizar y gestionar dependencias de un proyecto.
- Null [JS, Datos, Básico]: valor que representa ausencia intencional de dato.
- Nullish coalescing (??) [JS, Básico]: operador que devuelve el valor de la derecha solo si el de la izquierda es null o undefined (a diferencia de || que también descarta otros valores falsy).

  **Ejemplo 1 (JavaScript):**
  ```js
  const nombre = usuario.nombre ?? 'Anónimo';
  const edad = usuario.edad ?? 18;
  ```

### O

- Objeto [JS, Datos, Básico]: estructura con propiedades y métodos.
- Observable [JS, Web, Intermedio]: objeto de RxJS que representa un flujo de datos asíncronos al que puedes suscribirte. Muy usado en Angular/Ionic.

  **Ejemplo 1 (JavaScript):**
  ```js
  import { Observable } from 'rxjs';
  
  const contador$ = new Observable(observer => {
    observer.next(1);
    observer.next(2);
    observer.complete();
  });
  contador$.subscribe(valor => console.log(valor));
  ```

- Open Source [Arquitectura, Básico]: software con código abierto.
- Operador ternario [JS, Básico]: forma corta de un condicional: condición ? valorSiTrue : valorSiFalse.

  **Ejemplo 1 (JavaScript):**
  ```js
  const mensaje = edad >= 18 ? 'Mayor de edad' : 'Menor de edad';
  ```

### P

- Paginación [Web, Rendimiento, Intermedio]: dividir resultados en bloques para mejorar rendimiento y UX.
- Parámetro [JS, Funciones, Básico]: variable definida en la firma de una función.
- Parámetro opcional [JS, Funciones, Intermedio]: parámetro que puede omitirse sin romper la llamada.
- Parámetro requerido [JS, Funciones, Intermedio]: parámetro que debe enviarse para que la función trabaje correctamente.
- Parámetro rest (...args) [JS, Funciones, Intermedio]: permite recibir una cantidad variable de argumentos.
- Parchear [Arquitectura, Intermedio]: aplicar una corrección puntual a un software, librería o sistema para resolver un error, cerrar una vulnerabilidad o ajustar un comportamiento.

  **Ejemplo 1 (Bash):**
  ```bash
  npm install paquete@latest
  ```

- Patrón Adaptador (Adapter) [Arquitectura, Patrones, Intermedio]: convierte la interfaz de una clase en otra que el cliente espera; permite que clases incompatibles trabajen juntas.

  **Ejemplo 1 (JavaScript):**
  ```js
  class ApiVieja {
    obtenerDatos() { return 'datos antiguos'; }
  }
  class Adaptador {
    constructor(api) { this.api = api; }
    getData() { return this.api.obtenerDatos(); }
  }
  const api = new Adaptador(new ApiVieja());
  console.log(api.getData());
  ```

- Patrón Builder (Constructor) [Arquitectura, Patrones, Intermedio]: construye objetos complejos paso a paso; cada paso devuelve el propio objeto para permitir encadenamiento.

  **Ejemplo 1 (JavaScript):**
  ```js
  class UsuarioBuilder {
    setNombre(n) { this.nombre = n; return this; }
    setEdad(e)   { this.edad = e;   return this; }
    setRol(r)    { this.rol = r;    return this; }
    build()      { return { nombre: this.nombre, edad: this.edad, rol: this.rol }; }
  }
  const usuario = new UsuarioBuilder()
    .setNombre('Ana')
    .setEdad(25)
    .setRol('admin')
    .build();
  ```

- Patrón Comando (Command) [Arquitectura, Patrones, Avanzado]: encapsula una acción como objeto; permite encolar operaciones, deshacer/rehacer acciones o registrarlas.
- Patrón Fachada (Facade) [Arquitectura, Patrones, Intermedio]: proporciona una interfaz simplificada a un subsistema complejo.

  **Ejemplo 1 (JavaScript):**
  ```js
  class Luces     { encender() { console.log('Luces ON'); } }
  class Audio     { encender() { console.log('Audio ON'); } }
  class Proyector { encender() { console.log('Proyector ON'); } }
  
  class FachadaCine {
    encender() {
      new Luces().encender();
      new Audio().encender();
      new Proyector().encender();
    }
  }
  new FachadaCine().encender();
  ```

- Patrón Factory (Fábrica) [Arquitectura, Patrones, Intermedio]: centraliza la creación de objetos; el cliente no necesita conocer la clase concreta que se instancia.

  **Ejemplo 1 (JavaScript):**
  ```js
  function crearUsuario(tipo) {
    if (tipo === 'admin')  return { rol: 'admin',    permisos: ['leer', 'escribir', 'borrar'] };
    if (tipo === 'editor') return { rol: 'editor',   permisos: ['leer', 'escribir'] };
    return                        { rol: 'invitado', permisos: ['leer'] };
  }
  const u = crearUsuario('editor');
  ```

- Patrón MVC [Arquitectura, Web, Patrones, Intermedio]: arquitectura que separa la aplicación en tres capas: Modelo (datos), Vista (UI) y Controlador (lógica).
- Patrón MVVM [Arquitectura, Web, Patrones, Intermedio]: variante de MVC donde el ViewModel expone datos y comandos que la Vista enlaza de forma reactiva. Base de Angular e Ionic.
- Patrón Observer [JS, Arquitectura, Patrones, Intermedio]: permite que un objeto notifique automáticamente a una lista de suscriptores cuando su estado cambia. Base de RxJS.

  **Ejemplo 1 (JavaScript):**
  ```js
  class EventEmitter {
    constructor() { this.listeners = []; }
    subscribe(fn)   { this.listeners.push(fn); }
    unsubscribe(fn) { this.listeners = this.listeners.filter(l => l !== fn); }
    emit(data)      { this.listeners.forEach(fn => fn(data)); }
  }
  const bus = new EventEmitter();
  bus.subscribe(d => console.log('Recibido:', d));
  bus.emit({ tipo: 'login', usuario: 'Ana' });
  ```

- Patrón repositorio [Arquitectura, Datos, Patrones, Intermedio]: capa que abstrae el acceso a datos; el resto de la aplicación no conoce si los datos vienen de una BD, una API o localStorage.
- Patrón Singleton [Arquitectura, Patrones, Intermedio]: garantiza que una clase tenga una sola instancia y proporciona un punto de acceso global a ella.

  **Ejemplo 1 (JavaScript):**
  ```js
  class Config {
    static #instancia = null;
    static obtener() {
      if (!Config.#instancia) Config.#instancia = new Config();
      return Config.#instancia;
    }
    constructor() { this.tema = 'oscuro'; }
  }
  const a = Config.obtener();
  const b = Config.obtener();
  console.log(a === b); // true
  ```

- Patrón Strategy (Estrategia) [Arquitectura, Patrones, Avanzado]: define una familia de algoritmos intercambiables y permite seleccionar el comportamiento en tiempo de ejecución.

  **Ejemplo 1 (JavaScript):**
  ```js
  const porNombre = arr => [...arr].sort((a, b) => a.nombre.localeCompare(b.nombre));
  const porEdad   = arr => [...arr].sort((a, b) => a.edad - b.edad);
  
  function ordenar(datos, estrategia) {
    return estrategia(datos);
  }
  
  const usuarios = [{ nombre: 'Luis', edad: 30 }, { nombre: 'Ana', edad: 25 }];
  console.log(ordenar(usuarios, porEdad));
  ```

- Patrones de diseño [Arquitectura, Patrones, Intermedio]: soluciones reutilizables a problemas frecuentes en el diseño de software. Se dividen en tres familias: **creacionales** (cómo crear objetos: Factory, Builder, Singleton), **estructurales** (cómo organizar clases: Adapter, Facade) y **de comportamiento** (cómo interactuar: Observer, Strategy, Command).
- Payload [Web, Backend, Datos, Básico]: datos enviados en una petición.
- POO [JS, Arquitectura, Básico]: programación orientada a objetos.
- Polimorfismo [Arquitectura, JS, Intermedio]: misma interfaz con diferentes implementaciones según tipo.
- Postcondición [JS, Funciones, Intermedio]: condición que debe cumplirse tras ejecutar la función.
- Precondición [JS, Funciones, Intermedio]: condición que debe cumplirse antes de ejecutar la función.
- Predicado [JS, Funciones, Intermedio]: función que devuelve true o false según una condición.
- Principio DRY [Arquitectura, Intermedio]: "Don't Repeat Yourself", evitar duplicar lógica.
- Principio KISS [Arquitectura, Intermedio]: "Keep It Simple", priorizar soluciones simples.
- Promesa (Promise) [JS, Funciones, Básico]: objeto que representa una operación asíncrona.
- Protocol (Swift) [Swift, Arquitectura, Intermedio]: contrato que define propiedades y métodos que un tipo debe implementar.

  **Ejemplo 1 (Swift):**
  ```swift
  protocol Saludable {
    func saludar() -> String
  }
  
  struct Persona: Saludable {
    func saludar() -> String { "Hola" }
  }
  ```

- Prototipo [JS, Arquitectura, Intermedio]: mecanismo de herencia de JavaScript; cada objeto tiene un prototipo del que puede heredar propiedades y métodos.

  **Ejemplo 1 (JavaScript):**
  ```js
  function Persona(nombre) {
    this.nombre = nombre;
  }
  Persona.prototype.saludar = function () {
    return `Hola, soy ${this.nombre}`;
  };
  ```

### Q

- Queue (cola) [Datos, Intermedio]: estructura FIFO (First In, First Out), donde el primer elemento en entrar es el primero en salir.

  **Ejemplo 1 (JavaScript):**
  ```js
  const cola = [];
  cola.push('tarea1');
  cola.push('tarea2');
  const siguiente = cola.shift(); // tarea1
  ```

### R

- Rate limiting [Backend, Seguridad, Avanzado]: límite de peticiones por cliente en un tiempo dado.
- Refactorizar [Arquitectura, JS, Básico]: mejorar el código sin cambiar su comportamiento.
- Refresco de token [Seguridad, Backend, Avanzado]: renovación controlada de tokens de acceso expirables.
- Regresión (prueba de) [Testing, Intermedio]: prueba que verifica que funcionalidades existentes siguen funcionando después de cambios o correcciones.
- Regla de dependencia [Arquitectura, Avanzado]: en arquitectura limpia, las dependencias siempre apuntan hacia el dominio.
- Recursión [Funciones, Intermedio]: técnica en la que una función se llama a sí misma para resolver un problema reduciéndolo en subproblemas más pequeños.

  **Ejemplo 1 (Python):**
  ```python
  def factorial(n):
      if n <= 1:
          return 1
      return n * factorial(n - 1)
  ```

- Renderizado [Web, Básico]: proceso de convertir el código (HTML, CSS, JS) en la pantalla visual que ve el usuario.
- Repositorio [Arquitectura, Básico]: proyecto bajo control de versiones.
- Request [Web, Backend, Básico]: petición enviada por cliente a servidor.
- Response [Web, Backend, Básico]: respuesta enviada por servidor a cliente.
- REST [Web, Backend, Intermedio]: estilo de arquitectura para APIs que usa HTTP y URLs para representar recursos (GET, POST, PUT, DELETE).
- Return (retorno) [JS, Funciones, Intermedio]: valor final que entrega una función.

### S

- Salida determinista [JS, Funciones, Intermedio]: para la misma entrada, una función siempre devuelve exactamente la misma salida.

  **Ejemplo 1 (JavaScript):**
  ```js
  function cuadrado(n) {
    return n * n;
  }
  const a = cuadrado(5);
  const b = cuadrado(5);
  ```

- Sanitizar [Seguridad, Web, Avanzado]: acción de limpiar o neutralizar una entrada antes de usarla o guardarla.
- Sanitización [Seguridad, Web, Avanzado]: proceso general de limpieza de entradas para evitar datos peligrosos.
- Scope [JS, Básico]: ámbito donde una variable existe y puede usarse.
- Sealed class [Kotlin, Arquitectura, Intermedio]: clase cerrada a un conjunto finito de subtipos, útil para modelar estados y obligar manejo exhaustivo (Kotlin).

  **Ejemplo 1 (Kotlin):**
  ```kotlin
  sealed class Estado
  data object Cargando : Estado()
  data class Exito(val datos: String) : Estado()
  data class Error(val mensaje: String) : Estado()
  ```

- Separation of concerns [Arquitectura, Avanzado]: separar responsabilidades para reducir acoplamiento y facilitar cambios.
- Serialización [Datos, Backend, Intermedio]: convertir estructuras de datos a un formato transportable.
- Service Worker [Web, Rendimiento, Básico]: script en segundo plano para caché y modo offline.
- Session Storage [Web, Datos, Básico]: almacenamiento temporal por pestaña.

  **Ejemplo 1 (JavaScript):**
  ```js
  sessionStorage.setItem('pasoActual', '2');
  const paso = sessionStorage.getItem('pasoActual');
  ```

- Set [JS, Datos, Básico]: estructura de datos que guarda valores únicos, sin repetir elementos.

  **Ejemplo 1 (JavaScript):**
  ```js
  const numeros = new Set([1, 2, 2, 3]);
  numeros.add(4);
  console.log(numeros);
  ```

- Single Page Application (SPA) [Web, Arquitectura, Intermedio]: aplicación web que carga una sola página HTML y actualiza el contenido dinámicamente sin recargar. Base de frameworks como Angular, React o Vue.
- Sintaxis [JS, Básico]: reglas de escritura del lenguaje.
- SLA [Backend, Arquitectura, Avanzado]: acuerdo de nivel de servicio (tiempo de respuesta, disponibilidad, etc.).
- Sobrecarga (overload) [JS, Funciones, Intermedio]: varias firmas válidas para una misma función (común en TypeScript).
- SOLID [Arquitectura, Avanzado]: principios para diseño orientado a objetos mantenible.
- Spread (...) [JS, Funciones, Intermedio]: operador para expandir arrays u objetos en una llamada de función.
- String [JS, Datos, Básico]: cadena de texto.
- Struct (Swift) [Swift, Datos, Intermedio]: tipo por valor en Swift; al asignar o pasar una struct se copia su valor, no su referencia.

- Stub [Testing, Intermedio]: doble de prueba que devuelve respuestas predefinidas para aislar la unidad bajo prueba.

  **Ejemplo 1 (Python):**
  ```python
  class RepositorioStub:
    def obtener_usuario(self, _id):
      return {'id': _id, 'nombre': 'Stub'}
  ```

  **Ejemplo 1 (Swift):**
  ```swift
  struct Punto {
    var x: Int
    var y: Int
  }
  
  var a = Punto(x: 1, y: 2)
  var b = a
  b.x = 10
  ```

### T

- TDD (Test Driven Development) [Testing, Intermedio]: práctica donde primero se escribe una prueba que falla, luego el código mínimo para pasarla y finalmente refactorización.

- Template literal [JS, Básico]: cadena de texto en JavaScript delimitada por backticks (`) que permite interpolar expresiones con ${}.

  **Ejemplo 1 (JavaScript):**
  ```js
  const nombre = 'Ana';
  const saludo = `Hola, ${nombre}! Tienes ${20 + 1} años.`;
  ```

- Test de integración [Testing, Backend, Avanzado]: prueba de colaboración entre módulos/servicios.
- Test double [Testing, Intermedio]: término general para objetos de prueba sustitutos (mock, stub, fake, spy, dummy).
- Test unitario [Testing, JS, Avanzado]: prueba de una unidad pequeña de código en aislamiento.
- Throttle [JS, Rendimiento, Avanzado]: técnica para limitar cuántas veces se ejecuta una función por intervalo.
- Tipo de parámetro [JS, Funciones, Intermedio]: tipo esperado por la función (string, number, object, etc.).
- Tipo de retorno [JS, Funciones, Intermedio]: tipo de dato que devuelve la función.
- Token [Seguridad, Backend, Básico]: cadena usada para autenticación o autorización.
- Trazabilidad [Arquitectura, Backend, Avanzado]: capacidad de seguir el recorrido de una operación en el sistema.
- Try/Catch [JS, Básico]: estructura para controlar errores.
- Type hints [Funciones, Python, Intermedio]: anotaciones de tipo en Python que documentan y facilitan el análisis estático del código.

  **Ejemplo 1 (Python):**
  ```python
  def saludar(nombre: str) -> str:
    return f'Hola, {nombre}'
  ```

- Tupla (tuple) [Datos, Intermedio]: colección ordenada de elementos que suele ser inmutable en lenguajes como Python o Swift.

  **Ejemplo 1 (Python):**
  ```python
  coordenada = (40.4168, -3.7038)
  latitud = coordenada[0]
  ```

- TypeScript [JS, TypeScript, Ionic, Arquitectura, Básico]: superset de JavaScript que añade tipado estático. Base de Angular e Ionic.

  **Ejemplo 1 (TypeScript):**
  ```ts
  function saludar(nombre: string): string {
    return `Hola, ${nombre}`;
  }
  ```

### U

- UI [Web, Básico]: interfaz de usuario.
- Undefined [JS, Datos, Básico]: valor por defecto de una variable no inicializada.
- UX [Web, Básico]: experiencia de usuario.

### V

- Validación [Web, Seguridad, Básico]: proceso de comprobar que los datos de entrada son correctos, completos y del tipo esperado antes de procesarlos.

  **Ejemplo 1 (JavaScript):**
  ```js
  function registrar(nombre) {
    if (!nombre || nombre.trim() === '') {
      throw new Error('El nombre es obligatorio');
    }
    return true;
  }
  ```

- Valor por defecto [JS, Funciones, Intermedio]: valor usado cuando no se pasa argumento.
- Variable [JS, Datos, Básico]: espacio con nombre para guardar datos.
- Versionado [Arquitectura, Básico]: gestión de cambios en el código a lo largo del tiempo.

### W

- Webhook [Web, Backend, Básico]: mecanismo para notificar eventos entre sistemas vía HTTP.
- WebSocket [Web, Backend, Avanzado]: canal bidireccional en tiempo real entre cliente y servidor.

### X

- XSS [Seguridad, Web, Avanzado]: ataque que inyecta scripts maliciosos en contenido web.

### Y

- YAGNI [Arquitectura, Avanzado]: "You Aren't Gonna Need It"; no implementar funcionalidades que aún no son necesarias.

### Z

- Zero Trust [Seguridad, Avanzado]: enfoque de seguridad que asume que ninguna red o usuario es confiable por defecto; todo acceso debe verificarse explícitamente.

---

## Extra para clase

Sugerencia de dinámica:
1. Pide al alumnado explicar 5 términos con sus palabras.
2. Qué den un ejemplo real de uso por cada término.
3. Qué identifiquen en su propio código dónde aparece cada concepto.
