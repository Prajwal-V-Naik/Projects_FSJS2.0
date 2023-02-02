# DOM Assignments
# First Assignments
## <u>Task 1</u>
__Remove the contact link from nav bar and add Projects and HireMe to Navigation Bar__

### Output image:-
![FirstTask](./First%20Assignment%20Image/task1Output.png)

### Code Snippet:-
```js
    let contact = document.getElementById("contact");
    contact.textContent = 'Projects';
    let parents = document.querySelector('ul');
    let list = document.createElement("li");
    let anchor = document.createElement("a");

    anchor.innerHTML = "Hire me"
    anchor.setAttribute("href","#");

    list.append(anchor);
    parents.append(list);
```
__<u>My attempt was as follows:</u>__  _To do this I just added a id #contact for the contact anchor tag at list. And with this variables I just stored three more elements like ul, li and a to do this task. After this, I just wrote all things which should needed as defined in task and just append to it's parent elements._


## <u>Task 2</u>
__When ever the projects in nav bar clicked search bar should show "Search My Project" as placeholder__

### Output image:-
![SecondTask](../DOM%20Assignments/First%20Assignment%20Image/task2Output.png)

### Code Snippet:-
```js
let contact = document.getElementById("contact");
contact.textContent = 'Projects';
let search = document.getElementById("search")
contact.addEventListener("click", () =>{
    search.setAttribute("placeholder","Search My Project");
});
```
__<u>My attempt was as follows:</u>__ _To do this task I added a #search id to the input text of search div. And took some advantages of elements which already stored during first task. Then I just add a click eventListener to the project tag or element. then wrote a callback function to change the placeholder in the search div._ 


## <u>Task 3</u>
__Change the Content text of span which having sentence "National and International Client" to "iNeuron Intelligence Pvt Ltd".__

### Output image:-
![ThirdTask](../DOM%20Assignments/First%20Assignment%20Image/task3Output.png)

### Code Snippet:-
```js
let thirdSpan = document.getElementById("thirdSpan");
thirdSpan.textContent = "iNeuron Intelligence Pvt Ltd";
```

__<u>My attempt was as follows:</u>__ _To do this task I added a #thirdSpan to the span where we have to change content text from "National and International Client" to "iNeuron Intelligence Pvt Ltd". Then just used textContent to that element variable to change the text from actual text which defined in body._

## <u>Task 4</u>
__Change the Hero image in right section as shown in output image.__

### Output image:-
![FourthTask](../DOM%20Assignments/First%20Assignment%20Image/task4Output.png)

### Code Snippet:-
```js
let heroImage = document.getElementById("heroImage");
heroImage.setAttribute("src","https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg")
```

__<u>My attempt was as follows:</u>__ _To do this task I tried literally three attempts which two are failed and I'm trying to learn the reason to failure. But when it comes to third attempt as usual I just added a id #heroImage to the image which should change and I just set the attribute to change the source destination._

## <u>Task 5</u>
__Add another button to the right button section "Support Me".__

### Output image:-
![FifthTask](../DOM%20Assignments/First%20Assignment%20Image/task5Output.png)

### Code Snippet:-
```js
let rightButton = document.querySelector(".hero-right-section-btns");
let anotherButton = document.createElement("button");
anotherButton.innerText = "Support Me";
rightButton.append(anotherButton);
```

__<u>My attempt was as follows:</u>__ _To do this task I tried to select the query of class of button section division and just created another element and gave a inner text to that element and just appended to that parent div which I stored in query selector variable._