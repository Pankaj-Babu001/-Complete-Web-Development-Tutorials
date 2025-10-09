// let balance = 500;

// balance+="Pankaj";
// balance-=500;
// console.log(balance);

// let balance = 500;
// // private

// let user = {
//     deposit: function(amount){
//         if(typeof amount==="number" && amount>0){
//         balance+=amount;
//         return balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//         balance-=amount;
//         return balance;
//         }
//     },
//     getBalance: function(){
//         return balance;
//     }
// }

// balance="Pankaj"

// user.balance="Pankaj";
// console.log(user.getBalance());
// console.log(user.deposit("23CS83"));
// console.log(user.deposit(1000));

// method ko access(function)
// balance: usko directly access na

function createBankAccount(){
    let balance = 1000;

    return {
        deposit: function(amount){
            if(typeof amount==="number" && amount>0){
            balance+=amount;
            return balance;
            }
        },
        withdraw: function(amount){
            if(typeof amount==="number" && amount>0 && balance>=amount){
            balance-=amount;
            return balance;
            }
        },
        getBalance: function(){
            return balance;
        }
    }
}

const customer = createBankAccount();
console.log(customer.deposit(250));
console.log(customer.withdraw(500));
console.log(customer.getBalance());

