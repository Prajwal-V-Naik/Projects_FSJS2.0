# DOM Project

## <u>Task to do</u>
- Changing heading text color
- Changing button color on hover

## Outputs:-
![FirstTask](../DOM%20Project_09/Output/ass9.1-after.png)
***
***
![SecondTask](../DOM%20Project_09/Output/ass9.2-after.png)

## Code Snippet:-
```js
// Changing heading text color
document.querySelector("h1").style.color = "#dc143c";

// Changing button color on hover
let button = document.querySelector(".add-to-cart");
button.addEventListener("mouseenter",()=>{
  button.style.backgroundColor = "#dc143c";
});
button.addEventListener("mouseleave",()=>{
  button.style.backgroundColor = "#3c8067";
});
```

__<u>My attempt was as follows:</u>__ _As given project is easy to change color of text is changed. Then come to hover part used two events called mouseenter and mouseleave to define hover, can use if statement moreover it is easy to define through add event listener._