# 28/09/26

# JavaScript
Es uno de los lenguajes de programación más usados y populares del mundo. Nació en 1995 para darle interactividad
 a las páginas web y desde entonces ha evolucionado hasta convertirse en un lenguaje de programación de propósito general.
 JavaScript necesitarás años de práctica, pero para empezar a hacer cosas interesantes bastará con poco tiempo.

 Para poder seguir el curso y probar lo que vas haciendo necesitarás por ahora un navegador web. 
 Seguramente ya tengas uno instalado, si no es así, te recomiendo que 
 instales Google Chrome o Brave Browser.

# Para abrir la consola del navegador debes hacer lo siguiente:

Abre tu navegador web favorito, por ejemplo, Google Chrome.
Ve a la página about:blank en la barra de direcciones. Así evitaremos que la página web que hemos cargado nos moleste.
Haz click derecho en cualquier parte de la página y selecciona la opción Inspeccionar Elemento o Inspect.

# ¿Para qué sirve la consola del navegador?

La consola sirve para poder jugar con JavaScript. Es la única forma de poder ejecutar nuestro código y por eso todos los navegadores lo incorporan.

La consola nos permite ejecutar código JavaScript en tiempo real y ver el resultado. También ahí podemos ver los errores,
 advertencias y trazas que se producen en nuestro código.

# Tipos de datos

En JavaScript, como cualquier otro lenguaje de programación, vamos a querer trasladar la información del mundo real a nuestro código. P
ara ello, necesitamos entender qué tipos de datos existen en el lenguaje para poder representar la información que necesitamos.

En JavaScript tenemos 9 tipos de datos que se dividen en dos grandes grupos: primitivos o no primitivos. Más adelante 
te contaré qué significa esto, pero por ahora, vamos a ver los tipos primitivos.

# Dentro de los tipos primitivos tenemos 7 tipos de datos:

number
string
boolean
null
undefined
symbol
bigint
No te preocupes, no tienes ni recordarlos ni entenderlos todos ahora. En esta lección vamos a ver los tres primeros que son, 
sin ninguna duda, los que más vamos a usar al inicio del curso.

# Números
Los números (tipo number) son los datos más básicos que podemos representar en JavaScript. En JavaScript, 
no hay una diferencia entre números enteros y números decimales, todos los números son de tipo number:

7
3.14
19.95
2.998e8 - 1

# Operadores aritméticos
Con los números, puedes usar los operadores aritméticos para realizar operaciones matemáticas. 
En JavaScript tenemos los siguientes operadores aritméticos:

+: suma
-: resta
*: multiplicación
/: división
%: módulo (resto de la división)
**: exponente

# Al usar los operadores aritméticos, el resultado siempre será un número. Por ejemplo:

2 + 2 // 4
4 - 2 // 2
3 * 2 // 6
2 / 2 // 1
2 % 2 // 0

# Cadenas de texto
La cadena de texto (tipo string) es otro tipo de dato muy común. En JavaScript,
 las cadenas de texto se representan entre comillas simples, dobles o acentos graves:

# Estás aprendiendo JavaScript'

'JavaScript te va a gustar'`Esto es una cadena de texto`


# Las comillas simples y dobles funcionan igual, pero al usar acentos graves podemos escribir cadenas de texto que ocupen varias líneas:

;`Esto es una cadena de texto
que ocupa varias líneas. Puedes escribir
tantas líneas como quieras`

# Para unir dos cadenas de texto, podemos usar el operador +:

'Estás aprendiendo ' + 'JavaScript' // 'Estás aprendiendo JavaScript'

# Booleanos
Los booleanos representa sólo dos valores: true (verdadero) o false (falso). Por ejemplo:

¿La luz está encendida (true) o apagada (false)?
¿Está lloviendo (true) o no está lloviendo (false)?
¿Está el usuario logueado (true) o no está logueado (false)?
Estos son ejemplos de preguntas que podemos responder con un valor booleano.

true
false

# Operadores de comparación

Los operadores de comparación en JavaScript nos permiten comparar dos valores. Siempre devuelven un valor booleano (true o false).

Por ejemplo, podemos comparar si un número es mayor que otro con el operador >, o si un número es menor que otro con el operador <.

5 > 3 // true
5 < 3 // false
También tenemos los operadores >= y <= que nos permiten comparar si un número es mayor o igual que otro, o si un número es menor o igual que otro.

5 >= 3 // true
5 >= 5 // true
5 <= 3 // false
5 <= 5 // true

# Para saber si dos valores son iguales podemos usar el operador === o, para saber si son diferentes, el operador !==.

5 === 5 // true
5 !== 5 // false

# Comparando cadenas de texto
No sólo podemos usar los comparadores para comparar números, también podemos usarlos para comparar cadenas de texto y otros tipos de datos.

'JavaScript' === 'JavaScript' // true
'JavaScript' === 'Java' // false
'JavaScript' !== 'PHP' // true

`Estoy Aprendiendo JavaScript` === 'Estoy Aprendiendo JavaScript' // true

¿Y si usamos el operador > con cadenas de texto?
Aunque no es muy común, podemos usar los operadores > , >=, < y <= para comparar cadenas de texto.

JavaScript comparará las cadenas de texto según el valor de su código Unicode.

Por ejemplo, la letra A tiene un valor de 65 y la letra B tiene un valor de 66. Por lo tanto, la letra A es menor que la letra B. 
Pero ten cuidado, ya que las letras mayúsculas tienen un valor menor que las letras minúsculas.

'Alfa' > 'Beta' // false
'Omega' > 'Beta' // true
'alfa' > 'Alfa' // true

# Comparando booleanos
También podemos comparar booleanos con los operadores de comparación.

true === true // true
true === false // false
false !== false // false
Por si te preguntas cómo se comportan los operadores de mayor o menor que (> y <) con booleanos te diré que, aunque no tiene sentido, debes saber que true es mayor que false.

true > false // true
false < true // true
true > true // false
false < false // false

# Comparando valores de diferentes tipos
Por ahora hemos visto cómo comparar valores de un mismo tipo, pero ¿Qué pasa si queremos comparar valores de diferentes tipos? 
En JavaScript es algo que es posible pero no suele ser recomendable.

En clases posteriores veremos cómo funciona este tipo de mecanismo y explicaremos el operador de igualdad débil == 
y el operador de desigualdad débil != pero, por ahora, nos limitaremos a utilizar siempre el operador de igualdad estricta === y el operador de desigualdad estricta !==.

# Operadores lógicos
Los operadores lógicos en JavaScript (y en muchos otros lenguajes de programación) se utilizan para evaluar expresiones lógicas.

En JavaScript, hay tres operadores lógicos: AND (&&), OR (||) y NOT (!).

# Operador lógico AND &&
El operador lógico AND se indica con &&. Devuelve true cuando ambos valores que conecta son true.

true && true // → true
true && false // → false
false && false // → false

# Operador lógico OR ||
El operador lógico OR se indica con || y devuelve true cuando cualquiera de los valores que conecta es true.

true || true // → true
true || false // → true
false || false // → false

# Operador lógico NOT !
El operador lógico NOT se indica con ! e invierte el valor de un valor booleano. Se pone delante del valor que queremos invertir.

!true // → false
!false // → true

# Combinando operadores lógicos, aritméticos y de comparación
Los operadores lógicos y los operadores de comparación se pueden combinar para crear expresiones más complejas. 
Por ejemplo, podemos preguntar si un número está entre dos valores.

2 < 3 && 3 < 4 // → true


# También puedes usar paréntesis para agrupar operaciones y usar operadores lógicos y aritméticos.

2 + 2 < 3 && 10 < 8 * 2 // → false
Igualmente, es importante que sepas que las operaciones aritméticas tienen precedencia sobre las operaciones de comparación.

2 + 2 < 3 && 10 < 8 * 2
// Primero se hacen las operaciones aritméticas:
// → 4 < 3 && 10 < 16
// Ahora las comparaciones:
// → false && true
// Finalmente:
// → false

# Variables
A la hora de crear programas, es vital poder almacenar la información para poder utilizarla en un futuro. 
En JavaScript, usamos variables para conseguirlo.

Para crear una variable podemos usar la palabra reservada let y le damos un nombre a la variable. Por ejemplo:

# let numero
Tenemos una variable llamada numero pero no le hemos asignado ningún valor. Para asignarle un valor, usamos el operador de asignación =:

# let numero = 1
Ahora, podemos referirnos a la variable numero y obtener el valor que le hemos asignado.

numero + 1 // -> 1 + 1
También podemos reasignarle un valor a la variable:

numero = 5
numero + 1 // -> 5 + 1

# Ten en cuenta que el valor de la variable no tiene porque ser un número. Puede ser cualquier tipo de dato, como un texto o un booleano.

let welcomeText = 'Hola'
let isCool = true

# Constantes const
Las constantes son variables que no pueden ser reasignadas. Para crear una constante, usamos la palabra reservada const:

const PI = 3.1415
Si intentas reasignar el valor de una constante, obtendrás un error:

PI = 3 // -> TypeError: Assignment to constant variable.
Como no se pueden reasignar, las constantes siempre deben ser inicializadas con algún valor. 
Esto es otra diferencia respecto a let, que no es necesario inicializarla con un valor.

let numero // ✅
const RADIUS // ❌ SyntaxError: Missing initializer in const declaration

# Variables var
En JavaScript, también podemos crear variables usando la palabra reservada var. Es la forma más antigua y 
es normal que encuentres muchos tutoriales que lo usen. Sin embargo, a día de hoy, no es recomendable usar var ya 
que tiene comportamientos extraños que pueden causar errores en tu código.

En una clase posterior te explicaré cuál es la diferencia entre let, const y var además de por qué, siempre que puedas, deberías evitar var.

# El nombre de las variables
En JavaScript, los nombres de las variables pueden contener letras, números y el guión bajo (_).
 Además, el primer carácter del nombre de la variable no puede ser un número.

Es importante tener en cuenta que los nombres de las variables son sensibles a las mayúsculas y minúsculas, 
lo que significa que miVariable y mivariable son dos variables diferentes en JavaScript.

let miVariable = 1
let mivariable = 2
miVariable + mivariable // -> 1 + 2
También es importante que los nombres de las variables sean descriptivos. Por ejemplo, si queremos almacenar el nombre de un usuario, 
podemos llamar a la variable userName. De esta forma, cuando leamos el código, sabremos que la variable contiene el nombre de un usuario.

let n = 'Pepe' // ❌ Mal, no es descriptivo
let userName = 'Juan' // ✅ Bien, se entiende.

# Convenciones y nomenclaturas
En JavaScript, existen diferentes nomenclaturas para nombrar las variables: camelCase, snake_case y SCREAMING_CASE.

camelCase es la forma más común de nombrar las variables en JavaScript. Consiste en escribir,
 la primera palabra en minúsculas y las siguientes palabras con su primera letra en mayúsculas. Por ejemplo:

let camelCase = 1
let camelCaseIsCool = 2
let userName = 'midudev'
snake_case es una forma de nombrar que consiste en escribir todas las palabras en minúsculas y separarlas con guiones bajos. Por ejemplo:

let snake_case = 1
let snake_case_is_cool = 2
let user_name = 'midudev'

# En algunos lenguajes de programación es muy común usar snake_case para nombrar las variables. 
En JavaScript no lo es tanto, pero todavía puedes encontrar código que lo use.

Lo más habitual, y es buena idea, es usarlo en los nombres de archivos. Por ejemplo, mi_archivo.js. 
Esto es porque algunos sistemas operativos distinguen entre mayúsculas y minúsculas y, por tanto, mi_archivo.js y Mi_archivo.js son dos archivos diferentes.

# SCREAMING_CASE es una forma de nombrar que consiste en escribir todas las palabras en mayúsculas y separarlas con guiones bajos. Por ejemplo:

const SCREAMING_CASE = 1
const SCREAMING_CASE_IS_COOL = 2
const USER_NAME = 'midudev'
Para las constantes, con valores que no van a cambiar, es muy común usar SCREAMING_CASE. 
Así se puede distinguir fácilmente de las variables que sí cambian de valor. Por eso, no debes usarla para nombrar variables con let.

# Comentarios
En JavaScript, los comentarios son una forma de agregar explicaciones al código que se ignora al ejecutar el programa.

Los comentarios son útiles para explicar el por qué del código, documentar los cambios realizados en el código y hacer que el código sea más fácil de entender para otros desarrolladores.

Hay dos tipos de comentarios en JavaScript: los comentarios de una sola línea y los comentarios de varias líneas.
# Comentarios de una sola línea //
Los comentarios de una sola línea comienzan con // y se utilizan para agregar una explicación en una sola línea de código. Por ejemplo:

// Sólo usamos 6 decimales
const PI = 3.141592

// Iniciamos el radio por 10, pero puede cambiar
let radio = 10

# Comentarios de varias líneas /* */
Los comentarios de varias líneas comienzan con /* y terminan con */. Se utilizan para agregar notas explicativas que ocupan varias líneas de código. Por ejemplo:

/*
  Este es un comentario de varias líneas.
  Se utiliza para agregar notas explicativas que
  ocupan varias líneas de código.
*/
# Ten en cuenta que también puedes lograr varias líneas usando el tipo de comentario //, sólo que en este caso, cada línea de código debe comenzar con //. Por ejemplo:

// Este es un comentario de varias líneas.
// Se utiliza para agregar notas explicativas
// que ocupan varias líneas de código.

# Console.log
console.log() es una función integrada en JavaScript que se utiliza para imprimir mensajes en la consola del navegador o del editor de código.
 Se utiliza principalmente para depurar el código y para imprimir valores de variables y mensajes para ayudar en el proceso de desarrollo.
 
 Para poder mostrar estos mensajes en consola, debes escribir console.log() y dentro de los paréntesis, el mensaje que quieres mostrar.

# console.log('Hola, JavaScript')
// -> 'Hola, JavaScript'

Como ya sabes concatenar cadenas de texto, puedes mostrar un mensaje y el valor de una variable en el mismo console.log().

# const nombre = 'JavaScript'
# console.log('Hola, ' + nombre)

// -> 'Hola, JavaScript'

# Más métodos de console
Además de console.log(), existen otros métodos que puedes utilizar para imprimir mensajes en la consola. Algunos de ellos son:

# console.error(): Imprime un mensaje de error en la consola.
# console.warn(): Imprime un mensaje de advertencia en la consola.
# console.info(): Imprime un mensaje de información en la consola.

console.error('Error')
// ❌ Error
console.warn('Advertencia')
// ⚠️ Advertencia
console.info('Información')
// ℹ️ Información

# Operador typeof

El operador typeof devuelve una cadena de texto que indica el tipo de un operando. Puede ser usado con cualquier tipo de operando, incluyendo variables y literales.

const MAGIC_NUMBER = 7
typeof MAGIC_NUMBER // "number"
También puedes usarlo directamente con los valores que quieras comprobar:

typeof undefined // "undefined"
typeof true // "boolean"
typeof 42 // "number"
typeof 'Hola mundo' // "string"

Existe, sin embargo, un valor especial en JavaScript, null, que es considerado un bug en el lenguaje. 
El operador typeof devuelve "object" cuando se usa con null:

typeof null // "object"

# Usando con operadores de comparación
El operador typeof es muy útil cuando se usa con operadores de comparación. Por ejemplo, para comprobar si una variable es del tipo que esperamos:

const age = 42
typeof age === 'number' // true

Una vez que tenemos expresiones lógicas, podemos empezar a encadenar operadores lógicos para comprobar múltiples condiciones:

const age = 42
typeof age === 'number' && age > 18 // true

# null y undefined
¿Recuerdas que te he comentado que existen diferentes tipos de datos en JavaScript? Hemos visto números, cadenas de texto y booleanos.

En esta clase vas a aprender otros dos tipos de datos que, aunque son similares, tienen ligeras diferencias. Son null y undefined.

La particularidad de estos dos tipos de datos es que cada uno sólo tiene un valor. 
El tipo null sólo puede tener el valor null y el tipo undefined sólo puede tener el valor undefined.

# La diferencia entre null y undefined
Mientras que null es un valor que significa que algo no tiene valor, undefined significa que algo no ha sido definido. 
Por ejemplo, si creamos una variable sin asignarle ningún valor, su valor será undefined:

let rolloDePapel // -> undefined


En cambio, para que una variable tenga el valor null, sólo podemos conseguirlo asignándole explícitamente ese valor:

let rolloDePapel = null

# Comparaciones con null y undefined
Al usar la igualdad estricta que hemos visto en la clase anterior, null y undefined son considerados diferentes entre sí:

null === undefined // -> false
Sólo cuando comparamos null con null o undefined con undefined obtenemos true:

null === null // -> true
undefined === undefined // -> true

# Condicional if
El código condicional es un bloque de código que se ejecuta sólo si se cumple una condición. En JavaScript usamos la palabra reservada if para crear un bloque condicional, así:

if (condición) {
  // código que se ejecuta si la condición es verdadera
}
Como ves, ponemos la condición entre paréntesis y el código se ejecuta si la condición entre llaves es true. Si la condición es false, el código no se ejecuta.

# Imagina que quieres mostrar un mensaje si la edad de un usuario es mayor o igual a 18 años. Podrías hacerlo así:

const edad = 18

if (edad >= 18) {
  console.log('Eres mayor de edad')
}

# else
Es posible utilizar la palabra clave else para ejecutar un bloque de código diferente si la condición es falsa:

const edad = 17

if (edad >= 18) {
  console.log('Eres mayor de edad')
} else {
  console.log('Eres menor de edad')
}
Esto es útil para ejecutar un bloque de código u otro dependiendo de si se cumple o no una condición.

# else if
También podemos utilizar la palabra clave else if para comprobar más de una condición:

const edad = 17

if (edad >= 18) {
  console.log('Eres mayor de edad')
} else if (edad >= 16) {
  console.log('Eres casi mayor de edad')
} else {
  console.log('Eres menor de edad')
}

El programa comprueba la primera condición. Si es true, ejecuta el código dentro del bloque if. Si es false, 
comprueba la siguiente condición. Si es true, ejecuta el código dentro del bloque else if. Si es false, ejecuta el código dentro del bloque else.

Dicho de otra forma, entrará en el primer bloque que cumpla la condición y no entrará en los demás.
 Si no cumple ninguna, entonces entrará en el bloque else.

 # Anidación de condicionales

onst edad = 17
const tieneCarnet = true

if (edad >= 18) {
  if (tieneCarnet) {
    console.log('Puedes conducir')
  } else {
    console.log('No puedes conducir')
  }
} else {
  console.log('No puedes conducir')
}
# En muchas ocasiones vas a querer evitar la anidación innecesaria de condicionales ya que se hacen difíciles de leer y mantener.
# En estos casos es mejor utilizar operadores lógicos para crear la condición:

const edad = 17
const tieneCarnet = true
const puedeConducir = edad >= 18 && tieneCarnet

if (puedeConducir) {
  console.log('Puedes conducir')
} else {
  console.log('No puedes conducir')
}

const edad = 17
const tieneCarnet = true

// si es mayor de edad y tiene carnet entonces...
if (edad >= 18 && tieneCarnet) {
  console.log('Puedes conducir')
} else {
  console.log('No puedes conducir')
}

# La importancia de las llaves
Es importante que sepas que las llaves {} no siempre son obligatorios. Si el bloque de código sólo tiene una línea, puedes omitir las llaves:

const edad = 17

if (edad >= 18) console.log('Eres mayor de edad')
else console.log('Eres menor de edad')
También lo puedes escribir en la misma línea separando las sentencias con punto y coma ;:

