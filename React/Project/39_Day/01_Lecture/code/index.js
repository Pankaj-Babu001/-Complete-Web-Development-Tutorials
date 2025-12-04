
// const element = React.createElement('h1',{id:'title'},"Hello Coder Army");

// const element2 = React.createElement('div',null,
//     React.createElement('h1',null,"Hello"),
//     React.createElement('h2',null,"hi"));


// JSX: javascript XML: Look like HTML (Babel)
// JSX --> React.createELement() --> React Element(JS Object) --> Real DOM(HTML ELEMENT)
//     babel                    React                        RectDOM

// <h1 id="title">Hello Coder Army</h1> --> React.createElement('h1',{id:'title'},"Hello Coder Army") --> {type:"h1", props:{id:"title", children:"Hello Coder Army"}} --> <h1 id="title">Hello Coder Army</h1>
// const element = React.createElement('h1',{id:'title'},"Hello Coder Army");

// const element = <h1 id="title" className="first">Hello Coder Army</h1>;
// console.log(element);


// const element2 = (<div>
//     <h1>Hell</h1>
//     <h2>hi</h2>
// </div>);

// React.createElement('div',null,
//     React.createElement("h1",null,"Hello Coder Army"),
//     React.createElement("h2",null,"Kaise ho")
// )



// React Element
// const element3 = (<div>
//     <h1>Hello Coder Army</h1>
//     <h2>Kaise ho</h2>
//     </div>
// )

// React Component

// function App(name){

//     return (
//         <h1>Hello Coder Army {10+20}</h1>
//     );
// }



// const a = App("Pankaj");
// text/element: Javascript ka expression aap iske andar likh sakte hain
// Number, string, true false, null, undefined, array, object

// Number, string, array
// true false null undefined (render honge lekin kuch display nahi hoga)
// Object: Error

// const age= 10;
// const isLoggedIn = true;
// const element = <h1>Hello Coder {isLoggedIn?<h2>Logged In</h2>:<h2>Kindly SignIn</h2>}</h1>

// React.createElement("ul",null,[React.createElement("ul",null,<li>HTML</li>)
// ,React.createElement("ul",null,<li>CSS</li>)])

// const courses = ["HTML","CSS","Javascript","React"];
// // [<li>HTML</li>,<li>CSS</li>,<li>JavaScript</li>,<li>React</li>]
// const element = (
// <ul>
//     {courses.map(course=><li>{course}</li>)}
// </ul>
// )

// const ab = {backgroundColor:"orange", color:"white"}
// const element = <h1 id="title" className="first" style={{backgroundColor:"orange", color:"white"}}>Hello Coder Army</h1>

// function App(props){

//     return (
//         <h1>Hello Coder Army {props.name} {props.age}</h1>
//     )
// }

// {
//     name:"Pankaj",
//     age:19
// }

// React.createElement("h1")
const element = <App  name="Pankaj" age={19}></App>

function Header({name}){

    return (
        <h1>{name} Welcome to Indian Election Commission Website</h1>
    )
}

// const props = {
//     name:"Pankaj"
// }

// const {name} = props;

function Main({user}){

    return (
        <>
            <h2>Hi {user.name}</h2>
            <h3>{user.age>18? "You are eligible for vote": "You are not eligible for vote"}</h3>
            <p>Your city is {user.city}</p>
        </>

    )
}

function Footer(){

    return (
        <footer style={{padding: "1rem", borderTop: "1px solid #e0e0e0", marginTop: "2rem", textAlign: "center"}}>
            <p>Thanks for visiting our website.</p>
            <small>© {new Date().getFullYear()} Indian Election Commission</small>
        </footer>
    )
}

// function Card(){

// }


function App(){

    return (
        <>
            <Header name="Pankaj"></Header>
            <Main user={{name:"Pankaj",age:19,city:"Patna"}}></Main>
            <Footer />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<App/>);

App()
// <App/>