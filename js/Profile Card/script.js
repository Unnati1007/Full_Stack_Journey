//1.Select the target element
const appContainer = document.getElementById("app");
const generateBtn = document.getElementById("generateBtn");
//2.Create new html element(document.createElement())
function createProfileCard() {
    //create the profile card container
    const profileCard = document.createElement('div');

    //add class
    profileCard.className = "profile-card";
    //create an image element for the profile card
    const profileImage = document.createElement('img');
    //add image to created img element
    profileImage.src = "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400";

    //creating the heading element
    const profileName = document.createElement("h3");
    profileName.textContent = "Unnati Jadon";

    //create a paragraph element for description 
    const profileDescription = document.createElement("p");
    profileDescription.textContent = "Hello I am learning web development";

    //3.Add content to the element created (innerHTML/textContent)
    //4.Add classes or IDs if needed // add any attribute
    profileCard.appendChild(profileImage);
    profileCard.appendChild(profileName);
    profileCard.appendChild(profileDescription);
    console.log(profileCard);
    //append the profile card to the container 
    appContainer.appendChild(profileCard);
    console.log(appContainer);
}
createProfileCard();

//5. Append the element to build the structure
//6.Append to the DOM

//add event lister
generateBtn.addEventListener('click', createProfileCard);