const edad = 18
if (edad >= 18) console.log('Eres mayor de edad'); else console.log('Eres menor de edad')
Sin embargo, te recomiendo que mientras estés aprendiendo siempre escribas las llaves. Esto te ayudará a evitar errores y a que tu código sea más legible.

# Bucles con while
Un bucle es una estructura de control que permite repetir un bloque de instrucciones. Vamos, repetir una tarea tantas veces como queramos.

En JavaScript, existen varias formas de lograrlo, y una de ellas es el bucle con while.
 El bucle while es una estructura de control de flujo que ejecuta una sección de código mientras se cumple una determinada condición.

En esta clase, vamos a explicar cómo funciona el bucle while en JavaScript y cómo podemos utilizarlo en nuestros programas.

# Sintaxis
La sintaxis del bucle while es similar a la de un condicional if. La única diferencia es que,
en lugar de ejecutar el código una sola vez, se ejecuta mientras se cumpla la condición.

while (condición) {
  // código a ejecutar mientras se cumpla la condición
}

El bucle comienza evaluando la condición dentro de los paréntesis. Si la condición es true, se ejecuta el código dentro de las llaves.

Después de ejecutar el código, la condición se evalúa de nuevo, y si sigue siendo verdadera, 
el código dentro de las llaves se ejecuta de nuevo. Este proceso se repite hasta que la condición se evalúa como falsa.

Ten en cuenta que, si la condición es falsa desde el principio, el código dentro de las llaves nunca se ejecutará.

# Ejemplo de uso de while
Vamos a crear la cuenta atrás de un cohete. Creamos una variable cuentaAtras que contenga el número de segundos que faltan para el lanzamiento. En este caso, vamos a empezar con 10 segundos.

let cuentaAtras = 10
Para quitarle un segundo a la cuenta atrás, vamos a utilizar el operador de resta (-) y el operador de asignación (=).

let cuentaAtras = 10
cuentaAtras = cuentaAtras - 1
console.log(cuentaAtras) // -> 9
Sabiendo esto y cómo funciona el bucle while, podemos crear la cuenta atrás del cohete.

// iniciamos la variable fuera del bucle
let cuentaAtras = 10

// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // mostramos el valor de la cuenta atrás en cada iteración
  console.log(cuentaAtras)
  // restamos 1 a la cuenta atrás
  cuentaAtras = cuentaAtras - 1
}

console.log('¡Despegue! 🚀')

# Cuidado con los bucles infinitos
Los bucles while son muy potentes, pero también pueden ser peligrosos. Si la condición nunca se evalúa como falsa, el bucle se ejecutará infinitamente.

while (true) {
  console.log('¡Hola hasta el infinito!')
}
Esto evaluará la condición true como verdadera, y ejecutará el código dentro de las llaves una y otra vez.

# Saliendo de un bucle con break
Podemos controlar cuándo queremos salir de un bucle utilizando la palabra reservada break. Cuando el intérprete de JavaScript encuentra la palabra break, sale del bucle y continúa ejecutando el código que haya después.

let cuentaAtras = 10

while (cuentaAtras > 0) {
  console.log(cuentaAtras)
  cuentaAtras = cuentaAtras - 1

  // si la cuenta atrás es 5, salimos del bucle
  if (cuentaAtras === 5) {
    break // <---- salimos del bucle
  }
}
¿Cuál es el valor de cuentaAtras en este código? Veamos, el bucle estaba haciendo una cuenta atrás... 
∫pero le hemos dicho que cuando tuviese el valor 5 saliese del bucle. Por lo tanto, el valor de cuentaAtras es 5.

Usar break puede ser útil en bucles si queremos salir de ellos por alguna condición en concreto o para evitar justamente los bucles infinitos.


# Saltando una iteración con continue
gual que tenemos la posibilidad de "romper" el bucle con break, también podemos saltarnos una iteración con continue. Cuando el intérprete de JavaScript encuentra la palabra continue, salta a la siguiente iteración del bucle.

let cuentaAtras = 10

while (cuentaAtras > 0) {
  cuentaAtras = cuentaAtras - 1

  // si la cuenta atrás es un número par...
  if (cuentaAtras % 2 === 0) {
    continue // <---- saltamos a la siguiente iteración
  }

  console.log(cuentaAtras)
}

# Anidación de bucles
Podemos anidar bucles dentro de otros bucles. Imagina que en nuestra cuenta atrás para el cohete, 
tenemos que revisar que 3 cosas están en sus parámetros: el oxígeno, el combustible y la temperatura.

const NUMERO_REVISIONES = 3
let cuentaAtras = 10

// mientras la cuenta atrás sea mayor que 0
while (cuentaAtras > 0) {
  // mostramos el valor de la cuenta atrás
  console.log(cuentaAtras)

  // creamos una variable para contar las revisiones realizadas
  // y la inicializamos a cero
  let revisionesRealizadas = 0

  // hasta que no hayamos realizado las 3 revisiones...
  while (revisionesRealizadas < NUMERO_REVISIONES) {
    // y sumamos 1 a las revisiones realizadas
    revisionesRealizadas = revisionesRealizadas + 1
    console.log(revisionesRealizadas + ' revisiones realizadas...')
  }

  // ahora podemos restar 1 a la cuenta atrás
  cuentaAtras = cuentaAtras - 1
}
Además del bucle anidado, hay algo también muy interesante en el código anterior y es la creación de la variable let revisionesRealizadas.

Ten en cuenta que esa variable se creará y se inicializará a 0 en cada iteración del bucle.

Las variables creadas con let y const que se crean dentro de un bucle, solo existen dentro de ese bucle. Cuando el bucle termina, 
la variable desaparece. De hecho si intentas acceder a ella fuera del bucle, te dará un error.

let cuentaAtras = 10

while (cuentaAtras > 0) {
  let revisionesRealizadas = 3
  console.log(revisionesRealizadas)
  cuentaAtras = cuentaAtras - 1
}

console.log(revisionesRealizadas) // -> ERROR: ReferenceError
Esto también pasa con otras estructuras de control. Eso es porque el alcance de las variables creadas con let y const 
s el bloque entre {} en el que se crean. Lo iremos viendo más adelante para que vayas practicando, no te preocupes.

# Bucles con do while
Aunque no es muy famoso ni muy utilizado, es interesante que sepas que existe en JavaScript un bucle que se ejecuta al menos una vez, y luego se repite mientras se cumpla una condición. Este bucle se llama do while y tiene la siguiente sintaxis:

do {
  // código que se ejecuta al menos una vez
} while (condición)


# confirm
La función confirm muestra un cuadro de diálogo con dos botones: "Aceptar" y "Cancelar".
 Si el usuario pulsa "Aceptar", la función devuelve true. Si pulsa "Cancelar", devuelve false.

confirm('¿Te gusta JavaScript?')
Llamar a la función confirm es una expresión y, por lo tanto, produce un valor que podemos guardar en una variable.

let respuesta = confirm('¿Te gusta JavaScript?')
console.log(respuesta) // -> true o false

Usando do while
Vamos a hacer un programa que saldrá de un bucle do while cuando el usuario pulse "Cancelar" en el cuadro de diálogo que muestra la función confirm.

let respuesta

do {
  respuesta = confirm('¿Te gusta JavaScript?')
} while (respuesta)

# Expresiones y Declaraciones
En JavaScript, existen dos tipos de elementos fundamentales para escribir código: expresiones y declaraciones. 
unque estos términos pueden parecer confusos al principio, son conceptos clave para comprender cómo funciona JavaScript.

# Declaraciones
Las declaraciones en JavaScript son sentencias que definen la creación de una variable, función o clase. 
Podríamos decir que las declaraciones son como las instrucciones que le damos a JavaScript para que haga algo.

Por ejemplo, una declaración de variable es una sentencia que le da un nombre y un valor a una variable. El siguiente código es un ejemplo de una declaración de variable:

let nombre = 'Juan'
Este código no lo puedes usar con el método console.log, ya que no produce ningún valor. Si lo intentas, obtendrás un error:

console.log(let nombre = "Juan") // SyntaxError

# Expresiones
Las expresiones en JavaScript son sentencias que producen un valor. Las expresiones pueden ser tan simples como un solo número o una cadena de texto, 
o tan complejas como el cálculo de una operación matemática, la evaluación de diferentes valores o la llamada a una función.

Por ejemplo, una expresión numérica es una sentencia que produce un número:

2 + 3 // -> 5
De hecho, lo que guardamos en las variables son expresiones. Por ejemplo, en el siguiente código, la expresión 2 + 3 se evalúa y el resultado se guarda en la variable resultado:

let resultado = 2 + 3
En ese código tenemos la declaración que queremos guardar en la variable resultado el resultado de la expresión 2 + 3.

# ¿Por qué es importante la diferencia?
La diferencia entre declaraciones y expresiones es importante ya que no podemos usar una declaración donde se espera una expresión y viceversa.

Por ejemplo, ya hemos conocido las estructuras de control if y while. Ambas esperan una expresión que se evalúa a un valor booleano. Por lo tanto, no podemos usar una declaración en su lugar:

// ❌ Ambos códigos están mal y sirven para
// ilustrar que no debes usar declaraciones
// cuando espera expresiones

if (let nombre = "Juan") { // ❌ SyntaxError
  console.log("Hola, Juan")
}

while (let i = 0) { // ❌ SyntaxError
  console.log("Iteración")
  i = i + 1
}

# Bucles con for
La estructura de control for en JavaScript es muy útil para ejecutar una serie de instrucciones un número determinado de veces. 
A diferencia de while que usa una condición para determinar si se ejecuta o no el bloque de código, for usa un contador que se incrementa en cada iteración hasta que se cumple una condición.

La sintaxis de for es la siguiente:

for (inicialización; condición; actualización) {
  // código a ejecutar
}
Importante, fíjate que for tiene tres partes separadas por ;:

La inicialización se realiza antes de que se inicie el bucle y se utiliza para declarar variables y asignar valores iniciales.

La condición es una expresión booleana que se evalúa antes de cada iteración del bucle. Si la expresión se evalúa como true,
 se ejecuta el bloque de código dentro del bucle. Si la expresión se evalúa como false, el bucle termina.

La actualización se utiliza para actualizar el valor de la variable de control del bucle después de cada iteración. Normalmente,
 se incrementa o decrementa el valor de la variable de control del bucle.

 # Ejemplo de uso de for
El siguiente ejemplo muestra cómo se puede usar for para imprimir los números del 1 al 10:

for (let number = 1; number <= 10; number++) {
  console.log(number)
}
La inicialización es la declaración de la variable number y la asignación del valor 1.
La condición es que mientras number <= 10, se itera el bucle.
La actualización es number++ que incrementa el valor de number en 1 después de cada iteración.

# Oh, espera, ¿qué es eso de number++? Te lo explico.

Incrementando números con ++
El operador ++ nos permite incrementar el valor de una variable número en 1. Por ejemplo, si tenemos la variable i con el valor 5, i++ incrementaría el valor de i en 1, es decir, i pasaría a valer 6.

let i = 5
i++
console.log(i) // -> 6
Es una forma abreviada de escribir i = i + 1. Y, como ves, es la forma más típica de usar en bucles como for para no tener que escribir i = i + 1 cada vez.

# Iterando al revés
El método for en JavaScript también se puede utilizar para iterar al revés Para ello, se utiliza la sintaxis i-- en la sección de actualización del bucle en lugar de i++.

La sintaxis del método for para iterar en reversa es la siguiente:

for (let i = 10; i >= 0; i--) {
  if (i === 0) {
    console.log('¡Despegue 🚀!')
  } else {
    console.log('Faltan ' + i + ' segundos')
  }
}

# Llevando más allá el bucle for
Aunque siempre los ejemplos con for son los mismos, ten en cuenta que puedes hacer cualquier cosa en la inicialización, 
condición y actualización. Podrías, por ejemplo, usar dos variables a la vez.

for (let i = 0, j = 5; i < 5; i++, j--) {
  console.log(i, j)
}
La coma , nos permite declarar dos variables en la inicialización y actualizarlas en la actualización. En este caso la ,
 es un operador que evalua cada uno de sus operandos (de izquierda a derecha) y retorna el valor del último operando.

No es muy común su uso, pero es bueno saber que existe.

continue y break
Al igual que en while, for también tiene las palabras reservadas continue y break para controlar el flujo de ejecución del bucle.

Recuerda que continue se usa para saltar a la siguiente iteración del bucle y break para salir del bucle.

Ejemplo:

for (let i = 0; i < 10; i++) {
  const esPar = i % 2 === 0
  if (esPar) {
    continue
  }

  // Solo mostramos este consola.log si es impar
  console.log(i)

  // Salimos del bucle al llegar al 7
  if (i === 7) {
    break
  }
}

# Bucles anidados con for
Imagina que quieres crear la tabla de multiplicar del 1 al 10. Para ello, necesitas un bucle que itere del 1 al 10 y, 
dentro de ese bucle, otro bucle que itere del 1 al 10. Esto se puede hacer con dos bucles for anidados (uno dentro del otro).

for (let i = 1; i <= 10; i++) {
  for (let j = 1; j <= 10; j++) {
    const resultado = i * j
    console.log(i + ' x ' + j + ' = ' + resultado)
  }
}

# Condiciones con Switch
En JavaScript, la sentencia switch es una estructura de control que nos permite ejecutar diferentes bloques de código
 dependiendo del valor de una expresión. Esta estructura es útil cuando queremos realizar diferentes acciones basadas en una única variable.

Sintaxis
La sentencia switch evalúa una expresión, comparando el valor con los diferentes casos que le hemos definido.
 Si hay coincidencia ejecuta el bloque de código asociado. Para ello, se utiliza la sentencia break para separar cada caso y evitar que se sigan evaluando el resto de casos.

switch (expresión) {
  case valor1:
    // código a ejecutar si la expresión coincide con valor1
    break

  case valor2:
    // código a ejecutar si la expresión coincide con valor2
    break
  default:
    // código a ejecutar si la expresión no coincide con ningún valor
    break
}

# Por ejemplo si queremos mostrar un mensaje diferente dependiendo del día de la semana:

const dia = 'lunes'

switch (dia) {
  case 'lunes':
    console.log('¡Hoy es lunes! 😢')
    break

  default:
    console.log('No es lunes, YAY! 🚀')
    break
}

Vamos a hacer esto un poco más interesante. En JavaScript podemos recuperar la información de la hora y la fecha usando el objeto Date. 
Este objeto tiene un método llamado getDay() que nos devuelve el día de la semana en formato numérico, siendo 0 el domingo y 6 el sábado.

# const dia = new Date().getDay()

// segun el dia de la semana, mostramos un mensaje diferente
switch (dia) {
  case 0:
    console.log('¡Hoy es domingo! 😴')
    break
  case 1:
    console.log('¡Nooo, es lunes! 😢')
    break
  case 2:
    console.log('¡Hoy es martes! 🥵')
    break
  case 3:
    console.log('¡Hoy es miércoles! 🤓')
    break
  default:
    console.log('Se acerca el fin de! 🚀')
    break
}

# Agrupando cases
En ocasiones, queremos que varios casos ejecuten el mismo código. En lugar de repetir el mismo código en cada caso, podemos agruparlos usando el mismo case para cada uno de ellos.

const dia = new Date().getDay()

switch (dia) {
  case 0:
  case 6:
    console.log('¡Hoy es fin de semana! 🥳')
    break
  case 1:
  case 2:
  case 3:
  case 4:
    console.log('¡Nooo, a trabajar! 😢')
    break
  case 5:
    console.log('¡Hoy es viernes! 🤓')
    break
}
Como ves, en este caso, tampoco estamos usando el default. Como te comentaba antes, es totalmente opcional, no tienes por qué usarlo siempre.

¡No olvides el break!
Es muy importante que no te olvides de poner el break al final de cada caso. Si no lo pones, se ejecutarán todos los casos que vengan después del que coincide. Por ejemplo:

// ❌ Este código no es correcto
// Lo muestro para que veas qué pasa
// si no pones break en tus casos
const dia = new Date().getDay()

switch (dia) {
  case 0:
    console.log('¡Hoy es domingo! 😴')
  case 1:
    console.log('¡Nooo, es lunes! 😢')
  case 2:
    console.log('¡Hoy es martes! 🥵')
  case 3:
    console.log('¡Hoy es miércoles! 🤓')
  default:
    console.log('Se acerca el fin de! 🚀')
}
Si hoy es martes (2), se ejecutarán todos los casos después de ese, ya que no hay ningún break que lo impida. 
Por lo tanto, el resultado en consola sería:

¡Hoy es martes! 🥵
¡Hoy es miércoles! 🤓
Se acerca el fin de! 🚀
El patrón switch(true)
Existe un patrón que se usa a veces con switch que es switch(true). 
Esto es, en lugar de evaluar una expresión, evalúa una condición ignorando por completo el valor de la expresión.

Por ejemplo:

let edad = 25

switch (true) {
  case edad >= 18 && edad < 25:
    console.log('Eres mayor de edad y eres joven')
    break
  case edad >= 25 && edad < 40:
    console.log('Eres mayor de edad y estás en plena madurez')
    break
  case edad >= 40:
    console.log('Eres mayor de edad y estás en la mejor edad')
    break
  default:
    console.log('Eres menor de edad')
}
Es un patrón algo más avanzado y es una alternativa a usar if y else if. En mi opinión, es más difícil de leer, 
ya que puede crear un poco de confusión. Pero es bueno que lo conozcas por si te lo encuentras en algún sitio.

# Tu primera función
na función es un bloque de código que realiza una tarea específica cuando se llama. 
Puedes pensar en una función como en un microondas: le das algo para cocinar, le pasas algunos parámetros 
(como el tiempo y la potencia) y luego hace su trabajo y te devuelve el resultado.

En JavaScript, las funciones se pueden definir de varias maneras, pero la forma más común
 y básica es mediante la palabra clave function. Esta es tu primera función:

function saludar() {
  console.log('Hola Evelyn')
}
Como ves, declarar una función consiste de:

La palabra reservada function que indica que estamos definiendo una función.
El nombre de la función, en este caso saludar. Normalmente usamos verbos para nombrar funciones, ya que son acciones que realizan.
Un par de paréntesis () después del nombre. Pueden contener parámetros. En este caso, no tenemos ninguno.
Un bloque de código entre llaves {}. En este caso, solo tenemos una línea de código, pero podríamos tener muchas más.
Nuestra funció.

@ Para llamar a una función, simplemente escribimos su nombre seguido de paréntesis:

saludar() // -> Hola Evelyn

# Devolviendo un resultado
Las funciones pueden devolver un resultado. Para ello, utilizamos la palabra reservada return y después el valor que queremos devolver:

function sumar() {
  return 1 + 1
}
Ahora, cada vez que llamemos a la función sumar, nos devolverá el resultado de la suma:

// podemos guardar el resultado en una variable
const resultado = sumar()

// o ver en consola directamente el resultado
console.log(sumar()) // -> 2

# Una función realmente útil
La función saludar y sumar no parecen muy útiles, pero con lo poco que sabemos ya podemos hacer cosas más productivas. Por ejemplo, podemos crear una función que nos devuelva un número aleatorio del 1 al 10.

Para ello vamos a descubrir Math, un objeto incorporado en JavaScript que tiene propiedades y métodos para constantes y funciones matemáticas. Vamos a ver dos métodos que nos van a ser muy útiles:

# Math.random(): devuelve un número aleatorio entre 0 y 1, con decimales.
# Math.floor(): redondea un número hacia abajo.

Sabiendo esto, podríamos crear una función que nos devuelva un número aleatorio del 1 al 10:

