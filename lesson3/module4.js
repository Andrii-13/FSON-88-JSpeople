! Callback
TODO:=================01====================
Напишіть дві функції
letMeSeeYourName(callback) - запитує ім'я користувача
через prompt та викликає callback функцію
greet(name) - коллбек, що приймає ім'я і логірує в консоль
Рядок "Привіт <name>"
Реалізуй перевірку, що prompt не порожній

function letMeSeeYourName(callback) {
  const name = prompt("Введіть ваше ім`я");
  if  (!name) {
   console.log("ім`я не може бути порожнім");
   return;
  }
  callback(name);
}

function greet(name) {
  console.log(`Привіт ${name}`);
}

letMeSeeYourName(greet);

TODO:============task-02=========================
Напишіть функцію, яка приймає два числа і колбек-функцію. Функція повинна помножити числа між собою та передати результат дії до колбек-функції. Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.

const perfomOperation = (a, b, callback) => callback(a * b)

const callbackFunction = (number) => number % 2 === 0 ? Math.pow(number, 2) : Math.sqrt(number)

console.log(perfomOperation(4, 8, callbackFunction))

TODO:=========task-01=================
Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].

const num = [1, 2, 3, 4, 5];

const result = num.map((num) => num ** 2);
console.log(result);

TODO:=========task-02=================
Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

const data = [
  { id: 1, values: [1, 2, 3] },
  { id: 2, values: [4, 5, 6] },
  { id: 3, values: [7, 8, 9] },
];

const numbers = data.flatMap(({ values }) => values);
console.log(numbers);

TODO:=========task-03=================
Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

const data = [
  { name: "John", age: 27 },
  { name: "Jane", age: 31 },
  { name: "Bob", age: 19 },
];

const unique = data.some(({ age }) => age < 20);
console.log(unique);

 Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

const numbers = [2, 4, 6, 8, 10];

const total = numbers.every((el) => el % 2 === 0);
console.log(total);

Знайдіть перше непарне число

const numbers = [2, 2, 6, 8, 9, 7, 12];

const total = numbers.find((num) => num % 2 !== 0);
console.log(total);

Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

const numbers = [4, 2, 5, 1, 3];

const total = [...numbers].sort((a, b) => a - b); // a.localeCompare(b)
console.log(numbers);
console.log(total);

Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

const someData = [
  { name: "John", age: 27 },
  { name: "Jane", age: 31 },
  { name: "Bob", age: 19 },
];

const filterPeopleByAge = someData.filter(({ age }) => age > 20);
console.log(filterPeopleByAge);

Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

const numbers = [1, 2, 3, 4, 5];

const totalNum = numbers.reduce((acc, el) => (acc += el), 0);
console.log(totalNum);




/ Даний словник із міст та дат виступів рок-групи

/ Необхідно перетворити словник (key-value) на масив із назв міст
/ Виведення міст має бути у хронологічному порядку
/ Міста у яких концерт вже пройшов потрібно виключити
/ Результат ["Умань", "Харків", "Одеса"]

const concerts = {
    Київ: new Date('2020-04-01'),
    Умань: new Date('2023-08-02'),
    Вінниця: new Date('2020-04-21'),
    Одеса: new Date('2023-08-15'),
    Хмельницький: new Date('2020-04-18'),
    Харків: new Date('2023-08-10'),
}

const conertToArray = (obj) => Object.keys(obj)
.filter (city => obj[city] > new Date ())
.sort ((a,b) => obj[a] - obj[b])
console.log(conertToArray(concerts));

! class
TODO:=================task-09=============================
Завдання полягає у створенні програми, що дозволяє керувати замовленнями в ресторані.

#### Для цього потрібно реалізувати клас `Order`, який містить такі приватні властивості:
- `tableNumber` - номер столика, де зроблено замовлення
- `items` - масив предметів замовлення, де кожен предмет містить ім'я (name) та ціну (price)
- `isPaid` - позначає, чи оплачене замовлення (default = false)
##### Для класу Order потрібно реалізувати такі методи:
- `calculateTotal`() - повертає загальну суму замовлення.
- `markAsPaid`() - позначає замовлення як оплачене
- `addItem`() - який додає предмет замовлення до масиву "items"
- `removeItem`() - який видаляє предмет замовленя з масиву "items"
##### Додатково можна створити гетери та сетери для отримання номера столика, статусу замовлення та самого замовлення

#### Також потрібно створити клас `MenuItem`, який містить властивості `name` та `price` для предметів замовлення.


class Order {
    #tableNumber;
    #items = [];
    #isPaid = false;

    constructor(tableNumber){
        this.#tableNumber = tableNumber;
    }
    calculateTotal() {
      return this.#items.reduce((acc, { price }) => (acc += price), 0);
    }
    markAsPaid() {
        this.#isPaid = true;
    }
    addItem(newItem) {
        this.#items.push(newItem);
    }
    removeItem(itemDel) {
        this.#items = this.#items.filter(item => item !== itemDel)
    }
    get tableNumber(){
        return this.#tableNumber;
    }
    set tableNumber(newTableNumber) {
        this.#tableNumber = newTableNumber;
    }
    get isPaid() {
        return this.#isPaid;
    }
    set isPaid(newValue){
        this.#isPaid = newValue;
    }

}

class MenuItem {
    constructor(name,price){
    this.name = name;
    this.price = price;
}
}

// Create menu items
const pepci = new MenuItem("pepci", 5)
const burger = new MenuItem("burger", 10)
const coffee = new MenuItem("coffee", 7)


// Create an order
const order = new Order(1)

order.addItem(burger)
order.addItem(pepci)
order.addItem(coffee)
order.removeItem(pepci)
order.tableNumber = 10

// Calculate the total and mark the order as paid
const total = order.calculateTotal()
order.markAsPaid()

console.log(`Order for table ${order.tableNumber} - Total: $${total}`);
console.log(`Is paid: ${order.isPaid}`);

