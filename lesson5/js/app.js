const listRef = document.querySelector(".js-accordion-list");

function handleBtnClick(event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  }
  event.target.nextElementSibling.classList.toggle("active");
}

listRef.addEventListener("click", handleBtnClick);

const paginationList = document.querySelector(".js-pagination");

paginationList.addEventListener("click", apdateActivePage);

function apdateActivePage(evt) {
  const activeBtn = paginationList.querySelector(".active");
  const currentBtn = evt.target;

  if (currentBtn.nodeName !== "LI") {
    return;
  }

  if (currentBtn.dataset.type === "page") {
    activeBtn.classList.remove("active");
    currentBtn.classList.add("active");
  }

  if (currentBtn.dataset.type === "prev") {
    //  activeBtn.classList.remove('active')
    //  currentBtn.classList.add('active')
    const prevActivePage = activeBtn.dataset.page - 1;
    const prevPage = paginationList.querySelector(
      `[data-page="${prevActivePage}"]`
    );

    if (prevPage) {
      activeBtn.classList.remove("active");
      prevPage.classList.add("active");
    }
  }

  if (currentBtn.dataset.type === "next") {
    //  activeBtn.classList.remove('active')
    //  currentBtn.classList.add('active')
    const nextActivePage = Number(activeBtn.dataset.page) + 1;
    const nextPage = paginationList.querySelector(
      `[data-page="${nextActivePage}"]`
    );

    if (nextPage) {
      activeBtn.classList.remove("active");
      nextPage.classList.add("active");
    }
  }
}

// TASK 3

const controlsBtns = document.querySelector(".js-counter-controls");
const displayEl = document.querySelector(".js-counter-value");

const localBtns = document.querySelector(".js-save");
controlsBtns.addEventListener("click", onControlBtnsClick);
localBtns.addEventListener("click", onLocalBtnsClick);
document.addEventListener("DOMContentLoaded", renderPage);

const LOCAL_KEY = "local-counter";
let currentCounter = Number(displayEl.textContent);

function onControlBtnsClick(e) {
  const currentBtn = e.target.dataset.action;

  if (currentBtn === "decrease") {
    currentCounter -= 1;
  }
  if (currentBtn === "increase") {
    currentCounter += 1;
  }
  if (currentBtn === "reset") {
    currentCounter = 0;
  }
  displayEl.textContent = currentCounter;
}

function onLocalBtnsClick(e) {
  const currentLocalBtn = e.target.dataset.action;
  if (currentLocalBtn === "save") {
    localStorage.setItem(LOCAL_KEY, displayEl.textContent);
  }
  if (currentLocalBtn === "clear-save") {
    localStorage.removeItem(LOCAL_KEY);
  }
}

function renderPage() {
  const lsData = localStorage.getItem(LOCAL_KEY);
  if (lsData) {
    displayEl.textContent = +lsData;
  }
}

// Task 4

const themeSwitcher = document.getElementById("theme-switch");
const bodyEl = document.body;
const LS_KEY = "switch-theme";

document.addEventListener("DOMContentLoaded", setThemeOnLoad);

themeSwitcher.addEventListener("click", onCheckBoxChange);

function changeDarkTheme() {
  bodyEl.classList.replace("light", "dark");
  localStorage.setItem(LS_KEY, "dark");
}

function changeLightTheme() {
  bodyEl.classList.replace("dark", "light");
  localStorage.setItem(LS_KEY, "light");
}

function onCheckBoxChange() {
  console.log(themeSwitcher.checked);
  if (themeSwitcher.checked) {
    changeDarkTheme();
  } else {
    changeLightTheme();
  }
  // if you change theme to dark, add 'dark' class and remove previous, add this change to local storage
  // if you select light theme do the same work but add 'light' class
}

function setThemeOnLoad() {
  const lsData = localStorage.getItem(LS_KEY);
  if (lsData === "dark") {
    bodyEl.classList.replace("light", "dark");
    themeSwitcher.checked = true;
  } else {
    bodyEl.classList.replace("dark", "light");
    themeSwitcher.checked = false;
  }
  // this helpful function should call every time when you update page, to check what theme was seted to local storage
  // you should get data from LS and set saved theme to body
  // don't forget about themeSwitcher, if current theme is dark, it should be checked
}
