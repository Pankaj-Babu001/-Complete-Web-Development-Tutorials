// console.log("Hello World Start!");

// code

// const p1 = fetch("https://api.github.com/users");
// // console.log(p1);

// // fulfilled promise, rejected promise
// const p2 = p1.then((responce) => {
//     return responce.json();
// })


// p2.then((responce) => {
//     console.log(responce);
// });

// console.log("Hello World End!");

// Promise Chaining

// fetch("https://api.github.com/users")
// .then((responce) => {
//     console.log(responce);
//     if(!responce.ok){
//         throw new Error("Network responce was not ok");
//     }
//     return responce.json();

// })
// .then((responce) => {
//     // console.log(responce);
//     const parent = document.getElementById("first");

//     for(let i=0;i<responce.length;i++){
//         const image = document.createElement('img');
//         image.src = responce[i].avatar_url;
//         document.body.style.backgroundColor = "black";
//         image.style.width = "125px";
//         image.style.height = "125px";
//         image.style.margin = "2px";
//         // image.style.borderRadius = "50%";    

//         parent.append(image);   
//     }    

//     const image = document.createElement('img');
    
//     parent.append(image);
// })
// .catch((error) => {
//     const parent = document.getElementById("first");
//     const errorMessage = document.createElement('h2');
//     errorMessage.textContent = "Something Went Wrong!";
//     errorMessage.style.color = "red";
//     parent.append(errorMessage);
// });


// fetch("https://api.github.com/usrs")
// .then((responce) => {
//     console.log(responce);
//     if(!responce.ok){
//         throw new Error("Network responce was not ok");
//     }
//     return responce.json();

// })
// .then((responce) => {
//     // console.log(responce);
//     const parent = document.getElementById("first");

//     for(let i=0;i<responce.length;i++){
//         const image = document.createElement('img');
//         image.src = responce[i].avatar_url;
//         document.body.style.backgroundColor = "black";
//         image.style.width = "125px";
//         image.style.height = "125px";
//         image.style.margin = "2px";
//         // image.style.borderRadius = "50%";    

//         parent.append(image);   
//     }    

//     const image = document.createElement('img');
    
//     parent.append(image);
// })
// .catch((error) => {
//     const parent = document.getElementById("first");
//     const errorMessage = document.createElement('h2');
//     errorMessage.textContent = "Something Went Wrong!";
//     errorMessage.style.color = "red";
//     parent.append(errorMessage);
// });

// Create a promise

// const p1 = new Promise((resolve, reject) => {
//     resolve("Promise resolved successfully!");
// })
// p1.then((responce) => {
//     console.log(responce);
// }).catch((error) => {
//     console.log(error);
// })


// const myPromise = new Promise((resolve, reject) => {

//     reject("Promise rejected!");
//     const error = false;  // true or false
//     if(!error){
//         resolve("Promise resolved successfully!");
//     } else {
//         reject("Promise rejected!");
//     }
// });

// myPromise.then((responce) => {
//     console.log(responce);
// }).catch((error) => {
//     console.log("Error: " + error);
// });
// console.log(myPromise);





// const j1 = {
//     name: "Pankaj",
//     age: 19,
//     address : "Patna"
// }  

// // convert to JSON string

// const jsonFormat = JSON.stringify(j1);

// // const j2 = JSON.stringify(j1);
// console.log(jsonFormat);
// console.log(typeof j2);  // string


// const jsonFormat = `{
//     "name": "Pankaj",
//     "age": 19,
//     "address": "Patna"
// }`;

// // Convert JSON string to JavaScript object
// const person = JSON.parse(jsonFormat);
// console.log(person.name); // "Pankaj"
// console.log(person.age);  // 19

// convert to JavaScript Object

// const jsObject = JSON.parse(jsonFormat);
// console.table(jsObject);





// Zomato Application - Order Processing System

const orderDetail = {
    orderId: 123123,
    food: ["Pizza", "Biryani", "Cake"],
    cost: 1010,
    customer_name: "Pankaj",
    customer_location: "Buxar",
    restaurant_location: "Buxar"
}

// Step 1: Place Order and Process Payment
function placedOrder(orderDetail) {
    console.log(`${orderDetail.cost} Payment is in progress`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Payment is received and order get placed");
            orderDetail.status = true;
            resolve(orderDetail);
        }, 3000);
    });
}

// Step 2: Prepare Food Order
function preparingOrder(orderDetail) {
    return new Promise((resolve, reject) => {
        // Pehle check karo food available hai ya nahi
        setTimeout(() => {
            if (Math.random() < 0.5) {
                // Food available hai, tab preparation shuru karo
                console.log(`Your food preparation started of ${orderDetail.food}`);
                console.log("Your order is now prepared");
                orderDetail.token = 10000144;
                resolve(orderDetail);
            } else {
                // Food available nahi hai
                console.log("❌ Food item is not available in restaurant");
                reject(new Error("Food item is not available in restaurant"));
            }
        }, 3000);
    });
}

// Step 3: Pickup Order from Restaurant
function pickupOrder(orderDetail) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.5) {
                // Delivery boy available hai
                console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location}`);
                console.log("I have picked up the order");
                orderDetail.received = true;
                resolve(orderDetail);
            } else {
                // Delivery boy available nahi hai
                console.log("❌ Delivery boy is not available");
                reject(new Error("Delivery boy is not available"));
            }
        }, 3000);
    });
}

// Step 4: Deliver Order to Customer
function deliverOrder(orderDetail) {
    console.log(`I am on my way to deliver order to ${orderDetail.customer_location}`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order delivered successfully");
            orderDetail.delivery = true;
            resolve(orderDetail);
        }, 3000);
    });
}

// Execute the complete order process with Promise Chaining
placedOrder(orderDetail)
    .then((orderDetail) => preparingOrder(orderDetail))
    .then((orderDetail) => pickupOrder(orderDetail))
    .then((orderDetail) => deliverOrder(orderDetail))
    .then((orderDetail) => {
        console.log("✅ All steps are done successfully!");
        console.log("Final Order Details:", orderDetail);
    })
    .catch((error) => {
        console.log("🚫 Order Failed: " + error.message);
    });
 