function getRandomNumber() {
  // recuperamos un número aleatorio entre 0 y 1
  const random = Math.random() // por ejemplo: 0.6803487380457318

  // lo multiplicamos por 10 para que esté entre 0 y 10
  const multiplied = random * 10 // -> 6.803487380457318

  // redondeamos hacia abajo para que esté entre 0 y 9
  const rounded = Math.floor(multiplied) // -> 6

  // le sumamos uno para que esté entre 1 y 10
  const result = rounded + 1 // -> 7

  // devolvemos el resultado
  return result
}

# Parámetros
Hasta ahora hemos visto como crear funciones y cómo llamarlas. Pero para poder desbloquear todo el potencial de las funciones, 
necesitamos que puedan recibir parámetros. Esto es, que su comportamiento pueda cambiar según los datos que le pasemos.

Imagina que queremos que nuestra función de saludar, pueda saludar a cualquier persona, no solo a Evelyn.
 Para ello, podemos hacer que la función acepte un parámetro, que será el nombre de la persona a la que queremos saludar.

function saludar(nombre) {
  console.log('Hola ' + nombre)
}
Ahora, cada vez que llamemos a la función, podemos pasarle una cadena de texto:

saludar('Evelyn') // -> Hola Evelyn
saludar('Itziar') // -> Hola Itziar
saludar('Carmen') // -> Hola Carmen

Ya ves como algo que parece tan sencillo, tiene un poder enorme. Las funciones son la base de 
la programación y nos permiten crear programas complejos a partir de pequeñas piezas.

Por ejemplo, para crear una calculadora, deberíamos empezar a crear funciones que realicen las operaciones básicas. 
En este caso necesitaremos parametrizar la función para que acepte los dos números para hacer la operación.

function sumar(a, b) {
  return a + b
}

function restar(a, b) {
  return a - b
}
Y ya podríamos usarlas:

const resultadoSuma = sumar(2, 3)
console.log(resultadoSuma) // -> 5

const resultadoResta = restar(5, 2)
console.log(resultadoResta) // -> 3

# Parámetros y argumentos
En el ejemplo anterior, hemos visto que podemos pasarle valores a la función cuando la llamamos.
 A estos valores se les llama argumentos. Y a los valores que recibe la función, se les llama parámetros.

// la función suma tiene dos parámetros: a y b
function sumar(a, b) {
  return a + b
}

// cuando llamamos a la función, le pasamos dos argumentos: 2 y 3
const resultadoSuma = sumar(2, 3)
Normalmente mucha gente confunde los términos y usa parámetro para referirse a los argumentos. 
Pero es importante que sepas diferenciarlos, porque son cosas distintas.

# Funciones como parámetros
En JavaScript, las funciones son ciudadanos de primera clase (first-class citizens). 
Esto significa que las funciones se pueden tratar como cualquier otro valor: se pueden asignar a variables, 
pasar como argumentos a otras funciones, y devolver desde otras funciones

# ¿Qué significa "funciones de primera clase"?
Que las funciones son valores como cualquier otro. Al igual que puedes pasar un número o un string como parámetro, también puedes pasar una función:

function saludar(nombre) {
  console.log('¡Hola, ' + nombre + '!')
}

function despedir(nombre) {
  console.log('¡Adiós, ' + nombre + '!')
}

# Función que recibe OTRA FUNCIÓN como parámetro
function procesarUsuario(nombre, accion) {
  accion(nombre) // Ejecutamos la función que nos pasaron
}

# Pasamos diferentes funciones como parámetros
procesarUsuario('Ana', saludar)   // ¡Hola, Ana!
procesarUsuario('Luis', despedir) // ¡Adiós, Luis!

# Ejemplo práctico: Calculadora flexible
Un ejemplo muy sencilla es el de una calculadora flexible. Podemos pasar la operación que queremos realizar como parámetro además de los dos números.

function sumar(a, b) {
  return a + b
}

function multiplicar(a, b) {
  return a * b
}

function restar(a, b) {
  return a - b
}

// Función que recibe una operación como parámetro
function calcular(num1, num2, operacion) {
  const resultado = operacion(num1, num2)
  console.log('El resultado es: ' + resultado)
  return resultado
}

// Usamos diferentes operaciones
calcular(5, 3, sumar)       // El resultado es: 8
calcular(5, 3, multiplicar) // El resultado es: 15
calcular(5, 3, restar)      // El resultado es: 2

# Funciones anónimas como parámetros
También puedes pasar funciones que no tienen nombre (funciones anónimas):

// Función anónima pasada directamente
calcular(10, 2, function(a, b) {
  return a / b
})
// El resultado es: 5

// O usando funciones flecha (las veremos más adelante)
calcular(4, 3, (a, b) => a ** b) // El resultado es: 64 (4 elevado a 3)
¿Por qué es útil esto?
# Las funciones como parámetros nos permiten crear código más flexible y reutilizable:

function repetirAccion(veces, accion) {
  for (let i = 0; i < veces; i++) {
    accion(i)
  }
}

// Diferentes acciones
repetirAccion(3, function(numero) {
  console.log('Iteración número: ' + numero)
})

repetirAccion(5, function(numero) {
  console.log('⭐'.repeat(numero + 1))
})
Este concepto es fundamental en JavaScript y lo usarás constantemente cuando trabajes con arrays, eventos, y programación asíncrona.

# El orden de los parámetros importa
Algo muy importante, y un error muy común al empezar a crear funciones, es olvidar que el orden de los parámetros importa.

Vamos a crear una función que simule un microondas. Le pasaremos el plato, tiempo y potencia. Y nos devolverá el resultado del plato cocinado.

function cocinarMicroondas(plato, tiempo, potencia) {
  if (plato === '🐥' && tiempo === 1 && potencia === 5) {
    return '🍗'
  }

  if (plato === '🥚' && tiempo === 2 && potencia === 3) {
    return '🍳'
  }

  return '❌ Plato no soportado'
}

# Si usamos bien los parámetros, la función funciona correctamente:

const resultado = cocinarMicroondas('🐥', 1, 5)
console.log(resultado) // -> 🍗
Pero si cambiamos el orden de los parámetros, la función no funciona:

const resultado = cocinarMicroondas(1, 5, '🐥')
console.log(resultado) // -> '❌ Plato no soportado'
Esto es porque la función espera que el primer parámetro sea el plato, el segundo el tiempo y el tercero la potencia.
 Si cambiamos el orden, podemos tener comportamientos inesperados o errores.

Más adelante veremos una forma en la que podemos evitar este tipo de errores.

# Function Expression

Hasta ahora hemos visto cómo podemos declarar funciones usando la palabra clave function.

Sin embargo, existen dos formas más de declarar funciones en JavaScript: function expression y arrow function. En este caso, hablemos de la primera.

# ¿Qué es una function expression?
Una function expression es una función que se asigna a una variable. Por ejemplo:

// esto es una function expression
const sum = function (a, b) {
  return a + b
}

// esto es una declaración de función
function sum(a, b) {
  return a + b
}

# Con la function expression, a la función se asigna a la variable sum. Esto significa que podemos llamar a la función usando el nombre de la variable:

sum(1, 2) // 3
El comportamiento es muy similar al de una función declarada con la palabra clave function.
 Sin embargo, hay una diferencia muy importante entre ambas que debes conocer: el hoisting.

# Hoisting
El hoisting es un término que se usa para describir cómo JavaScript parece que mueve las declaraciones 
funciones al principio del código, de forma que las puedes usar incluso antes de declararlas. Por ejemplo:

sum(1, 2) // 3

function sum(a, b) {
  return a + b
}
# Aquí primero usamos la función y la declaramos luego. ¡Y funciona! ¿Cómo puede ser? ¿No debería darnos un error ya que la función todavía no existe?

Lo que está pasando es que JavaScript asigna en memoria durante la fase de compilación las declaraciones 
e funciones y por eso al ejecutarse el código tiene acceso a esa posición de memoria a la que se refiere la función.

Eso sería la explicación técnica del hoisting, pero si te sirve de ayuda, puedes pensar que es como
 si JavaScript moviese las declaraciones de funciones al principio del código.

¿Y qué pasa con las function expression?
Pues que no se aplica el hoisting. Por ejemplo:

sum(1, 2) // ❌ ReferenceError: sum is not defined

const sum = function (a, b) {
  return a + b
}

# Funciones flecha
En esta clase vamos a hablar sobre las funciones flecha, también conocidas como arrow functions en inglés.

Las funciones flecha son una forma más concisa de crear funciones en JavaScript, y se han vuelto muy populares en los últimos años debido a su sintaxis simplificada.

La sintaxis básica de una función flecha es la siguiente:

const miFuncionFlecha = () => {
  // código a ejecutar
}

# Ventajas de las funciones flecha
Las funciones flecha tienen varias ventajas sobre las funciones regulares en JavaScript. Algunas son:

Sintaxis más concisa: la sintaxis de las funciones flecha es más corta y más fácil de leer que la sintaxis
 de las funciones regulares, especialmente cuando se trabaja con funciones de una sola línea.

Return implícito: las funciones flecha puede devolver el valor de la expresión sin usar la palabra 
clave return cuando son de una sola línea. Esto hace que las funciones flecha sean aún más cortas y más fáciles de leer.

Funciones anónimas más legibles: las funciones flecha son una forma más legible y concisa de 
crear funciones anónimas en JavaScript, lo cual puede hacer que nuestro código sea más fácil de entender.

# Return implícito
Cuando una función flecha tiene una sola expresión, podemos omitir las llaves {} y la palabra clave return
 para hacerla aún más corta. Esto se conoce como return implícito. Vamos a pasar una función regular
  a una función flecha y vamos a ver cómo se ve finalmente con return implícito:

// Declaración de función regular
function sumar(a, b) {
  return a + b
}

// Función flecha
const sumarFlecha = (a, b) => {
  return a + b
}

// Función flecha con return implícito
const sumarFlecha = (a, b) => a + b
Como podemos ver, la función flecha con return implícito es mucho más corta y fácil de leer que la función regular.
Esto es especialmente útil cuando estamos trabajando con funciones de una sola línea.

# Recursividad
La recursividad es una técnica de programación que consiste en que una función se llame a sí misma.

Pero claro, si una función se llama a sí misma, ¿cuándo termina? ¿cómo se evita que se llame infinitamente? Con una condición base.

# Ejemplo de recursividad
Vamos a crear una función que cuente desde un número hasta cero.

function cuentaAtras(numero) {
  // Condición base: Si el número que recibe es
  // menor de 0 entonces salimos de la función
  if (numero < 0) {
    return
  }

  // Si el número era mayor o igual a 0, lo mostramos
  console.log(numero)

  // Y llamamos a la función con el número anterior
  cuentaAtras(numero - 1)
}
Si llamamos a la función con el número 3, el resultado será:

cuentaAtras(3)
// -> 3
// -> 2
// -> 1
// -> 0

# sando recursividad y devolviendo un valor
La recursividad se usa muchas veces para solucionar algoritmos. Por ejemplo, vamos a crear una función que calcule el factorial de un número.

# Usando recursividad y devolviendo un valor
La recursividad se usa muchas veces para solucionar algoritmos. Por ejemplo, vamos a crear una función que calcule el factorial de un número.

Nota
El factorial de un número es el resultado de multiplicar ese número por todos los anteriores hasta llegar a 1. Por ejemplo, el factorial de 5 es 5 _ 4 _ 3 _ 2 _ 1 = 120

function factorial(n) {
  // Condición base: Si el número es 0 o 1, devolvemos 1
  // y no llamamos a la función de nuevo
  if (n === 0 || n === 1) {
    return 1
  } else {
    // Si el número es mayor que 1, llamamos a la función
    return n * factorial(n - 1)
  }
}

console.log(factorial(5)) // Resultado: 120
console.log(factorial(3)) // Resultado: 6

# La recursividad es un concepto que cuesta entender al principio. ¿Una función que se llama a sí misma? A mucha gente le vuela la cabeza.

¿Qué te recomiendo para aprenderlo? Primero, entiende los ejemplos que hemos hecho y dibuja en un papel cómo se ejecutan las funciones.

Después, haz estos ejercicios de recursividad:

Escribe una función que calcule la suma de los primeros n números enteros de forma recursiva. Por ejemplo: suma(3) -> 1 + 2 + 3 = 6

Escribe una función que calcule la sucesión de Fibonacci de forma recursiva. La sucesión de Fibonacci es una serie de números que empieza
 por 0 y 1 y cada número es la suma de los dos anteriores. Por ejemplo: fibonacci(6) -> 8 (0, 1, 1, 2, 3, 5, 8)

 # ¿Qué son los Arrays en JavaScript?
 Hasta ahora hemos visto algunos tipos de datos. Cadenas de texto, números, booleanos... Pero... ¿Qué pasa si queremos tener una colección de ellos? En JavaScript tenemos los arrays.

Declaración y asignación de arrays
Para declarar un array usamos los corchetes [] y dentro los elementos de la colección separados por comas ,.

# Por ejemplo, para crear una colección de números del 1 al 5:

[1, 2, 3, 4, 5]
Los elementos de un array pueden ser de cualquier tipo, incluso otros arrays.

[1, 2, 3, 4, [5, 6, 7, 8, 9]]
Y, aunque no siempre sea recomendable, puedes mezclar tipos de datos dentro:

['uno', 2, true, null, undefined]
Para asignar un array a una variable, lo hacemos igual que con los otros tipos de datos:

# const numbers = [1, 2, 3, 4, 5]
let names = ['Dani', 'Miguel', 'Maria']
Acceso a los elementos de un array
Para acceder a los elementos de un array usamos los corchetes [] y dentro el índice del elemento que queremos acceder. Los índices empiezan en 0.

const numbers = [1, 2, 3, 4, 5]

console.log(numbers[0]) // 1
console.log(numbers[2]) // 3

# Si intentamos acceder a un elemento que no existe, nos devolverá undefined.

const numbers = [1, 2, 3, 4, 5]

console.log(numbers[10]) // undefined
Puedes usar variables para acceder a los elementos de un array.

const numbers = [1, 2, 3, 4, 5]
let index = 2

console.log(numbers[index]) // 3
Modificar elementos de un array
Igual que podemos acceder a los elementos de un array, podemos modificarlos.

const numbers = [1, 2, 3, 4, 5]

numbers[0] = 10
numbers[2] = 30

console.log(numbers) // [10, 2, 30, 4, 5]

# Métodos
Los arrays de JavaScript tienen una serie de métodos y propiedades que nos permiten trabajar con ellos de forma sencilla.

# La longitud de un array
Puedes conocer la longitud de una colección de elementos usando la propiedad .length:

const frutas = ["manzana", "pera", "plátano", "fresa"]
console.log(frutas.length) // 4
También puedes cortar su longitud asignando un nuevo valor a la propiedad .length:

const frutas = ["manzana", "pera", "plátano", "fresa"]
frutas.length = 2

console.log(frutas) // ["manzana", "pera"]
console.log(frutas.length) // 2

# Métodos de arrays
Cuando trabajamos con colecciones de elementos, vamos a querer hacer cosas con ellos. 
Por ejemplo: añadir un elemento, eliminarlo, buscarlo, etc. Para ello, los arrays tienen una serie de métodos que nos permiten hacer estas operaciones:

# .push()
El método .push() nos permite añadir un elemento al final de un array:

const frutas = ["plátano", "fresa"]
frutas.push("naranja")
console.log(frutas) // ["plátano", "fresa", "naranja"]
Además, el método .push() devuelve la nueva longitud del array:

const frutas = ["plátano", "fresa"]
console.log(frutas.length) // 2

const newLength = frutas.push("naranja")
console.log(newLength) // 3
console.log(frutas) // ["plátano", "fresa", "naranja"]

# .pop()
El método .pop() elimina y devuelve el último elemento de un array:

const frutas = ["plátano", "fresa", "naranja"]
const ultimaFruta = frutas.pop()

console.log(frutas) // ["plátano", "fresa"]
console.log(ultimaFruta) // "naranja"

# .shift()
El método .shift() elimina y devuelve el primer elemento de un array. Es lo mismo que .pop(), pero con el primer elemento en lugar del último:

const frutas = ["plátano", "fresa", "naranja"]
const primeraFruta = frutas.shift()

console.log(frutas) // ["fresa", "naranja"]
console.log(primeraFruta) // "plátano"

# .unshift()
El método .unshift() añade un elemento al principio de un array. Es lo mismo que .push(), pero con el primer elemento en lugar del último:

const frutas = ["plátano", "fresa", "naranja"]
frutas.unshift("manzana")

console.log(frutas) // ["manzana", "plátano", "fresa", "naranja"]

# Concatenar arrays
Podemos concatenar dos arrays usando el método concat().

const numbers = [1, 2, 3]
const numbers2 = [4, 5]

const allNumbers = numbers.concat(numbers2)

console.log(allNumbers) // [1, 2, 3, 4, 5]
Otra forma de concatenar arrays es usando el operador ... (spread operator). 
Este operador propaga los elementos de un array. Así que podríamos hacer lo siguiente:

const numbers = [1, 2, 3]
const numbers2 = [4, 5]

//                    1, 2, 3        4, 5                     
const allNumbers = [...numbers, ...numbers2]

console.log(allNumbers) // [1, 2, 3, 4, 5]
Más adelante hablaremos más de este operador y sus diferentes utilidades.

# Iteración y Recorrido de Arrays
Ya hemos visto en clases anteriores cómo podemos crear bucles con for y while. 
Con estas estructuras de control, y una nueva que veremos en este clase, podemos también recorrer cada uno de los elementos de un array.

Además, veremos como los propios arrays tienen un método .forEach que nos permite ejecutar una función para cada uno de los elementos del array.

Bucle while
El bucle while vimos que permitía ejecutar un bloque de código mientras una condición era verdadera. 
En el caso de la iteración de arrays, la condición generalmente se basa en el índice del elemento.

Podemos, por ejemplo, crear una variable con let para guardar un puntero al índice del elemento que estamos iterando. 
En cada iteración, podemos incrementar el valor de la variable en 1, para que en la siguiente iteración se imprima el siguiente elemento.

let frutas = ['🍎', '🍌', '🍓']
let i = 0 // lo usaremos como índice

while (i < frutas.length) {
  console.log(frutas[i]) // imprime el elemento en la posición i
  i++ // incrementamos el índice en 1 para la siguiente iteración
}
Bucle for
El bucle for nos permitía ejecutar un bloque de código un número determinado de veces. 
En el caso de la iteración de arrays, podemos usarlo para recorrer cada uno de los elementos del array, usando la longitud del array como condición.

let frutas = ['🍎', '🍌', '🍓']

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]) // imprime el elemento en la posición i
}
También podrías recorrer el array en orden inverso, 
empezando desde el último elemento hasta el primero, usando i-- en lugar de i++.

let frutas = ['🍎', '🍌', '🍓']

for (let i = frutas.length - 1; i >= 0; i--) {
  console.log(frutas[i]) // imprime el elemento en la posición i
}

# Buscar en Arrays
xisten varios métodos en JavaScript que te permiten, específicamente, buscar dentro de un Array.
 Estos métodos incluyen indexOf, some, every, find, findIndex e includes.

Cada uno de estos métodos tiene un propósito específico y una funcionalidad única. 
Vamos a explorar cada uno de ellos utilizando un Array de emojis como ejemplo.

const emojis = ['✨', '🥑', '😍']
indexOf: ¿En qué posición está el elemento?
El método indexOf te permite encontrar la posición de un elemento dentro de un Array. 
Si el elemento no existe, entonces retorna -1.

const emojis = ['✨', '🥑', '😍']

