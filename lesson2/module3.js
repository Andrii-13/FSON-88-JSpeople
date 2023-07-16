// Напиши скрипт, який для об'єкта user,
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'
// 3 замінити значення premium на false
// 4 виводити вміст об'єкта user у форматі
// ключ:значення використовуючи Object.keys() і for...of

// const user = {
//   name: 'John',
//   age: 30,
//   hobby: 'reading',
//   premium: true,
// };

// user.mood = "happy";
// user.hobby = "skydiving";
// user.premium = false;
// const keys = Object.keys(user);

// for (const key of keys) {
//   console.log(key, ":", user[key]);
// }

// У нас є об'єкт, у якому зберігатимуться зарплати
// нашої команди
// Напишіть код для сумування всіх зарплат і
// збережіть його результат у змінній sum.
// Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// const salary = Object.values(salaries);
// let total = 0;
// for (const num of salary) {
//   total += num;
// }
// console.log(total);

// Напишіть функцію updateObject, яка приймає об'єкт та повертає
// новий об'єкт без зазначених параметрів
// Очікуваний результат ({a: 1, b: 2, c: 3}, 'b', 'a') => {c: 3}
// const data = { a: 1, b: 2, c: 3 };

// function updateObject(obj, ...removeKeys) {
//   const newObj = { ...obj };

//   for (const obj1 of removeKeys) {

//     delete newObj[obj1];
//   }
//   return newObj;
// }

// console.log(updateObject(data, 'b', 'a')); // => {c: 3}

// console.log(data);

// Потрібно написати функцію, яка приймає 2 параметри obj і key, яка буде перебирати об'єкт.
// Якщо об'єкт має такий ключ - поверне true
// Є 2 варіанти рішення, спочатку напишемо функцію, потім вирішимо простим способом

// const obj = {
//   name: 'Igor',
//   car: 'Mercedes',
//   carColor: 'black',
// };

// // function getBool(obj, key) {
// //   const keys = Object.keys(obj);
// //   console.log(keys);
// //   return keys.includes(key)
  
// // }

// const getBool = (obj, key) => key in obj;
  
// console.log(getBool(obj, "rating"));

// Створіть функцію multiplyNumeric(obj),
// яка множить всі числові властивості об'єкта obj на 2.

// до виклику функції

// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };

// function multiplyNumeric(obj) {
//   for (const key in obj) {
//     console.log(key);
//     if (obj.hasOwnProperty(key)) {
//       if (typeof obj[key] === "number") {

//         obj[key] *= 2;
//       }
// //     }
// //   }
// //   return obj
// // }

// // console.log(multiplyNumeric(menu));

// // Потрібно перебрати об'єкти та вивести ім'я кращого співробітника

// function findBestEmployee(obj) {
//     let bestEmployee = "";
//     let bestEmployeeTasks = 0;

//     for (const [employee, tasks] of Object.entries(obj)) {
//         // console.log(employee);
//         // console.log(tasks);
//         if (tasks > bestEmployeeTasks) {
//             bestEmployeeTasks = tasks;
//             bestEmployee = employee;
//         }
//     }
//     return bestEmployee;
// } 

// console.log(
//   findBestEmployee({
//     ann: 29,
//     david: 35,
//     helen: 1,
//     lorence: 99,
//   })
// );// lorence

// console.log(
//   findBestEmployee({
//     poly: 12,
//     mango: 17,
//     ajax: 4,
//   })
// ); // mango

// console.log(
//   findBestEmployee({
//     lux: 147,
//     david: 21,
//     kiwi: 19,
//     chelsy: 38,
//   })
// ); // lux