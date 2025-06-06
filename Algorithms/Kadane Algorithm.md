# Алгоритм Кадана (Kadane's Algorithm)

## Опис алгоритму
Алгоритм Кадана використовується для знаходження підмасиву з максимальною сумою у заданому масиві чисел. Він працює за принципом динамічного програмування і має часову складність O(n).

## Принцип роботи
1. Починаємо з першого елемента масиву, ініціалізуємо дві змінні:
   - `maxSum` – зберігає максимальну суму підмасиву, яку ми знайшли.
   - `currentSum` – зберігає поточну суму підмасиву.
2. Проходимо по масиву:
   - Додаємо поточний елемент до `currentSum`.
   - Якщо `currentSum` перевищує `maxSum`, оновлюємо `maxSum`.
   - Якщо `currentSum` стає меншим за 0, обнуляємо його (починаємо новий підмасив).
3. Після проходження всього масиву у `maxSum` буде збережено максимальну суму підмасиву.

## Реалізація в JavaScript
```js
function maxSubArray(arr) {
    let maxSum = 0;
    let currentSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
       sum += arr[i];
       if (sum > maxSum) maxSum = sum;
       if (sum <= 0) sum = 0;
     }
    
    return maxSum;
}

// Приклад використання
const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(nums)); // Виведе 6 (підмасив [4, -1, 2, 1])
```

## Часова складність
- **O(n)** – алгоритм проходить по масиву один раз, оновлюючи значення.
- Підходить для великих масивів, оскільки працює лінійно.

## Висновок
Алгоритм Кадана – ефективне рішення задачі на пошук підмасиву з максимальною сумою. Він має просту реалізацію та швидко працює навіть для великих обсягів даних.
