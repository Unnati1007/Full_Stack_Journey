const imagesEl = document.getElementById("imageGallery").querySelectorAll("img");
console.log(imagesEl);

//Create an array to store images by Alice

let aliceImages = [];

//Use getAttribute to filter images by author Alice
imagesEl.forEach(img => {
    const author = img.getAttribute("data-author");
    if (author === "Alice") {
        aliceImages.push(img);
    }
});


