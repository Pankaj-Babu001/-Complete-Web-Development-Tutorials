
const orderDetail = {
    orderId: 123123,
    food:["Pizza","Biryani","Coke"],
    cost: 854,
    customer_name: "Pankaj Kumar",
    customer_location: "Mitralok Colony, Buxar",
    restaurant_location: "Buxar"
}

function placedOrder(orderDetail){
    console.log(`${orderDetail.cost} Payment is in progress`);

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{

            if(Math.random()>0.1){
                console.log("Payment is received and order get placed");
                orderDetail.status = true;
                resolve(orderDetail);
            }
            else{
                reject("Payment is failed");
            }

        },3000)
    })

}



function preparingOrder(orderDetail){
    console.log(`Your food preparation started of ${orderDetail.food}`);

    return new Promise((resolve,reject)=>{

        setTimeout(()=>{

            if(Math.random()>0.05){
                console.log("Your order is now prepared");
                orderDetail.token = 541;
                resolve(orderDetail);
            }
            else{
                reject("Food item is not present at restaurant");
            }

        },3000);
    })

}

function pickupOrder(orderDetail){
    console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location} `);

    return new Promise((resolve,reject)=>{


        setTimeout(()=>{
            if(Math.random()>0.05){
                console.log("I have picked up the order");
                orderDetail.received = true;
                resolve(orderDetail);
            }
            else{
                reject("Delivery boy Unable to reach restaurant")
            }
        },3000);
    })

}


function deliverOrder(orderDetail){
    console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Order delivered successfully");
            orderDetail.delivery = true;
            resolve(orderDetail);
        },3000)
    })

}


async function ordering() {

    try{
        const response1 = await placedOrder(orderDetail);
        const response2 = await preparingOrder(response1);
        const response3 = await pickupOrder(response2);
        const response4 = await deliverOrder(response3);

        console.log(response4);
    }
    catch(error){
        console.log("Error: ",error);
    }
}
ordering();
