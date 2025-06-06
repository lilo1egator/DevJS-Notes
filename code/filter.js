// Метод filter() є одним із методів масивів у JavaScript, і він дозволяє створити новий масив, що містить лише елементи, які задовольняють певну умову (фільтрацію).

// Синтаксис:
// array.filter(callback(currentValue, index, array) {
  // return true or false based on some condition
// });

// Пояснення:
// callback — це функція, яку ви передаєте в filter(). Ця функція викликається для кожного елемента масиву.
// currentValue — поточний елемент масиву, який обробляється.
// index — індекс поточного елемента масиву.
// array — сам масив, над яким виконується фільтрація (не обов'язково передавати).

// Повертає:
// Новий масив, який містить усі елементи, для яких функція callback() повернула true.
// Якщо жоден елемент не відповідає умові, повертається порожній масив.




// Задача 1: Фільтрація парних чисел
// Дано масив чисел. Потрібно за допомогою filter() отримати новий масив, який міститиме лише парні числа.

// Приклад:
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Результат: [2, 4, 6, 8, 10]
console.log(numbers.filter(item => item % 2 == 0))



// Задача 2: Фільтрація слів довше за 4 літери
// Дано масив слів. Потрібно створити новий масив, що міститиме лише ті слова, довжина яких більша за 4 літери.

// Приклад:
const words = ["apple", "cat", "elephant", "dog", "mouse"]; // Результат: ["apple", "elephant", "mouse"]
console.log(words.filter(item => item.length > 4))




// Задача 3: Фільтрація позитивних чисел
// Дано масив чисел, в якому можуть бути як позитивні, так і негативні числа. Потрібно фільтрувати і отримати лише позитивні числа.

// Приклад:
const numbers2 = [-5, 3, -2, 8, 0, -1, 4]; // Результат: [3, 8, 4]
console.log(numbers2.filter(item => item > 0))




// Задача 4: Фільтрація людей за віком
// У нас є масив об'єктів, кожен з яких містить інформацію про людину (ім'я і вік). Потрібно створити новий масив, що міститиме лише тих людей, вік яких більше за 18 років.

// Приклад:
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 17 },
  { name: "Paul", age: 20 },
  { name: "Emily", age: 16 }
];
// Результат:
// [
//   { name: "John", age: 25 },
//   { name: "Paul", age: 20 }
// ]
console.log(people.filter(item => item.age > 18))




// Задача 5: Видалення пустих рядків
// Дано масив рядків, в якому є пусті елементи. Потрібно створити новий масив, в якому будуть тільки непусті рядки.

// Приклад:
const strings = ["hello", "", "world", "", "JavaScript"]; // Результат: ["hello", "world", "JavaScript"]
console.log(strings.filter(item => item != ""))




// Задача 6: Фільтрація унікальних елементів
// Дано масив чисел, який може містити повтори. Ти маєш створити новий масив, який міститиме лише унікальні числа (без повторів).

// Приклад:
const numbers3 = [1, 2, 2, 3, 4, 4, 5, 5, 6];  // Результат: [1, 2, 3, 4, 5, 6]
console.log(numbers3.filter((item, index) => numbers3.indexOf(item) === index))




// Задача 7: Фільтрація дат
// Уяви, що у тебе є масив рядків, що містять дати у форматі "YYYY-MM-DD". Тобі потрібно фільтрувати дати, що належать до певного року (наприклад, 2022).

// Приклад:
const dates = ["2021-05-15", "2022-01-01", "2022-08-20", "2023-07-10"];  // Результат: ["2022-01-01", "2022-08-20"]
console.log(dates.filter(date => date.startsWith("2022")))