const posicionCorazon = emojis.indexOf('😍')

console.log(posicionCorazon) // -> 2

# includes: ¿El elemento existe en el Array?
El método includes determina si un Array incluye un determinado elemento, devolviendo true o false según corresponda.

const emojis = ['✨', '🥑', '😍']

const tieneCorazon = emojis.includes('😍')

console.log(tieneCorazon) // -> true
Es la forma más sencilla y corta de buscar un elemento específico dentro de un Array. 
Sin embargo, si queremos revisar si un Array contiene un elemento que cumpla con una condición, 
entonces tenemos que utilizar otros métodos...

#  Ordenar Arrays
 avaScript proporciona un método incorporado en arrays llamado .sort() para ordenar sus elementos. Por defecto no es muy útil pero puedes personalizar su comportamiento para que ordene los elementos de la manera que necesites.

# Ordenamiento básico con sort()
Por defecto, .sort() hace una ordenación un poco extraña:

let numeros = [5, 10, 2, 25, 7]
numeros.sort()
console.log(numeros) // [10, 2, 25, 5, 7]
# ¿Qué ha pasado? Este comportamiento puede resultar confuso cuando se trabaja con números, ya que .
# sort() ordenará los números en función de su valor como cadena de texto, no de su valor numérico.

Por suerte, podemos arreglarlo...

# Para personalizar cómo sort() ordena los elementos, puedes pasar una función de comparación como argumento. La función de comparación debe devolver:

Un valor negativo si el primer argumento debe aparecer antes que el segundo.
Un valor positivo si el segundo argumento debe aparecer antes que el primero.
Cero si ambos argumentos son iguales.
# Por ejemplo, para ordenar los números de menor a mayor, puedes usar la siguiente función de comparación:

let numeros = [5, 10, 2, 25, 7]

numeros.sort(function(a, b) {
  return a - b
})

console.log(numeros) // [2, 5, 7, 10, 25]
Para ordenarlos de manera descendente, de mayor a menor, deberías cambiar el orden del return:

let numeros = [5, 10, 2, 25, 7]

numeros.sort(function(a, b) {
  return b - a
})

console.log(numeros) // [25, 10, 7, 5, 2]
Puedes usar una arrow function para simplificar el código:

let numeros = [5, 10, 2, 25, 7]

numeros.sort((a, b) => a - b)
sort() y toSorted()
Como ves, .sort() modifica el array original. Si quieres obtener un array ordenado sin modificar el original, 
puedes usar el método .toSorted(). Sólo ten en cuenta que, ahora mismo, su soporte en navegadores es limitado .

let numeros = [5, 10, 2, 25, 7]

let numerosOrdenados = numeros.toSorted((a, b) => {
  return a - b
})

console.log(numerosOrdenados) // [2, 5, 7, 10, 25]
console.log(numeros) // [5, 10, 2, 25, 7]
También podrías usar el operador de propagación (...) para crear una copia del array original y ordenarla:

let numeros = [5, 10, 2, 25, 7]

const copiaNumeros = [...numeros]
// ordenamos la copia y no el original
copiaNumeros.sort((a, b) => a - b)

console.log(copiaNumeros) // [2, 5, 7, 10, 25]
console.log(numeros) // [5, 10, 2, 25, 7]

# map: Un nuevo Array con los elementos transformados
El método map crea un nuevo array de la misma longitud que el original, pero con los elementos 
transformados por una función que le pasamos como parámetro. Así que la función recibirá cada elemento del array y tendremos que devolver el elemento transformado.

Por ejemplo, podríamos crear un array con el doble de cada número de un array de números:

const numbers = [1, 2, 3]

const doubleNumbers = numbers.map((number) => {
  return number * 2
})

console.log(doubleNumbers) // [2, 4, 6]
O podríamos crear un array con la longitud de cada cadena de texto de un array de cadenas:

const strings = ['hola', 'javascript', 'midu', 'programación']

const stringsLength = strings.map((string) => string.length)

console.log(stringsLength) // [4, 10, 4, 12]

# Matrices con Arrays
En matemáticas y en programación, una matriz se refiere a una colección de elementos dispuestos en filas y columnas. En términos más sencillos, y en JavaScript, podemos representar una matriz como un array de arrays.

Creación de Matrices
Para empezar, aquí se muestra cómo se puede crear una matriz simple de 2x3 en JavaScript:

const matriz = [
  [1, 2, 3],
  [4, 5, 6]
]

# Acceso a los Elementos de una Matriz
Para acceder a los elementos de una matriz, necesitaremos utilizar dos índices: uno para la fila y otro para la columna.

Por ejemplo, si queremos acceder al número 6 en la matriz anterior, haríamos lo siguiente:

let numero = matriz[1][2]
console.log(numero) // -> 6
Aquí, el primer índice, [1], se refiere a la segunda fila (recuerda que los arrays 
en JavaScript tienen un índice base cero), y el segundo índice, [2], se refiere a la tercera columna.

# Iteración sobre Matrices
Podemos utilizar bucles anidados para iterar sobre todos los elementos de una matriz. Aquí hay un ejemplo de cómo hacerlo utilizando un bucle for:

for (let i = 0; i < matriz.length; i++) { // {1}
  for (let j = 0; j < matriz[i].length; j++) { // {2}
    console.log(matriz[i][j])
  }
}
En este ejemplo, el bucle externo recorre {1} cada fila de la matriz, mientras que el bucle interno {2} recorre cada elemento dentro de una fila específica.

Puedes usar otros bucles para iterar sobre una matriz, como un bucle while o un bucle for...of. 
También puedes utilizar el método forEach() de los arrays para iterar sobre una matriz, pero tendrás que anidar dos llamadas a forEach() para iterar sobre todos los elementos de la matriz.

matriz.forEach((fila, filaIndex) => {
  fila.forEach((elemento, columnaIndex) => {
    console.log('Fila ' + filaIndex)
    console.log('Columna ' + columnaIndex)
    console.log('Elemento ', elemento)
    console.log('')
  })
})
Ejemplo práctico de Matrices
Un ejemplo sencillo de entender pero muy útil es el juego del 3 en raya. En este juego, 
los jugadores se turnan para colocar sus fichas en una cuadrícula de 3x3.

El objetivo del juego es colocar tres fichas en una fila, columna o diagonal.

Para representar el tablero de juego, podemos utilizar una matriz de 3x3. 
Cada elemento de la matriz puede ser una cadena que represente una ficha:

const tablero = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['O', 'O', 'X']
]
Ahora, para buscar si hay un ganador en el tablero, podemos utilizar un bucle for para iterar sobre cada fila y columna del tablero.

Si encontramos tres fichas iguales en una fila, columna o diagonal, entonces tenemos un ganador.

// Verifica las líneas horizontales
for (let i = 0; i < 3; i++) {
  if (
    tablero[i][0] === tablero[i][1] &&
    tablero[i][1] === tablero[i][2]
  ) {
    console.log(`El ganador es: ${tablero[i][0]}`);
  }
}

# Verifica las líneas verticales
for (let i = 0; i < 3; i++) {
  if (
    tablero[0][i] === tablero[1][i] &&
    tablero[1][i] === tablero[2][i]
  ) {
    console.log(`El ganador es: ${tablero[0][i]}`);
  }
}

// Verifica la diagonal de arriba izquierda a derecha abajo
if (
  tablero[0][0] === tablero[1][1] &&
  tablero[1][1] === tablero[2][2]
) {
  console.log(`El ganador es: ${tablero[0][0]}`);
}

// Verifica la diagonal de derecha arriba a izquierda abajo
if (
  tablero[0][2] === tablero[1][1] &&
  tablero[1][1] === tablero[2][0]
) {
  console.log(`El ganador es: ${tablero[0][2]}`);
}
Las matrices son muy útiles y necesarias para muchos juegos (ajedrez, damas, buscaminas, etc.) 
y aplicaciones (hojas de cálculo, bases de datos, etc.). Así que es importante que te familiarices con ellas.

Ejercicio práctico
Recibimos una matriz de cadenas de texto. Tenemos que localizar la posición de la palabra
"JavaScript" en la matriz y devolver su posición como un array de dos elementos: el índice de la fila y el índice de la columna.

const matrix = [
  ['HTML', 'CSS', 'JavaScript'],
  ['Java', 'C++', 'Python'],
  ['Ruby', 'Go', 'Swift']
]

const position = findJavaScript(matrix)
console.log(position) // -> [0, 2]

# Objetos
Los objetos en JavaScript son una colección de propiedades y métodos que definen un elemento a través de una clave y un valor.

Por ejemplo, si pensamos en una persona, podemos definir sus propiedades como su nombre, su edad, su altura, su peso, etc. Y sus métodos como caminar, correr, saltar, etc.

Declaración y asignación de objetos
Para declarar un objeto usamos las llaves {} y dentro las propiedades y métodos separados por comas ,. Cada propiedad o método se define con una clave y un valor separados por dos puntos :.

# Por ejemplo, vamos a crear un objeto que represente a una persona:

const persona = { 
  name: 'Dani',
  age: 30,
  isWorking: true
}
# Las propiedades y métodos de un objeto pueden ser de cualquier tipo de JavaScript, incluso otros objetos o arrays.

const persona = {
  name: 'Dani',
  age: 30,
  isWorking: true,
  family: ['Miguel', 'Maria'], // array
  address: { // otro objeto
    street: 'Calle de la piruleta',
    number: 13,
    city: 'Barcelona'
  }
}
# Y, claro, como hemos comentado antes, también podemos tener funciones. Cuando una función es parte de un objeto se le llama método.

const persona = {
  name: 'Dani',
  age: 30,
  isWorking: true,
  family: ['Miguel', 'Maria'],
  address: {
    street: 'Calle de la piruleta',
    number: 13,
    city: 'Barcelona'
  },
  walk: function () { // <- método
    console.log('Estoy caminando')
  }
}

# Para acceder a las propiedades y métodos de un objeto usamos el punto . y el nombre de la propiedad o método.

const persona = { name: 'Dani' }
console.log(persona.name) // Dani
Si intentamos acceder a una propiedad o método que no existe, nos devolverá undefined.

const persona = { name: 'Dani' }
console.log(persona.fullName) // -> undefined

# Puedes usar variables para acceder a las propiedades y métodos de un objeto. Para ello, tienes que usar la notificación por corchetes [].

const persona = { name: 'Dani' }
let property = 'name'

console.log(persona[property]) // -> Dani
# También necesitas usar los corchetes si la clave de la propiedad o método tiene espacios o caracteres especiales.

const persona = { 'full name': 'Dani' }

console.log(persona['full name']) // -> Dani

// ❌ no puedes hacer esto
// persona.full name

# gual que podemos acceder a las propiedades de un objeto, podemos añadir nuevas propiedades o modificar las existentes.

const persona = { name: 'Dani' }

persona.age = 30

console.log(persona) // -> { name: 'Dani', age: 30 }
En el código estamos modificando el objeto persona añadiendo la propiedad age con el valor 30.

# Eliminar propiedades de un objeto
Para eliminar una propiedad de un objeto usamos la palabra reservada delete.

const persona = { name: 'Dani', age: 18 }

delete persona.age

console.log(persona) // -> { name: 'Dani' }

# Transformación a Array e iteración
El manejo de objetos es uno de los pilares en JavaScript y es crucial conocer cómo podemos iterar o recorrer los mismos. Existen varias formas de hacerlo y en esta clase vamos a revisar algunas de las más comunes: el bucle for...in y los métodos Object.keys(), Object.values() y Object.entries().

Iterando con for...in
La estructura de control for...in nos permite crear un bucle que itera sobre todas las propiedades enumerables de un objeto, en un orden arbitrario.

const spiderman = {
  name: 'Spidey',
  universe: 42,
  powers: ['web', 'invisibility', 'spider-sense']
}

for (const property in spiderman) {
  console.log(`${property}: ${spiderman[property]}`);
}

// -> name: Spidey
// -> universe: 42
// -> powers: web,invisibility,spider-sense

# Transformar un objeto en un array
A veces queremos transformar un objeto en un array para poder iterar sobre él. Para esto podemos utilizar el método Object.keys(), Object.values() o Object.entries().

Cada uno de estos métodos retorna un array, pero cada uno de ellos contiene elementos diferentes. Vamos a verlos uno por uno.

Iterar con Object.keys()
El método Object.keys() retorna un array con las propiedades enumerables de un objeto.

const spiderman = {
  name: 'Spidey',
  universe: 42,
  powers: ['web', 'invisibility', 'spider-sense']
}

const properties = Object.keys(spiderman)

console.log(properties.length) // 3

properties.forEach(property => {
  console.log(property)
})

// -> name
// -> universe
// -> powers
Este código hace algo muy similar al anterior, pero utilizando Object.keys() para obtener las propiedades del objeto.

 # terando con Object.values()
El método Object.values() retorna un array con los valores correspondientes a las propiedades enumerables de un objeto.

const values = Object.values(spiderman)

values.forEach(value => {
  console.log(value)
})

// -> Spidey
// -> 42
// -> [ 'web', 'invisibility', 'spider-sense' ]
Como ves, la diferencia con Object.values() es que este método retorna los valores y Object.keys() retorna las propiedades.

# Iterando con Object.entries()
El método Object.entries() retorna un array de arrays, donde cada subarray es un par [propiedad, valor] correspondiente a las propiedades enumerables de un objeto.

const entries = Object.entries(spiderman)

entries.forEach(entry => {
  console.log(entry)
})

// -> [ 'name', 'Spidey' ]
// -> [ 'universe', 42 ]
// -> [ 'powers', [ 'web', 'invisibility', 'spider-sense' ] ]
Lo interesante es que este método nos da acceso tanto a las propiedades como a los valores. Lo puedes ver más claro en el siguiente ejemplo:

const entries = Object.entries(spiderman)

entries.forEach(entry => {
  const property = entry[0]
  const value = entry[1]

  console.log(`${property}: ${value}`)
})

# Métodos en tipos primitivos
Una de las características más interesantes de JavaScript es que nos permite trabajar con tipos de datos primitivos como si fueran objetos. Los primitivos también ofrecen métodos que podemos llamar. Los estudiaremos pronto, pero primero veamos cómo trabajan porque, por supuesto, los primitivos no son objetos.

# ¿Qué son los tipos primitivos?
En JavaScript, un primitive (valor primitivo, tipo de dato primitivo) son datos que no son un objeto y no tienen métodos. Hay 7 tipos de datos primitivos:

string - cadenas de texto
number - números
bigint - números enteros grandes
boolean - verdadero o falso
undefined - valor indefinido
symbol - símbolos como identificador único
null - valor nulo
Nota
# null es un caso especial. Su typeof es object por un bug histórico. Además, es el valor del que deriva cualquier object.

// Estos son todos tipos primitivos
let texto = 'Hola mundo'
let numero = 42
let grande = 123n
let verdadero = true
let indefinido = undefined
let simbolo = Symbol('id')
let nulo = null

# La paradoja: ¿Cómo pueden los primitivos tener métodos?
Aquí viene lo interesante. Si los primitivos no son objetos y no tienen métodos, ¿cómo es posible que podamos hacer esto?

let texto = 'JavaScript'
console.log(texto.length) // 10
console.log(texto.toUpperCase()) // "JAVASCRIPT"
¡Estamos llamando propiedades y métodos en un tipo primitivo! ¿Cómo es esto posible?

Object Wrappers: La magia detrás de escena
La respuesta está en los Object Wrappers (objetos envolventes). Cuando intentas acceder a un método o propiedad de un primitivo, JavaScript automáticamente:

# Crea temporalmente un objeto wrapper alrededor del valor primitivo
Ejecuta el método en ese objeto
Destruye el objeto wrapper inmediatamente después
let texto = 'JavaScript'

// Cuando escribes texto.toUpperCase(), JavaScript hace esto internamente:
// 1. Crea: new String("JavaScript")
// 2. Llama al método: new String("JavaScript").toUpperCase()
// 3. Devuelve el resultado: "JAVASCRIPT"
// 4. Destruye el objeto temporal

# String
El tipo string es uno de los tipos primitivos más utilizados en JavaScript. Representa una secuencia de caracteres y es fundamental para trabajar con texto en nuestras aplicaciones.

# Creación de strings
Hay varias formas de crear strings en JavaScript:

# String literals (la forma más común)
// Comillas simples
let nombre = 'Miguel'

// Comillas dobles
let apellido = "Ángel"
Nota
# ¿Cuándo usar comillas simples y dobles? No hay una respuesta correcta. La elección depende más de estilo, consistencia y contexto. Eso sí, si vas a usar comillas simples dentro de la cadena, deberías usar comillas dobles para el string y viceversa; así evitarás conflictos.

# Template literals - La forma moderna
Hay otra forma moderna de crear cadenas de texto: los template literals. Son especialmente útiles para interpolar variables y strings multilínea.

let nombre = 'Ana'
let edad = 25

// Interpolación de variables
let presentacion = `Me llamo ${nombre} y tengo ${edad} años`

// Strings multilínea
let poema = `
  Roses are red,
  Violets are blue,
  JavaScript is awesome,
  And so are you!
`

// Expresiones dentro de template literals
let calculo = `El resultado de 5 + 3 es: ${5 + 3}`

# Las propiedades y métodos de los strings
Como todos los tipos primitivos, los strings también tienen propiedades y métodos.

La propiedad length
Nos devuelve la longitud de la cadena de texto.

let texto = 'JavaScript'
console.log(texto.length) // 10

let vacio = ''
console.log(vacio.length) // 0

let espacios = '   '
console.log(espacios.length) // 3
Métodos de búsqueda
# Una de las cosas más importantes que haremos con nuestras cadenas de texto es buscar dentro de ellas. Para ello, tenemos varios métodos que nos permiten hacerlo.

const frase = 'JavaScript es genial y JavaScript es potente'

// indexOf - encuentra la primera ocurrencia
console.log(frase.indexOf('JavaScript')) // 0
// -> significa que encontró la primera ocurrencia de 'JavaScript'
//    en la posición 0

console.log(frase.indexOf('a')) // 1
// -> significa que encontró la primera ocurrencia de 'a'
//    en la posición 1

console.log(frase.indexOf('Python')) // -1 (no encontrado)
// -> cuando no encuentra la cadena de texto, devuelve -1

// lastIndexOf - encuentra la última ocurrencia
console.log(frase.lastIndexOf('JavaScript')) // 23
// -> significa que encontró la última ocurrencia de 'JavaScript'
//    en la posición 23 de la cadena

// includes - verifica si contiene un substring
console.log(frase.includes('genial')) // true
console.log(frase.includes('Python')) // false

// startsWith y endsWith
console.log(frase.startsWith('JavaScript')) // true
console.log(frase.endsWith('potente')) // true

console.log(frase.startsWith('Python')) // false
// -> significa que la cadena de texto NO comienza con 'Python'

# Métodos de extracción
Otra operación muy común es extraer una parte de la cadena de texto. Para ello, tenemos varios métodos que nos permiten hacerlo. Ten en cuenta que estos métodos no modifican el string original, sino que devuelven siempre un nuevo string.

const texto = 'JavaScript Programming'

// slice - extrae una porción
console.log(texto.slice(0, 10)) // "JavaScript"
console.log(texto.slice(11)) // "Programming"
console.log(texto.slice(-11)) // "Programming" (desde el final)

// substring - similar a slice pero no acepta índices negativos
console.log(texto.substring(0, 10)) // "JavaScript"

// substr - extrae desde un índice con una longitud específica
console.log(texto.substr(11, 7)) // "Program"

# Métodos de transformación
let texto = '  JavaScript Programming  '

