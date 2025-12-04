function createElement(type, attributes, children) {
    const element = document.createElement(type);
    for (let key in attributes) {
        element.setAttribute(key, attributes[key]);
    }
    for (let child of children) {
        if (typeof child === "string") {
            child = document.createTextNode(child);
        }
        element.appendChild(child);
    }
    return element;
}

function createElement(type, attributes, children) {

    const element = document.createElement(tag);
    element.textContent = children;
    element.className = 'element';
    element.id = 'first';
    element.style.fontSize = "30px";
    element.style.backgroundColor = '#ff5733';
    element.style.color = "white";
    element.style.textAlign = "center";
    return element;
}

const element1 = createElement("h1", {className: 'element', id: 'first'}, "Hello World Using React And ReactDOM");



// Create A H1 element Using React And Render It To The Div Using ReactDOM



// const element1 = document.createElement("h1");
// element1.textContent = "Hello World Using React And ReactDOM";

// element1.className = 'element';
// element1.id = 'first';
// element1.style.fontSize = "30px";
// element1.style.backgroundColor = '#ff5733';
// element1.style.color = "white";
// element1.style.textAlign = "center";



// const element2 = document.createElement("h1");
// element2.textContent = "Strike is launched";

// element2.className = 'element';
// element2.id = 'second';
// element2.style.fontSize = "25px";
// element2.style.backgroundColor = '#ff69b4';
// element2.style.color = "white";
// element2.style.textAlign = "center";


// const element3 = document.createElement("h1");
// element3.textContent = "React is awesome";

// element3.className = 'element';
// element3.id = 'third';
// element3.style.fontSize = "25px";
// element3.style.backgroundColor = '#d4056cff';
// element3.style.color = "white";
// element3.style.textAlign = "center";

const root = document.getElementById('root');
root.append(element1);
// root.append(element2);
// root.append(element3);


// document.getElementById('root').appendChild(element1);