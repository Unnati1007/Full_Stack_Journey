//Sync == blocking Code
// console.log("Step 1: Start Boiling");
// console.log("Step 2: Add Pasta to the Pot");
// console.log("Step 3: Stir and wait for 10 minutes");
// console.log("Step 4: Add Pasta and serve");

// function blockingTasks() {
//     console.log("Step 1: Start a long-running task");
//     //simulate a blocking task 
//     const startTime = Date.now();
//     while (Date.now() - startTime < 5000) { }
//     console.log("Step 2: Long-running task finished");

// }
// console.log("Before calling the blocking task");
// blockingTasks();
// console.log("After the blocking task");

//! Async code
// console.log('Task 1');
// setTimeout(() => {
//     console.log("Task 2(delay)");

// }, 2000)
// console.log('Task 3');

//Weather Application 
//API (Mimic)
//Our frontend App

// function fetchData(callback) {
//     //operation API(mimic)
//     console.log("Fetching weather data.....")
//     //API - Simulating async operation(http)
//     setTimeout(() => {
//         console.log("weather data fetched successfully!");
//         callback();
//     }, 2000)
// }

// function processData() {
//     console.log(
//         "Processing the weather data to display temprature and conditions"
//     );
// }
// //Invoke the function 
// fetchData(processData);

//! Components of HTTP Requests
//?.Method (HTTP Verb)
//GET - Retrieive data
//POST - sending data to server
//PUT - Update
//DELETE - Deleting
//? URL - Uniform Resource Locator - https:///example.com //API
//? Header
//? Body 


//HTTP Client
//fetch - default
//axios - third party

//Making http request
// fetch("https://jsonplaceholder.typicode.com/posts").then((response) => {
//     return response.json().then((posts) => {
//         console.log("Posts fetched successfully", posts);
//     });

// }).catch((error) => {
//     console.log('Error fetching posts', error);
// });


//Fetch user details - API / https://jsonplaceholder.typicode.com/users/2

function fetchUserData(callback) {
    //make real http request
    fetch("https://jsonplaceholder.typicode.com/users/10").then((response) => {
        return response.json().then((userData) => {
            console.log(userData.id);
            //call back
            callback(userData.id);
        });
    }).catch((error) => {
        console.log(error);
    });
}

//User's posts - https://jsonplaceholder.typicode.com/posts?userId=2

function fetchUserPosts(userId) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`).then((response) => {
        return response.json().then((posts) => {
            console.log("user's posts", posts);
        });
    }).catch((error) => {
        console.log(error);
    });
}

// fetchUserData(fetchUserPosts);

//1. Create a promise
const myPromise = new Promise((resolve, reject) => {
    //Perform aysnc task
    let success = true;
    if (success) {
        resolve("Operation successful"); //Fulfilled
    }
    else {
        reject("Operation Failed");
    }

})
//2. Consume the promise 
myPromise.then((data) => {
    console.log(data);

}).catch((error) => {
    console.log(error);
})