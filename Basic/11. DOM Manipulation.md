# Робота з DOM в JavaScript

## 1. Що таке DOM?
DOM (Document Object Model) — це представлення HTML-документа у вигляді об'єктів, які можна змінювати за допомогою JavaScript.

### Важливі моменти:
- Кожен елемент HTML є об'єктом.
- DOM дозволяє змінювати структуру, стиль, вміст сторінки.
- Використовується для взаємодії між користувачем та веб-сторінкою.

## 2. Як створювати елементи?
Елементи створюються за допомогою `document.createElement(tagName)`.

```js
const newDiv = document.createElement("div"); // Створюємо div
newDiv.textContent = "Привіт!";
document.body.appendChild(newDiv); // Додаємо на сторінку
```

### Альтернативні способи:
- `innerHTML` (небезпечний через XSS-атаки)
- `insertAdjacentHTML` (менш небезпечний, але також слід бути обережним)

```js
document.body.innerHTML = "<p>Новий параграф</p>";
document.body.insertAdjacentHTML("beforeend", "<p>Новий параграф</p>");
```

## 3. Як отримати елементи?

### Сучасні методи:
- `document.querySelector("selector")` – повертає перший знайдений елемент.
- `document.querySelectorAll("selector")` – повертає всі елементи (NodeList, можна використовувати `forEach`).

```js
const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
  button.style.backgroundColor = "blue";
});
```

### Інші методи:
- `document.getElementById("id")` – отримує елемент за `id`.
- `document.getElementsByClassName("class")` – повертає HTMLCollection (псевдомасив).
- `document.getElementsByTagName("tag")` – повертає HTMLCollection.

### Застарілі методи:
- `document.all` (використовувався в ранніх версіях IE, не рекомендується).
- `document.getElementsByName("name")` (рідко використовується).

## 4. Як редагувати елементи?
- `element.textContent` – змінює текст елемента.
- `element.innerHTML` – змінює вміст HTML (небезпечно, слід уникати).
- `element.style.property` – змінює стилі.
- `setAttribute(name, value)`, `getAttribute(name)`, `removeAttribute(name)` – робота з атрибутами.

```js
const title = document.querySelector("h1");
title.textContent = "Новий заголовок";
title.style.color = "red";
```

## 5. Видалення елементу:

### a. Видалення через `remove()` (сучасний спосіб)
Метод `remove()` видаляє елемент зі сторінки.
```js
let element = document.getElementById("myElement");
element.remove(); // Видаляє елемент
```

### b. Видалення через `parentNode.removeChild()` (старий спосіб)
Цей метод використовується для підтримки старих браузерів.
```js
let element = document.getElementById("myElement");
element.parentNode.removeChild(element);
```

### c. Очищення вмісту елемента (`innerHTML = ""`)
Якщо потрібно видалити лише вміст елемента, а сам елемент залишити:
```js
let container = document.getElementById("container");
container.innerHTML = ""; // Видаляє всі дочірні елементи
```

### d. Використання `replaceWith()`
Метод `replaceWith()` дозволяє замінити елемент іншим або прибрати його.
```js
let element = document.getElementById("myElement");
element.replaceWith(); // Видаляє елемент
```

### e. Видалення всіх елементів за селектором (`querySelectorAll`)
Якщо потрібно видалити всі елементи певного класу:
```js
document.querySelectorAll(".items").forEach(el => el.remove());
```


## 6. Робота з classList
`classList` дозволяє зручно працювати з класами елементів.

```js
const box = document.querySelector(".box");
box.classList.add("highlight"); // Додає клас
box.classList.remove("highlight"); // Видаляє клас
box.classList.toggle("hidden"); // Перемикає клас
console.log(box.classList.contains("hidden")); // Перевіряє наявність класу true/false
```

## 7. Події в JavaScript
Події – це реакції браузера на дії користувача (клік, натискання клавіші тощо).

### Способи обробки подій:
1. **Через HTML-атрибут** (небажано використовувати)
   ```html
   <button onclick="alert('Натиснуто!')">Натисни мене</button>
   ```

