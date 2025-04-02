# Бінарний пошук в JavaScript

Опис

Бінарний пошук — це ефективний алгоритм для знаходження елемента в відсортованому масиві. Він працює за принципом поділу масиву навпіл і порівняння середнього елемента з цільовим значенням.

## Часова складність
1. Найгірший випадок: O(log n)
2. Середній випадок: O(log n)
3. Найкращий випадок: O(1) (якщо елемент знайдено з першої спроби)

## Реалізація в JavaScript


Ітеративний підхід
```js
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        if (arr[mid] === target) {
            return mid; // Елемент знайдено
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1; // Елемент не знайдено
}
```

Рекурсивний підхід
```js
function binarySearchRecursive(arr, target, left = 0, right = arr.length - 1) {
    if (left > right) return -1;
    
    let mid = Math.floor((left + right) / 2);
    
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) {
        return binarySearchRecursive(arr, target, mid + 1, right);
    } else {
        return binarySearchRecursive(arr, target, left, mid - 1);
    }
}
```

Приклад використання
```js
const array = [1, 3, 5, 7, 9, 11, 13, 15];
console.log(binarySearch(array, 7)); // Виведе: 3
console.log(binarySearchRecursive(array, 7)); // Виведе: 3
console.log(binarySearch(array, 8)); // Виведе: -1

```
## Висновки

1. Бінарний пошук значно швидший за лінійний пошук для великих відсортованих масивів.
2. Підходить лише для відсортованих масивів.
3. Має як ітеративну, так і рекурсивну реалізацію.