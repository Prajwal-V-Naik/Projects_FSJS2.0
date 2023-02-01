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