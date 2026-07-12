//creating an array 
let fruits = ["apple", "banana", "orange", "mango"];
//push
fruits.push("pineapple");
//Access data of aaray 
let accessApple = fruits[0];
console.log(accessApple);
console.log(fruits);
//pop
let books = ["Book1", "Book2", "Book3", "Book4"];
books.pop();
console.log(books);
//shift
books.shift();
console.log(books);
//unshift
books.unshift("Book5");
console.log(books);
//concat
const colors = ["red", "green", "blue"];
const moreColors = ["yellow", "orange", "purple"];
const allColors = colors.concat(moreColors);
console.log(allColors);
//slice
const techcompanies = ["facebook", "google", "microsoft", "apple", "amazon"];
console.log(techcompanies.slice(1, 4));
//.length
const totalCompanies = techcompanies.length;
console.log(totalCompanies);
