//TODO:=========task-01=================
/**
 * Вам надано кілька масивів з різними фруктами (назва у масиві вказує на те, куди потрібно помістити елементи відносно ul).
 * `Створи` html - елемент списку і `додай` його у розмітку.Попрактикуйся з методами`append`, `prepend`, `after`, `before`
 * заповнивши ними список елементами з масивів.Для зручності створи допоміжну функцію`elementsOfIngridients`,
 * яка повертатиме масив елементів(масив з лішками).
 */

// const appendFruitList = ['apple🍎', 'banana🍌'];
// const prependFruitList = ['grapes🍇', 'orange🍊'];
// const beforeFruitList = ['strawberry🍓', 'cherry🍒'];
// const afterFruitList = ['peach🍑', 'kiwi🥝'];

// const ulEl = document.querySelector(".list");
// function elementsOfIngridients(arr){
// return  arr.map(elem => {
//     const liEl  = document.createElement("li");
//     liEl.textContent = elem;
//     return liEl;
//   })
// }
// ulEl.append(...elementsOfIngridients(appendFruitList));
// // console.log(...elementsOfIngridients(appendFruitList));
// ulEl.prepend(...elementsOfIngridients(prependFruitList));
// ulEl.before(...elementsOfIngridients(beforeFruitList));
// ulEl.after(...elementsOfIngridients(afterFruitList));
// console.log(elementsOfIngridients(appendFruitList));

//TODO:=========task-02=================
// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).
// function randomNumber() {
//   return Math.floor(Math.random() * 100) + 1;
// }

// const containerDivEl = document.createElement("div");
// containerDivEl.classList.add("number-container");
// const blocks = 100;
// const divArray = [];
// for (let i = 0; i < blocks; i += 1) {
//   const divEl = document.createElement("div");
//   divEl.classList.add("number");
//   divEl.textContent = randomNumber();
//   if (divEl.textContent % 2 === 0) {
//     divEl.classList.add("even");
//   } else {
//     divEl.classList.add("odd");
//   }
//   divArray.push(divEl);
// }
// containerDivEl.append(...divArray);
// console.log(divArray);

// const ulEl = document.querySelector(".list");
// ulEl.after(containerDivEl);

// //TODO:=========task-03=================
// Створи HTML список фільмів на основі масиву під назвою films.
//  Користувач обожнює дивитися кіно, дивиться його часто, тому при вході
//  на сторінку він хоче бачити, які фільми вже були переглянуті, а до яких
//   він ще не добрався.Вперу чергу зарендери фільми на сторінку, використовуй
//    допоміжну функцію createMarkup(), яка буде повертати розмітку.Додай розмітку
//     на сторінку задопомогою insertAdjacentHTML() і тільки після цього зроби
//     елементи фільмів(li), які вже були переглянуті напівпрозорими(opacity: 0.5).
//     Для цього використовуй масив унікальних id фільмів, знайди на сторінці
//      елементи у яких id дорівнює тому id фільма, який користувач вже перелянув
//       аби саме їх зробити напівпрозорими.

const films = [
  {
    title: "Tetris",
    imgUrl: "https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg",
    id: "film_1",
  },
  {
    title: "Avatar: The Way of Water",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg",
    id: "film_2",
  },
  {
    title: "Operation Fortune: Ruse de guerre",
    imgUrl: "https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg",
    id: "film_3",
  },
  {
    title: "Babylon",
    imgUrl: "https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg",
    id: "film_4",
  },
  {
    title: "The Whale",
    imgUrl: "https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg",
    id: "film_5",
  },
];

// Приклад елементу списку
{
  /* <li id="${id}">
     <img src="${imgUrl}" alt="${title}" />
     <p>${title}</p>
</li> */
}

const watchedFilms = ["film_2", "film_4", "film_5"];

function createMarkup(film) {
  const { title, imgUrl, id } = film;
  return `
    <li id="${id}">
      <img src="${imgUrl}" alt="${title}" />
      <p>${title}</p>
    </li>
  `;
}

function renderFilms(arr) {
  const ulEl = document.querySelector(".film-list");
  const murkup = arr.map((el) => createMarkup(el)).join("");
  ulEl.insertAdjacentHTML("beforeend", murkup);

  watchedFilms.forEach((elem) => {
    const film = document.querySelector(`#${elem}`);

    if (film) {
      film.style.opacity = 0.5;
    }
  });
}

// Виклик функції для рендерингу фільмів
renderFilms(films);

//TODO:=========task-04=================
/**
 *!  Form Events, Input, Focus, Blur and Submit.

*? Викоритовуй шаблон форми з файлу html.

** 1 - При події `input`, якщо користувач ввів в поле більше 6 символів то додати клас `success`. Якщо ж символів менше аніж 6, то клас `error`

** 2 - При події `focus` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

** 3 - При події `blur` зроби перевірку на пустоту поля інпута, якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

** 4 - При події `submit`. Відміни поведінку браузера по змовчуванню. Дістань данні з інпуту і чек боксу, зроби перевірку, що інпут не порожній, також, що нажатий чек бокс у положення true, якщо користувач все виконав вірно, збери данні (userName) у обьект і виведи у консоль. У разі, якщо користувач не виконав одну із умов, виведи повідомлення. Також реалізуй додавання ім`я користувача у span, замість слова "Anonymous". Якщо користувач ввів ім`я, а потім видали, зроби так, щоб на місце повернулось дефолтне знаяення "Anonymous". При відправці форми, очисти інпут, верни чек бокс у положення false, верни дефолтне значення "Anonymous" у span.
 */

// find refs

//TODO:===========1===============

//TODO:===========2===============

//TODO:===========3===============

//TODO:===========4===============

//TODO:=========task-05=================
// Кнопка "Зменшити" робить квадрат меншим на 20 пікселів, кнопка "Збільшити" - робить більшим на 10 пікселів.

//TODO:=========task-06=================
// При кліку на коло воно має слідувати за курсором. При повторному кліку воно стає в початкове положення.
// const circle = document.querySelector('.outer-circle');

// circle.addEventListener('click', onCircleClick);

// function onCircleClick(event){
//   const target = event.currentTarget;

//   if(target.style.position === 'absolute'){
//     target.style.position = 'static'; 
// window.removeEventListener('mousemove', onMouseMove)
// return
// }
//  target.style.position = 'absolute';
// window.addEventListener('mousemove', onMouseMove)
// }

// function onMouseMove(evt){
//   let left = evt.pageX;
//   let top = evt.pageY;

//   circle.style.top = `${top - 15}px`;
//   circle.style.left = `${left - 15}px`
// }