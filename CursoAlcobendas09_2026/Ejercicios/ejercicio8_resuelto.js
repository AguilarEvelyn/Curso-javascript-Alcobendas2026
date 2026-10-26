/*

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

*/

//Utilidades

const ConsoleEnum = Object.freeze({
	LOG: "log",
	WARN: "warn",
	ERROR: "error",
	INFO: "info",
	DEBUG: "debug",
	TABLE: "table"
})


const mensajeEstado = document.getElementById("mensaje-estado")
const mostrarMensaje = (tipo, mensaje) => {
	console[tipo](mensaje)
	if (typeof mensaje == "string")
		mensajeEstado.textContent = mensaje
}



/*

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

*/

const cursos = new Map()
const alumnos = new Map()
const categorias = new Set()

const crearCurso = (idCurso, nombre, categoria) => {
	if (cursos.has(idCurso)) {
		mostrarMensaje(ConsoleEnum.ERROR, `El curso con ID ${idCurso} ya existe`)
		return false
	}
	cursos.set(idCurso, {
		id: idCurso,
		nombre: nombre.trim(),
		categoria: categoria.trim(),
		alumnos: new Set()
	})
	categorias.add(categoria)
	mostrarMensaje(ConsoleEnum.INFO, `El curso con ID ${idCurso} se ha creado correctamente`)
	return true
}

const registrarAlumno = (nombre, email) => {
	const emailLimpio = email.trim().toLowerCase()
	if (alumnos.has(emailLimpio)) {
		mostrarMensaje(ConsoleEnum.ERROR, `El alumno ${nombre} con ${emailLimpio} ya existe`)
		return false
	}
	alumnos.set(emailLimpio, {
		nombre: nombre,
		email: emailLimpio,
		cursos: new Set()
	})
	mostrarMensaje(ConsoleEnum.INFO, `El alumno ${nombre} con email ${emailLimpio} ha sido registrado correctamente`)
	return true
}

// Test Reto 1


const mostrarTest = () => {
	console.log("Cursos:", cursos)
	console.log("Alumnos:", alumnos)
	console.log("Categorías:", categorias)
}

crearCurso("JS_AV", "JavaScript Avanzado", "Programación")
crearCurso("JS_AV", "Otro curso", "Programación")
crearCurso("DART", "Dart", "Programación")
crearCurso("KOTLIN", "Kotlin", "Programación")
crearCurso("TEL1", "CCNA Cisco", "Redes")

mostrarTest()
registrarAlumno("Manolo", "manolo@example.com")
registrarAlumno("Luis", "luis@example.com")
registrarAlumno("Lolo", "Manolo@example.com")
mostrarTest()

/*

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

*/

const inscribirAlumno = (email, idCurso) => {
	const emailLimpio = email.trim().toLowerCase()
	//Validar que alumno y curso existe
	if (alumnos.has(emailLimpio) && cursos.has(idCurso)) {
		mostrarMensaje(ConsoleEnum.INFO, "Alumno y curso validado")
		//Agregar email al set cursos.alumnos
		const alumno = alumnos.get(emailLimpio)
		alumno.cursos.add(idCurso)
		const curso = cursos.get(idCurso)
		curso.alumnos.add(emailLimpio)

		mostrarMensaje(ConsoleEnum.INFO, "Inscripción realizada")
		return true
	}
	mostrarMensaje(ConsoleEnum.ERROR, "Curso o alumno no encontrado")
	return false
}


inscribirAlumno("luis@example.com", "DART")
inscribirAlumno("lolo@example.com", "DART")
inscribirAlumno("manolo@example.com", "KOTLIN")
mostrarTest()



const desinscribirAlumno = (email, idCurso) => {
	const emailLimpio = email.trim().toLowerCase()
	if (!alumnos.has(emailLimpio) || !cursos.has(idCurso)) {
		mostrarMensaje(ConsoleEnum.ERROR, "Alumno o curso no encontrado")
		return false
	}
	const alumno = alumnos.get(emailLimpio)
	alumno.cursos.delete(idCurso)
	const curso = cursos.get(idCurso)
	curso.alumnos.delete(emailLimpio)
	mostrarMensaje(ConsoleEnum.ERROR, "Alumno desincripto con éxito")
	return true
}

desinscribirAlumno("manolo@example.com", "KOTLIN")

/*

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

*/

const obtenerCursosPorCategoria = (categoria) => {
	if (!categorias.has(categoria)) {
		mostrarMensaje(ConsoleEnum.ERROR, "La categoría no existe")
		return false
	}
	const cursosFiltrados = [...cursos.values()].filter(curso => curso.categoria == categoria)

	mostrarMensaje(ConsoleEnum.TABLE, cursosFiltrados)
	return cursosFiltrados
}

