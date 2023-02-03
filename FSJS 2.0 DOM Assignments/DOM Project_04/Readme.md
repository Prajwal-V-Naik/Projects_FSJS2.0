# DOM Project
## <u>Task to do</u>
- Turning all the background color which shown as in output.
- Turning text of all div one-third and no-border to white.
- Giving name to two character.

## Output:-
![TaskOutput](../DOM%20Project_04/Output/DOM%20P1%20SS.png)

## Code Snippet:-
```js
 // Turning all the background color which shown as in output 
document.querySelector(".clash-card__unit-stats--barbarian").style.backgroundColor = "#ec9b3b";
document.querySelector(".clash-card__unit-stats--archer").style.backgroundColor = "#ee5487";
document.querySelector(".clash-card__unit-stats--giant").style.backgroundColor = "#f6901a";
document.querySelector(".clash-card__unit-stats--goblin").style.backgroundColor = "#82bb30";
document.querySelector(".clash-card__unit-stats--wizard").style.backgroundColor = "#4facff";

// Turning text of all div one-third and no-border to white
document.querySelectorAll(".clash-card__unit-stats").forEach((e) => {e.style.color = "#ffffff"});
document.querySelectorAll(".no-border").forEach((e) => {e.style.color = "#ffffff"});

// Giving name to two character
document.querySelector(".clash-card__level--archer").nextElementSibling.innerText = "The Archer";
document.querySelector(".clash-card__level--goblin").nextElementSibling.innerText = "The Goblin";
```

__<u>My attempt was as follows:</u>__ _Just I saw the output image and actual output I'm getting Highlighted by the background color changed as I mentioned in snippet as comment, I tried to do loop over getting the color from levels provided in css files are likely sames but I failed after so much attempt and I just used manual providing color one by one. Then I found text color also changed so I tried to change that and through arrow function I just changed to white from their original(actually there are two div's observe on snippet). Then at last I noticed that something happened to two name of those card(First I literally missed those names)also changed easily through innerText._