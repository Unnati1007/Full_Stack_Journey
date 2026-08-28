//Using setAttribute of change product images
const productImageEl = document.getElementById("product1").querySelector("img");
console.log(productImageEl);

productImageEl.setAttribute(
    "src",
    "https://cdn.pixay.com/photo/2016/03/26/13/09/cup-of-coffee-1280537_1280.jpg"
);

productImageEl.setAttribute("alt", "Cup of coffee");

//Modify the product link
const productLink = document.getElementById("product1").querySelector("a");



productLink.setAttribute("href", "https://www.google.com");
console.log(productLink);