// Cambio de caso
console.log(texto.toLowerCase()) // "  javascript programming  "
console.log(texto.toUpperCase()) // "  JAVASCRIPT PROGRAMMING  "

// Eliminación de espacios
console.log(texto.trim()) // "JavaScript Programming"
console.log(texto.trimStart()) // "JavaScript Programming  "
console.log(texto.trimEnd()) // "  JavaScript Programming"

// Reemplazo
let frase = 'Me gusta Python y Python es genial'
console.log(frase.replace('Python', 'JavaScript'))
// "Me gusta JavaScript y Python es genial"

// replaceAll - reemplaza todas las ocurrencias
console.log(frase.replaceAll('Python', 'JavaScript'))
// "Me gusta JavaScript y JavaScript es genial"

# Métodos de verificación
let codigo = 'ABC123'

// charAt - obtiene el carácter en una posición
console.log(codigo.charAt(0)) // "A"
console.log(codigo.charAt(3)) // "1"

// charCodeAt - obtiene el código Unicode
console.log(codigo.charCodeAt(0)) // 65 (código de 'A')

// match - busca coincidencias con expresiones regulares
let email = 'usuario@example.com'
let resultado = email.match(/@(.+)\./)
console.log(resultado[1]) // "example"

# Comparación de strings
Como todos los tipos primitivos, los strings se pueden comparar usando los operadores de comparación.

// Comparación exacta
console.log('JavaScript' === 'JavaScript') // true (iguales)
console.log('JavaScript' === 'javascript') // false (diferencias entre mayúsculas y minúsculas)

// Comparación sin distinguir mayúsculas/minúsculas
let a = 'JavaScript'
let b = 'javascript'
console.log(a.toLowerCase() === b.toLowerCase()) // true

// Mirar si dos cadenas de texto son diferentes
console.log('JavaScript' !== 'Python') // true
console.log('JavaScript' !== 'javascript') // true (diferencias entre mayúsculas y minúsculas)
console.log('JavaScript' !== 'JavaScript') // false (iguales)

// Orden lexicográfico
console.log('apple' < 'banana') // true
console.log('Apple' < 'apple') // true (mayúsculas van antes)

# Caracteres especiales en cadenas de texto
Dentro de las cadenas de texto hay algunos caracteres especiales que pueden cambiar el comportamiento de la cadena de texto y algunos no son visibles en el resultado final pero son igual de importantes. Además, hay otros, que por su naturaleza pueden causar errores de sintaxis si no se usan correctamente.

# Cómo usar comillas dentro de cadenas de texto
Como hemos explicado antes, al crear una cadena de texto, podemos usar comillas simples o dobles. Pero, ¿qué pasa si queremos usar comillas dentro de la cadena de texto? Una cosa que podemos hacer es usar comillas simples dentro de una cadena de texto que use comillas dobles y viceversa.

// Comillas dentro de strings
let comillas = 'Él dijo: "Hola mundo"'
let comillasSimplesEnDobles = "It's a beautiful day"
let comillasDobles = 'Él dijo: "Hola mundo"'
Además, si usamos template literals, podemos usar comillas simples o dobles dentro de la cadena de texto sin ningún problema.

# Template literals
let comillas = `Él dijo: "Hola mundo"`
let comillasSimplesEnDobles = `It's a beautiful day`
let comillasDobles = `Él dijo: "Hola mundo"`
Caracteres de escape
Pero qué pasa si no queremos usar template literals y tenemos tanto comillas simples como dobles en una misma cadena de texto. Pero existe otra forma de usar comillas dentro de cadenas de texto y es usando el carácter de escape \:

# Caracteres de escape
let comillas = "Él dijo: \"Hola mundo\""
let comillasSimples = 'It\'s a beautiful day'

console.log(comillas) // "Él dijo: "Hola mundo""
console.log(comillasSimples) // "It's a beautiful day"
Lo que hace el carácter de escape es que el carácter que sigue a él se interpreta como un carácter normal y no como cierre de la cadena de texto. Ahora, ¿qué pasa si en realidad queremos usar una barra invertida en una cadena de texto? Entonces, podemos usar dos barras invertidas.

# Caracteres especiales
let barra = 'C:\\Users\\Documents'
console.log(barra) // "C:\Users\Documents"
Tabuladores y nuevas líneas
Los tabuladores y las nuevas líneas se pueden representar con el carácter de escape \t y \n respectivamente.

// Tabuladores y nuevas líneas
const tabulador = "Hola\t\tMundo"
const nuevaLinea = 'Hola\nMundo'

console.log(tabulador)
// 'Hola		Mundo'

console.log(nuevaLinea)
// 'Hola
// Mundo'

# Otra forma de representar esto es usando template literals. También ahí puedes usar \t y \n para representar tabuladores y nuevas líneas, pero no es necesario ya que puedes crear cadenas de texto multilínea de forma más sencilla.

const mensaje = `Hola
Mundo`

console.log(mensaje)
// 'Hola
// Mundo'

# Conversión a string
Muchas veces vas a tener que convertir un tipo de dato a string. Por ejemplo, cuando quieres mostrar un número en un elemento HTML. Para ello, podemos usar el constructor String() o el método toString() de la propia cadena de texto.

# Conversión explícita
let numero = 42
let numeroTexto = String(numero) // "42"
let numeroTexto2 = numero.toString() // "42"
También al hacer algunas operaciones con strings, JavaScript intentará convertir el resultado a string, haciendo una conversión implícita para ser capaz de hacer la operación. Por ejemplo al usar el operador + para concatenar strings o al evaluar una plantilla de cadena de texto.

# Conversión implícita
let resultado = 'El número es: ' + 42 // "El número es: 42"
let template = `El número es: ${42}` // "El número es: 42"

# Formateo de texto
function formatearNombre(nombre) {
  return nombre
    .trim()
    .toLowerCase()
    .split(' ')
    .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1))
    .join(' ')
}

console.log(formatearNombre('  MIGUEL ANGEL  ')) // "Miguel Angel"
Procesamiento de datos
# Limpiar y procesar datos CSV
let csvData = 'nombre,edad,ciudad\nJuan,25,Madrid\nAna,30,Barcelona'
let lineas = csvData.split('\n')
let headers = lineas[0].split(',')
let datos = lineas.slice(1).map((linea) => linea.split(','))

console.log(headers) // ["nombre", "edad", "ciudad"]
console.log(datos) // [["Juan", "25", "Madrid"], ["Ana", "30", "Barcelona"]]

# Para terminar con los strings...
Los strings en JavaScript son un tipo de dato que representa una secuencia de caracteres. Son muy útiles para representar texto y son muy fáciles de manipular. Algunas de sus características son:

Inmutables: Una vez creados, no se pueden modificar, sólo crear nuevos
Versátiles: Múltiples formas de crearlos y manipularlos
Ricos en métodos: Gran cantidad de métodos útiles para búsqueda, transformación y manipulación
Unicode: Soporte completo para caracteres especiales y emojis
Dominar el trabajo con strings es fundamental para cualquier desarrollador JavaScript, ya que la manipulación de texto es una tarea muy común en el desarrollo web.

# Number
El tipo number en JavaScript representa tanto números enteros como decimales. A diferencia de otros lenguajes que tienen tipos separados para enteros y flotantes, JavaScript unifica todo en un solo tipo number.

Características del tipo Number
JavaScript usa el estándar IEEE 754 para representar números, lo que significa:

64 bits de precisión (double precision)
Rango aproximado: ±1.7976931348623157 × 10^308
15-17 dígitos de precisión decimal
Incluye valores especiales: Infinity, -Infinity y NaN

# Todos estos son tipo 'number'
let entero = 42
let decimal = 3.14159
let negativo = -17
let exponencial = 1.5e10 // 15000000000
let hexadecimal = 0xff // 255
let binario = 0b1010 // 10
let octal = 0o777 // 511

console.log(typeof entero) // "number"
console.log(typeof decimal) // "number"
Creación de números

# Para crear un número en JavaScript... sólo tienes que escribirlo. Lo interesante es que además podemos directamente usar diferentes notaciones, como hemos visto antes, para crear números binarios, hexadecimales, octales y demás.

# Literals numéricos (la forma más común)
// Enteros
let edad = 25
let temperatura = -5

// Decimales
let precio = 19.99
let pi = 3.14159

// Notación científica
let distancia = 1.5e8 // 150,000,000
let pequeño = 2.5e-4 // 0.00025

// Diferentes bases
let hexColor = 0xff0000 // 16777216 (rojo en hex)
let binario = 0b11111111 // 255
let octal = 0o377 // 255 (base 8)

# Constructor Number()
Si necesitas crear un número a partir de otro tipo de dato, como string, o desde una variable, puedes usar el constructor Number(). ¡Fíjate que no usamos new al llamarlo! Esto es un detalle importante.

// Crear primitivo
let numero = Number('42') // 42
let decimal = Number('3.14') // 3.14

let string = '42'
let desdeString = Number(string) // 42
console.log(typeof desdeString) // "number"

# NO hagas esto, ya que con new creas un objeto
let numeroObjeto = new Number(42)
console.log(typeof numeroObjeto) // "object"

# Conversión desde otros tipos
Por la naturaleza de JavaScript, vas a poder pasarle casi cualquier cosa a Number() e intentará hacer su mejor esfuerzo para convertirlo a número. Ten en cuenta que en algunos casos, el resultado te puede sorprender:

// Desde booleanos
let desde_true = Number(true) // 1
let desde_false = Number(false) // 0

# Casos especiales
let desde_null = Number(null) // 0
let desde_undefined = Number(undefined) // NaN
let desde_string_vacia = Number('') // 0
let desde_string_invalida = Number('abc') // NaN
Valores especiales
Hay unas constantes en el objeto Number que representan valores especiales. Además, también hay algunos valores que no se pueden representar con números, como el infinito, el negativo infinito y el NaN.

# Además, Number tiene algunos métodos que te ayudarán a verificarlos.

Infinity y -Infinity
// Infinity
console.log(1 / 0) // Infinity
console.log(Number.POSITIVE_INFINITY) // Infinity
console.log(Math.pow(10, 1000)) // Infinity

// -Infinity
console.log(-1 / 0) // -Infinity
console.log(Number.NEGATIVE_INFINITY) // -Infinity

// Verificar si es infinito
console.log(Number.isFinite(42)) // true
console.log(Number.isFinite(Infinity)) // false
console.log(isFinite(42)) // true (función global)
NaN (Not a Number)
NaN es un valor especial que representa un resultado de una operación matemática que no es un número, de ahí su nombre: Not A Number (no es un número).

# Ten en cuenta que NaN es un valor de tipo number. Sí, sé que suena contradictorio. Pero no es un problema de JavaScript, como mucha gente piensa. En realidad es parte de la especificación del estándar IEEE 754 que así lo determina.

// Operaciones que resultan en NaN
console.log(0 / 0) // NaN
console.log(Math.sqrt(-1)) // NaN
console.log(Number('texto')) // NaN
console.log(undefined + 1) // NaN
Además, NaN es el único valor en JavaScript que no es igual a sí mismo. Esto tampoco es un error del lenguaje, también es parte de la especificación del estándar IEEE 754.

// NaN es especial: no es igual a sí mismo
console.log(NaN === NaN) // false
console.log(NaN == NaN) // false
# Además, Number tiene algunos métodos que te ayudarán a verificarlos. Existen dos métodos para hacerlo isNaN() y Number.isNaN(). ¿Cuál es la diferencia entre ambos y por qué hay dos?

isNaN(): Convierte el valor a número primero y luego verifica si es NaN.
Number.isNaN(): No convierte el valor a número, solo verifica si ya es NaN.
console.log(isNaN('texto')) // true (convierte a número primero)
console.log(Number.isNaN('texto')) // false

# Propiedades estáticas importantes
Como hemos dicho, Number tiene algunas propiedades estáticas que te pueden ser útiles para tener acceso a algunos valores especiales:

# Valores límite
console.log(Number.MAX_VALUE) // 1.7976931348623157e+308
console.log(Number.MIN_VALUE) // 5e-324 (más pequeño positivo)
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER) // -9007199254740991

# Constantes especiales
console.log(Number.POSITIVE_INFINITY) // Infinity
console.log(Number.NEGATIVE_INFINITY) // -Infinity
console.log(Number.NaN) // NaN

# Epsilon (diferencia mínima entre números)
console.log(Number.EPSILON) // 2.220446049250313e-16
Métodos de Number
Una vez tenemos un número

Métodos de conversión
let numero = 123.456789

# toString - convierte a string
console.log(numero.toString()) // "123.456789"
console.log(numero.toString(2)) // "1111011.0111010..." (binario)
console.log(numero.toString(16)) // "7b.74bc6a7ef9db2" (hexadecimal)

# toFixed - fija decimales
console.log(numero.toFixed(2)) // "123.46"
console.log(numero.toFixed(0)) // "123"

# toPrecision - fija dígitos significativos
console.log(numero.toPrecision(4)) // "123.5"
console.log(numero.toPrecision(2)) // "1.2e+2"

# toExponential - notación científica
console.log(numero.toExponential()) // "1.23456789e+2"
console.log(numero.toExponential(2)) // "1.23e+2"
Métodos estáticos de verificación

# isInteger - verifica si es entero
console.log(Number.isInteger(42)) // true
console.log(Number.isInteger(42.0)) // true
console.log(Number.isInteger(42.1)) // false

# isSafeInteger - verifica si está en rango seguro
console.log(Number.isSafeInteger(123)) // true
console.log(Number.isSafeInteger(Math.pow(2, 53))) // false

# isFinite - verifica si es finito
console.log(Number.isFinite(42)) // true
console.log(Number.isFinite(Infinity)) // false

# isNaN - verifica si es NaN
console.log(Number.isNaN(NaN)) // true
console.log(Number.isNaN('texto')) // false
Métodos de parsing

# parseInt - convierte a entero
console.log(Number.parseInt('42')) // 42
console.log(Number.parseInt('42.7')) // 42
console.log(Number.parseInt('42px')) // 42
console.log(Number.parseInt('px42')) // NaN

# Con base específica
console.log(Number.parseInt('FF', 16)) // 255
console.log(Number.parseInt('1010', 2)) // 10

# parseFloat - convierte a decimal
console.log(Number.parseFloat('42.7')) // 42.7
console.log(Number.parseFloat('42.7px')) // 42.7
console.log(Number.parseFloat('px42.7')) // NaN
Operaciones matemáticas básicas
let a = 10
let b = 3

# Operadores básicos
console.log(a + b) // 13 (suma)
console.log(a - b) // 7 (resta)
console.log(a * b) // 30 (multiplicación)
console.log(a / b) // 3.3333333333333335 (división)
console.log(a % b) // 1 (módulo/resto)
console.log(a ** b) // 1000 (exponenciación)

# Operadores de incremento/decremento
let contador = 5
console.log(++contador) // 6 (pre-incremento)
console.log(contador++) // 6 (post-incremento, luego contador = 7)
console.log(--contador) // 6 (pre-decremento)
console.log(contador--) // 6 (post-decremento, luego contador = 5)
Precisión y problemas comunes
Sobre los problemas de precisión decimal
Como hemos visto, los números en JavaScript no son perfectos. Hay algunos problemas de precisión que debemos tener en cuenta.

Problema clásico de punto flotante
Este problema es muy conocido. Mucha gente, de forma erronea, cree que es algo específico de JavaScript. En realidad es algo que afecta a muchos lenguajes de programación.

// Problema clásico de punto flotante
console.log(0.1 + 0.2) // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3) // false
Esto ocurre porque los números en JavaScript se representan en formato binario de punto flotante, lo que puede causar errores de precisión a la hora de hacer operaciones.

# Límites de enteros seguros
En JavaScript hay un límite de enteros seguros. Este límite es el número 2^53 - 1.
 Si intentas hacer operaciones con números más grandes que este límite, podrías perder precisión. 
 Para saber cuál es el número más grande que se puede representar con precisión, puedes usar la propiedad Number.MAX_SAFE_INTEGER.

// Enteros seguros
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1) // 9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2) // 9007199254740992 (¡es igual!)
Como ves en el código anterior, una vez que llegamos al límite de enteros seguros, cualquier operación que hagamos 
con ellos nos dará resultados inesperados así que ten cuidado.

# Funciones constructoras e instancias

# Qué son las funciones constructoras?
Las funciones constructoras son funciones especiales que se usan para crear múltiples objetos con la misma estructura. Se llaman con la palabra clave new y crean instancias (copias) del objeto.

Nota
Analogía: Una función constructora es como un molde para hacer galletas. El molde define la forma, y cada galleta que haces es una instancia única pero con la misma estructura.

# Función constructora (se escribe con mayúscula por convención)
function Persona(nombre, edad) {
  this.nombre = nombre
  this.edad = edad
}

#  Creamos instancias
const ana = new Persona('Ana', 25)
const carlos = new Persona('Carlos', 30)

console.log(ana.nombre) // "Ana"
console.log(carlos.nombre) // "Carlos"
console.log(ana.edad) // 25
console.log(carlos.edad) // 30

# ¿Qué hace la palabra new?
Cuando usas new con una función constructora, JavaScript hace 4 cosas automáticamente:

function Persona(nombre) {
  // 1. Crea un objeto vacío: this = {}
  // 2. Establece el prototipo: this.__proto__ = Persona.prototype
  this.nombre = nombre
  // 3. Ejecuta el código de la función
  // 4. Retorna this automáticamente
}

const ana = new Persona('Ana')

# La propiedad prototype
Todas las funciones constructoras tienen una propiedad especial llamada prototype. 
Aquí es donde ponemos los métodos que queremos que compartan todas las instancias.

function Coche(marca, modelo) {
  this.marca = marca
  this.modelo = modelo
}

# Añadimos métodos al prototype
Coche.prototype.acelerar = function () {
  console.log(`${this.marca} ${this.modelo} está acelerando`)
}

Coche.prototype.frenar = function () {
  console.log(`${this.marca} ${this.modelo} está frenando`)
}

# Creamos instancias
const coche1 = new Coche('Toyota', 'Corolla')
const coche2 = new Coche('Honda', 'Civic')

# Ambos pueden usar los métodos del prototype
coche1.acelerar() // "Toyota Corolla está acelerando"
coche2.frenar() // "Honda Civic está frenando"
prototype vs __proto__
¿Qué diferencia hay entre prototype y __proto__? ¡Es muy importante y uno de los errores más comunes en JavaScript!

prototype (solo en funciones constructoras)
Es una propiedad de las funciones constructoras
Nos ayuda a definir qué métodos tendrán las instancias
__proto__ (en todos los objetos)
Es una propiedad de las instancias
Apunta al prototype de la función constructora
function Animal(nombre) {
  this.nombre = nombre
}

Animal.prototype.dormir = function () {
  console.log(`${this.nombre} está durmiendo`)
}

const perro = new Animal('Rex')

// prototype vs __proto__
console.log(Animal.prototype) // "object"
console.log(perro.__proto__) // "object"

# Ambos apuntan al mismo prototipo
console.log(Animal.prototype === perro.__proto__) // true

# Propiedades vs Métodos
Buena práctica: Las propiedades específicas van en la función constructora, los métodos compartidos van en el prototype.

function Persona(nombre, edad) {
  // Propiedades específicas de cada instancia
  this.nombre = nombre
  this.edad = edad
}

# Métodos compartidos en el prototype
Persona.prototype.saludar = function () {
  console.log(`Hola, soy ${this.nombre}`)
}

Persona.prototype.cumplirAnios = function () {
  this.edad++
  console.log(`¡Feliz cumpleaños! Ahora tengo ${this.edad} años`)
}

