//Напиши функцію findSmallerNumber(numbers)
//яка шукає найменше число в масиві.
//Додай перевірку що функція отримує масив

// const numbers = [2, 5, -9, 56, 12, 24, 7, 80, 3];

// function findSmallerNumber(numbers) {
//   if (!Array.isArray(numbers)) {
//     return console.log("Аргумент повинен бути масивом");
//   }

//   let min = numbers[0];
//   for (const number of numbers) {
//     if (min > number) {
//       min = number;
//     }
//   }
//   return min;
// }
// // console.log(Array.isArray(numbers));
// console.log(findSmallerNumber(numbers));

//Напишіть функцію caclculateAverage()
//яка приймає довільну кількість
//аргументів і повертає їхнє середнє значення.
//Додати перевірку, що аргументи це числа.

// function caclculateAverage() {
//   const args = arguments;
//   let sum = 0;
//   let counter = 0;
//   for (const number of args) {
//     if (typeof number !== "number") {
//       continue;
//     }
//     sum += number;
//     counter += 1;
//   }

//   return sum / counter;
// }

// console.log(caclculateAverage(10, 10, 20, 200, "hola"));

// console.log(typeof "10");

// Напишіть функцію min(a, b), яка повертає
// менше з чисел a, b
// Потрібно додати перевірку, що функція отримує числа

// function min(a, b) {
//   if (isNaN(a) || isNaN(b)) {
//     console.log("Будь людиною....");
//   }
//   return a < b ? a : b;
// }
// console.log(min(10, 7));
// console.log(isNaN("hhh"));





// напиши функцію яка сумуватиме сусідні числа і пушити в новий масив
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];
// const someArr = [22, 11, 34, 5, 12, 13, 14, 15];

// function sum(arr) {
//     const newArr = [];

// for (let index = 0; index < arr.length -1; index+= 1) {
//      newArr.push(arr[index] + arr[index + 1])
    
// }
    
// return newArr
// }
//  console.log(sum(someArr))



// Функція formatMessage(message, maxLength)
// приймає рядок (параметр message) і форматує його,
// якщо довжина перевищує значення параметрі maxLength.



// function formatMessage(message, maxLength) {
//     return message.length > maxLength ? message.slice(0, maxLength) + "..." : message;
// }



// console.log(formatMessage('Curabitur ligula sapien', 16)); //Повертає 'Curabitur ligula...'.
// console.log(formatMessage('Curabitur ligula sapien', 23)); //Повертає 'Curabitur ligula sapien'.
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 15)); //Повертає 'Nunc sed turpis...'.
// console.log(formatMessage('Nunc sed turpis a felis in nunc fringilla', 41)); //Повертає 'Nunc sed turpis a felis in nunc fringilla


// const sumArr = [22, 11, 34, 5, 12, 13, 14, 15];
  
// function sum(arr) {
//   let sum = 0;
//   let total = [];
//   for (const args of arr) {
//     sum += args;
//     total.push(sum);
//   }
//   console.log(total);
//   console.log(sum);
// }

// sum(sumArr);