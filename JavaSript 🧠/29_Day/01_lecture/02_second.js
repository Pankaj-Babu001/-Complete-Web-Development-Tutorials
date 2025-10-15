const newElement = document.createElement("h2");
newElement.innerText = "Strike is coming soon 🚀";
newElement.id = "second";

// Selecting the first h1 element
const element = document.getElementById("first");
element.after(newElement);
// element.before(newElement);

const newElement2 = document.createElement("h3");
newElement2.innerText = "Diwali aa rahi hai  Bhaiya G🔥";
newElement2.id = "third";

newElement2.className = "Diwali";
newElement.className += "Strike";
newElement2.classList.add("Diwali", "Strike");
newElement2.classList.remove("Diwali");


newElement2.style.backgroundColor = "pink";
newElement2.style.fontSize = "30px";

element.before(newElement2);


console.log(newElement2.getAttributeNames("class"));

const list = document.createElement("li");
list.innerText = "Item 6";

const list2 = document.createElement("li");
list2.innerText = "Item 7";

const list3 = document.createElement("li");
list3.innerText = "Item 8";

const list4 = document.createElement("li");
list4.innerText = "Item 9";

const unorderElement = document.getElementById("listing");
unorderElement.append(list, list2, list3);

unorderElement.append(list4);
unorderElement.children[1].after(list4);


const arr = ["Mango", "Apple", "Orange", "Banana", "Pineapple"];

const unorderElement = document.getElementById("listing");
const fragment = document.createDocumentFragment();


for (let food of arr) {
    // console.log(food);
    const list = document.createElement("li");
    list.textContent = food;
    fragment.append(list);
}

unorderElement.append(fragment);

const s1 = document.getElementById("first");
// s1.remove();

const month = document.getElementById("ten");
console.log(month.children);

// console.log(month.children);

const lister = document.createElement("li");
lister.textContent = "<img src='./pankaj.jpg'>";

// month.prepend(lister);
// month.insertAdjacentElement("beforebegin",lister);

// lister.innerHTML = <h2>Help</h2>;
month.prepend(lister);
// month.insertAdjacentElement("beforeend",lister);