const ana = new Persona('Ana', 25)
const carlos = new Persona('Carlos', 30)

ana.saludar() // "Hola, soy Ana"
carlos.saludar() // "Hola, soy Carlos"
ana.cumplirAnios() // "¡Feliz cumpleaños! Ahora tengo 26 años"
¿Por qué usar prototype?
Eficiencia de memoria
Sin prototype, cada instancia tendría su propia copia del método:

# Ineficiente - cada instancia tiene su propia función
function PersonaMala(nombre) {
  this.nombre = nombre
  this.saludar = function () {
    console.log(`Hola, soy ${this.nombre}`)
  }
}

# Eficiente - todas las instancias comparten la misma función
function PersonaBuena(nombre) {
  this.nombre = nombre
}

PersonaBuena.prototype.saludar = function () {
  console.log(`Hola, soy ${this.nombre}`)
}

# Verificar instancias
JavaScript nos da herramientas para verificar si un objeto es instancia de una constructor function:

function Vehiculo(tipo) {
  this.tipo = tipo
}

const coche = new Vehiculo('automóvil')
const moto = new Vehiculo('motocicleta')

# instanceof - verifica si un objeto es instancia de una función
console.log(coche instanceof Vehiculo) // true
console.log(moto instanceof Vehiculo) // true
console.log(coche instanceof Array) // false

# constructor - referencia a la función que creó el objeto
console.log(coche.constructor === Vehiculo) // true
console.log(moto.constructor === Vehiculo) // true
Herencia con Constructor Functions
Puedes crear jerarquías de herencia combinando constructor functions:

# Constructor padre
function Animal(nombre) {
  this.nombre = nombre
}

Animal.prototype.respirar = function () {
  console.log(`${this.nombre} está respirando`)
}

# Constructor hijo
function Perro(nombre, raza) {
  Animal.call(this, nombre) // Llama al constructor padre
  this.raza = raza
}

# Establecemos la herencia
Perro.prototype = Object.create(Animal.prototype)
Perro.prototype.constructor = Perro

# Añadimos métodos específicos
Perro.prototype.ladrar = function () {
  console.log(`${this.nombre} está ladrando: ¡Guau!`)
}

const rex = new Perro('Rex', 'Labrador')
rex.respirar() // "Rex está respirando" (heredado)
rex.ladrar() // "Rex está ladrando: ¡Guau!" (propio)
Cadena de prototipos resultante:

rex → Perro.prototype → Animal.prototype → Object.prototype → null

# Clases
# ¿Qué son las clases?
Las clases en JavaScript son azúcar sintáctico (syntactic sugar) sobre las funciones constructoras que hemos visto en la clase anterior. No añaden nueva funcionalidad, solo hacen que el código sea más limpio y fácil de leer.

Nota
# ¿Qué significa azúcar sintáctico? Es una forma más dulce y fácil de escribir algo que ya existía.

Sintaxis de clases vs funciones constructoras
Funciones constructoras (visto en la clase anterior):
function Persona(nombre, edad) {
  this.nombre = nombre
  this.edad = edad
}

Persona.prototype.saludar = function () {
  console.log(`Hola, soy ${this.nombre}`)
}
Clases (nueva sintaxis):
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
  }

  saludar() {
    console.log(`Hola, soy ${this.nombre}`)
  }
}
# Ambos ejemplos hacen exactamente lo mismo. El resultado es idéntico, pero la sintaxis de las clases es más clara y fácil de leer.

El constructor
El constructor es un método especial que se ejecuta automáticamente cada vez que se crea una nueva instancia de la clase. Recibe los parámetros que se pasan al crear la instancia y se encarga de inicializar el objeto.

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre
    this.edad = edad
    console.log(`-> Nueva persona: ${nombre} de ${edad} años`)
  }
}

const ana = new Persona('Ana', 25)
// -> Nueva persona: Ana de 25 años

const carlos = new Persona('Carlos', 30)
// -> Nueva persona: Carlos de 30 años

# Propiedades y métodos estáticos
A veces, queremos que cierta información o métodos, puedan ser accesibles sin necesidad de crear una instancia de la clase. 
Para ello, usamos la palabra clave static. Al hacer esto, la propiedad o método estático se asocia a la clase, no a las instancias. Y no necesitamos crear una instancia de la clase para acceder a ellos.

class Matematicas {
  static PI = 3.14159

  static sumar(a, b) {
    return a + b
  }

  static calcularArea(radio) {
    return this.PI * radio * radio
  }

  static esPar(numero) {
    return numero % 2 === 0
  }
}

# Se llaman en la clase, no en instancias
console.log(Matematicas.sumar(5, 3)) // 8
console.log(Matematicas.calcularArea(10)) // 314.159
console.log(Matematicas.esPar(4)) // true

#  No funcionan en instancias
const mat = new Matematicas()
// mat.sumar(1, 2)  // Error: mat.sumar is not a function
Getters y Setters
Los getters y setters son métodos especiales que se usan para obtener y establecer el valor de una propiedad. Son muy útiles para controlar el acceso a las propiedades y para añadir lógica a la hora de obtener o establecer un valor, sin necesidad de crear un método para ello.

class Temperatura {
  constructor(celsius = 0) {
    this._celsius = celsius // Convención: _ para propiedades "privadas"
  }

  # Getter - se usa como propiedad
  get fahrenheit() {
    return (this._celsius * 9) / 5 + 32
  }

  # Setter - se usa como asignación
  set fahrenheit(valor) {
    this._celsius = ((valor - 32) * 5) / 9
  }

  get celsius() {
    return this._celsius
  }

  set celsius(valor) {
    if (valor < -273.15) {
      throw new Error('Temperatura no puede ser menor a -273.15°C')
    }
    this._celsius = valor
  }
}

const temp = new Temperatura(25)

# usando los getters, fíjate que no usamos paréntesis
console.log(temp.celsius) // 25
console.log(temp.fahrenheit) // 77

# usando los setters, como si fuera una asignación
temp.fahrenheit = 100 // Usando el setter
console.log(temp.celsius) // 37.777...

# los setters ejecutan la lógica que hay dentro de ellos
temp.celsius = -300 // Error: Temperatura no puede ser menor a -273.15°C

# Propiedades y métodos privados
Podemos tener propiedades y métodos privados en las clases. Esto significa que no se pueden acceder ni modificar desde fuera de la clase. Para crearlos, usamos el símbolo # delante del nombre de la propiedad o método.

class CuentaBancaria {
  #saldo = 0 // Propiedad privada
  #numeroCuenta // Propiedad privada

  constructor(numeroCuenta, saldoInicial = 0) {
    this.#numeroCuenta = numeroCuenta
    this.#saldo = saldoInicial
  }

  # Método privado
  #validarOperacion(cantidad) {
    return cantidad > 0 && cantidad <= this.#saldo
  }

  depositar(cantidad) {
    if (cantidad > 0) {
      this.#saldo += cantidad
      console.log(`Depositado: $${cantidad}`)
    }
  }

  retirar(cantidad) {

  # aquí sí podemos acceder a los métodos y propiedades privados
    if (this.#validarOperacion(cantidad)) {
      this.#saldo -= cantidad
      console.log(`Retirado: $${cantidad}`)
    } else {
      console.log('Operación no válida')
    }
  }

  get saldo() {
    return this.#saldo
  }
}

const cuenta = new CuentaBancaria('123456', 1000)
cuenta.depositar(500)
console.log(cuenta.saldo) // 1500

// No podemos acceder directamente a propiedades privadas
// console.log(cuenta.#saldo)     // SyntaxError
// cuenta.#validarOperacion(100)  // SyntaxError
¿Cuándo usar clases?
Usa clases cuando:

# Necesites herencia (mucho más simple)
# Vengas de otros lenguajes orientados a objetos
# Quieras sintaxis moderna y limpia
Las funciones constructoras siguen siendo válidas aunque menos recomnedadas:

# Si necesitas compatibilidad con código antiguo
# Casos muy específicos donde necesites control total

# Para que quede claro...
Las clases ES6 son azúcar sintáctico que hace más fácil trabajar con:

# Métodos estáticos con static
# Propiedades privadas con #
# Getters y setters más claros
# Herencia (que veremos en la siguiente clase)
Lo importante: Por debajo siguen siendo constructor functions y prototipos. 
JavaScript no cambió, solo la forma de escribirlo.

¿Usar clases o constructor functions? Las clases son generalmente preferibles por su sintaxis más clara. 
Las constructor functions siguen siendo válidas para compatibilidad o casos específicos.

Las clases hacen que JavaScript sea más familiar para desarrolladores de otros lenguajes, 
sin perder la flexibilidad de los prototipos. 🎉

# Herencia en Clases
Las clases en JavaScript permiten heredar propiedades y métodos de una clase padre. A este proceso se le llama herencia. Es posible que todo esto te suene familiar, porque ya lo has visto en la clase anterior cómo conseguirlo con los prototipos, pero ahora veremos cómo lograrlo con clases.

extends
La principal ventaja de las clases es que simplifican enormemente la herencia de objetos gracias a la palabra clave extends. Vamos a crear una clase Animal, que será la clase padre, y una clase Perro, que será la clase que herede de Animal.

class Animal {
  constructor(nombre) {
    this.nombre = nombre
  }

  dormir() {
    console.log(`${this.nombre} está durmiendo`)
  }
}

class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre) // Llama al constructor del padre
    this.raza = raza
  }

  ladrar() {
    console.log(`${this.nombre} dice: ¡Guau!`)
  }
}

const rex = new Perro('Rex', 'Labrador')
rex.dormir() // "Rex está durmiendo" (heredado)
rex.ladrar() // "Rex dice: ¡Guau!" (propio)

# De esta forma, la clase Perro hereda el método dormir de la clase Animal y añade el método ladrar.

#  Herencia con extends y super
class Animal {
  constructor(nombre) {
    this.nombre = nombre
  }
  dormir() { … }
}
class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre)
    this.raza = raza
  }
  ladrar() { … }
}
const rex = new Perro('Rex', 'Labrador')

# La palabra clave super
Como hemos visto en el ejemplo anterior, hay una palabra super en el método constructor de la clase Perro. 
Esta función se usa para llamar al constructor de la clase padre y también nos permite acceder a los métodos y propiedades de la clase padre.

class Vehiculo {
  acelerar() {
    console.log('Acelerando...')
  }
}

class Moto extends Vehiculo {
  acelerar() {
    super.acelerar() // Llama al método del padre
    console.log('¡Haciendo caballito!') // Añade funcionalidad
  }
}

const moto = new Moto()
moto.acelerar()
// "Acelerando..."
// "¡Haciendo caballito!"


# Veamos un ejemplo más completo de herecia que muestra cómo funciona la herencia en la práctica.
# Tenemos una clase Empleado, que será la clase padre, y las clases Programador y Manager, que serán las clases que hereden de Empleado. Normalmente las clases hijas suelen tener métodos y propiedades propias y más específicos.

class Empleado {
  constructor(nombre, salario) {
    this.nombre = nombre
    this.salario = salario
  }

  trabajar() {
    console.log(`${this.nombre} está trabajando`)
  }

  cobrar() {
    console.log(`${this.nombre} cobra ${this.salario}€`)
  }
}

class Programador extends Empleado {
  constructor(nombre, salario, lenguaje) {
    super(nombre, salario) // Llama al constructor padre
    this.lenguaje = lenguaje
  }

  // Sobrescribe el método del padre
  trabajar() {
    super.trabajar() // Llama al método padre
    console.log(`Programando en ${this.lenguaje}`)
  }

  // Método propio
  programar() {
    console.log(`${this.nombre} está programando en ${this.lenguaje}`)
  }
}

class Manager extends Empleado {
  constructor(nombre, salario, equipo) {
    super(nombre, salario)
    this.equipo = equipo
  }

  trabajar() {
    super.trabajar()
    console.log(`Gestionando un equipo de ${this.equipo.length} personas`)
  }

  dirigir() {
    console.log(`${this.nombre} está dirigiendo el equipo`)
  }
}

const dev = new Programador('Ana', 45000, 'JavaScript')
const jefe = new Manager('Carlos', 60000, ['Ana', 'Luis', 'María'])

dev.trabajar()
// "Ana está trabajando"
// "Programando en JavaScript"

jefe.trabajar()
// "Carlos está trabajando"
// "Gestionando un equipo de 3 personas"

dev.cobrar() // "Ana cobra 45000€" (heredado)
jefe.dirigir() // "Carlos está dirigiendo el equipo" (propio)

# Podemos crear cadenas de herencia más complejas donde una clase herede de otra que ya hereda de una tercera:

class SerVivo {
  constructor(nombre) {
    this.nombre = nombre
    this.vivo = true
  }

  respirar() {
    console.log(`${this.nombre} está respirando`)
  }
}

class Animal extends SerVivo {
  constructor(nombre, especie) {
    super(nombre)
    this.especie = especie
  }

  moverse() {
    console.log(`${this.nombre} se está moviendo`)
  }
}

class Mamifero extends Animal {
  constructor(nombre, especie, pelaje) {
    super(nombre, especie)
    this.pelaje = pelaje
  }

  amamantar() {
    console.log(`${this.nombre} está amamantando`)
  }
}

class Gato extends Mamifero {
  constructor(nombre, raza) {
    super(nombre, 'Felino', true)
    this.raza = raza
  }

  maullar() {
    console.log(`${this.nombre} dice: ¡Miau!`)
  }
}

const michi = new Gato('Michi', 'Persa')
# Puede usar métodos de todas las clases padre
michi.respirar()    // De SerVivo
michi.moverse()     // De Animal
michi.amamantar()   // De Mamifero
michi.maullar()     // Propio de Gato
Ventajas de la herencia con clases
Comparado con funciones constructoras:

# Sintaxis más clara: extends vs configuración manual de prototipos
# Super simplificado: super() vs Parent.call(this)
# Menos propenso a errores: JavaScript maneja la cadena de prototipos automáticamente
# Más legible: El código expresa claramente las relaciones de herencia
Lo importante recordar:

# Las clases son azúcar sintáctico sobre prototipos
La herencia sigue funcionando igual por debajo
super() debe llamarse antes de usar this en el constructor hijo
Los métodos se heredan automáticamente a través de la cadena de prototipos
La herencia con clases hace que JavaScript sea más accesible para desarrolladores de otros lenguajes, manteniendo toda la potencia de los prototipos. 

# Try/Catch
Los errores son inevitables en la programación. Cuando ocurre un error en JavaScript y no lo controlas, 
el programa se detiene por completo. A este tipo de error se le llama excepción. Por suerte, JavaScript nos ofrece una forma elegante de manejar estos errores para que nuestras aplicaciones sean más robustas: try/catch.

# ¿Qué son los errores en JavaScript?
Un error en JavaScript es una situación excepcional que ocurre durante la ejecución del código y que impide que el programa continúe ejecutándose normalmente y se detiene.

console.log("Antes del error")
console.log(variableQueNoExiste) // ReferenceError: variableQueNoExiste is not defined
console.log("Después del error") // Esta línea nunca se ejecuta
# Como puedes ver, cuando ocurre un error, todo el código que viene después se detiene. Esto puede ser problemático en aplicaciones reales.

Nota
# Existen diferentes tipos de errores en JavaScript, como ReferenceError, TypeError, SyntaxError... Más adelante veremos algunos de ellos al detalle y cómo puedes crear incluso tus propios errores.

# La sintaxis try/catch
La estructura try/catch nos permite "intentar" ejecutar código que podría fallar y "capturar" cualquier error que ocurra:

try {
  // Código que podría generar un error
  console.log("Intentando ejecutar código...")
  console.log(variableQueNoExiste) // ReferenceError: variableQueNoExiste is not defined
} catch (error) {
  // Código que se ejecuta si hay un error
  console.log("¡Ocurrió un error!", error.message)
}

console.log("El programa continúa ejecutándose") //  Esta línea sí se ejecuta
¿Cómo funciona?
try: JavaScript intenta ejecutar el código dentro del bloque try
Si no hay errores, el bloque catch se omite
Si hay un error, JavaScript inmediatamente salta al bloque catch
El programa continúa después del bloque catch.

# catch sin parámetro
Desde las últimas versiones de JavaScript, puedes omitir el parámetro error en el bloque catch:

try {
  console.log(variableQueNoExiste) // ❌ ReferenceError: variableQueNoExiste is not defined
} catch {
  console.log("¡Ocurrió un error!")
}

# ¿Cuándo usar try/catch?
Usa try/catch cuando:

Trabajas con APIs externas
Parseas JSON
Accedes a propiedades que podrían no existir
Realizas operaciones que pueden fallar por factores externos
No uses try/catch para:

Controlar el flujo normal de tu programa
Validaciones simples que puedes hacer con if/else
Errores que puedes prevenir fácilmente.

# Fetch API
¡Ha llegado el momento de conectar tu JavaScript con el mundo exterior! 
La Fetch API es la forma moderna y elegante de hacer peticiones HTTP para comunicarse con servidores, APIs y servicios web.

Fetch es perfecto para este punto del curso porque devuelve Promises, así que podrás aplicar todo lo que acabas de aprender sobre programación asíncrona.

¿Qué es la Fetch API?
Fetch es una API moderna del navegador que permite hacer peticiones HTTP de forma sencilla y está basado completamente en Promises.

# ¿Para qué sirve Fetch?
🌐 Comunicarse con APIs REST
📊 Obtener datos de servidores
📤 Enviar información al servidor
📁 Descargar archivos
🔄 Actualizar contenido dinámicamente

# Sintaxis básica
Imagínate que fetch es como un mensajero súper eficiente 📬. Le das una dirección (URL) y te trae de vuelta lo que encuentre allí. 
La magia está en que este mensajero trabaja de forma asíncrona: no te hace esperar parado, sino que te avisa cuando tiene la respuesta lista.

fetch(url, opciones)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error))
¿Qué está pasando en esta sintaxis?

# fetch(url) - Le decimos al mensajero: "Ve a esta dirección"
.then(response =>...) - "Cuando vuelvas, dame lo que encontraste"
.json() - "Y por favor, tradúcelo a un formato que pueda entender"
.then(data =>...) - "Cuando esté traducido, úsalo"
.catch(error =>...) - "Si algo sale mal, avísame"
Es como enviar a alguien a comprar pizza 🍕: le das la dirección de la pizzería, esperas que vuelva con la pizza, 
y si la pizzería está cerrada o se perdió en el camino, te avisa del problema.

# Tu primera petición con fetch
¡Momento de la verdad! Vamos a hacer tu primera petición HTTP real a una API.

# Usaremos JSONPlaceholder, que es como un "servidor de mentira" perfecto para practicar. La URL de la API es:
#  https://jsonplaceholder.typicode.com y dependiendo de la ruta podremos obtener diferentes datos.

En este caso vamos a recuperar los datos del post número 1, por lo que usaremos la ruta https://jsonplaceholder.typicode.com/posts/1.

# fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('✅ Respuesta recibida:', response.status)
    return response.json() // Convertir a JSON
  })
  .then(data => {
    console.log('📄 Datos obtenidos:')
    console.log('Título:', data.title)
    console.log('Contenido:', data.body)
  })
  .catch(error => {
    console.log('❌ Error:', error)
  })
  # Analicemos este código línea por línea! 🔍

Línea 1: Le decimos a fetch "Ve a buscar el post número 1"
Línea 2-5: Cuando regrese, verificamos que todo salió bien (response.status) y le decimos "convierte eso a JSON para que lo pueda leer"
Línea 6-10: Una vez convertido, mostramos la información de manera bonita
Línea 11-13: Si algo sale mal en cualquier momento, lo capturamos aquí
¿Por qué dos .then()? 🤔

