// Part 1: Selection Methods

function selectById() {
    const element = document.getElementById('unique-element');
    highlightElement(element, 'Selected by ID');
}

function selectByClass() {
    const elements = document.getElementsByClassName('common-class');
    Array.from(elements).forEach(el => highlightElement(el, 'Selected by Class'));
}

function selectByTag() {
    const elements = document.getElementsByTagName('p');
    Array.from(elements).forEach(el => highlightElement(el, 'Selected by Tag'));
}

function querySelectorDemo() {
    const element = document.querySelector('[data-category="important"]');
    highlightElement(element, 'Selected with querySelector');
}

function querySelectorAllDemo() {
    const elements = document.querySelectorAll('.demo-element');
    elements.forEach(el => highlightElement(el, 'Selected with querySelectorAll'));
}

function traverseParent() {
    const child = document.querySelector('.child');
    const parent = child.parentElement;
    highlightElement(parent, 'Parent Element');
}

function traverseChildren() {
    const parent = document.getElementById('parent-element');
    const children = parent.children;
    Array.from(children).forEach(child => highlightElement(child, 'Child Element'));
}

function traverseSiblings() {
    const secondChild = document.querySelectorAll('.child')[1];
    const prevSibling = secondChild.previousElementSibling;
    const nextSibling = secondChild.nextElementSibling;
    
    if (prevSibling) highlightElement(prevSibling, 'Previous Sibling');
    if (nextSibling) highlightElement(nextSibling, 'Next Sibling');
}

function highlightElement(element, message) {
    // Remove previous highlights
    document.querySelectorAll('.highlighted').forEach(el => {
        el.classList.remove('highlighted');
        el.style.boxShadow = '';
    });
    
    // Add highlight to current element
    element.classList.add('highlighted');
    element.style.boxShadow = '0 0 0 3px yellow';
    console.log(message, element);
}

// Part 2: Manipulation Methods

function changeInnerHTML() {
    const element = document.getElementById('content-example');
    element.innerHTML = 'Content changed with <strong style="color: red;">innerHTML</strong> - HTML is parsed!';
}

function changeTextContent() {
    const element = document.getElementById('content-example');
    element.textContent = 'Content changed with textContent - <strong>HTML tags are ignored</strong>';
}

function changeInnerText() {
    const element = document.getElementById('content-example');
    element.innerText = 'Content changed with innerText - <strong>HTML tags are ignored</strong>';
}

function changeId() {
    const element = document.getElementById('attribute-element');
    const newId = 'id-' + Math.floor(Math.random() * 1000);
    element.id = newId;
    console.log('New ID:', newId);
}

function changeClass() {
    const element = document.getElementById('attribute-element');
    element.className = 'demo-element updated-class';
}

function setCustomAttribute() {
    const element = document.getElementById('attribute-element');
    const value = 'value-' + Math.floor(Math.random() * 1000);
    element.setAttribute('data-custom', value);
    console.log('Set custom attribute:', value);
}

function getAllAttributes() {
    const element = document.getElementById('attribute-element');
    const attributes = Array.from(element.attributes);
    console.log('All attributes:', attributes.map(attr => `${attr.name}="${attr.value}"`).join(', '));
}

function addClass() {
    const element = document.getElementById('classlist-element');
    element.classList.add('added-class');
}

function removeClass() {
    const element = document.getElementById('classlist-element');
    element.classList.remove('base-style');
}

function toggleClass() {
    const element = document.getElementById('classlist-element');
    element.classList.toggle('toggled-class');
}

function checkClass() {
    const element = document.getElementById('classlist-element');
    const hasDemoClass = element.classList.contains('demo-element');
    alert(`Has 'demo-element' class: ${hasDemoClass}`);
}

function changeBackground() {
    const element = document.getElementById('style-element');
    const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#feca57'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    element.style.backgroundColor = randomColor;
}

function changeSize() {
    const element = document.getElementById('style-element');
    const width = Math.floor(Math.random() * 200) + 100;
    const height = Math.floor(Math.random() * 100) + 50;
    element.style.width = `${width}px`;
    element.style.height = `${height}px`;
}

function addTransform() {
    const element = document.getElementById('style-element');
    const rotate = Math.floor(Math.random() * 360);
    element.style.transform = `rotate(${rotate}deg)`;
}

function resetStyles() {
    const element = document.getElementById('style-element');
    element.style.cssText = '';
}

// Part 3: DOM Structure Changes

let elementCounter = 0;

function createElement() {
    const newElement = document.createElement('div');
    newElement.textContent = `New Element ${++elementCounter}`;
    newElement.className = 'demo-element';
    return newElement;
}

function appendElement() {
    const container = document.getElementById('creation-container');
    const newElement = createElement();
    container.append(newElement);
}

function prependElement() {
    const container = document.getElementById('creation-container');
    const newElement = createElement();
    container.prepend(newElement);
}

function insertBeforeDemo() {
    const container = document.getElementById('creation-container');
    const newElement = createElement();
    
    if (container.children.length > 1) {
        const referenceElement = container.children[1];
        container.insertBefore(newElement, referenceElement);
    } else {
        container.append(newElement);
    }
}

function removeLastElement() {
    const container = document.getElementById('removal-demo');
    const removableElements = container.querySelectorAll('.removable');
    
    if (removableElements.length > 0) {
        removableElements[removableElements.length - 1].remove();
    }
}

function removeAllElements() {
    const container = document.getElementById('removal-demo');
    const removableElements = container.querySelectorAll('.removable');
    removableElements.forEach(element => element.remove());
}

// Performance Demo

function addElementsSlow() {
    const container = document.getElementById('performance-demo');
    container.innerHTML = '';
    
    const startTime = performance.now();
    
    for (let i = 0; i < 1000; i++) {
        const element = document.createElement('div');
        element.textContent = `Element ${i}`;
        element.className = 'demo-element';
        container.appendChild(element);
    }
    
    const endTime = performance.now();
    console.log(`Slow method took: ${(endTime - startTime).toFixed(2)}ms`);
}

function addElementsFast() {
    const container = document.getElementById('performance-demo');
    container.innerHTML = '';
    
    const startTime = performance.now();
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < 1000; i++) {
        const element = document.createElement('div');
        element.textContent = `Element ${i}`;
        element.className = 'demo-element';
        fragment.appendChild(element);
    }
    
    container.appendChild(fragment);
    
    const endTime = performance.now();
    console.log(`Fast method took: ${(endTime - startTime).toFixed(2)}ms`);
}

function clearPerformanceDemo() {
    const container = document.getElementById('performance-demo');
    container.innerHTML = '';
}