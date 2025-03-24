# Функції в JavaScript

## Що таке функція?
Функція – це блок коду, який можна викликати багато разів. Вона дозволяє уникнути дублювання коду та робить програму зрозумілішою.

## Оголошення функцій

### 1. Функціональне оголошення (Function Declaration)
```js
function sayHello() {
  console.log("Привіт, світ!");
}
```
Цю функцію можна викликати в будь-якому місці коду:
```js
sayHello(); // Виведе: Привіт, світ!
```

### 2. Функціональний вираз (Function Expression)
```js
const sayHi = function() {
  console.log("Привіт!");
};
```
Тут функція зберігається у змінній. Викликаємо так:
```js
sayHi(); // Привіт!
```

### 3. Стрілкові функції (Arrow Functions)
```js
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
```
Стрілкові функції компактніші, але не мають `this` та `arguments`.

## Аргументи функцій
Функції можуть приймати параметри:
```js
function greet(name) {
  console.log("Привіт, " + name + "!");
}

greet("Іван"); // Привіт, Іван!
```

### Параметри за замовчуванням
```js
function greet(name = "Гість") {
  console.log("Привіт, " + name + "!");
}

greet(); // Привіт, Гість!
```

### Об'єкт `arguments`
Звичайні функції мають спеціальний об'єкт `arguments`, що містить усі передані аргументи:
```js
function sumAll() {
  let sum = 0;
  for (let arg of arguments) {
    sum += arg;
  }
  return sum;
}

console.log(sumAll(1, 2, 3, 4)); // 10
```
Стрілкові функції `arguments` не мають!

## Повернення значення (return)
Функція може повернути значення за допомогою `return`:
```js
function sum(a, b) {
  return a + b;
}

let result = sum(5, 7);
console.log(result); // 12
```
Якщо у функції немає `return`, вона повертає `undefined`:
```js
function noReturn() {
  console.log("Просто вивід у консоль");
}

console.log(noReturn()); // undefined
```

## Колбек-функції (Callback Functions)
Функція може приймати іншу функцію як аргумент і викликати її:
```js
function processUserInput(callback) {
  let name = "Анна";
  callback(name);
}

processUserInput(function(name) {
  console.log("Привіт, " + name + "!");
});
```
### Приклад використання колбеку у масиві
```js
const numbers = [1, 2, 3, 4];
const squaredNumbers = numbers.map(function(num) {
  return num * num;
});
console.log(squaredNumbers); // [1, 4, 9, 16]
```

## Рекурсія
Функція може викликати саму себе:
```js
function countdown(n) {
  if (n <= 0) {
    console.log("Готово!");
    return;
  }
  console.log(n);
  countdown(n - 1);
}

countdown(5);
```

## Замикання (Closures)
Функція може запам'ятовувати змінні навіть після виконання:
Докладніше про замикання: https://medium.com/nuances-of-programming/%D1%8F-%D0%BD%D0%B8%D0%BA%D0%BE%D0%B3%D0%B4%D0%B0-%D0%BD%D0%B5-%D0%BF%D0%BE%D0%BD%D0%B8%D0%BC%D0%B0%D0%BB-%D0%B7%D0%B0%D0%BC%D1%8B%D0%BA%D0%B0%D0%BD%D0%B8%D1%8F-%D0%B2-javascript-%D1%87%D0%B0%D1%81%D1%82%D1%8C-%D0%BF%D0%B5%D1%80%D0%B2%D0%B0%D1%8F-3c3f02041970

```js
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    console.log(count);
  };
}

const counter = makeCounter();
counter(); // 1
counter(); // 2
```

## Лексичне оточення
### Лексичне оточення (Lexical Environment) — це внутрішня структура, яка містить змінні, функції та їх області видимості під час виконання коду.
Як працює лексичне оточення?
Кожна функція в JavaScript при створенні отримує своє лексичне оточення, яке складається з:
  1. Локального середовища (Local Environment) — змінні та параметри, оголошені всередині функції.
  2. Зовнішнього оточення (Outer Environment) — посилання на лексичне оточення батьківської області.

```js
function outerFunction() {
  let outerVar = "Я зовнішня змінна";

  function innerFunction() {
    let innerVar = "Я внутрішня змінна";
    console.log(outerVar); // Доступ до змінної з зовнішньої функції
  }

  innerFunction();
}

outerFunction();
// console.log(innerVar); // Помилка! (змінна не доступна за межами innerFunction)
```
Що відбувається тут?

outerFunction створює своє лексичне оточення з outerVar.
innerFunction створює власне оточення з innerVar, але при цьому має доступ до змінних outerFunction.