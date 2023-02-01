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
__Note:__  _To do this I just added a id #contact for the contact anchor tag at list._


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
__Note:__ _To do this task I added a #search id to the input text of search div._ 