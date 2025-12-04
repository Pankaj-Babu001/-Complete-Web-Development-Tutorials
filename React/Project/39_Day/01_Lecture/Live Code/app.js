// React.createElement("h1",null,"Hello Coder Army");

// const element = React.createElement("h1",{id:"title"},"Hello Coder Army 😊");


// const element2 = React.createElement('div',null,
//     React.createElement('h1',null,"Hello"),
//     React.createElement('h2',null,"Hii"));


// JSX: JavaScript XML: look like html
// JSK --> React.createElement

// const element = <h1 id="title" className="heading">Hello Coder Army 😊</h1>;
// console.log(element);

// const element2 = (<div>
//     <h1>Hello EveryOne!</h1>
//     <h2>Hi, I am Pankaj</h2>
//     <p>Thank you</p>
// </div>);


// const element = <h1 id="title" className="heading">Hello Coder Army 😊</h1>;
// const element2 = (<div>
//     <h1>Hello EveryOne!</h1>
//     <h2>Hi, I am Pankaj</h2>
//     <p>Thank you</p>
// </div>);

// const element3 = (
//     <div>
//         <h1>Hello Coder Army 😊</h1>
//         <h2>Hi, I am Pankaj</h2>
//         <p>Thank you</p>    
//     </div>);


// React Component -->  is a function or a class that returns a JSX element


// function App(name){
//     return (
//         <div>
//             <h1>Hello Coder Army 😊</h1>
//             <h2>Hi, I am {name}</h2>
//             <p>Thank you</p>    
//         </div>
//     );  
// }
// const name = App();


// function App(name){
//     return (
//         <h1>Hello Coder Army 😊 {40+10}</h1>
        
//     )
// }

// const a = App("Pankaj");

// text / element : JavaScript Expression inside the JSX 
// Number , string,true, boolean, null, undefined , array, object


// Number, String, Array
// true, false, null, undefined (Render honge lekin kuch nahi dikhega UI per)
// Object: Error fake marega humko 

// const a = <h1>Hello Coder Army 😊 {true}</h1>; // Output: Hello Coder Army 😊
// const b = <h1>Hello Coder Army 😊 {null}</h1>; // Output: Hello Coder Army 😊
// const c = <h1>Hello Coder Army 😊 {undefined}</h1>; // Output: Hello Coder Army 😊
// const d = <h1>Hello Coder Army 😊 {40+10}</h1>; // Output: Hello Coder Army 😊 50
// const e = <h1>Hello Coder Army 😊 {['Pankaj','Rahul','Ravi']}</h1>; // Output: Hello Coder Army 😊 Pankaj, Rahul, Ravi 
// const f = <h1>Hello Coder Army 😊 {['Pankaj','Rahul','Ravi'][1]}</h1>; // Output: Hello Coder Army 😊 Rahul
// const g = <h1>Hello Coder Army 😊 {['Pankaj','Rahul','Ravi'][Math.floor(Math.random() * 3)]}</h1>; // Output: Hello Coder Army 😊 Pankaj, Rahul, Ravi 
// const h = <h1>Hello Coder Army 😊 {Math.floor(Math.random() * 3)}</h1>; // Output: Hello Coder Army 😊 Pankaj, Rahul, Ravi


// const element = <h1>Hello Coder Army 😊 {{name:"Pankaj", Age:19}} </h1>;

// const age = 9;
// const element = <h1>Hello Coder Army 😊 {age > 18 ? "Eligible For Vote" : "Not Eligible For Vote"}</h1>;
// const element = <h1>Hello Coder Army 😊 {age > 18 ? "Adult" : "Child"}</h1>;


// const element = <h1>Hello Coder Army 😊 {new Date().toDateString()}</h1>;
// const element = <h1>Hello Coder Army 😊 {new Date().toTimeString()}</h1>;
// const element = <h1>Hello Coder Army 😊 {new Date().toLocaleDateString()}</h1>;

// const age = 9;
// const isLoggedIn = true;
// const element = <h1>Hello Coder Army 😊 {isLoggedIn ? <h2>Welcome to our website</h2> : <h2>Please login</h2>}</h1>;


// const courses = ["HTML","CSS","JavaScript","REACT"];
// const element = (
//     <>
//     <h1>Hello Coder Army 😊</h1>
//         <ul>
//             <li>{courses[0]}</li>
//             <li>{courses[1]}</li>
//             <li>{courses[2]}</li>
//             <li>{courses[3]}</li>
//         </ul>
//     </>
// );

//Hello Coder Army 😊
//.HTML
//.CSS
//.JavaScript
//.REACT

// const courses = ["HTML","CSS","JavaScript","REACT"];
// [<li>HTML</li>,<li>CSS</li>,<li>JavaScript</li>,<li>REACT</li>]
// const element = (
//     // <>
//     // <h1>Hello Coder Army 😊</h1>
//     // <ul>
//     //     {courses.map((course)=>{
//     //         return <li>{course}</li>
//     //     })}
//     // </ul>
//     // </>
//     <>
//     <h1>Hello Coder Army Courses</h1>
//     <ul>
//         {courses.map(course=><li>{course}</li>)}
//     </ul>
//     </>
// );

// const element2 = (
//     <>
//     <h1>Hello Coder Army Courses</h1>
//     <ul>
//         {courses.map(course=><li>{course}</li>)}
//     </ul>
//     </>
// );


// const style = {
//     color:"red",
//     backgroundColor:"Orange",
//     fontSize:"30px",
//     padding:"10px",
//     margin:"10px",
//     border:"1px solid black",
//     textAlign:"center"
// }

// const element = <h1 id="title" className="heading" style={{color:"red",
//     backgroundColor:"Orange",
//     fontSize:"30px",
//     padding:"10px",
//     margin:"10px",
//     border:"1px solid black",
//     textAlign:"center"}
// }>Hello Coder Army </h1>;


// function App(props){
//     return (
//         <h1>Hello Coder Army {props.name} {props.age}</h1>
//     )
// }

// {
//     name:"Pankaj",
//     age:19
// }

// React.createElement(App,{name:"Pankaj",age:19})
// const element = <App name = "Pankaj" age = {19}/>


// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(element); 


// -------------------Mini Project-------------------

function Header({name}){
    return (
        <>
        <h1 style={{textAlign:"center"}}>{name} Welcome to Indian Cricket Team</h1>
        <br></br>
        <hr></hr>
        </>
    )
}


// const {name} = props;
function Main({user}){
    return (
        <>
        <h2>Hii, {user.name}</h2>
        <p>Age: {user.age}</p>
        <p>Home City: {user.homeCity}</p>
        <p>Country: {user.country}</p>
        </>
    )
}

function Footer(){
    return (
        <>
        <h2 style={{textAlign:"center"}}>Thanks for Visiting Our Website</h2>
        </>
    )
}

function App(){
    return (
        <>
            <Header name="Pankaj"></Header>
            <Main user = {{name:"Pankaj", age:19 , homeCity: "Patna", country:"India"}}></Main>
            <hr></hr>
            <Footer></Footer>
        </>
    )
}
const element = <App />;
const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
