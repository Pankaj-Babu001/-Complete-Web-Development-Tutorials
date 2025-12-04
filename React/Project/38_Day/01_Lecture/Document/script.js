// ========================================
    // APPROACH 1: VANILLA JAVASCRIPT
    // ========================================
    function runVanillaJS() {
    const container = document.getElementById('vanilla-demo');
    container.innerHTML = '';

    // Create first element
    const element1 = document.createElement('h1');
    element1.textContent = "Hello Coder Army";
    element1.className = 'element';
    element1.id = 'first';
    element1.style.fontSize = "30px";
    element1.style.backgroundColor = "orange";
    element1.style.color = "white";
    element1.style.padding = "10px";
    element1.style.borderRadius = "5px";

    // Create second element
    const element2 = document.createElement('h2');
    element2.textContent = "Strike is Launched";
    element2.className = 'element';
    element2.id = 'second';
    element2.style.fontSize = "20px";
    element2.style.backgroundColor = "pink";
    element2.style.color = "green";
    element2.style.padding = "10px";
    element2.style.borderRadius = "5px";
    element2.style.marginTop = "10px";

    container.appendChild(element1);
    container.appendChild(element2);

    console.log('✅ Vanilla JS: Created elements directly');
}

    // ========================================
    // APPROACH 2: CUSTOM REACT (DIRECT DOM)
    // ========================================
    const CustomReact = {
    createElement: function(tag, attributes, children) {
    const element = document.createElement(tag);
    element.textContent = children;

    for(const key in attributes) {
    if(key === 'style') {
    Object.assign(element.style, attributes.style);
} else {
    element[key] = attributes[key];
}
}

    return element;
}
};

    const CustomReactDOM = {
    render: function(child, parent) {
    parent.append(child);
}
};

    function runCustomReact() {
    const container = document.getElementById('custom-react-demo');
    container.innerHTML = '';

    const element1 = CustomReact.createElement(
    'h1',
{
    className: 'element',
    id: 'first',
    style: {
    fontSize: "30px",
    backgroundColor: "orange",
    color: "white",
    padding: "10px",
    borderRadius: "5px"
}
},
    "Hello Coder Army"
    );

    const element2 = CustomReact.createElement(
    'h2',
{
    className: 'element',
    id: 'second',
    style: {
    fontSize: "20px",
    backgroundColor: "pink",
    color: "green",
    padding: "10px",
    borderRadius: "5px",
    marginTop: "10px"
}
},
    "Strike is Launched"
    );

    CustomReactDOM.render(element1, container);
    CustomReactDOM.render(element2, container);

    console.log('✅ Custom React: Created elements using custom functions');
}

    // ========================================
    // APPROACH 3: VIRTUAL DOM
    // ========================================
    const VirtualReact = {
    createElement: function(type, props, children) {
    return {
    type: type,
    props: {
    ...props,
    children: children
}
};
}
};

    const VirtualReactDOM = {
    render: function(reactElement, root) {
    root.innerHTML = '';

    const element = document.createElement(reactElement.type);
    const {props} = reactElement;

    for(const key in props) {
    if(key === 'style') {
    Object.assign(element.style, props.style);
} else if(key === 'children') {
    element.textContent = props[key];
} else {
    element[key] = props[key];
}
}

    root.append(element);
}
};

    function runVirtualDOM() {
    const container = document.getElementById('virtual-dom-demo');

    const element1 = VirtualReact.createElement(
    'h1',
{
    className: 'element',
    id: 'first',
    style: {
    fontSize: "30px",
    backgroundColor: "orange",
    color: "white",
    padding: "10px",
    borderRadius: "5px"
}
},
    "Hello Coder Army"
    );

    const element2 = VirtualReact.createElement(
    'h2',
{
    className: 'element',
    id: 'second',
    style: {
    fontSize: "20px",
    backgroundColor: "pink",
    color: "green",
    padding: "10px",
    borderRadius: "5px",
    marginTop: "10px"
}
},
    "Strike is Launched"
    );

    VirtualReactDOM.render(element1, container);

    // Create a second container for element2
    const wrapper = document.createElement('div');
    container.appendChild(wrapper);
    VirtualReactDOM.render(element2, wrapper);

    console.log('✅ Virtual DOM: Created objects first, then rendered');
    console.log('Virtual Element 1:', element1);
    console.log('Virtual Element 2:', element2);

    // Store for display
    window.lastVirtualElement = element1;
}

    function showVirtualDOMObject() {
    const display = document.getElementById('virtual-object-display');

    if(display.style.display === 'none') {
    const element = VirtualReact.createElement(
    'h1',
{
    className: 'element',
    id: 'first',
    style: {
    fontSize: "30px",
    backgroundColor: "orange",
    color: "white"
}
},
    "Hello Coder Army"
    );

    display.innerHTML = `<span class="highlight">Virtual DOM Object (JavaScript Object):</span><br><br>${JSON.stringify(element, null, 2).replace(/\n/g, '<br>').replace(/ /g, '&nbsp;')}`;
    display.style.display = 'block';
} else {
    display.style.display = 'none';
}
}

    // ========================================
    // APPROACH 4: NESTED ELEMENTS
    // ========================================
    const AdvancedReact = {
    createElement: function(type, props, ...children) {
    return {
    type: type,
    props: {
    ...props,
    children: children.length === 1 ? children[0] : children
}
};
}
};

    const AdvancedReactDOM = {
    render: function(reactElement, root) {
    root.innerHTML = '';

    const element = this.createDOMElement(reactElement);
    root.appendChild(element);
},

    createDOMElement: function(reactElement) {
    // Handle text nodes
    if(typeof reactElement === 'string' || typeof reactElement === 'number') {
    return document.createTextNode(reactElement);
}

    const element = document.createElement(reactElement.type);
    const {props} = reactElement;

    for(const key in props) {
    if(key === 'style') {
    Object.assign(element.style, props.style);
} else if(key === 'children') {
    const children = Array.isArray(props.children) ? props.children : [props.children];
    children.forEach(child => {
    if(child) {
    element.appendChild(this.createDOMElement(child));
}
});
} else {
    element[key] = props[key];
}
}

    return element;
}
};

    function runNestedElements() {
    const container = document.getElementById('nested-demo');

    const app = AdvancedReact.createElement(
    'div',
{style: {padding: '0'}},
    AdvancedReact.createElement(
    'h1',
{
    className: 'element',
    id: 'first',
    style: {
    fontSize: "30px",
    backgroundColor: "orange",
    color: "white",
    padding: "10px",
    borderRadius: "5px"
}
},
    "Hello Coder Army"
    ),
    AdvancedReact.createElement(
    'h2',
{
    className: 'element',
    id: 'second',
    style: {
    fontSize: "20px",
    backgroundColor: "pink",
    color: "green",
    padding: "10px",
    borderRadius: "5px",
    marginTop: "10px"
}
},
    "Strike is Launched"
    )
    );

    AdvancedReactDOM.render(app, container);

    console.log('✅ Nested Elements: Created component tree');
    console.log('App structure:', app);

    window.lastNestedElement = app;
}

    function showNestedStructure() {
    const display = document.getElementById('nested-structure-display');

    if(display.style.display === 'none') {
    const structure = `
<span class="highlight">Nested Structure (Tree):</span><br><br>
{<br>
&nbsp;&nbsp;type: 'div',<br>
&nbsp;&nbsp;props: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;style: {...},<br>
&nbsp;&nbsp;&nbsp;&nbsp;children: [<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: 'h1',<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;props: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className: 'element',<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;children: 'Hello Coder Army'<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;},<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;type: 'h2',<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;props: {<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;className: 'element',<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;children: 'Strike is Launched'<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>
&nbsp;&nbsp;&nbsp;&nbsp;]<br>
&nbsp;&nbsp;}<br>
}`;
    display.innerHTML = structure;
    display.style.display = 'block';
} else {
    display.style.display = 'none';
}
}

    // ========================================
    // PERFORMANCE TEST
    // ========================================
    function performanceTest() {
    const resultsDiv = document.getElementById('performance-results');
    resultsDiv.innerHTML = 'Running tests...<br><br>';

    // Test 1: Vanilla JS
    const start1 = performance.now();
    const container1 = document.createElement('div');
    for(let i = 0; i < 100; i++) {
    const el = document.createElement('div');
    el.textContent = `Item ${i}`;
    el.style.padding = '5px';
    container1.appendChild(el);
}
    const end1 = performance.now();
    const time1 = (end1 - start1).toFixed(4);

    // Test 2: Virtual DOM approach
    const start2 = performance.now();
    const virtualElements = [];
    for(let i = 0; i < 100; i++) {
    virtualElements.push(VirtualReact.createElement(
    'div',
{style: {padding: '5px'}},
    `Item ${i}`
    ));
}
    const container2 = document.createElement('div');
    virtualElements.forEach(ve => {
    const el = document.createElement(ve.type);
    el.textContent = ve.props.children;
    Object.assign(el.style, ve.props.style);
    container2.appendChild(el);
});
    const end2 = performance.now();
    const time2 = (end2 - start2).toFixed(4);

    resultsDiv.innerHTML = `
<span class="highlight">Performance Results (100 elements):</span><br><br>
<strong>Vanilla JS:</strong> ${time1}ms<br>
<strong>Virtual DOM:</strong> ${time2}ms<br><br>
<em>Note: Virtual DOM shows its true power with updates and complex UIs,<br>
not just initial rendering. The real benefit comes from efficient updates!</em><br><br>
<strong>Virtual DOM Benefits:</strong><br>
• Minimal DOM updates<br>
• Batched operations<br>
• Smart diffing algorithm<br>
• Better for large, dynamic applications
            `;
}

    // ========================================
    // UTILITY FUNCTIONS
    // ========================================
    function clearDemo(id) {
    document.getElementById(id).innerHTML = '';
    console.log(`🧹 Cleared ${id}`);
}

    // Initial message
    console.log('🚀 React Learning Environment Loaded!');
    console.log('Click the buttons to see each approach in action.');