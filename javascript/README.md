Quelques rappels de ES6...

# Initialiser une variable

## let
`let` déclare une variable à l'intérieur d'un scope.

```js
let x = 10;
console.log(x); // 10

{
  let x = 2;
  console.log(x); // 2
}
console.log(x); // 10
```

## const
`const` fonctionne pareillement mais pour les constantes. 

```js
const x = 10;
console.log(x); // 10

{
  const x = 2;
  console.log(x); // 2
}
console.log(x); // 10

const x = 2; // erreur
```

## Arrow Functions
C'est une manière plus synthétique d'écrire des fonctions, sans le mot clé `function`.

Si la fonction se contente de retourner une valeur, on peut même omettre le
mot clé `keyword` et les accolades.

```js
// ES5
function foo(x, y) {
   return x * y;
}
var bar = function(x, y) {
   return x * y;
}

// ES6
const abc = (x, y) => { return x * y };
const mult = (x, y) => x * y;
```


## Classes

Une classe est un type de fonction, qui est initialisée avec `class` et dont les propriétés sont assignées par la méthode `
constructor()`.

```js
class Car {
  constructor(brand) {
    this.carname = brand;
  }
mycar = new Car("Ford");
}
```


## Paramètres par défaut

```js
function myFunction(x, y = 10) {
  // y is 10 if not passed or undefined
  return x + y;
}
myFunction(5); // will return 15
```

## Array.find()

Retourne le premier élément d'une liste qui passe une fonction de test.

```js
const numbers = [4, 9, 16, 25, 29];

const threshold = (value, index, array) => {
  return value > 18;
}
const first = numbers.find(threshold);
console.log(first); // 25

// plus synthétiquement avec une fonction anonyme et sans les paramètres inutilisées :

console.log(
  numbers.find(
	  value => value > 18 
  )
);

```

## Array.findIndex()

Retourne l'index.

## Array.map()

map retourne une liste de la même taille.


```js
const performSomething = (item) => {
  //...
  return item
}

const items = ['a', 'b', 'c']
const newArray = items.map((item) => performSomething(item))
```
## Array.filter()

filter retourne une liste avec moins d'éléments : uniquement ceux qui passent la fonction de filtrage.

```js
// Avec une boucle

const items = [
  { name: 'a', content: { /* ... */ }},
  { name: 'b', content: { /* ... */ }},
  { name: 'c', content: { /* ... */ }}
]
for (const item of items) {
  if (item.name === 'b') {
    return item
  }
}

// Sans boucle
const b = items.find((item) => item.name === 'b')

const b = items.filter((item) => item.name === 'b').shift()

```

## Array.forEach()

Applique un traitement à chaque élément d'une liste.

```js
const items = ['a', 'b', 'c']
items.forEach((item) => {
  performSomething(item)
})
```

Ces fonctions font partis du paradigme déclaratif, contrairement à une approche impérative.

