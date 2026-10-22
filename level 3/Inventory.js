const inventory = [
    { name: "Laptop", price: 7000000, stock: 8 },
    { name: "Mouse", price: 100000, stock: 3 },
    { name: "Monitor", price: 1500000, stock: 4 },
    { name: "Keyboard", price: 250000, stock: 12 }
];

const totalValue = inventory.reduce(
    (total, item) => total + item.price * item.stock,
    0
);

const lowStock = inventory.filter(item => item.stock < 5).map(item => item.name);

console.log("Total nilai inventaris: Rp" + totalValue);
console.log("Produk dengan stok dibawah 5:", + lowStock);