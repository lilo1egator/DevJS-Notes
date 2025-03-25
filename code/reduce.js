// Метод reduce дозволяє обробити кожен елемент масиву та поступово "звести" його до одного значення. Цей метод є ідеальним для задач, де потрібно акумулювати результат, наприклад, для підсумку чисел, об'єднання елементів або обчислення якихось агрегованих значень.

// array.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);

// callback — це функція, яка викликається для кожного елемента масиву.
// accumulator — це значення, яке зберігає результат на кожному кроці (поступово акумулюється).
// currentValue — це поточний елемент масиву, з яким працює функція.
// currentIndex — це індекс поточного елемента (не обов'язковий параметр).
// array — сам масив, по якому йде ітерація (не обов'язковий параметр).
// initialValue — початкове значення для акумулятора. Якщо його не вказано, перший елемент масиву буде використаний як початкове значення, а ітерація почнеться з другого елемента.


// ПРИКЛАДИ


// 1 Підсумовування чисел
function sumNumbers(arr) {
    return arr.reduce((acc, num) => acc+num, 0)
}

console.log(sumNumbers([1, 2, 3, 4, 5])); // 15
console.log(sumNumbers([10, -5, 3])); // 8



// 2 Підрахунок кількості входжень у масиві
function countOccurrences(arr) {
    return arr.reduce((acc, fruit) => {
        acc[fruit] = (acc[fruit] || 0) + 1;
        return acc; // Повертаємо акумулятор на кожному кроці
    }, {})
}

console.log(countOccurrences(['🍎', '🍌', '🍎', '🍊', '🍌', '🍎'])); 
// { '🍎': 3, '🍌': 2, '🍊': 1 }

// 3 Пошук найбільшого числа в масиві
function findMax(arr) {
    return arr.reduce((acc, num) => Math.max(acc, num), -Infinity)
}

console.log(findMax([10, 25, 4, 7, 30])); // 30
console.log(findMax([-1, -10, -5])); // -1


// 4 Об'єднання масиву об'єктів у один об'єкт
const data = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
  ];
  
  function mergeObjects(arr) {
    return arr.reduce((acc, obj) => Object.assign(acc, obj), {})
  }
  
  console.log(mergeObjects(data)); 

// 5 Фільтрація унікальних значень
function uniqueValues(arr) {
    return arr.reduce((acc, item) => {
        if (!acc.includes(item)) {
            acc.push(item);
        }
        return acc;
    }, []);
}

console.log(uniqueValues([1, 2, 3, 2, 1, 4, 5, 4])); 
// [1, 2, 3, 4, 5]