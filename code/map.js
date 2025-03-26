// Метод .map() у JavaScript використовується для створення нового масиву, де кожен елемент є результатом виклику переданої функції для відповідного елемента вихідного масиву.

// Синтаксис
    // const newArray = array.map(callback(currentValue, index, array));
    // callback – функція, яка виконується для кожного елемента масиву.

// currentValue – поточний елемент масиву.
// index (необов'язковий) – індекс поточного елемента.
// array (необов'язковий) – сам вихідний масив.

// Приклад 1: Збільшення всіх чисел у масиві
    // const numbers = [1, 2, 3, 4, 5];
    // const doubled = numbers.map(num => num * 2);
    // console.log(doubled); // [2, 4, 6, 8, 10]

// Приклад 2: Отримання довжин слів
    // const words = ["apple", "banana", "cherry"];
    // const lengths = words.map(word => word.length);
    // console.log(lengths); // [5, 6, 6]



    // Задачі
    // 1. Перетворення градусів Цельсія у Фаренгейти
    // Завдання: Є масив температур у градусах Цельсія. Використай map(), щоб створити новий масив, де всі температури будуть переведені у Фаренгейти за формулою:
    // F = C * 9/5 + 32
    const celsius = [0, 10, 20, 30, 40];  
    // Очікуваний результат: [32, 50, 68, 86, 104]

    console.log(celsius.map(item => item * 9/5 +32))


    // 2. Отримання назв товарів з об'єктів
    // Завдання: Є масив об'єктів, що представляють товари. Використай map(), щоб отримати новий масив, що містить лише назви товарів.
    const products = [
      { name: "Laptop", price: 1200 },
      { name: "Phone", price: 800 },
      { name: "Tablet", price: 500 }
    ];
    // Очікуваний результат: ["Laptop", "Phone", "Tablet"]
    
    console.log(products.map(item => item.name))

    
    // 3. Створення масиву об'єктів з індексами
    // Завдання: Є масив слів. Використай map(), щоб створити масив об'єктів, де кожне слово буде збережене разом із його індексом.
    const words = ["apple", "banana", "cherry"];
    // Очікуваний результат: [
    //   { word: "apple", index: 0 },
    //   { word: "banana", index: 1 },
    //   { word: "cherry", index: 2 }
    // ]
    // console.log(words.map((item, index) => ({"word": item, "index": index})))
    console.log(words.map((word, index) => ({word, index})))


    // 4. Форматування імен користувачів
    // У нас є масив об'єктів, що містять інформацію про користувачів. Потрібно створити новий масив, у якому імена будуть відформатовані у вигляді "Прізвище, Ім'я".

    const users = [
        { firstName: "John", lastName: "Doe" },
        { firstName: "Jane", lastName: "Smith" },
        { firstName: "Alex", lastName: "Johnson" }
    ];
    // Очікуваний результат: ["Doe, John", "Smith, Jane", "Johnson, Alex"]
    console.log(users.map(item => `${item.lastName}, ${item.firstName}`))


    // 5. Перетворення вкладених масивів у рядки
    // Є масив вкладених масивів. Використай map(), щоб кожен вкладений масив перетворити у рядок, де елементи розділені комами.

    const nestedArrays = [
        [1, 2, 3],
        ["apple", "banana", "cherry"],
        [true, false, true]
    ];
    // Очікуваний результат: ["1,2,3", "apple,banana,cherry", "true,false,true"]
    console.log(nestedArrays.map(item => item.join(',')))


    // 6. Додавання унікальних ID до об'єктів
    // Є масив товарів, потрібно створити новий масив, де кожен об'єкт отримає унікальний ідентифікатор (id), який буде дорівнювати його індексу в масиві + 1.

    const products2 = [
        { name: "Laptop", price: 1200 },
        { name: "Phone", price: 800 },
        { name: "Tablet", price: 500 }
    ];
    // Очікуваний результат:
    // [
    //   { name: "Laptop", price: 1200, id: 1 },
    //   { name: "Phone", price: 800, id: 2 },
    //   { name: "Tablet", price: 500, id: 3 }
    // ]
    console.log(products2.map((item, index) => ({...item, "id": ++index})))