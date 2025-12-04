const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

next.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.cards').appendChild(items[0]);
})
prev.addEventListener('click', function () {
    let items = document.querySelectorAll('.item');
    document.querySelector('.cards').prepend(items[items.length - 1]);
})