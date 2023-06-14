const btnMore = document.getElementById("more");
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.close__modal')

btnMore.addEventListener("click", () => {
    modal.classList.add('modal--show');
});

btnClose.addEventListener("click", () => {
    modal.classList.remove('modal--show');
});
