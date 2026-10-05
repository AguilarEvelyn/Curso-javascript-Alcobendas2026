# Ejercicios - Tema 3: Estructuras de Control

## Nivel Básico (Principiante)

### 3B.1: Verificar si es adulto
Crea un programa que verifique si una persona es mayor de 18 años. Usa una variable con la edad y muestra un mensaje apropiado.

```
Entrada: edad = 25
Salida: "Eres mayor de edad"

Entrada: edad = 16
Salida: "Eres menor de edad"
```

---

### 3B.2: Identificar si un número es par o impar
Crea un programa que determine si un número es par o impar.

```
Entrada: numero = 10
Salida: "10 es par"

Entrada: numero = 7
Salida: "7 es impar"
```

---

### 3B.3: Comparar dos números
Crea un programa que compare dos números e indique cuál es mayor.

```
Entrada: num1 = 10, num2 = 5
Salida: "10 es mayor que 5"

Entrada: num1 = 3, num2 = 8
Salida: "3 es menor que 8"
```

---

### 3B.4: Calificar temperatura
Crea un programa que determine si hace frío, templado o calor según la temperatura.

```
Entrada: temperatura = 5
Salida: "Hace mucho frío"

Entrada: temperatura = 20
Salida: "Hace un clima templado"

Entrada: temperatura = 30
Salida: "Hace mucho calor"
```

---

### 3B.5: Verificar acceso a cine
Crea un programa que verifique si alguien puede entrar al cine según su edad
- Menores de 13: "Categoría Infantil"
- De 13 a 17: "Categoría PG-13"
- Mayor de 18: "Todas las categorías"

```
Entrada: edad = 10
Salida: "Categoría Infantil"

Entrada: edad = 15
Salida: "Categoría PG-13"

Entrada: edad = 20
Salida: "Todas las categorías"
```

---

## Nivel Intermedio

### 3I.1: Sistema de calificaciones
Crea un programa que traduzca una calificación numérica (0-100) a una letra:
- 90-100: A
- 80-89: B
- 70-79: C
- 60-69: D
- Menor a 60: F

```
Entrada: calificacion = 95
Salida: "Grado A - Excelente"

Entrada: calificacion = 75
Salida: "Grado C - Satisfactorio"
```

---

### 3I.2: Verificación de múltiples condiciones
Crea un programa para determinar si puedes conducir. Verificas:
- Mayor de 18 años
- Tener carnet válido
- No tener sanciones

```
Entrada: edad=25, carnet=true, sancion=false
Salida: "Puedes conducir"

Entrada: edad=16, carnet=true, sancion=false
Salida: "No puedes conducir - debes ser mayor de 18"
```

---

### 3I.3: Identificar tipo de triángulo
Dado tres lados, determina qué tipo de triángulo es (o si no es válido):
- Equilátero (los 3 lados iguales)
- Isósceles (2 lados iguales)
- Escaleno (todos diferentes)
- No es un triángulo (algún lado es 0 o negativo)

```
Entrada: lado1=5, lado2=5, lado3=5
Salida: "Es un triángulo equilátero"

Entrada: lado1=5, lado2=5, lado3=7
Salida: "Es un triángulo isósceles"
```

---

### 3I.4: Sistema de descuentos
Una tienda aplica descuentos según el cliente:
- Es estudiante: 10% de descuento
- Es jubilado: 15% de descuento
- Es cliente frecuente (compró más de 5 veces): 8% de descuento
- (Si cumple varias categorías, suma descuentos)

```
Entrada: esEstudiante=true, montoCompra=100
Salida: "Descuento: 10%, Total: $90"

Entrada: esJubilado=true, esClienteFrecuente=true, montoCompra=200
Salida: "Descuento: 23%, Total: $154"
```

---

### 3I.5: Clasificar día de la semana
Crea un programa que reciba un número (1-7) e indique el día y si es fin de semana.

```
Entrada: dia = 1
Salida: "Lunes - Día laboral"

Entrada: dia = 6
Salida: "Sábado - Fin de semana"
```

---

### 3I.6: Validar contraseña simple
Verifica que una contraseña cumpla requisitos mínimos:
- Longitud mínima de 6 caracteres
- Contiene al menos un número
- Contiene al menos una mayúscula

```
Entrada: pass = "Pass123"
Salida: "Contraseña válida"

Entrada: pass = "pass123"
Salida: "Debe contener mayúscula"
```

---

### 3I.7: Sistema de autorización de compra
Una compra se autoriza si:
- El cliente tiene fondos suficientes
- La tarjeta no está bloqueada
- La compra no excede el límite diario

```
Entrada: fondos=500, compra=300, tarjetaBloqueada=false, limite=1000
Salida: "Compra autorizada"

Entrada: fondos=200, compra=300, tarjetaBloqueada=false, limite=1000
Salida: "Fondos insuficientes"
```

