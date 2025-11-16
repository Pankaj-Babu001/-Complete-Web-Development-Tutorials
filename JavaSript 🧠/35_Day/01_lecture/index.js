// Async Await Example

// async function greet() {
//     return "Pankaj";
//
//     // return new Promise((resolve, reject) => {
//     //     reject("Pankaj");
//     // })
// }
//
// const response =  greet();
//
// // console.log(response);
// response.then(data => console.log(data))
// .catch((error) => {
//     console.log("Error:", error);
// })

// fetch("https://api.github.com/users")
// .then(res => res.json())
// .then(data => console.log(data))



// const response =  await fetch("https://api.github.com/users");
// const data = await response.json();
// console.log(data);
// console.log("To Kaise Hai Aap Sab!"); // Print After



// async function GitHub(){
//
//     console.log("Hello World!");
//     const response =  await fetch("https://api.github.com/users");
//     const data = await response.json();
//     console.log(data);
// }
//
// GitHub();
// console.log("Hii EveryOne!"); // Print Before




async function userDetail(params) {

    // const comment = await fetch("userComment");
    // const photos = await fetch("userPhoto");
    // const chat = await fetch("chat");

    const [comment,photos,chat]= await Promise.all([fetch("userComment"),fetch("photo"),fetch("chat")]);
}





