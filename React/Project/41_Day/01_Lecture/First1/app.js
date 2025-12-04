let count = 0;

const para = document.createElement("p");
para.textContent = `Counter: ${count}`;

const button = document.createElement("button");
button.textContent = "Click me!";

const parent = document.getElementById("root");
parent.append(para, button);

button.addEventListener("click", ()=>{
    count++;
    para.textContent = `Counter: ${count}`;
    console.log(count);

})