2. **Через властивість `onclick`** (перезаписує попередні обробники)
   ```js
   button.onclick = function() {
     alert("Кнопку натиснуто!");
   };
   ```

3. **Через `addEventListener` (кращий спосіб)**
   ```js
   button.addEventListener("click", function(event) {
     console.log("Кнопку натиснуто!");
     console.log(event.type); // Тип події
     console.log(event.target); // Елемент, що викликав подію
   });
   ```

### Відміна стандартної поведінки
```js
document.querySelector("a").addEventListener("click", function(event) {
  event.preventDefault(); // Забороняє перехід за посиланням
  console.log("Посилання не спрацювало");
});
```

### Види подій:
- `click` – клік миші
- `mouseover`, `mouseout` – наведення миші
- `keydown`, `keyup` – натискання клавіші
- `submit` – відправка форми
- `input`, `change` – зміна значення в полях вводу

### Об'єкт події (`event`)
Об'єкт події містить інформацію про подію.

```js
document.addEventListener("keydown", function(event) {
  console.log(`Натиснуто клавішу: ${event.key}`);
  console.log(`Код клавіші: ${event.code}`);
  console.log(`Чи була натиснута Ctrl: ${event.ctrlKey}`);
});
```

### Застарілі методи обробки подій
- `element.attachEvent("onclick", handler)` – для старих версій IE.
- `element.onEvent` – переписує попередній обробник (не рекомендується).



## Навігація по DOM-елементам, data-атрибути, переваги for...of

### Навігація по DOM-елементам

Навігація по DOM дозволяє отримувати доступ до елементів сторінки, переміщатися між ними та взаємодіяти з ними.

#### Основні властивості навігації:
- `document.documentElement` – кореневий `<html>` елемент.
- `document.body` – `<body>` елемент.
- `document.head` – `<head>` елемент.

#### Взаємозв'язки між елементами:
- `parentElement` – батьківський елемент.
- `children` – список дочірніх елементів.
- `firstElementChild` – перший дочірній елемент.
- `lastElementChild` – останній дочірній елемент.
- `nextElementSibling` – наступний сусідній елемент.
- `previousElementSibling` – попередній сусідній елемент.

##### Приклад:
```js
let parent = document.querySelector(".container");
console.log(parent.children); // Всі дочірні елементи
console.log(parent.firstElementChild); // Перший дочірній елемент
console.log(parent.lastElementChild); // Останній дочірній елемент
```

### Data-атрибути

**Data-атрибути** (`data-*`) дозволяють зберігати додаткові дані в HTML-елементах.

#### Як працювати з data-атрибутами:
- `element.dataset` – об'єкт, що містить усі `data-*` атрибути.
- `element.dataset.name` – отримання значення атрибута `data-name`.
- `element.setAttribute("data-name", "значення")` – встановлення значення атрибута.
- `element.removeAttribute("data-name")` – видалення data-атрибута.

##### Приклад використання:
```html
<div id="user" data-id="123" data-role="admin">Користувач</div>
```
```js
let user = document.getElementById("user");
console.log(user.dataset.id); // "123"
console.log(user.dataset.role); // "admin"

user.dataset.role = "editor"; // Зміна значення
console.log(user.dataset.role); // "editor"
```

### Переваги використання for...of

**`for...of`** – це сучасний цикл, який зручний для ітерації по колекціях.

#### Порівняння `for...of` з `forEach` і `for`
- `for...of` працює з **NodeList** (наприклад, результат `querySelectorAll`).
- На відміну від `forEach`, можна використовувати `break` і `continue`.
- Код `for...of` зазвичай простіший, ніж класичний `for`.

##### Приклад:
```js
let items = document.querySelectorAll(".item");
for (let item of items) {
  console.log(item.textContent);
}
```

#### Порівняння з `forEach`:
```js
items.forEach(item => console.log(item.textContent));
```

Обидва варіанти працюють, але `for...of` може бути зручнішим, якщо потрібно використовувати `break` або `continue`.