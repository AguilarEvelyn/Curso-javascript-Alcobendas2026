# Tema 8: Set y Map - Estructuras de Datos Modernas

## Indice
1. Que problema resuelven Set y Map
2. Set: valores unicos
3. Map: clave-valor avanzado
4. Diferencias con Array y Object
5. Operaciones utiles
6. Caso real: SkillTrack
7. Buenas practicas
8. Resumen

---

## 1) Que problema resuelven Set y Map

En JavaScript moderno, `Set` y `Map` ayudan a modelar datos de forma mas clara:

- Set: evita duplicados automaticamente.
- Map: representa relaciones clave-valor de manera explicita.

### Problema tipico

```javascript
const numeros = [1, 2, 2, 3, 3, 4];
const unicos = [...new Set(numeros)];
console.log(unicos); // [1, 2, 3, 4]
```

---

## 2) Set: valores unicos

Un Set almacena elementos sin repeticion y mantiene orden de insercion.

```javascript
const alumnos = new Set();

alumnos.add("Ana");
alumnos.add("Luis");
alumnos.add("Ana");

console.log(alumnos.size); // 2
console.log(alumnos.has("Luis")); // true

alumnos.delete("Luis");
console.log([...alumnos]); // ["Ana"]
```

### Operaciones de conjuntos

```javascript
const a = new Set([1, 2, 3]);
const b = new Set([2, 3, 4]);

const union = new Set([...a, ...b]);
const interseccion = new Set([...a].filter(x => b.has(x)));
const diferencia = new Set([...a].filter(x => !b.has(x)));
```

---

## 3) Map: clave-valor avanzado

Map permite claves de cualquier tipo (string, number, objeto, funcion).

```javascript
const inventario = new Map();
inventario.set("teclado", 10);
inventario.set("raton", 25);

console.log(inventario.get("teclado")); // 10
console.log(inventario.has("monitor")); // false
console.log(inventario.size); // 2
```

### Claves complejas

```javascript
const usuario = { id: 1, nombre: "Ana" };
const sesiones = new Map();

sesiones.set(usuario, { token: "abc", rol: "admin" });
console.log(sesiones.get(usuario));
```

---

## 4) Diferencias con Array y Object

### Set vs Array

- Array permite repetidos.
- Set garantiza unicidad.
- Set tiene `has()` eficiente para busquedas de existencia.

### Map vs Object

- Map mantiene semantica de diccionario.
- Map tiene `size`, `set`, `get`, `has`, `delete`, `clear`.
- Map acepta claves no-string.

---

## 5) Operaciones utiles

```javascript
// Array <-> Set
const arr = ["js", "js", "dom"];
const set = new Set(arr);
const arrLimpio = [...set];

// Object <-> Map
const obj = { tema: "set-map", nivel: "avanzado" };
const map = new Map(Object.entries(obj));
const obj2 = Object.fromEntries(map);
```

---

## 6) Caso real: SkillTrack (Map + Set)

Modelo propuesto:

- `Map cursos`: `idCurso -> { id, nombre, categoria, alumnos: Set<email> }`
- `Map alumnos`: `email -> { nombre, email, cursos: Set<idCurso> }`
- `Set categorias`: categorias unicas

Inscripcion bidireccional:

```javascript
function inscribirAlumno(email, idCurso) {
    const alumno = alumnos.get(email);
    const curso = cursos.get(idCurso);
    if (!alumno || !curso) return false;

    curso.alumnos.add(email);
    alumno.cursos.add(idCurso);
    return true;
}
```

Este enfoque reduce errores y evita duplicados de forma natural.

---

## 7) Buenas practicas

1. Usa Set cuando el requisito principal sea unicidad.
2. Usa Map para relaciones clave-valor con mutaciones frecuentes.
3. Convierte a arrays solo para render o serializacion.
4. En persistencia, serializa Maps/Sets y reconstruye al cargar.
5. Nombra funciones segun intencion de negocio (`inscribir`, `desinscribir`, `resumen`).

---

## 8) Resumen

- Set simplifica la eliminacion de duplicados y operaciones de conjuntos.
- Map mejora el modelado de datos frente a Object en casos no triviales.
- Combinados, permiten construir aplicaciones reales limpias y robustas.

Tema recomendado para practica: una mini app con UI que muestre cursos, alumnos, inscripciones y filtros.
