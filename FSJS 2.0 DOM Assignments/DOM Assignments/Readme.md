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