obtenerCursosPorCategoria("Programación")
obtenerCursosPorCategoria("Redes")
obtenerCursosPorCategoria("Programa")


const obtenerAlumnosDeCurso = (idCurso) => {
	if (!cursos.has(idCurso)) {
		mostrarMensaje(ConsoleEnum.ERROR, "El curso no existe")
		return false
	}
	const alumnosCurso = cursos.get(idCurso).alumnos //Devuelve un set con los alumnos
	mostrarMensaje(ConsoleEnum.TABLE, alumnosCurso)

	return alumnosCurso
}


inscribirAlumno("luis@example.com", "JS_AV")
inscribirAlumno("manolo@example.com", "JS_AV")

obtenerAlumnosDeCurso("JS_AV")



const obtenerTopCursos = (minimoAlumnos) => {
	const cursosTop = [...cursos.values()].filter(curso => curso.alumnos.size >= minimoAlumnos)
	mostrarMensaje(ConsoleEnum.TABLE, cursosTop)
	return cursosTop
}

obtenerTopCursos(2)

const resumenGeneral = () => {
	const resumen = {
		totalCursos: cursos.size,
		totalAlumnos: alumnos.size,
		totalCategorias: categorias.size,
		totalInscripciones: [...cursos.values()].reduce((insc, curso) => insc += curso.alumnos.size, 0)
	}
	mostrarMensaje(ConsoleEnum.TABLE, resumen)
	return resumen
}

//console.log(resumenGeneral())

/*

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

*/

//Constantes elementos HTML

const formCurso = document.getElementById("form-curso")
const formAlumno = document.getElementById("form-alumno")
const formInscripcion = document.getElementById("form-inscripcion")

const filtroCategoria = document.getElementById("filtro-categoria")
const buscarCurso = document.getElementById("buscar-curso")
const btnLimpiarFiltros = document.getElementById("btn-limpiar-filtros")

const cursosContainer = document.getElementById("cursos-container")
const statsContainer = document.getElementById("stats")
const alumnosTablaBody = document.getElementById("alumnos-tabla-body")


const renderCursos = () => {
	//Limpiar mensajes
	mensajeEstado.textContent = ""
	//Crear curso

	formCurso.addEventListener("submit", (event) => {
		event.preventDefault() //Evita que se recarge la página
		crearCurso(
			document.querySelector("#curso-id").value,
			document.querySelector("#curso-nombre").value,
			document.querySelector("#curso-categoria").value,
		)
		mostrarMensaje(ConsoleEnum.LOG, "Curso creado")
		document.querySelector("#curso-id").value = ""
		document.querySelector("#curso-nombre").value = ""
		document.querySelector("#curso-categoria").value = ""
		guardarEstado()
		renderTodo()

	})

	//Nuevo alumno

	formAlumno.addEventListener("submit", (event) => {
		event.preventDefault() //Evita que se recarge la página
		registrarAlumno(
			document.querySelector("#alumno-nombre").value,
			document.querySelector("#alumno-email").value
		)
		mostrarMensaje(ConsoleEnum.LOG, "Alumno creado")
		document.querySelector("#alumno-nombre").value = ""
		document.querySelector("#alumno-email").value = ""
		guardarEstado()
		renderTodo()

	})

	//Inscribir alumnos

	formInscripcion.addEventListener("submit", (event) => {
		event.preventDefault() //Evita que se recarge la página
		inscribirAlumno(
			document.querySelector("#insc-email").value,
			document.querySelector("#insc-curso-id").value
		)
		mostrarMensaje(ConsoleEnum.LOG, "Alumno inscrito")
		document.querySelector("#insc-email").value = ""
		document.querySelector("#insc-curso-id").value = ""
		guardarEstado()
		renderTodo()

	})
}

renderCursos()

const renderStats = (resumen) => {

	statsContainer.innerHTML = `
	<div class="stat"> <span>${resumen.totalCursos}</span><small>Cursos</small></div>
	<div class="stat"> <span>${resumen.totalAlumnos}</span><small>Alumnos</small></div>
	<div class="stat"> <span>${resumen.totalCategorias}</span><small>Categorias</small></div>
	<div class="stat"> <span>${resumen.totalInscripciones}</span><small>Inscripciones</small></div>
	`

}
renderStats(resumenGeneral())

const renderTablaAlumnos = () => {
	alumnosTablaBody.innerHTML = [...alumnos.values()]
		.map(alumno => {
			return `
		<tr>
		<td>${alumno.nombre}</td>
		<td>${alumno.email}</td>
		<td>${alumno.cursos.size}</td>
		</tr>
		`
		}).join("")
}
renderTablaAlumnos()


