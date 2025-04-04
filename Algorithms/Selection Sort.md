# Сортування вибором в JavaScript

Опис

Сортування вибором (Selection Sort) — це простий алгоритм сортування, який працює шляхом пошуку найменшого елемента у невідсортованій частині масиву та обміну його з першим елементом цієї частини. Процес повторюється для кожного наступного елемента.

## Часова складність
1. Найгірший випадок: O(n²)
2. Середній випадок: O(n²)
3. Найкращий випадок: O(n²) (навіть якщо масив уже відсортований)

## Реалізація в JavaScript
```js
function selectionSort(arr) {
    let n = arr.length;
    
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        if (minIndex !== i) {
            [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // Обмін елементів
        }
    }
    return arr;
}
```

## Приклад використання

```js
const array = [64, 25, 12, 22, 11];
console.log(selectionSort(array)); // Виведе: [11, 12, 22, 25, 64]
```

## Вибір між масивом і списком

При роботі з алгоритмами сортування важливо вибирати правильну структуру даних:

### Масив (Array)
✅ Доступ до елементів за індексом O(1)
✅ Простий у використанні
❌ Вставка/видалення елементів O(n) (якщо не в кінці)

### Зв'язаний список (Linked List)
✅ Швидке додавання/видалення O(1) (якщо є доступ до потрібного вузла)
❌ Доступ до елементів O(n) (потрібно ітерувати список)
❌ Витрачає більше пам'яті через збереження вказівників

1. Масиви підходять для випадків, коли потрібен швидкий доступ за індексом.
2. Зв'язані списки корисні, якщо потрібно часто додавати або видаляти елементи в середині структури.

## Висновки
1. Сортування вибором є неефективним для великих масивів через O(n²) складність.
2. Головна перевага — мінімальна кількість обмінів (swap).
3. Використовується, коли важливо зменшити кількість перестановок.