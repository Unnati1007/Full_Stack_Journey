// function multiply(a, b) {
//     return a * b;
// }

const multiply = (a, b) => a * b;
const result = multiply(2, 3);

const greet = (name) => `Hello, ${name}!`;
const greetFn = greet('Unnati');

const square = (x) => x * x;
const squareFn = square(5);


const random = () => Math.random();
const randomFn = random();

//Destructuring in Js
//basic
{
    const number = [1, 2, 3, 4];
    const [a, b, c, d] = number;
    // console.log(a);
    // console.log(number[1]);
}

//swap variables
{
    let a = 1;
    let b = 2;
    [a, b] = [b, a];
    // console.log(a);
    // console.log(b);
}

//Object Destructuring
//Extract User data
const { name, age, email } = { name: "unnati", age: 21, email: "unnati@gmail.com" };
// console.log(name);
// console.log(age);
// console.log(email);

//Destructuring in Function Parameters
function greet2(userObj) {
    console.log(`Hello, ${userObj.name}, your age is ${userObj.age}`);
}

const myUser = {
    name: "John",
    age: 30,
};
greet2(myUser);

// Destructured version:
// function greet2({ name, age }) {
//     console.log(`Hello, ${name}, your age is ${age}`);
// }

//nested 
const { id, info: { name1, age1 } } = {
    id: 1,
    info: {
        name: "unnati",
        age: 21,
    },
    address: {
        city: "pune",
        state: "maharashtra"
    }
}
console.log(UserData.info.name);