# En clases anteriores vimos el concepto de Promise, y como podemos encadenar varias Promises para hacer cosas más complejas. 
# En este caso, ocurre lo mismo. Primero hacemos la petición, que devuelve una Promise, y luego convertimos la respuesta a JSON, que también devuelve una Promise.

El Objeto Response: Tu Inspector de Paquetes 📋
Aquí viene algo súper importante: cuando fetch recibe una respuesta del servidor, no te da directamente los datos. En su lugar, te da un objeto Response con toda la información de la respuesta.

Es como cuando recibes un paquete de Amazon: primero inspeccionas el exterior antes de abrirlo.

# ¿Por qué? Porque antes de abrir el paquete, necesitas saber:

¿Llegó bien el paquete? (status)
¿Está dañado? (ok)
¿De dónde viene exactamente? (url)
¿Qué tipo de contenido trae? (headers)
Además, puedes obtener los datos de la respuesta de diferentes maneras, dependiendo de lo que esperes.

Vamos a ver un ejemplo

# fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    console.log('📊 Información de la respuesta:')
    console.log('Estado:', response.status)      // 200, 404, 500, etc.
    console.log('OK:', response.ok)              // true si status 200-299
    console.log('URL:', response.url)
    console.log('Headers:', response.headers)
    
    // Verificar si la respuesta es exitosa
    if (response.ok) {
      return response.json()
    } else {
      throw new Error(`Error HTTP: ${response.status}`)
    }
  })
  .then(user => {
    console.log('👤 Usuario:', user.name)
    console.log('📧 Email:', user.email)
  })
  .catch(error => {
    console.log('❌ Error:', error.message)
  })

# Tipos de Peticiones HTTP
Imagina que HTTP es como un idioma universal de internet, y cada tipo de petición es como una frase con un propósito específico. 
Es como tener diferentes formas de hablar con un camarero en un restaurante:

GET: "¿Qué hay en el menú?" (solo quiero leer)
POST: "Quiero ordenar esto" (crear algo nuevo)
PUT: "Cambia mi orden completa por esta nueva" (reemplazar todo)
PATCH: "Solo cambia las papas por ensalada" (modificar una parte)
DELETE: "Cancela mi orden" (eliminar)
GET - Obtener Datos
GET es el método más común. Es como asomarse por la ventana sin tocar nada. Solo observa y trae información, nunca modifica nada en el servidor.

# Obtener lista de usuarios
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    return response.json()
  })
  .then(usuarios => {
    console.log('👥 Usuarios obtenidos:', usuarios.length)
    usuarios.slice(0, 3).forEach(user => {
      console.log(`- ${user.name} (${user.email})`)
    })
  })
  .catch(error => {
    console.log('❌ Error obteniendo usuarios:', error.message)
  })

# El segundo parámetro de fetch: Configurar la petición
Antes de continuar con POST, tenemos que aprender sobre el segundo parámetro de fetch, que es el que nos permite configurar la petición.

En él podremos cambiar el método de la petición (que por defecto es GET), enviar cabeceras personalizadas 
o enviar datos en el cuerpo de la petición para ser procesados por el servidor.

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
  body: JSON.stringify({
    title: 'Mi primer post con Fetch',
    body: 'Este es el contenido de mi post creado con JavaScript',
    userId: 1
  })
})
POST - Enviar Datos
POST es el método para crear recursos nuevos en el servidor. Es perfecto para:

✅ Crear nuevos usuarios
✅ Publicar nuevos posts
✅ Enviar formularios
✅ Subir archivos
#  Crear un nuevo post
function crearPost() {
  const nuevoPost = {
    title: 'Mi primer post con Fetch',
    body: 'Este es el contenido de mi post creado con JavaScript',
    userId: 1
  }

  return fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(nuevoPost)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    return response.json()
  })
  .then(postCreado => {
    console.log('✅ Post creado exitosamente:')
    console.log('ID:', postCreado.id)
    console.log('Título:', postCreado.title)
  })
  .catch(error => {
    console.log('❌ Error creando post:', error.message)
  })
}

# crearPost()
PUT - Actualizar Completamente
PUT es el método para reemplazar completamente un recurso existente en el servidor. Es como reformar una casa: derrumbas todo y construyes desde cero.

// Actualizar un post completo
function actualizarPost(id) {
  const postActualizado = {
    id: id,
    title: 'Post actualizado con PUT',
    body: 'Este contenido ha sido completamente reemplazado',
    userId: 1
  }
  
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postActualizado)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    return response.json()
  })
  .then(postActualizado => {
    console.log('🔄 Post actualizado:', postActualizado.title)
  })
  .catch(error => {
    console.log('❌ Error actualizando:', error.message)
  })
}

# actualizarPost(1)
PATCH - Actualización parcial
PATCH es el método "editor selectivo". Es como ser un cirujano que opera solo la parte que necesita arreglo, sin tocar el resto del cuerpo.

PATCH es súper eficiente porque solo envías los datos que quieres cambiar:

// Actualizar solo el título
function actualizarTitulo(id, nuevoTitulo) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: nuevoTitulo
    })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    return response.json()
  })
  .then(resultado => {
    console.log('📝 Título actualizado:', resultado.title)
    return resultado
  })
  .catch(error => {
    console.log('❌ Error:', error.message)
  })
}

# actualizarTitulo(1, 'Nuevo título con PATCH')
DELETE - Eliminar el recurso
DELETE es el método para eliminar un recurso existente en el servidor.

