//! Callback
//TODO:=================01====================
//Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt та викликає callback функцію
//greet(name) - коллбек, що приймає ім'я і логірує в консоль
//Рядок "Привіт <name>"
//Реалізуй перевірку, що prompt не порожній

// function letMeSeeYourName(callback) {
//   const name = prompt("Введіть ваше ім`я");
//   if  (!name) {
//    console.log("ім`я не може бути порожнім");
//    return;
//   } 
//   callback(name);
// }

// function greet(name) {
//   console.log(`Привіт ${name}`);
// }

// letMeSeeYourName(greet);



//TODO:============task-02=========================
// Напишіть функцію, яка приймає два числа і колбек-функцію. Функція повинна помножити числа між собою та передати результат дії до колбек-функції. Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.




// const perfomOperation = (a, b, callback) => callback(a * b) 



// const callbackFunction = (number) => number % 2 === 0 ? Math.pow(number, 2) : Math.sqrt(number)


// console.log(perfomOperation(4, 8, callbackFunction))


