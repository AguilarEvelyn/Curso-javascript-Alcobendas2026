# Ejercicios - Tema 2: Programación Básica - Variables y Tipos de Datos

## Nivel Básico (Principiante)

### Ejercicio 2B.1: Crear variables simples
Crea un programa que declare tres variables:
- Una variable `nombre` con tu nombre
- Una variable `edad` con tu edad  
- Una variable `ciudad` con tu ciudad

Muestra cada variable en la consola usando `console.log()`.

---

### Ejercicio 2B.2: Diferenciar let y const
Crea un programa que demuestre la diferencia entre `let` y `const`:
- Declara una variable `let contador = 0`
- Cámbiala a `contador = 5` y muestra el nuevo valor
- Declara una variable `const PI = 3.14159`
- Intenta cambiar PI (escribe el comentario sobre qué pasaría)

Muestra los resultados en consola.

---

### Ejercicio 2B.3: Tipos de datos básicos
Crea variables con diferentes tipos de datos:
- Una variable string con "Estoy estudiando JavaScript"
- Una variable number con 42
- Una variable boolean con true
- Usa `console.log()` y `typeof` para mostrar cada una

---

### Ejercicio 2B.4: Operaciones aritméticas
Crea dos variables `a` y `b` con números (tú eliges cuáles).

Calcula y muestra:
- La suma de a + b
- La resta de a - b
- La multiplicación de a * b
- La división de a / b
- El módulo a % b

---

### Ejercicio 2B.5: Concatenación de strings
Crea variables:
- `nombre = 'Juan'`
- `apellido = 'García'`
- `ciudad = 'Barcelona'`

Une estas variables en una sola frase y muéstrala en consola.
Ejemplo: "Soy Juan García y vivo en Barcelona"

---

## Nivel Intermedio

### Ejercicio 2I.1: Array de números
Crea un array con 5 números enteros.

Accede y muestra:
- El primer número
- El último número  
- El número del medio
- La cantidad de números (length)
- Todos los números

---

### Ejercicio 2I.2: Objeto de estudiante
Crea un objeto que represente un estudiante con propiedades:
- nombre (string)
- edad (number)
- calificacion (number)
- activo (boolean)

Muestra:
- El nombre del estudiante
- La calificación
- Si está activo

---

### Ejercicio 2I.3: Array de objetos
Crea un array con 3 libros. Cada libro es un objeto con:
- titulo (string)
- autor (string)  
- año (number)
- paginas (number)

Accede y muestra:
- El título del primer libro
- El autor del último libro
- Las páginas del libro del medio

---

### Ejercicio 2I.4: Comparaciones lógicas
Crea variables:
- `edad = 25`
- `tienePermiso = true`
- `tieneLicencia = true`

Muestra en consola:
- ¿Es mayor de 18?
- ¿Puede conducir? (tiene permiso Y licencia)
- ¿No tiene permiso?
- ¿Tiene permiso O licencia?

---

### Ejercicio 2I.5: Conversión de tipos
Realiza estas conversiones y muestra el resultado y tipo:
- Convierte "42" a número
- Convierte 100 a string
- Convierte 1 a booleano
- Convierte "false" a booleano (¡cuidado!)
- Convierte null a booleano

---

### Ejercicio 2I.6: Objeto de contacto complejo
Crea un objeto de contacto con estructura anidada:
```
contacto = {
    nombre: (tu nombre),
    email: (tu email),
    telefonos: [un array de telefonos],
    direccion: {
        calle: (alguna calle),
        ciudad: (alguna ciudad),
        pais: (algún país)
    }
}
```

Accede y muestra:
- El nombre
- El primer teléfono
- La ciudad
- El país

---

### Ejercicio 2I.7: Reasignación de variables
Crea un programa que simule un contador:
- Inicializa `contador = 0`
- Suma 5: `contador += 5`
- Resta 2: `contador -= 2`
- Multiplica por 2: `contador *= 2`
- Divide entre 4: `contador /= 4`

Muestra el valor después de cada operación.

---

## Nivel Avanzado

### Ejercicio 2A.1: Proyecto - Carrito de compras
Crea un objeto "carrito" con:
```
carrito = {
    cliente: { nombre: (string), email: (string) },
    productos: [
        { nombre: (string), precio: (number), cantidad: (number) },
        { nombre: (string), precio: (number), cantidad: (number) },
        ...
    ],
    descuento: (number entre 0 y 1)
}
```

