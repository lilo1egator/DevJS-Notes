# Основні принципи ООП у JavaScript

Об'єктно-орієнтоване програмування (ООП) – це підхід до програмування, що базується на концепції об'єктів. Основні принципи ООП:

1. **Інкапсуляція** – приховування деталей реалізації.
2. **Наслідування** – створення нових класів на основі існуючих.
3. **Поліморфізм** – можливість перевизначати методи.
4. **Абстракція** – виділення лише необхідних характеристик об'єкта.

## 1. Інкапсуляція (приховування даних)
Інкапсуляція дозволяє приховати внутрішню логіку об'єкта та надавати доступ до нього лише через публічні методи.

```js
class BankAccount {
  #balance; // Приватна змінна, доступна лише в межах класу
  constructor(owner, balance) {
    this.owner = owner;
    this.#balance = balance;
  }
  deposit(amount) {
    this.#balance += amount;
    console.log(`Депозит: ${amount}. Новий баланс: ${this.#balance}`);
  }
  getBalance() {
    return this.#balance; // Метод для отримання балансу
  }
}

const account = new BankAccount("Олег", 1000);
account.deposit(500);
console.log(account.getBalance()); // Виведе 1500
```

## 2. Наслідування (створення підкласів)
Наслідування дозволяє одному класу (дочірньому) отримати властивості та методи іншого класу (батьківського).

```js
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }
  makeSound() {
    console.log(`${this.name} видає звук: ${this.sound}`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Гав гав"); // Викликаємо конструктор батьківського класу
    this.breed = breed;
  }
  showBreed() {
    console.log(`Це собака породи ${this.breed}`);
  }
}

const beagle = new Dog("Бігль", "Бігль");
beagle.makeSound(); // "Бігль видає звук: Гав гав"
beagle.showBreed(); // "Це собака породи Бігль"
```

## 3. Поліморфізм (перевизначення методів)
Поліморфізм дозволяє дочірнім класам змінювати поведінку методів батьківського класу.

```js
class Bird {
  fly() {
    console.log("Я лечу!");
  }
}

class Penguin extends Bird {
  fly() {
    console.log("Я не вмію літати, але добре плаваю!");
  }
}

const penguin = new Penguin();
penguin.fly(); // "Я не вмію літати, але добре плаваю!"
```

## 4. Абстракція (загальні концепції)
Абстракція допомагає створити загальний клас з базовими методами, які уточнюються в підкласах.

```js
class Vehicle {
  constructor(type) {
    this.type = type;
  }
  move() {
    console.log(`${this.type} рухається`);
  }
}

class Car extends Vehicle {
  move() {
    console.log("Автомобіль їде по дорозі");
  }
}

const car = new Car("Авто");
car.move(); // "Автомобіль їде по дорозі"
```

ООП у JavaScript допомагає створювати гнучкий, зрозумілий і повторно використовуваний код.
