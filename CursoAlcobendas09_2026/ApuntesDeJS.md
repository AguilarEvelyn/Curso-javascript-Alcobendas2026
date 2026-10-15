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

# 15/10/26
# Herencia- Programcion orientada a Objetos

