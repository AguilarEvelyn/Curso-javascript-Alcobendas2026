# Tema 8: Set y Map - Proyecto Real por Retos

## Objetivo
Construir una aplicacion real: "SkillTrack", un gestor de cursos y alumnos.
Los estudiantes practicaran Set y Map dentro de un flujo completo con UI.

---

## Escenario del Proyecto

Una academia necesita una app interna para:
1. Crear cursos con categoria.
2. Registrar alumnos.
3. Inscribir alumnos en cursos sin duplicados.
4. Filtrar cursos por categoria.
5. Ver estadisticas en pantalla.

Estructuras obligatorias:
- `Map cursos`: `idCurso -> { id, nombre, categoria, alumnos: Set<email> }`
- `Map alumnos`: `email -> { nombre, email, cursos: Set<idCurso> }`
- `Set categorias`: categorias unicas registradas en la app.

---

## Estructura de archivos (UI)

Trabajad con estos archivos:
- `tema8_app_set_map.html`
- `tema8_app_set_map.css`
- `tema8_app_set_map.js`

La clase debe ejecutarse en navegador, no solo en consola.

---

## Reto 1: Modelo de datos base (Set + Map)

Implementa en JavaScript:
1. `const cursos = new Map()`
2. `const alumnos = new Map()`
3. `const categorias = new Set()`
4. Funcion `crearCurso(id, nombre, categoria)`:
	- Si el id ya existe, no crear.
	- Registrar categoria en `categorias`.
5. Funcion `registrarAlumno(nombre, email)`:
	- Si email ya existe, no duplicar.

Criterio de logro:
- El estado inicial queda consistente y sin duplicados.

---

## Reto 2: Inscripciones cruzadas (Map + Set combinados)

Implementa `inscribirAlumno(email, idCurso)`:
1. Validar que alumno y curso existen.
2. Agregar email al Set `curso.alumnos`.
3. Agregar idCurso al Set `alumno.cursos`.
4. Devolver mensaje de exito o error.

Implementa tambien:
- `desinscribirAlumno(email, idCurso)`

Criterio de logro:
- La relacion bidireccional se mantiene sincronizada.

---

## Reto 3: Consultas utiles para negocio

Crear funciones:
1. `obtenerCursosPorCategoria(categoria)`
2. `obtenerAlumnosDeCurso(idCurso)`
3. `obtenerTopCursos(minimoAlumnos)`
4. `resumenGeneral()` con:
	- total cursos
	- total alumnos
	- total categorias
	- total inscripciones

Criterio de logro:
- Todas las consultas usan Map/Set (sin arrays globales paralelos).

---

## Reto 4: Primera UI funcional (render)

Crear en HTML:
1. Formulario "Nuevo curso".
2. Formulario "Nuevo alumno".
3. Formulario "Inscribir alumno".
4. Zona de tarjetas de cursos.
5. Zona de estadisticas.

En JS:
1. Funcion `renderCursos()`.
2. Funcion `renderCategoriasFiltro()`.
3. Funcion `renderStats()`.

Criterio de logro:
- Cada accion del usuario actualiza la pantalla sin recargar.

---

## Reto 5: UI de filtros y busqueda

Agregar en la UI:
1. Select para filtrar por categoria.
2. Input para buscar curso por texto.
3. Boton "Limpiar filtros".

Reglas:
1. Filtro por categoria y busqueda deben combinarse.
2. La busqueda debe ignorar mayusculas/minusculas.
3. Si no hay resultados, mostrar mensaje visual.

---

## Reto 6: Persistencia local (bonus recomendado)

Implementar guardado y carga con `localStorage`.

Funciones:
1. `guardarEstado()`
2. `cargarEstado()`

Importante:
- Para guardar Sets y Maps, convertir a arrays/objetos.
- Al cargar, reconstruir Set y Map correctamente.

---

## Reto 7: UI Pro (bonus)

1. Indicador visual de cursos saturados (>= 5 alumnos).
2. Badge por categoria en cada tarjeta.
3. Tabla o lista con alumnos y numero de cursos inscritos.
4. Boton para desinscribir desde UI.

---

## Entregables

1. App funcionando en navegador.
2. Operaciones de Set/Map demostrables desde UI.
3. Capturas o demo en clase de:
	- alta de curso
	- alta de alumno
	- inscripcion
	- filtro
	- estadisticas

---

## Criterios de evaluacion sugeridos

1. Correctitud de Set/Map: 40%
2. Integracion de logica + UI: 30%
3. Calidad de codigo y funciones: 20%
4. Bonus (persistencia y UI Pro): 10%

---

## Tiempo estimado

- Base obligatoria (Retos 1-5): 120 min
- Bonus (Retos 6-7): 30 min
- Total recomendado: 150 min
