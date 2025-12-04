// attributes={
//     className:"element",
//     id:"first,
//     style:{
//      fontSize:"30px",
//      backgroundColor:"orange",
//      color:"white"}
// }


// element ={
//     tag:"h1",
//     textContent:"Hello Coder Army",
//     className:"element",
//     id:"first",
//     style:{
//      fontSize:"30px",
//      backgroundColor:"orange",
//      color:"white"}
// }


// create a h1 element using js
// console.log(element1);
// const element1 = document.createElement('h1');
// element1.textContent = "Hello Coder Army";
// element1.className = 'element';
// element1.id = 'first';
// element1.style.fontSize="30px";
// element1.style.backgroundColor = "orange";
// element1.style.color = "white";


// const element2 = document.createElement('h2');
// element2.textContent = "Strike is Launched";
// element2.className = 'element';
// element2.id = 'second';
// element2.style.fontSize="20px";
// element2.style.backgroundColor = "pink";
// element2.style.color = "green";



// custom React
// const React = {
//     createElement: function(tag,attributes,children){
//
//     const element = document.createElement(tag);
//     element.textContent = children;
//
//     for(const key in attributes){
//         if(key==='style'){
//             Object.assign(element.style, attributes.style);
//         }
//         else{
//         element[key] = attributes[key];
//         }
//     }
//
//
//     return element;
//     }
// }

// const ReactDOM = {
//     render: function(child, parent){
//         parent.append(child);
//     }
// }




// Original React


// const React = {
//     createElement: function(type,props,children){

//         return {
//             type:type,
//                 props:{
//                 ...props,
//             children:children
//         }
//         }
//      }
// }


// const reactElement = {
//     type:'h1',
//     props:{
//         className:"element",
//         id:"first",
//         style:{fontSize:"30px",backgroundColor:"orange",color:"white"},
//         children: "Hello Coder Army"
//     }
// }


// const ReactDOM = {
//     render: function(reactElement,root){
//
//        root.innerHTML = '';
//
//        const element =  document.createElement(reactElement.type);
//
//       const {props} = reactElement;
//
//       for(const key in props){
//         if(key==='style'){
//             Object.assign(element.style,props.style);
//         }
//         else if(key==='children'){
//             element.textContent = props[key];
//         }
//         else{
//             element[key] = props[key];
//         }
//       }
//
//       root.append(element);
//     }
// }

// const div = React.createElement('div',null,
//     React.createElement("h1",{className:"element",id:"first",style:{fontSize:"30px",backgroundColor:"orange",color:"white"}},"Hello Coder Army"),
//     React.createElement('h2',{className:"element",id:"second",style:{fontSize:"20px",backgroundColor:"pink",color:"green"}},"Strike is launched"),
// );
//
//
//
// // Main container to render react elements
// const root = ReactDOM.createRoot(document.getElementById('root'));
//
// root.render(div);

// console.log(div);


// ReactDOM.render(element1,document.getElementById('root'));
// ReactDOM.render(element2,document.getElementById('root'));



// const root = document.getElementById('root');
// ReactDOM.render(element1,root);
// ReactDOM.render(element2,root);




const element1 = React.createElement("h1",{className:"element",id:"first",style:{fontSize:"30px",backgroundColor:"orange",color:"white"}},"Hello Coder Army");
const element2 = React.createElement('h2',{className:"element",id:"second",style:{fontSize:"20px",backgroundColor:"pink",color:"green"}},"Strike is launched");






