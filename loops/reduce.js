arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const sum = arr.reduce((accumulator, currentValue) => (accumulator + currentValue), 0);
console.log(sum)

const order = [{ id: 1, name: "Product 1", price: 10 }, 
    { id: 2, name: "Product 2", price: 20 }, 
    { id: 3, name: "Product 3", price: 30 }];

const cost = order.reduce((accumulator, currentValue) => { return accumulator + currentValue.price; }, 0);
console.log(cost)