//for each
let number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newNumber = number.forEach(function (num) {
    const doubled = num * 2;
    console.log(doubled)
});
console.log(newNumber);


//Array of objects
const product = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 200 },
    { name: "Keyboard", price: 300 },
    { name: "Monitor", price: 400 },
    { name: "Headphone", price: 500 },
];

product.forEach((indiviualproduct) => {
    console.log(
        `Product: ${indiviualproduct.name}, Price: ${indiviualproduct.price}`
    );
});

//map
//creates a new array
//transform the elements
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const double = numbers.map(function (num) {
    return num * 2;
})
console.log(double)

const products = [{
    name: "laptop",
    price: 3000
}, {
    name: "Mouse",
    price: 100000
}, {
    name: "Keyboard",
    price: 4000
}, {
    name: "Monitor",
    price: 5000
}, {
    name: "Headphone",
    price: 2000
}]
//Apply 10% discount on the price 
const discountedPrices = products.map((product) => {
    console.log(product.price);
    return {
        name: product.name,
        price: product.price * 0.9,
    };
});
console.log(discountedPrices);


//Reduce method 
const number1 = [1, 2, 3, 4, 5];
const totalSum = number1.reduce(function (accumulator, CurrentVal) {
    // console.log('acc', accumulator);
    // console.log('crr', CurrentVal);
    return accumulator + CurrentVal;

}, 0);
console.log(totalSum);

//find method 
const number2 = [1, 2, 3, 4, 5, 6];
const foundNum = number2.find(function (num) {
    return num > 4;
})
console.log(foundNum);
//filter
//in find replace find with filter and and we will get all that will is having >4

