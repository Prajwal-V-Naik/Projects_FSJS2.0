# DOM Project

## <u>Task to do</u>
- Task one to add one more division to side section and adding scroll function
- Task two to remove the background of whole body
- Task three to add click function to toggle icon

## Outputs:-
![FirstTask](../DOM%20Project_08/Output/ass8.1-after.png)
***
***
![SecondTask](../DOM%20Project_08/Output/ass8.2-after.png)
***
***
![ThirdTask](../DOM%20Project_08/Output/ass8.3-after.png)

## Code Snippet:-
```js
// Task one to add one more division to side section and adding scroll function
// Store aside with a variable
let side = document.querySelector("aside");

// let just create a heading and paragraph and a hr(Horizontal line)
// hr
let hr = document.createElement("hr");
hr.classList.add("hr-line");
// Heading
let h2 = document.createElement("h2");
h2.classList.add("new-head");
h2.innerText = "This is my custom heading";
// Paragraph
let p = document.createElement("p");
p.classList.add("new-p");
p.innerText = "This custom part was created by my self only to show the overflow of a scroll item";
// appending this to aside
side.appendChild(hr);
side.appendChild(h2);
side.appendChild(p);

// Adding scroll to display appended Items
side.style.overflowY = "scroll";


// Task two to remove the background of whole body
document.body.style.background = "none";


// Task three to add click function to toggle icon
let toggle = document.querySelector(".navbar-toggler-icon");
toggle.addEventListener("click", () =>{
    document.querySelector("#navbarTogglerDemo01").classList.toggle("collapse");
});
```
__<u>My attempt was as follows:</u>__ _I just swa the output png and I found a overflow scroll to aside and a set added to that, and I just created those things which should be needed to create. Then I append all child to parent aside, then I gave style of overflowY scroll. Then I change Background of body to none. At last give click function to toggler icon using class list toggle, here collapse is pre-define bootstrap class to collapse the flow of item in opposite direction. Toggle removes an existing token from the list and return ```false``` and .collapse hides the content._