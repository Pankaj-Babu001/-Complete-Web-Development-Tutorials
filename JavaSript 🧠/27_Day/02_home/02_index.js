// 🛍️ Product Filter System using .filter() and .map()

const products = [
    { name: "Laptop", price: 80000, category: "Electronics" },
    { name: "Phone", price: 40000, category: "Electronics" },
    { name: "Shirt", price: 1500, category: "Clothing" },
    { name: "Shoes", price: 2500, category: "Clothing" },
    { name: "Headphones", price: 2000, category: "Electronics" },
];

// Filter only electronics
const electronics = products.filter((p) => p.category === "Electronics");

// Map product names and prices
const productNames = electronics.map((p) => `${p.name} - ₹${p.price}`);

console.log("🧩 Filtered Products:", electronics);
console.log("🛒 Mapped Names:", productNames);