Calcula:
- El precio total sin descuento
- El descuento a aplicar
- El precio final

---

### Ejercicio 2A.2: Proyecto - Perfil de usuario
Crea un objeto complejo que represente un perfil de usuario con:
- informacion personal (nombre, edad, email)
- ubicacion (ciudad, pais, codigo_postal)
- redes_sociales: array con plataformas
- habilidades: array con nombres de habilidades
- experiencia: numero de años
- activo: booleano

Muestra todo en un formato legible.

---

### Ejercicio 2A.3: Array de temperaturas
Crea un array con 7 temperaturas (una por cada día de la semana).

Calcula:
- La temperatura promedio
- La temperatura más alta
- La temperatura más baja
- ¿En cuántos días superó los 20 grados?
- Convierte la temperatura más alta a Fahrenheit

---

### Ejercicio 2A.4: Objeto de película completo
Crea un objeto película con propiedades:
- titulo, director, año, duracion
- generos: array de strings
- actores: array de objetos con {nombre, rol}
- calificaciones: array de números
- presupuesto (con conversión de string a number)
- ganancias (con conversión de string a number)

Muestra:
- La información básica (titulo, director, año)
- Todos los géneros unidos en una frase
- Los nombres de los actores
- La calificación promedio
- Las ganancias netas (ganancias - presupuesto)

---

### Ejercicio 2A.5: Sistema de inventario
Crea un objeto inventario con múltiples productos:
```
inventario = {
    nombre_tienda: (string),
    ubicacion: (string),
    productos: [
        { nombre, precio, cantidad, categoria },
        ...
    ]
}
```

Calcula:
- Valor total del inventario
- Cantidad total de productos
- Producto más caro
- Producto más barato
- Filtrar productos de una categoría específica

---

### Ejercicio 2A.6: Análisis de datos de ventas
Crea datos de ventas con estructura:
```
ventas = [
    { producto, cantidad, precio_unitario, fecha },
    { producto, cantidad, precio_unitario, fecha },
    ...
]
```

Calcula:
- Venta total en dinero
- Cantidad total de productos vendidos
- Promedio de venta por transacción  
- Producto más vendido
- Producto que más dinero generó

---

### Ejercicio 2A.7: Calculadora de IMC mejorada
Crea un objeto persona:
```
persona = {
    nombre: (string),
    peso_kg: (number),
    altura_m: (number),
    edad: (number),
    sexo: (M/F),
    peso_ideal: (number)
}
```

Calcula:
- IMC
- Categoría (bajo peso, normal, sobrepeso, obeso)
- Diferencia respecto al peso ideal
- Si el IMC es saludable
- Muestra toda la información de forma legible

---

### Ejercicio 2A.8: Gestor de biblioteca
Crea un sistema simpleeee de libros:
```
biblioteca = {
    nombre: (string),
    ubicacion: (string),
    total_libros: (number),
    libros: [
        { titulo, autor, ano_publicacion, disponible },
        ...
    ]
}
```

Calcula:
- Libros disponibles
- Libros no disponibles
- Libro más antiguo
- Libro más reciente
- Lista de autores

---

## Desafío Final

### Ejercicio Bonus: Tu aplicación inteligente
Combina TODO lo aprendido en una aplicación que:

1. **Recopila información:** Crea objetos/arrays con datos complejos
2. **Realiza cálculos:** Operaciones aritméticas y conversiones
3. **Compara datos:** Usa operadores lógicos
4. **Muestra resultados:** En formato legible

Ejemplos de temas:
- Estadísticas de una clase
- Análisis de un equipo deportivo
- Presupuesto personal
- Catálogo de un negocio
- Cualquier tema que te interese

**Requisitos:**
- Mínimo 5 variables/constantes
- Al menos 2 arrays
- Al menos 1 objeto anidado
- 3+ operaciones aritméticas
- 2+ conversiones de tipos
- Uso de typeof
- Todo mostrado claramente en consola

---

## Tips para resolver los ejercicios

✅ **Lee cuidadosamente** - Asegúrate de entender qué pide cada ejercicio

✅ **Comienza simple** - Resuelve primero la lógica básica

✅ **Usa console.log** - Para verificar valores en cada paso

✅ **Abre la consola** - Presiona F12 para ver resultados

✅ **Experimenta** - Cambia valores y ve qué pasa

✅ **Pide ayuda** - Si estás atascado, mira la solución

✅ **Practica** - Haz los ejercicios más de una vez

---

¡A practicar! 💪
