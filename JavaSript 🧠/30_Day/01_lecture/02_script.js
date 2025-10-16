const grandParent = document.getElementById("grandParent");
grandParent.addEventListener('click', (e) => {
    console.log(e.target);
    // console.log("grandParent is clicked");
},false)

const parent = document.getElementById("parent");
parent.addEventListener('click', (e) => {
    // console.log(e);
    // console.log("parent is clicked");
},false)

const child = document.getElementById("child");
child.addEventListener('click', (e) => {
    console.log(e);
    // console.log("child is clicked");
    // e.stopImmediatePropagation();
},false)

// Capture phase on hai: Top se down aaoge: Us time pe event ko trigger kar diya jaayega
// Bubble phase on hai: Down se up aaoge: Us time pe event ko trigger kar diya jaayega
