# DOM Project

## <u>Task to do</u>
- Creating Another Button Pro Subscription
- Adding chinese to recipe list
- Adding 6th Card to recipe-gallery(new)
- Changing color of anchor tag in class Card to blue

## Output:-
![TaskOutput](../DOM%20Project_05/Output/DOM%20P2%20SS.png)

## Code Snippet:-
```js
// Creating Another Button Pro Subscription
const parent = document.querySelector(".nav-btns");// nav-btns was class which was added by me cuz I didn't find any other way.
let subscription = document.createElement("a");
subscription.classList.add("btn");
subscription.textContent = "Pro Subscription";
subscription.href = "index.html";
parent.append(subscription);
// document.querySelector(".btn").parentElement.appendChild(subscription); // Thing which referred by my friend(google) by using this I can remove first query selector

// Adding chinese to recipe list
let tagsContainer = document.querySelector(".tags-container div")
let anchor = document.createElement("a");
anchor.innerHTML = "Chinese (7)";
anchor.href ="#";
tagsContainer.appendChild(anchor);

// Adding 6th Card to recipe-gallery
let recipeGallery = document.querySelector(".recipe-gallery");
let division = document.createElement("div");
division.classList.add("card");

let anchor2 = document.createElement("a");
anchor2.href = "#";
anchor2.classList.add("recipe-text");

let image1 = document.createElement("img");
image1.src = "./img/gobi-65-recipe-500x500.jpg"
image1.classList.add("recipe-img")
anchor2.append(image1);

let head5 = document.createElement("h5");
head5.classList.add("recipe-name");
head5.innerText = "Gobi-65";
anchor2.append(head5);

let para = document.createElement("p");
para.classList.add("recipe-disp");
para.innerText = "Prep : 10min | Cook : 25min";
anchor2.append(para);

division.append(anchor2);
recipeGallery.appendChild(division);


// Changing color of anchor tag in class Card to blue
document.querySelectorAll(".recipe-text").forEach((e)=>{e.style.color="#7b66b1"});
```

__<u>My attempt was as follows:</u>__ _Started compare between output image and actual output of index first I saw a button named "Pro Subscription" and I just added using normal create and append method. Then I saw a recipe is added in recipe list and here also same procedure I followed, then I got a major challenge of creating a new card with some parent and child element. I created a Parent elements first using class names by query selector. Then I created whole things which I need  to be create and append. Then I appended every thing to low level parent first, then I just appended those to a mid and high level parent. Then I saw color of all the anchor tag in recipe gallery was changed then I do it using normal arrow function. Learn something new while discovering called cloneNode(), which is used to create a duplicate of a child of a parent._