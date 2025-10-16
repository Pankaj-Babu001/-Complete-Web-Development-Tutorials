// function handlClick(){
//     const element = document.getElementById("first");
//     element.textContent = "Strike is coming 📢"
// }


// const element = document.getElementById("first");
// Element.onClick = function handlClick(){
//     element.textContent = "Strike is Coming";
//     element.style.background = "pink";
// }

// Element.onClick = function handlClick(){
//     element.textContent = "I am the best";
//

// element.addEventListener("click", function handlClick() {
//     element.textContent = "Strike is Coming 📢";
//     element.style.background = "pink";
// });

// element.addEventListener("dbclick", function handlClick() {
//     element.textContent = "Strike is Coming 📢";
//     element.style.background = "red";
// });

// element.addEventListener("mousedown", function handlClick() {
//     element.textContent = "Strike is Coming 📢";
//     element.style.background = "red";
// });

// let a = {
//     greet: function (value) {
//         console.log("Hello", value);
//     }
// }
// a.greet("10");
// a.greet("50");

// element.addEventListener("mouseover", function handlClick() {
//     element.textContent = "Strike is Coming 📢";
//     element.style.background = "red";
// });

// element.addEventListener("mouseout", function handlClick() {
//     element.textContent = "Strike is Coming 📢";
//     element.style.background = "red";
// });

// element.addEventListener("mouseenter", function handlClick() {
//     element.textContent = "Strike is Coming 📢";
//     element.style.background = "red";
// });

// element.addEventListener("mouseup", function handlClick() {
//     element.textContent = "Strike is Coming 📢";
//     element.style.background = "red";
// });

// element.addEventListener("mousemove", function handlClick() {
//     element.textContent = "Strike is Coming 📢";
//     element.style.background = "red";
// });

// const child1 = document.getElementById("child1");
// child1.addEventListener("click", function handlClick() {
//     child1.textContent = "I am clicked 📢";
//     child1.style.background = "red";
// });

// const parent = document.getElementById("parent");
// parent.addEventListener("click", function handlClick() {
//     parent.textContent = "I am clicked 📢";
//     parent.style.background = "red";
// });

// const parent = document.getElementById("parent");
// console.log(parent.children);

// for ( let  child of parent.children) {
//     console.log(child);
//     child.addEventListener("click", function handlClick() {
//         child.textContent = "I am clicked 📢";
//         child.style.background = "aqua";
//     });
// }

// for ( let  child of parent.children) {
//     console.log(child);
//     child.addEventListener("click", function handlClick() {
//         child.addEventListener("click", function handlClick() {
//             child.textContent = "I am clicked 📢";
//         })
//         child.style.background = "red";
//     });
// }


const parent = document.getElementById("parent");
// console.log(parent.children);

function handlClick() {
    parent.textContent = "I am clicked ";
    parent.style.background = "red";
    parent.removeEventListener("click", handlClick);
}

parent.addEventListener("click", handlClick);


// parent.addEventListener("click", (e)=> {
//     console.log(e.target);
//     e.target.textContent = "I am clicked";
//     e.target.style.background = "blue";

// });

// parent.removeEventListener("click", (e)=> {
//     console.log(e.target);
//     e.target.textContent = "I am clicked";
//     e.target.style.background = "blue";

// });
// for (let child of parent.children) {
//     console.log(child);
//     child.addEventListener("click", function handlClick() {
//         child.textContent = "I am clicked ";
//     });
// }