const order = {
    items: [
        { name: "Buku", price: 25000, quantity: 2},
        { name: "pulpen", price: 5000, quantity: 3}
    ],

    getTotal() {
        return this.items.reduce(
            (total, item) =>
                total + item.price * item.quantity,
            0
        );
    }
};

console.log("Total pesanan: Rp" + order.getTotal());