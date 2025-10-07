// Call by Functions
function greet(){
    console.log("Hello! To Kaise Hain Aap 🫰");
}
function dance(){
    console.log("I am dancing");
}
function meet(callback) {
    console.log("I am going to meet someone.");
    // callback();
    console.log("I have finished meeting");
}
// greet(); // meet(); // dance(); // meet(greet); // meet(dance);
// Blinkit
function blinkitOrderPlaced (){
    console.log("We have started packing your Order");
}
function zomatoOrderPlaced(){
    console.log("We have started preparing food");
}
function payment(amount, callback){
    console.log(`${amount} payment has initilized`);
    console.log("Payment Received");
    callback();
    // GST: Goverment // Rider ko kitna payment // company ko kitna pay karna hai
}
payment(500, zomatoOrderPlaced);
payment(300, blinkitOrderPlaced);