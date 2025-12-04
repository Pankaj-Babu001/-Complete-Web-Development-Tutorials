const button = document.querySelector(".button");

button.addEventListener("click", (e) => {
    e.preventDefault();
    button.classList.add("bubbleanimation");

    setTimeout(() => {
        button.classList.remove("bubbleanimation");
    }, 1000)
});