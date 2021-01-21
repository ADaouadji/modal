const openbtn = document.querySelector(".open");
const modalcontainer = document.querySelector(".modal-container");
const modalbtn = document.querySelector(".modal-btn");

openbtn.addEventListener('click', function() {
modalcontainer.classList.add("show");
})

modalbtn.addEventListener('click', function() {
    modalcontainer.classList.remove("show");
})

