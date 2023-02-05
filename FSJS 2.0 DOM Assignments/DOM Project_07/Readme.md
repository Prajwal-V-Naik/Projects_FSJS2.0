# DOM Project

## <u>Task to do</u>
- Remove the languages that have 2.0 in their name(Every alternative language)
- Use JavaScript to write something in the input box and submit the form. This should refresh the page and the languages in the left card should come back.

## Outputs:-
![FirstTask](../DOM%20Project_07/Output/ass7.1-after.png)
***
***
![SecondTask](../DOM%20Project_07/Output/ass7.2-after.png)

## Code Snippet:-
```js
 // Utilities which needed 
const mainLanguages = document.querySelector(".main__languages");
let languages = document.querySelectorAll(".main__languages a");
// Actual Assignment one
languages.forEach((element)=>{
    if(element.innerText.includes("2.0")){
    element.style.display = "none";
    }      
});

// Assignment 2 
document.querySelector(".main__form-input").value = "iNeuron";

// USing stored languages value to return all values back
let submitBtn = document.querySelector(".main__form-btn")
submitBtn.disabled = false;
submitBtn.addEventListener("click",()=>{
for (let i = 0; i < languages.length; i++) {
    languages[i].style.display = "inline-block";
}
});
```

__<u>My attempt was as follows:</u>__ _Some thing interesting in this assignment done normally, but I did not get great output. To achieve first assignment output I just used includes of method and for second because I already used that if statement to display none it going to run after every refresh so I can't handle submit button function to retrieve all words back as it is. Other than that remain two statements are I achieved successfully._