---

## Nivel Avanzado

### 3A.1: Clasificar edad en grupos demográficos
Clasifica dentro de:
- Baby Boomer: 1946-1964
- Generación X: 1965-1980
- Millenial: 1981-1996
- Generación Z: 1997-2012
- Generación Alpha: 2013 en adelante

```
Entrada: añoNacimiento = 1990
Salida: "Eres Millennial"

Entrada: añoNacimiento = 1952
Salida: "Eres Baby Boomer"
```

---

### 3A.2: Validar número de cédula/pasaporte
Verifica que cumpla reglas básicas:
- Tiene 8-10 dígitos
- Solo contiene números
- El primer dígito no es 0

```
Entrada: cedula = "12345678"
Salida: "Cédula válida"

Entrada: cedula = "0123456"
Salida: "Cédula inválida - no puede comenzar con 0"
```

---

### 3A.3: Aplicación de impuestos y descuentos
Calcula el precio final considerando:
- Edad del cliente (menor de 18: +15% sin impuestos, mayor de 65: -10%)
- Cantidad comprada (>10: -5%, >20: -10%, >50: -15%)
- Día de la semana (miércoles: -3%)

```
Entrada: precioBase=100, cantidad=25, edad=30, esMiercoles=true
Salida: Cálculo de descuentos aplicables y total
```

---

### 3A.4: Determinar estación del año
Según el mes (1-12), determina la estación:
- Invierno: diciembre, enero, febrero
- Primavera: marzo, abril, mayo
- Verano: junio, julio, agosto
- Otoño: septiembre, octubre, noviembre

```
Entrada: mes = 12
Salida: "Invierno"

Entrada: mes = 6
Salida: "Verano"
```

---

### 3A.5: Proyecto - Sistema de acceso a gimnasio
Verifica acceso según múltiples criterios:
- Membresía activa
- Cuota pagada
- Horario permitido (6-22)
- No tiene restricción médica

Además, aplica:
- Si es fin de semana y membresía premium: acceso gratuito
- Si tiene deuda: solo acceso a horario matutino

```
Entrada: memActiva=true, cuotaPagada=true, hora=10, restriccion=false
Salida: "✅ Acceso permitido"

Entrada: memActiva=true, cuotaPagada=false, hora=10
Salida: "❌ Deuda pendiente - solo acceso matutino (6-14)"
```

---

### 3A.6: Calculadora de IMC avanzada
Calcula el IMC y proporciona recomendaciones:
- BMI < 18.5: Bajo peso - recomendación
- BMI 18.5-24.9: Peso normal - mantener
- BMI 25-29.9: Sobrepeso - hacer ejercicio
- BMI >= 30: Obesidad - consultar médico

```
Entrada: peso=70, altura=1.75
Salida: "IMC: 22.86 - Peso Normal. Mantén tu estilo de vida"

Entrada: peso=100, altura=1.70
Salida: "IMC: 34.57 - Obesidad. Consulta con un médico"
```

---

### 3A.7: Validador de email básico
Verifica que cumpla formato email:
- Contiene @
- Contiene un dominio (después del @)
- El nombre de usuario no está vacío
- Contiene un punto en el dominio

```
Entrada: email = "user@example.com"
Salida: "Email válido"

Entrada: email = "userexample.com"
Salida: "Email inválido - debe contener @"
```

---

### 3A.8: Sistema de calificación de película
Basado en múltiples criterios, califica película:
- Puntuación imdb (0-10)
- Número de reviews
- Año (películas recientes bonus)
- Género (algunos puntúan más)

Aplica:
- si score >= 8 y reviews > 1000: "Clásico moderno"
- si score >= 7.5 y año > 2020: "Excelente reciente"
- si score >= 7 y reviews > 500: "Muy buena"
- etc.

```
Entrada: score=8.5, reviews=5000, año=2022, genero="Drama"
Salida: "Clásico moderno - Altamente recomendada"

Entrada: score=6.5, reviews=200, año=2015
Salida: "Buena - Se puede disfrutar"
```

---

## Desafío Bonus 🚀

### 3B+: Piedra, Papel o Tijeras
Crea un programa que juegue piedra, papel o tijeras:
- Validar entrada del usuario
- Generar jugada aleatoria para la "computadora"
- Determinar ganador
- Mostrar resultado y puntuación

```
Entrada: jugador = "piedra"
Salida: resultado del juego y quién gana
```

---

**💡 Consejos para resolver:**
- Revisa los ejemplos interactivos en HTML
- Usa `if/else if` para múltiples opciones
- Combina operadores lógicos: `&&`, `||`, `!`
- Prueba con diferentes valores
- Comenta tu código

