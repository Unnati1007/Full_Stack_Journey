//Creating Objects
const person = {
    name: 'Alice',
    age: 30.8,
    isStudent: false
}
console.log(person)


//Accessing object properties
//Dot notation
const personName = person.name;
const personAge = person.age;
const personCourses = person.personcources;
console.log(personName);
console.log(personAge);
console.log(personCourses);
//Bracket notation
const personName2 = person["name"];
const personAge2 = person["age"];
const personCourses2 = person["personcources"];
console.log(personName2);
console.log(personAge2);
console.log(personCourses2);


const persons = ["Alice", 30.8, "js", false]

//Adding Properties to objects
//using DOT notation
person.isMarried = false;
person.country = "New York";
//using bracker notation
person["Profession"] = "Software Engineer";
person["skills"] = ["html", "css", "js"];
person.age = 30.9;
console.log(person);

//object.keys

const keys = Object.keys(person);
console.log(keys);
console.log(keys.length);

//object.values
const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2022,
    color: "red"
}

const carValues = Object.values(car);
console.log(carValues);

//hasownproperty
const hasProperty = car.hasOwnProperty("brand");
console.log(hasProperty);

//object.assign 
const target = { name: "Thomas" };
const source = { age: 30, country: "US" }
const results = Object.assign(target, source);
console.log(results);

//delete operator
delete car.brand;
console.log(car);

//object.freeze
Object.freeze(car);
car.year = 2023;
console.log(car);

//Nesting Objects
const user = {
    name: "Prince",
    age: 30,
    address: {
        street: "123 Main St",
        city: "New York",
        country: {
            name: "USA",
            state: "NY"
        }
    },
    hobbies: ["reading", "gaming", "hiking"]
};

console.log(user);

//Accessing nesting objects
//dot notation
const username = user.name;
const userCity = user.address.city;
console.log(username);
//Bracket notation

const countryName = user["address"]["country"]["name"];
console.log(countryName);

//Objects in an array 
const usersObj = [
    { name: "Alice", age: 30 },
    { name: "Bob", age: 25 },
    { name: "Charlie", age: 35 }
];
console.log(usersObj)

//Accessing objects in an array
const firstUser = usersObj[0];
const secondUser = usersObj[1];
const thirdUser = usersObj[2];
console.log(firstUser);
console.log(secondUser);
console.log(thirdUser);

//add new user
usersObj.push({ name: "David", age: 40 });
console.log(usersObj);

//to insert in beginning 
usersObj.unshift({ name: "Eve", age: 28 });
console.log(usersObj);

//to remove last 
usersObj.pop();
console.log(usersObj);

//to remove first 
usersObj.shift();
console.log(usersObj);

//modify the arrays of objects
//username from alice to cici
usersObj[0].name = "CiCi";
console.log(usersObj);