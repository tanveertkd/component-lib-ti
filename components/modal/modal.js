const modalDemoBtn = document.querySelector(".secondary-content-demo-btn");
const modal = document.querySelector(".modal-sample");
const modalDismissBtn = document.querySelector(".modal-dismiss-btn");
const modalSecondaryBtn = document.querySelector(".btn-secondary-demo");

modalDemoBtn.addEventListener('click', () => {
    modal.classList.add('modal-active');
});

modalDismissBtn.addEventListener('click', () => {
    modal.classList.remove('modal-active');
});

modalSecondaryBtn.addEventListener('click', () => {
    modal.classList.remove('modal-active');
});