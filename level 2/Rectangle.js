const rectangle = {
    width: 8,
    height: 5,

    getArea() {
        return this.width * this.height;
    },

    getPerimeter() {
        return 2 * (this.width + this.height);
    }
};

console.log("Luas:", rectangle.getArea());
console.log("keliling:", rectangle.getPerimeter());