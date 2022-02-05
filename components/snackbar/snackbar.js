const btnDemo = document.querySelectorAll(".secondary-content-demo-btn");
const snackbarBody = document.querySelector(".snackbar-demo");
const closeIcon = document.querySelector(".demo-close");

btnDemo[0].addEventListener('click', ()=>{ 
    snackbarBody.classList.remove('snackbar-hide');
    snackbarBody.classList.add('snackbar-baseline');
});

btnDemo[1].addEventListener('click', ()=>{ 
    snackbarBody.classList.remove('snackbar-hide');
    snackbarBody.classList.add('snackbar-leading');
});

btnDemo[2].addEventListener('click', ()=>{ 
    snackbarBody.classList.remove('snackbar-hide');
    snackbarBody.classList.add('snackbar-stacked');
});

closeIcon.addEventListener('click', () => {
    snackbarBody.classList.remove('snackbar-baseline');
    snackbarBody.classList.remove('snackbar-leading');
    snackbarBody.classList.remove('snackbar-stacked');
    snackbarBody.classList.add('snackbar-hide');
});