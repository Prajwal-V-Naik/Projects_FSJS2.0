let accordian = document.querySelectorAll(".accordian h3");
accordian.forEach((element) => {
  element.addEventListener("click", () => {
    let para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

let contact = document.getElementById("contact");
contact.textContent = 'Projects';

// First try
// accordian.style.backgroundColor = "#dadaf8";

// console.log(accordian);
// Second try
for (let i = 0; i < accordian.length; i++) {
  accordian[i].style.backgroundColor = "#dadaf8";
}

// let accordianWrapper = document.querySelector(".accordian-wrapper");
// let accordianClass = document.querySelector(".accordian")
// // console.log(accordianWrapper);
// let skillsHead = document.createElement("h3");
// skillsHead.innerText = "Skills";

// accordianClass.append(skillsHead);
// accordianWrapper.append(accordianClass);

// Second Try
let accordianWrapper = document.querySelector(".accordian-wrapper");
let division = document.createElement("div");
division.setAttribute("class","accordian");
let skillsHead = document.createElement("h3");
skillsHead.innerText = "Skills";
let skillsP = document.createElement("p");
skillsP.innerText = "I posses a very good command over the full stack development technologies like MERN which can be seen in my work over the Github."
division.appendChild(skillsHead);
division.appendChild(skillsP);
accordianWrapper.append(division);

skillsHead.style.backgroundColor = "#dadaf8";

skillsHead.addEventListener("click", () => {
  if (skillsP.style.display === "block") {
    skillsP.style.display = "none";
  } else {
    skillsP.style.display = "block";
  }
});