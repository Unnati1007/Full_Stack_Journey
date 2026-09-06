//Function to replace an article
function replaceArticle(newText, oldArticle) {
    //Find the existing artivle by its ID
    const existingArticle = document.getElementById(oldArticle);
    //console.log(existingArticle);
    let newArticle = document.createElement("div");
    //add css to it
    newArticle.className = "article";
    //Keep the ID same for the article
    newArticle.id = oldArticle;
    //Create a new text node for the new article
    const newArticleText = document.createTextNode(newText);
    //Append the text node to the new article element 
    newArticle.appendChild(newArticleText);
    // Replace the existing article with the new article
    existingArticle.parentNode.replaceChild(newArticle, existingArticle);
}

replaceArticle("New Content of Article 1", "article1");