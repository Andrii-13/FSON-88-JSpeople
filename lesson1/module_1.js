//TODO: 1 ===================================
// Якщо змінна a дорівнює 10, виведіть 'Вірно', інакше виведіть 'Невірно'.

// const num = 10;
// if(num === 10){
//     console.log("Вірно");
// }else{
// console.log("Невірно");
// }
// num === 10 ? console.log("Вірно"):console.log("Невірно");


//TODO: 2 ===================================
// У змінній min лежить число від 1 до 60. Визначте у котру чверть години
// Попадає це число (у першу, другу, третю або четверту).

// const min = 60;
// if (min >= 1 && min <= 15){
//     console.log("перша частина");
// }else if (min > 15 && min <= 30){
//     console.log("друга частина");
// }else if (min > 30 && min <= 45){
//     console.log("третя частина");
// }else if (min > 45 && min <= 60){
//     console.log("четверта частина");
// }else {
//     console.log("Такої чверті не існує!!!");
// }




//TODO: 3 ===================================
// Змінна num може набувати 4 значення: 1, 2, 3 або 4. Якщо вона має
// значення '1', то у змінну result запишемо 'зима', якщо має значення
// '2' - 'весна' і так далі. Розв'яжіть завдання через switch-case.

// const num = 5;
// let message;

// switch (num) {
//   case 1:
//     message = "зима";
//     break;
  
//   case 2:
//     message = "весна";
//     break;
  
//   case 3:
//     message = "літо";
//     break;
  
//   case 4:
//     message = "осінь";
//     break;

//   default:
//     message = "такої пори року не існує";
// }

// console.log(message);


//TODO: 4 ===================================
// скористаємося циклом while та виведіть у консоль числа від 0 до 50

// let counter = 0;

// while (counter <= 50) {
//   console.log(counter);
//   counter += 1;
// }


//TODO: 5 ===================================
//Використовуючи конструкцію if...else,
//напишіть код, який запитуватиме:
//"Яка офіційна назва JavaScript?"
//Якщо користувач вводить "ECMAScript",
// показати через alert: "Вірно!"
//інакше відобразити: "Не знаєте? ECMAScript!"

// const message = 'Яка «офіційна» назва JavaScript?';
// const question = prompt(message).toLowerCase();
// // if (question === "ecmascript") {
// //     alert("Вірно!")
// // } else {
// //     alert("Не знаєте? ECMAScript!")
// // }
// alert(question === "ecmascript" ? "Вірно!" : "Не знаєте? ECMAScript!")






//TODO: 6 ===================================
// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе у консоль
//рядок у форматі годин і хвилин
//70 === 01:10
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart


// const globalMinutes = 69;
// const hours = String(parseInt(globalMinutes / 60)).padStart(2, 0);

// const minuts = String(globalMinutes % 60).padStart(2, 0);
// console.log(`${hours } : ${minuts}`);
//





//TODO: 7 ===================================
//Напишіть цикл, який виводить у консоль
// числа від max до min за спаданням
// Додайте усі парні числа від min до max

// const min = 1;
// const max = 20;
// let total = 0;

// for (let index = max; index >= min; index-=1) {
//     if (index % 2 !== 0) {
//         continue;
//     }
//     total += index;
//     // total = total + index;
//     console.log("Парні: ", index);
// }
// console.log(`Сума усіх парних чисел ${total}`);







//TODO: 8 ===================================
//Напишіть код, який запитуватиме
//логін за допомогою prompt і логувати результат
//в консоль браузера

//Якщо відвідувач вводить "Адмін",
//то prompt запитує пароль.
//Якщо нічого не ввели або натиснута клавіша відміна
//Вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
//Якщо введено пароль "Я головний",
//то вивести рядок "Добрий день!"
// Якщо відвідувач натиснув відміна виводити рядок 'скасовано'
//інакше виводити рядок "Невірний пароль!"

//TODO: 9 ===================================
// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Введення додається до значення
// змінної total.
// Операція введення числа триває до того часу,
// поки користувач не натисне кнопку Cancel в prompt.
// Після того, як користувач припинив введення натиснувши на
// кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Робити перевірку,що користувач ввів саме число,
// а не довільний набір символів, не потрібно.

// let total = 0;
// let input;

// do {
//     input = prompt("Введіть число");

//     if (input === null) {
//         break;
//     }

//     input = parseFloat(input);
    
//     if (!isNaN(input)) {
//         total += input;
// }
// console.log(!isNaN(input))
    
// } while (true);

// console.log(`Загальна сума введених чисел ${total}`);



// Область видимості ============================

// let total = 0;

// if (total === 0) {
//     console.log(total)

//     const result = 1;
// }

// console.log(result);    







//TODO: 10 ===================================
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо відвідувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл має питати число, поки відвідувач не
// введе число більше 100, або натисне кнопку
// скасування в prompt

//TODO: 11 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.

//TODO: 12 ===================================
//Якщо число ділитися на 3 повертати
//fizz якщо ділитися на 5 повертати buzz
//Якщо ділитися на 3 і на 5 повернути fizzbuzz

//TODO: 13 ===================================
// Напишіть if..else, що відповідає наступному switch:
