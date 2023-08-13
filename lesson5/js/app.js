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
