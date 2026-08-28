//Using textContent to update the blog title
const blogTitle = document.getElementById("title");
console.log(blogTitle);

console.log(blogTitle.textContent);

blogTitle.textContent = "New Blog Title"

//Change the background
blogTitle.style.background = 'red';
blogTitle.style.color = 'white';

//Using innerHTML to add another paragrapgh with some HTML content
const paragraphEl = document.getElementById("paragraph");
paragraphEl.innerHTML = "<h2>This is the updated content</h2>";
paragraphEl.innerHTML += "<br> <strong>This is a new paragraph text wit</strong>";

//Using innerText to modify the comment section (assume the original content is visible)


const firstCommentEl = document
    .getElementById("comment1")
    .querySelector(".commentText");
console.log(firstCommentEl);