# Tema 6: Arrays Avanzado - Métodos y Transformación de Datos

## 📚 Índice
1. [Métodos de búsqueda](#métodos-de-búsqueda)
2. [Métodos de transformación](#métodos-de-transformación)
3. [Métodos de iteración](#métodos-de-iteración)
4. [Ordenamiento](#ordenamiento)
5. [Resumen](#resumen)

---

## Métodos de búsqueda

### find() - Encontrar primer elemento

```javascript
const numeros = [10, 20, 30, 40, 50];
const resultado = numeros.find(numero => numero > 25);
console.log(resultado);  // 30
```

### includes() - ¿Contiene elemento?

```javascript
const colores = ['rojo', 'verde', 'azul'];
console.log(colores.includes('rojo'));   // true
console.log(colores.includes('amarillo')); // false
```

### indexOf() - Posición del elemento

```javascript
const numeros = [10, 20, 30, 40];
console.log(numeros.indexOf(30));   // 2
console.log(numeros.indexOf(50));   // -1 (no existe)
```

---

## Métodos de transformación

### map() - Transformar cada elemento

```javascript
const numeros = [1, 2, 3, 4, 5];
const duplicados = numeros.map(n => n * 2);
console.log(duplicados);  // [2, 4, 6, 8, 10]
```

### filter() - Filtrar elementos

```javascript
const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(n => n % 2 === 0);
console.log(pares);  // [2, 4]
```

### reduce() - Combinar a un valor

```javascript
const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce((acc, num) => acc + num, 0);
console.log(suma);  // 15
```

---

## Métodos de iteración

### forEach() - Iterar

```javascript
const numeros = [1, 2, 3];
numeros.forEach(n => console.log(n * 2));
// Salida: 2, 4, 6
```

### some() - ¿Alguno cumple?

```javascript
const numeros = [1, 2, 3, 4, 5];
const haypares = numeros.some(n => n % 2 === 0);
console.log(hayPares);  // true
```

### every() - ¿Todos cumplen?

```javascript
const numeros = [2, 4, 6, 8];
const todospares = numeros.every(n => n % 2 === 0);
console.log(todosPares);  // true
```

---

## Ordenamiento

### sort() - Ordenar elementos

```javascript
const numeros = [30, 10, 50, 20];
numeros.sort((a, b) => a - b);
console.log(numeros);  // [10, 20, 30, 50]
```

### sort() - Orden descendente

```javascript
const numeros = [30, 10, 50, 20];
numeros.sort((a, b) => b - a);
console.log(numeros);  // [50, 30, 20, 10]
```

---

## Resumen

Los métodos de array te permiten:
- 🔍 Buscar elementos eficientemente  
- 🔄 Transformar datos de forma simple
- 📊 Procesar información compleja
- 🎯 Escribir código más limpio y funcional

