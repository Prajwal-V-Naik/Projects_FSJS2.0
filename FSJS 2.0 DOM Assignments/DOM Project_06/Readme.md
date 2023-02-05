# DOM Project

## <u>Task to do</u>
- Changing The image to iNeuron logo
- Changing the cost from 4 to 10 dollar
- Adding linkedin Icon

## Outputs:-

![FirstTask](../DOM%20Project_06/Output/DOM%20P3%20SS-1.png)
****
****
![SecondTask](../DOM%20Project_06/Output/DOM%20P3%20SS-2.png)

## Code Snippet:-
```js
/* Changing The image to iNeuron logo */
document.querySelector(".logo").src = "./assets/ineuron-logo.png";

// Changing the cost from 4 to 10 dollar
document.querySelector(".app_price").firstElementChild.textContent = "$10";

// Adding linkedin Icon
let footerPart = document.querySelector(".footer_social");
let division = document.createElement("div");
let linkedin = document.createElement("i");

division.classList.add('footer_social_ico');
linkedin.classList.add('fa-brands','fa-linkedin');

division.append(linkedin);
// console.log(division);
footerPart.appendChild(division); 
```

__<u>My attempt was as follows:</u>__ _Studied the output which need  to be done by me and saw actual index out put. I saw some minor differences but all are not easy to do in single attempt just gone through documentation and achieved some of them._