# Eliminar un post
function eliminarPost(id) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    method: 'DELETE'
  }).then(response => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`)
    }
    
    // DELETE generalmente no devuelve contenido útil
    if (response.status === 200) {
      console.log(`🗑️ Post ${id} eliminado exitosamente`)
    }
    
    return response
  })
  .catch(error => {
    console.log('❌ Error:', error.message)
  })
}

# eliminarPost(1)
Manejo de Errores Avanzado: Conviértete en un Detective de Problemas 🕵️‍♀️
Aquí viene una de las partes MÁS IMPORTANTES de trabajar con fetch. Los errores van a pasar (es inevitable), 
pero la diferencia entre un programador principiante y uno experto está en cómo manejas esos errores.

¡Dato curioso! 🤯 Fetch tiene una peculiaridad: NO considera los códigos 4xx y 5xx como errores. 
Es como un mensajero que te dice "Misión cumplida" aunque la casa esté en llamas. Por eso necesitas ser tú quien verifique si todo salió bien.

Verificación de Estados HTTP: Tu Sistema de Alarmas 🚨
Los códigos de estado HTTP son como semáforos de internet:

2xx (200-299): 🟢 "¡Todo perfecto!"
3xx (300-399): 🟡 "Te redirigí a otro lugar"
4xx (400-499): 🔴 "Tú hiciste algo mal"
5xx (500-599): 💥 "Yo (el servidor) hice algo mal"
function peticionConManejorDeErrores(url) {
  return fetch(url)

    .then(response => {
  # Fetch NO rechaza la promesa para códigos 4xx o 5xx
      // Pero si puedes verificar si todo salió bien con response.ok
      if (!response.ok) {
        // Manejar diferentes tipos de error
        switch (response.status) {
          case 404:
            throw new Error('🔍 Recurso no encontrado')
          case 401:
            throw new Error('🔐 No autorizado')
          case 403:
            throw new Error('🚫 Acceso prohibido')
          case 500:
            throw new Error('💥 Error interno del servidor')
          default:
            throw new Error(`❌ Error HTTP: ${response.status}`)
        }
      }
      
      return response.json()
    })
    .then(data => {
      console.log('✅ Datos obtenidos:', data)
      return data
    })
    .catch(error => {
      if (error.name === 'TypeError') {
        console.log('🌐 Error de conexión:', error.message)
      } else {
        console.log('Error:', error.message)
      }
    })
}

# Probar con URL que no existe
peticionConManejorDeErrores('https://jsonplaceholder.typicode.com/posts/999999')

# ¡Últimas palabras para fetch
¿Qué es fetch?
API moderna para hacer peticiones HTTP
Basada en Promises - perfecta para async/await
Características Principales
✅ Sintaxis limpia y moderna
✅ Compatible con Promises y async/await
✅ Flexible - soporta todos los métodos HTTP
✅ Streaming de datos
✅ Headers personalizables
Métodos HTTP Comunes
GET - obtener datos
POST - crear recursos
PUT - actualizar completo
PATCH - actualizar parcial
DELETE - eliminar recursos
Puntos Importantes
⚠️ fetch() NO rechaza para códigos 4xx/5xx
✅ Siempre verificar response.ok
✅ Manejar errores apropiadamente
✅ Usar async/await para código más limpio
Próximo Paso
# Ahora que sabes hacer peticiones HTTP con Fetch, estás listo para el siguiente nivel: async/await, que hará que trabajar con Fetch sea aún más elegante y fácil de leer.

# ¿Qué es el DOM?
DOM significa Document Object Model (Modelo de Objeto del Documento). Es la representación que hace JavaScript de una página web.
 Piensa en el DOM como un árbol donde cada elemento HTML es un nodo que puedes manipular con JavaScript.

<!DOCTYPE html>
<html>
  <head>
    <title>Mi página</title>
  </head>
  <body>
    <h1 id="titulo">¡Hola Mundo!</h1>
    <p class="descripcion">Esta es mi primera página interactiva</p>
    <button>Click me</button>
  </body>
</html>

# JavaScript ve esta página como un objeto con propiedades y métodos que podemos usar para:

✅ Seleccionar elementos
✅ Modificar contenido
✅ Cambiar estilos
✅ Responder a eventos del usuario
El objeto document

# document es el objeto principal que JavaScript nos da para interactuar con la página web. Es tu punto de entrada al DOM.

console.log(document) // Muestra todo el documento HTML
console.log(document.title) // Título de la página
console.log(document.URL) // URL actual
Métodos de Selección

# querySelector() - El más versátil
querySelector() es el método más moderno y flexible. Usa selectores CSS para encontrar elementos.

// Seleccionar por ID
const titulo = document.querySelector('#titulo')

// Seleccionar por clase
const descripcion = document.querySelector('.descripcion')

// Seleccionar por etiqueta
const primerParrafo = document.querySelector('p')

// Selectores más específicos
const botonEnHeader = document.querySelector('header button')
const primerLink = document.querySelector('a[href]')
Selectores CSS comunes:
// ID (solo encuentra el primero)
document.querySelector('#mi-id')

// Clase (solo encuentra el primero)
document.querySelector('.mi-clase')

// Etiqueta (solo encuentra el primero)
document.querySelector('div')

// Atributo
document.querySelector('[data-id="123"]')
document.querySelector('input[type="email"]')

// Combinados
document.querySelector('div.mi-clase')
document.querySelector('#contenido p.destacado')

// Pseudo-selectores
document.querySelector('li:first-child')
document.querySelector('p:last-of-type')
# querySelectorAll() - Seleccionar múltiples elementos
Cuando necesites todos los elementos que coincidan con un selector:

// Seleccionar TODOS los párrafos
const todosLosParrafos = document.querySelectorAll('p')

// Seleccionar TODOS los elementos con una clase
const todosLosCards = document.querySelectorAll('.card')

// Seleccionar TODOS los links
const todosLosLinks = document.querySelectorAll('a')

console.log(todosLosParrafos.length) // Cantidad de párrafos encontrados
Importante: querySelectorAll() devuelve una NodeList, no un array, pero puedes iterarla:

const botones = document.querySelectorAll('button')

// Iterar con forEach
botones.forEach(boton => {
  console.log(boton.textContent)
})

// Convertir a array si necesitas métodos de array
const arrayBotones = Array.from(botones)
const arrayBotones2 = [...botones] // Con spread operator
# getElementById() - Selección por ID
Método clásico y rápido para seleccionar por ID:

// Sin el símbolo #
const titulo = document.getElementById('titulo')
const menu = document.getElementById('menu-principal')
Diferencias con querySelector:

✅ Más rápido para IDs
❌ Solo funciona con IDs
❌ No acepta selectores CSS complejos
4. getElementsByClassName() - Selección por clase
// Sin el punto
const cards = document.getElementsByClassName('card')
const botonesPrimarios = document.getElementsByClassName('btn-primary')

// Devuelve una HTMLCollection (similar a NodeList)
console.log(cards.length)
5. getElementsByTagName() - Selección por etiqueta
const parrafos = document.getElementsByTagName('p')
const imagenes = document.getElementsByTagName('img')
const divs = document.getElementsByTagName('div')

# Ejemplo 1: Página de perfil de usuario
<!DOCTYPE html>
<html>
<body>
  <header>
    <h1 id="nombre-usuario">Juan Pérez</h1>
    <img id="avatar" src="avatar.jpg" alt="Avatar">
  </header>
  
  <main>
    <section class="informacion">
      <p class="email">juan@ejemplo.com</p>
      <p class="telefono">+34 123 456 789</p>
    </section>
    
    <section class="redes-sociales">
      <a href="#" class="red-social" data-red="twitter">Twitter</a>
      <a href="#" class="red-social" data-red="linkedin">LinkedIn</a>
      <a href="#" class="red-social" data-red="github">GitHub</a>
    </section>
  </main>
</body>
</html>

# Seleccionar elementos únicos
const nombreUsuario = document.querySelector('#nombre-usuario')
const avatar = document.querySelector('#avatar')
const email = document.querySelector('.email')

// Seleccionar múltiples elementos
const redesSociales = document.querySelectorAll('.red-social')
const todosLosParrafos = document.querySelectorAll('p')

// Selectores específicos
const twitterLink = document.querySelector('[data-red="twitter"]')
const primerParrafoDeInfo = document.querySelector('.informacion p')

// Mostrar información
console.log('Nombre:', nombreUsuario.textContent)
console.log('Email:', email.textContent)
console.log('Redes sociales encontradas:', redesSociales.length)
Ejemplo 2: Lista de tareas
<div id="todo-app">
  <h2>Mis Tareas</h2>
  <ul id="lista-tareas">
    <li class="tarea completada">Aprender HTML</li>
    <li class="tarea">Aprender CSS</li>
    <li class="tarea">Aprender JavaScript</li>
    <li class="tarea urgente">Hacer ejercicios</li>
  </ul>
  <button id="agregar-tarea">Agregar Tarea</button>
</div>

# Seleccionar contenedores principales
const app = document.querySelector('#todo-app')
const listaTareas = document.querySelector('#lista-tareas')
const botonAgregar = document.querySelector('#agregar-tarea')

// Seleccionar tareas
const todasLasTareas = document.querySelectorAll('.tarea')
const tareasCompletadas = document.querySelectorAll('.tarea.completada')
const tareasUrgentes = document.querySelectorAll('.tarea.urgente')

// Información útil
console.log('Total de tareas:', todasLasTareas.length)
console.log('Tareas completadas:', tareasCompletadas.length)
console.log('Tareas urgentes:', tareasUrgentes.length)

// Iterar sobre las tareas
todasLasTareas.forEach((tarea, index) => {
  console.log(`Tarea ${index + 1}: ${tarea.textContent}`)
})
Verificar si un elemento existe
Importante: Si un elemento no existe, los métodos devuelven null o colecciones vacías:

const elementoQueNoExiste = document.querySelector('#no-existe')
console.log(elementoQueNoExiste) // null

// Siempre verificar antes de usar
if (elementoQueNoExiste) {
  // Solo se ejecuta si el elemento existe
  console.log(elementoQueNoExiste.textContent)
} else {
  console.log('El elemento no fue encontrado')
}

// Forma más concisa
const titulo = document.querySelector('#titulo')
titulo?.classList.add('activo') // Solo se ejecuta si titulo existe

# Resumen
DOM es la representación JavaScript de una página web
document es tu punto de entrada al DOM
querySelector() es el método más versátil (usa selectores CSS)
querySelectorAll() para seleccionar múltiples elementos
Siempre verifica que el elemento existe antes de usarlo
Cachea elementos que usarás múltiples veces
En la próxima lección aprenderemos a modificar estos elementos que hemos seleccionado.

# Manipulación del DOM
En la lección anterior aprendimos a seleccionar elementos del DOM. Ahora viene lo divertido: modificarlos. 
Vamos a aprender a cambiar contenido, estilos, atributos y crear elementos completamente nuevos. ¡Es aquí donde tu página web cobra vida!

Modificar el contenido de elementos
textContent - Solo texto
textContent te permite leer y modificar solo el texto de un elemento, ignorando cualquier HTML:

const titulo = document.querySelector('#titulo')

# Leer el contenido
console.log(titulo.textContent) // "¡Hola Mundo!"

// Modificar el contenido
titulo.textContent = "¡Hola JavaScript!"
titulo.textContent = "Contador: " + contador
titulo.textContent = `Usuario: ${nombreUsuario}`
Características de textContent:

✅ Seguro: No interpreta HTML, previene ataques XSS
✅ Rápido: Mejor rendimiento que innerHTML
❌ Solo texto: No puedes añadir HTML
innerHTML - HTML completo
innerHTML te permite leer y modificar el HTML completo dentro de un elemento:

const contenedor = document.querySelector('#contenedor')

// Leer el HTML
console.log(contenedor.innerHTML)

// Modificar con HTML
contenedor.innerHTML = '<p>Nuevo párrafo con <strong>texto en negrita</strong></p>'
contenedor.innerHTML = `
  <div class="card">
    <h3>${titulo}</h3>
    <p>${descripcion}</p>
    <button>Ver más</button>
  </div>
`
⚠️ Cuidado con innerHTML:

✅ Flexible: Puedes crear estructuras HTML complejas
❌ Riesgo de seguridad: Puede ejecutar scripts maliciosos
❌ Más lento: Tiene que parsear HTML
// ❌ Peligroso si userData viene del usuario
contenedor.innerHTML = `<p>Hola ${userData}</p>` 

// ✅ Mejor usar textContent para datos del usuario
contenedor.textContent = `Hola ${userData}`

# Modificar atributos
# getAttribute() y setAttribute()
const imagen = document.querySelector('#mi-imagen')
const enlace = document.querySelector('#mi-enlace')

// Leer atributos
console.log(imagen.getAttribute('src'))
console.log(imagen.getAttribute('alt'))
console.log(enlace.getAttribute('href'))

// Modificar atributos
imagen.setAttribute('src', 'nueva-imagen.jpg')
imagen.setAttribute('alt', 'Nueva descripción')
enlace.setAttribute('href', 'https://ejemplo.com')
enlace.setAttribute('target', '_blank')
Propiedades directas
Muchos atributos HTML tienen propiedades directas más cómodas de usar:

const input = document.querySelector('#email')
const checkbox = document.querySelector('#acepto-terminos')
const enlace = document.querySelector('#mi-enlace')

# Propiedades comunes
input.value = 'nuevo@email.com'
input.placeholder = 'Introduce tu email'
checkbox.checked = true
enlace.href = 'https://nueva-url.com'

# Atributos booleanos
input.disabled = true
input.required = false
checkbox.checked = true
removeAttribute()
const imagen = document.querySelector('#imagen')

# Eliminar atributos
imagen.removeAttribute('width')
imagen.removeAttribute('height')

// Verificar si tiene un atributo
if (imagen.hasAttribute('data-id')) {
  console.log('La imagen tiene data-id')
}

# Modificar estilos CSS
Propiedad style
Puedes modificar estilos CSS directamente:

const caja = document.querySelector('#caja')

// Modificar estilos individuales
caja.style.backgroundColor = 'red'
caja.style.color = 'white'
caja.style.fontSize = '20px'
caja.style.margin = '10px'
caja.style.display = 'none' // Ocultar elemento

// Propiedades CSS con guiones se convierten a camelCase
caja.style.borderRadius = '10px' // border-radius
caja.style.textAlign = 'center'  // text-align
Importante: Los estilos aplicados con style son inline y tienen alta prioridad.

# Trabajar con clases CSS
Mejor práctica: Usar clases CSS en lugar de estilos inline:

/* En tu CSS */
.destacado {
  background-color: yellow;
  font-weight: bold;
}

.oculto {
  display: none;
}

.activo {
  color: green;
  border: 2px solid green;
}
classList - Manipular clases
const elemento = document.querySelector('#mi-elemento')

// Añadir clases
elemento.classList.add('destacado')
elemento.classList.add('activo', 'importante') // Múltiples clases

# Eliminar clases
elemento.classList.remove('oculto')
elemento.classList.remove('activo', 'destacado')

// Alternar clase (toggle)
elemento.classList.toggle('activo') // Si la tiene la quita, si no la tiene la pone

// Verificar si tiene una clase
if (elemento.classList.contains('activo')) {
  console.log('El elemento está activo')
}

# Reemplazar una clase por otra
elemento.classList.replace('viejo', 'nuevo')
Crear elementos nuevos
createElement()
// Crear un nuevo elemento
const nuevoParrafo = document.createElement('p')
const nuevaImagen = document.createElement('img')
const nuevoBoton = document.createElement('button')

// Configurar el elemento
nuevoParrafo.textContent = 'Este es un párrafo creado con JavaScript'
nuevoParrafo.classList.add('parrafo-dinamico')

nuevaImagen.src = 'imagen.jpg'
nuevaImagen.alt = 'Descripción de la imagen'

nuevoBoton.textContent = 'Click me'
nuevoBoton.classList.add('btn', 'btn-primary')
Añadir elementos al DOM
appendChild() - Añadir al final
const contenedor = document.querySelector('#contenedor')
const lista = document.querySelector('#mi-lista')

# Añadir al final del contenedor
contenedor.appendChild(nuevoParrafo)
contenedor.appendChild(nuevaImagen)

// Crear y añadir un elemento de lista
const nuevoItem = document.createElement('li')
nuevoItem.textContent = 'Nuevo elemento de lista'
lista.appendChild(nuevoItem)

# insertBefore() - Insertar en posición específica
const lista = document.querySelector('#lista')
const primerItem = lista.querySelector('li')

const nuevoItem = document.createElement('li')
nuevoItem.textContent = 'Insertado al principio'

# Insertar antes del primer elemento
lista.insertBefore(nuevoItem, primerItem)

// Insertar antes de null = insertar al final (como appendChild)
lista.insertBefore(otroItem, null)
insertAdjacentHTML() - Insertar HTML en posiciones específicas
const elemento = document.querySelector('#elemento')

// beforebegin: antes del elemento
elemento.insertAdjacentHTML('beforebegin', '<p>Antes del elemento</p>')

// afterbegin: al principio del contenido del elemento
elemento.insertAdjacentHTML('afterbegin', '<span>Al principio</span>')

// beforeend: al final del contenido del elemento
elemento.insertAdjacentHTML('beforeend', '<span>Al final</span>')

// afterend: después del elemento
elemento.insertAdjacentHTML('afterend', '<p>Después del elemento</p>')
Eliminar elementos
remove() - Eliminar el elemento
const elemento = document.querySelector('#elemento-a-eliminar')

# Eliminar el elemento completamente
elemento.remove()
removeChild() - Eliminar hijo
const contenedor = document.querySelector('#contenedor')
const elementoAEliminar = document.querySelector('#hijo-a-eliminar')

# Eliminar un hijo específico
contenedor.removeChild(elementoAEliminar)
Ejemplos prácticos
Ejemplo 1: Contador interactivo
<div id="contador-app">
  <h2 id="numero">0</h2>
  <button id="incrementar">+</button>
  <button id="decrementar">-</button>
  <button id="reset">Reset</button>
</div>
let contador = 0

# Seleccionar elementos
const numeroElement = document.querySelector('#numero')
const btnIncrementar = document.querySelector('#incrementar')
const btnDecrementar = document.querySelector('#decrementar')
const btnReset = document.querySelector('#reset')

// Función para actualizar la visualización
function actualizarContador() {
  numeroElement.textContent = contador
  
  // Cambiar color según el valor
  if (contador > 0) {
    numeroElement.style.color = 'green'
  } else if (contador < 0) {
    numeroElement.style.color = 'red'
  } else {
    numeroElement.style.color = 'black'
  }
}

# Event listeners (los veremos en detalle en la próxima lección)
btnIncrementar.addEventListener('click', () => {
  contador++
  actualizarContador()
})

btnDecrementar.addEventListener('click', () => {
  contador--
  actualizarContador()
})

btnReset.addEventListener('click', () => {
  contador = 0
  actualizarContador()
})
# Ejemplo 2: Lista de tareas dinámica
<div id="todo-app">
  <input type="text" id="nueva-tarea" placeholder="Escribe una tarea...">
  <button id="agregar">Agregar</button>
  <ul id="lista-tareas"></ul>
</div>
// Seleccionar elementos
const input = document.querySelector('#nueva-tarea')
const btnAgregar = document.querySelector('#agregar')
const listaTareas = document.querySelector('#lista-tareas')

#  Función para agregar tarea
function agregarTarea() {
  const textoTarea = input.value.trim()
  
  if (textoTarea === '') {
    alert('Por favor, escribe una tarea')
    return
  }
  
  # Crear elementos
  const li = document.createElement('li')
  const span = document.createElement('span')
  const btnEliminar = document.createElement('button')
  
  // Configurar elementos
  span.textContent = textoTarea
  btnEliminar.textContent = 'Eliminar'
  btnEliminar.classList.add('btn-eliminar')
  
  // Ensamblar la tarea
  li.appendChild(span)
  li.appendChild(btnEliminar)
  
  // Agregar a la lista
  listaTareas.appendChild(li)
  
  // Limpiar input
  input.value = ''
  
  // Event listener para eliminar
  btnEliminar.addEventListener('click', () => {
    li.remove()
  })
}

# Event listener para agregar
btnAgregar.addEventListener('click', agregarTarea)

// Agregar con Enter
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    agregarTarea()
  }
})
Ejemplo 3: Cambiar tema de la página
<div id="app">
  <header>
    <h1>Mi Aplicación</h1>
    <button id="toggle-theme">🌙 Modo Oscuro</button>
  </header>
  <main>
    <p>Contenido de la aplicación...</p>
  </main>
</div>
/* Tema claro (por defecto) */
body {
  background-color: white;
  color: black;
}

/* Tema oscuro */
body.dark-theme {
  background-color: #1a1a1a;
  color: white;
}

body.dark-theme header {
  background-color: #333;
}
const btnToggleTheme = document.querySelector('#toggle-theme')
const body = document.body

// Estado del tema
let temaOscuro = false

btnToggleTheme.addEventListener('click', () => {
  temaOscuro = !temaOscuro
  
  if (temaOscuro) {
    body.classList.add('dark-theme')
    btnToggleTheme.textContent = '☀️ Modo Claro'
  } else {
    body.classList.remove('dark-theme')
    btnToggleTheme.textContent = '🌙 Modo Oscuro'
  }
})


# Usar textContent para texto simple
elemento.textContent = textoDelUsuario

// Usar classList para manipular clases
elemento.classList.add('activo')

# Crear elementos paso a paso para mayor claridad
const card = document.createElement('div')
card.classList.add('card')
card.innerHTML = `
  <h3>${titulo}</h3>
  <p>${descripcion}</p>
`

// Verificar que el elemento existe
const elemento = document.querySelector('#mi-elemento')
if (elemento) {
  elemento.textContent = 'Nuevo texto'
}
❌ Evitar
// No usar innerHTML para datos del usuario (riesgo XSS)
elemento.innerHTML = `<p>Hola ${datosDelUsuario}</p>` // ❌ Peligroso

// No manipular estilos inline excesivamente
elemento.style.color = 'red'
elemento.style.fontSize = '20px'
elemento.style.margin = '10px'
// ❌ Mejor usar clases CSS

# No crear elementos con innerHTML cuando puedes usar createElement
contenedor.innerHTML += '<p>Nuevo párrafo</p>' // ❌ Recrea todo el contenido
Resumen
textContent: Para modificar solo texto (más seguro)
innerHTML: Para modificar HTML completo (cuidado con la seguridad)
setAttribute()/getAttribute(): Para manipular atributos
classList: Para trabajar con clases CSS (mejor práctica)
createElement(): Para crear nuevos elementos
appendChild(): Para añadir elementos al DOM
remove(): Para eliminar elementos

# ¿Qué son Set y Map?
Hasta ahora hemos guardado colecciones de datos con dos estructuras: los arrays y los objetos.
 Pero JavaScript tiene dos estructuras más que nos resuelven problemas muy concretos: Set y Map.

 # Por qué no me basta con arrays y objetos?
Los arrays y los objetos son geniales, pero tienen limitaciones:

Un array permite valores repetidos. Si necesitas garantizar que no haya duplicados, te toca comprobarlo a mano.
Un objeto solo admite claves de tipo string o symbol. Si intentas usar un número o un objeto como clave, JavaScript lo convierte a texto.
const obj = {}
obj[1] = 'número uno'
obj['1'] = 'texto uno'

console.log(obj) // { '1': 'texto uno' }
# ¡La clave 1 y la clave '1' son la misma!
Set y Map nacen precisamente para cubrir estos casos.

Un vistazo rápido a Set
Un Set guarda valores y se asegura de que nunca se repitan:

const numeros = new Set()

numeros.add(1)
numeros.add(2)
numeros.add(2) // este se ignora, ya existe

console.log(numeros) // Set(2) { 1, 2 }
# Un vistazo rápido a Map
Un Map guarda pares de clave → valor, y la clave puede ser cualquier cosa: un número, un objeto, una función...

const edades = new Map()

edades.set('Dani', 18)
edades.set('Eva', 25)

console.log(edades.get('Dani')) // 18

# ¿Cuándo uso cada uno?
Necesito...	Uso
Una lista de valores sin duplicados	Set
Asociar claves a valores (claves de cualquier tipo)	Map
Una colección ordenada con acceso por índice	Array
Modelar una entidad con propiedades conocidas	Objeto

# Set
Un Set es una colección de valores en la que cada valor solo puede aparecer una vez. Es perfecto cuando quieres asegurarte de que no hay duplicados.

# Crear un Set
Creamos un Set con la palabra reservada new. Podemos partir de uno vacío o darle un iterable (como un array) con los valores iniciales:

const vacio = new Set()
const colores = new Set(['rojo', 'verde', 'azul'])

console.log(colores) // Set(3) { 'rojo', 'verde', 'azul' }
Si le pasas un array con valores repetidos, el Set se queda solo con los únicos:

const numeros = new Set([1, 1, 2, 3, 3, 3])
console.log(numeros) // Set(3) { 1, 2, 3 }
Métodos y propiedades
.add()
Añade un valor al Set. Si el valor ya existe, no hace nada:

const frutas = new Set()
frutas.add('manzana')
frutas.add('pera')
frutas.add('manzana') // se ignora

console.log(frutas) // Set(2) { 'manzana', 'pera' }
Como .add() devuelve el propio Set, puedes encadenar llamadas:

const frutas = new Set()
frutas.add('manzana').add('pera').add('plátano')

console.log(frutas) // Set(3) { 'manzana', 'pera', 'plátano' }
.has()
Comprueba si un valor está en el Set. Devuelve un boolean:

const frutas = new Set(['manzana', 'pera'])

console.log(frutas.has('manzana')) // true
console.log(frutas.has('kiwi')) // false
Nota
.has() es una de las grandes ventajas del Set: comprobar si un valor existe es mucho más rápido que recorrer un array con .includes() cuando hay muchos elementos.

.delete()
# Elimina un valor. Devuelve true si existía y false si no:

const frutas = new Set(['manzana', 'pera'])

console.log(frutas.delete('pera')) // true
console.log(frutas.delete('kiwi')) // false
console.log(frutas) // Set(1) { 'manzana' }
.size
# Nos dice cuántos elementos tiene (es el equivalente a .length de los arrays):

const frutas = new Set(['manzana', 'pera'])
console.log(frutas.size) // 2
.clear()
Vacía el Set por completo:

const frutas = new Set(['manzana', 'pera'])
frutas.clear()
console.log(frutas.size) // 0

# Iterar un Set
Un Set es iterable, así que puedes recorrerlo con for...of:

const colores = new Set(['rojo', 'verde', 'azul'])

for (const color of colores) {
  console.log(color)
}
// rojo
// verde
// azul

# También tienes el método .forEach():

const colores = new Set(['rojo', 'verde'])
colores.forEach((color) => console.log(color))
El truco estrella: eliminar duplicados de un array
# Como un Set elimina los duplicados y podemos convertirlo de nuevo en array con el spread operator (...), tenemos la forma más limpia de quitar repetidos:

const conRepetidos = [1, 2, 2, 3, 4, 4, 4, 5]

const sinRepetidos = [...new Set(conRepetidos)]

console.log(sinRepetidos) // [1, 2, 3, 4, 5]

# Operaciones con Sets
Trabajar con conjuntos en matemáticas tiene operaciones clásicas: unión, intersección, diferencia… 
Durante años, en JavaScript teníamos que reproducirlas a mano combinando spread, filter y has. Hoy, los Set traen métodos nativos para hacerlo de forma directa y legible.


# Estos métodos están disponibles en los navegadores modernos y en Node.js a partir de la versión 22.
 Todos devuelven un nuevo Set (no modifican los originales) o un boolean, según el caso.

Para todos los ejemplos partiremos de estos dos conjuntos:

const a = new Set([1, 2, 3, 4])
const b = new Set([3, 4, 5, 6])
.union()
# Devuelve un nuevo Set con los elementos que están en cualquiera de los dos conjuntos (sin duplicados).

const a = new Set([1, 2, 3, 4])
const b = new Set([3, 4, 5, 6])

console.log(a.union(b)) // Set(6) { 1, 2, 3, 4, 5, 6 }

# .intersection()
Devuelve un nuevo Set con los elementos que están en ambos conjuntos a la vez.

const a = new Set([1, 2, 3, 4])
const b = new Set([3, 4, 5, 6])

console.log(a.intersection(b)) // Set(2) { 3, 4 }

# .difference()
Devuelve un nuevo Set con los elementos que están en el primer conjunto pero no en el segundo. 
Ojo: el orden importa, no es lo mismo a.difference(b) que b.difference(a).

const a = new Set([1, 2, 3, 4])
const b = new Set([3, 4, 5, 6])

console.log(a.difference(b)) // Set(2) { 1, 2 }
console.log(b.difference(a)) // Set(2) { 5, 6 }

# .symmetricDifference()
Devuelve un nuevo Set con los elementos que están en uno u otro, pero no en ambos. Es decir, lo contrario de la intersección.

const a = new Set([1, 2, 3, 4])
const b = new Set([3, 4, 5, 6])

console.log(a.symmetricDifference(b)) // Set(4) { 1, 2, 5, 6 }

# .isSubsetOf()
Devuelve un boolean: true si todos los elementos del primer conjunto están en el segundo.

const a = new Set([1, 2])
const b = new Set([1, 2, 3, 4, 5])

console.log(a.isSubsetOf(b)) // true
console.log(b.isSubsetOf(a)) // false

# .isSupersetOf()
El espejo del anterior. Devuelve true si el primer conjunto contiene a todos los elementos del segundo.

const a = new Set([1, 2, 3, 4, 5])
const b = new Set([4, 5])

console.log(a.isSupersetOf(b)) // true
console.log(b.isSupersetOf(a)) // false

# .isDisjointFrom()
Devuelve true si los dos conjuntos no comparten ningún elemento.

const a = new Set([1, 2, 3])
const b = new Set([4, 5, 6])

console.log(a.isDisjointFrom(b)) // true

const c = new Set([3, 4, 5])
console.log(a.isDisjointFrom(c)) // false (comparten el 3)

# Resumen

Método	Devuelve	Qué obtienes
union	Set	Elementos de ambos conjuntos.

intersection	Set	Elementos comunes
difference	Set	Lo que está en a y no en b.

symmetricDifference	Set	Lo que no comparten

isSubsetOf	boolean	¿a está contenido en b?

isSupersetOf	boolean	¿a contiene a b?

isDisjointFrom	boolean	¿no comparten nada?

# Map
Un Map es una colección de pares clave → valor. Suena parecido a un objeto, pero tiene superpoderes que un objeto normal no tiene.

# Crear un Map
Lo creamos con new Map(). Puede partir vacío o de un array de pares [clave, valor]:

const vacio = new Map()

const edades = new Map([
  ['Dani', 18],
  ['Eva', 25]
])

console.log(edades) // Map(2) { 'Dani' => 18, 'Eva' => 25 }
Métodos y propiedades
.set()

# Añade o actualiza un par clave-valor. Devuelve el propio Map, así que se puede encadenar:

const edades = new Map()

edades.set('Dani', 18).set('Eva', 25)

console.log(edades.get('Dani')) // 18
.get()

# Obtiene el valor asociado a una clave. Si la clave no existe, devuelve undefined:

const edades = new Map([['Dani', 18]])

console.log(edades.get('Dani')) // 18
console.log(edades.get('Nadie')) // undefined
.has()
Comprueba si una clave existe en el Map:

const edades = new Map([['Dani', 18]])

console.log(edades.has('Dani')) // true
console.log(edades.has('Eva')) // false
.delete() y .clear()
# .delete() elimina una entrada por su clave; .clear() lo vacía entero:

const edades = new Map([
  ['Dani', 18],
  ['Eva', 25]
])

edades.delete('Dani')
console.log(edades) // Map(1) { 'Eva' => 25 }

edades.clear()
console.log(edades.size) // 0
.size
# Nos dice cuántas entradas tiene:

const edades = new Map([['Dani', 18]])
console.log(edades.size) // 1

# La gran ventaja: claves de cualquier tipo
# En un objeto normal, las claves siempre acaban siendo string (o symbol). 
# En un Map, la clave puede ser lo que quieras: un número, un objeto, una función...

const usuario = { id: 1 }

const datos = new Map()
datos.set(usuario, 'es admin')
datos.set(42, 'la respuesta')

console.log(datos.get(usuario)) // 'es admin'
console.log(datos.get(42)) // 'la respuesta'

# Iterar un Map
Un Map también es iterable y, además, mantiene el orden de inserción:

const edades = new Map([
  ['Dani', 18],
  ['Eva', 25]
])

for (const [nombre, edad] of edades) {
  console.log(`${nombre} tiene ${edad} años`)
}
// Dani tiene 18 años
// Eva tiene 25 años
Tienes métodos específicos para recorrer claves, valores o ambos:

const edades = new Map([['Dani', 18], ['Eva', 25]])

console.log([...edades.keys()]) // ['Dani', 'Eva']
console.log([...edades.values()]) // [18, 25]
console.log([...edades.entries()]) // [['Dani', 18], ['Eva', 25]]

# Map vs Objeto: ¿cuál uso?
Usa un Map cuando:

Las claves no son strings (números, objetos...).
Vas a añadir y eliminar entradas con frecuencia.
Te importa el orden de inserción.
Necesitas saber el tamaño rápido con .size.
Usa un objeto cuando:

Modelas una entidad con propiedades conocidas ({ name, age }).
Quieres usar la sintaxis cómoda con . y JSON.

# 21/10/26 Temporizadores