/*

## Reto 5: UI de filtros y busqueda

Agregar en la UI:
1. Select para filtrar por categoria.
2. Input para buscar curso por texto.
3. Boton "Limpiar filtros".

Reglas:
1. Filtro por categoria y busqueda deben combinarse.
2. La busqueda debe ignorar mayusculas/minusculas.
3. Si no hay resultados, mostrar mensaje visual.

*/

const renderCategoriasFiltro = () => {
	//Insertar option en el select
	filtroCategoria.innerHTML += [...categorias]
		.map(categoria => {
			return `<option value= "${categoria}">"${categoria}"</option>`
		})
}
renderCategoriasFiltro()

const renderCursosCard = () => {
	const categoriaSeleccionada = filtroCategoria.value
	const textoBusqueda = buscarCurso.value.toLowerCase().trim()
	const cursosFiltrados = [...cursos.entries()]
		.filter(([idCurso, curso]) => {
			if ((categoriaSeleccionada === "todas")) return true;
			return curso.categoria === categoriaSeleccionada
		})
		.filter(([idCurso, curso]) => {
			return (idCurso.toLowerCase().includes(textoBusqueda)) ||
				curso.nombre.toLowerCase().includes(textoBusqueda)
		})
	if ((cursosFiltrados.length === 0)) {
		cursosContainer.innerHTML = `<p classe='empty'> No hay cursos para los 
		filtros actuales. </p>`
		return
	}
	cursosContainer.innerHTML = cursosFiltrados
		.map(([idCurso, curso]) => {
			const totalInscritos = curso.alumnos.size
			const claseSaturado = totalInscritos >= 3 ? "saturado" : ""
			const listaAlumnos = [...curso.alumnos]
				.map(email => `<li>${email}</li>`).join("")

			return `
			<article class = "card ${claseSaturado}">
				<header>
					<h3>${curso.nombre}</h3>
					<span class= "badge">${curso.categoria}</span>
				</header>
					<p><strong>ID:</strong> ${idCurso} </p>
					<p><strong>Inscritos:</strong> ${totalInscritos}</p>
					${totalInscritos > 0
					? `<ul>${listaAlumnos}</ul>`
					: `<p class="empty">Sin alumnos inscritos</p>`}
					</article>
		`
		}).join()
}

//Filtrado

filtroCategoria.addEventListener("change", renderCursosCard)
buscarCurso.addEventListener("input", renderCursosCard)

btnLimpiarFiltros.addEventListener("click", (ev) => {
	ev.preventDefault()
	filtroCategoria.value = "todas"
	buscarCurso.value = ""
	renderCursosCard()
})

const renderTodo = () => {
	cargarEstado()
	renderStats(resumenGeneral())
	renderTablaAlumnos()
	renderCategoriasFiltro()
	renderCursosCard()

}
/*

## Reto 6: Persistencia local (bonus recomendado)

Implementar guardado y carga con `localStorage`.

Funciones:
1. `guardarEstado()`
2. `cargarEstado()`

Importante:
- Para guardar Sets y Maps, convertir a arrays/objetos.
- Al cargar, reconstruir Set y Map correctamente.

*/

//Serializar 

const serializarEstado = () => {
	return {
		cursos: [... cursos.entries()].map(([id, curso]) => [
			id, {
				...curso,
				alumnos: [...curso.alumnos]
			}
		]),
		alumnos: [... alumnos.entries()].map(([email, alumno]) => [
			email, {
				...alumno, cursos: [...alumno.cursos]
			}
		]),
		categorias: [...categorias]
	}

}



const guardarEstado = () => {
	localStorage.setItem("estado",JSON.stringify(serializarEstado()) )
	console.log(JSON.stringify(serializarEstado()))
}



const cargarEstado = () => {

		const raw = localStorage.getItem("estado")
		if(!raw) return

		const data = JSON.parse(raw) //Desserializar

		console.log(data)

		cursos.clear() //Vaciar el map
		alumnos.clear()
		categorias.clear() //Vacial el set

		//Cargar el map de cursos

		for (const [id, curso] of data.cursos ||[]){
			cursos.set(id, {
				...curso,
				alumnos: new Set (curso.alumnos ||[])
			})
		}

		//Cargar el map de alumnos

		for (const [email, alumno] of data.alumnos ||[]){
			alumnos.set(email, {
				...alumno,
				cursos: new Set(alumno.curso ||[])
			})
		}

		//Cargar el set de categorias

		for (const categoria of data.categorias ||[]){
			categorias.add(categoria)
		} 

}

cargarEstado()
renderTodo()





/*

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

*/