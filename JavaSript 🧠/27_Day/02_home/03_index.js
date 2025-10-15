// 💰 Use reduce() to calculate total stock value

const products = [
    { name: "Laptop", price: 80000, stock: 5 },
    { name: "Phone", price: 40000, stock: 10 },
    { name: "Shoes", price: 2500, stock: 20 },
    { name: "Watch", price: 5000, stock: 15 },
];

const totalValue = products.reduce((acc, item) => acc + item.price * item.stock, 0);

console.log("📦 Total Stock Value: ₹" + totalValue);
