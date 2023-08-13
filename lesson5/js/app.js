const listRef = document.querySelector('.js-accordion-list');

function handleBtnClick(event) {
    if (event.target.nodeName !== 'BUTTON'){
        return;
    }
    event.target.nextElementSibling.classList.toggle('active');

}

listRef.addEventListener('click', handleBtnClick);
