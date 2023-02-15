// Selectors and stores
const time = document.querySelector("#time");
const aMpM = document.getElementById("aMpM");
let data;
let inputs = new Array;
const inputBox = document.getElementById("inputBox");
const searchList = document.getElementById("latestSearch");
const topLocation = document.getElementById("topLocation");



// Weather
const getData = async (event) =>{
    event.preventDefault();
    if (!inputBox.value) {
        topLocation.innerText = "";
        alert("Please Enter The City Name: ");
        return;
    }else{
        topLocation.innerText = inputBox.value;
        let list = inputBox.value;
        inputs.push(list);
        searchList.innerHTML = "";
        for (var i = Math.max(0, inputs.length - 4); i < inputs.length; i++) {
            var p = document.createElement("p");
            p.classList.add("searchHistory");
            p.textContent = inputs[i];
            searchList.appendChild(p);
            p.addEventListener("click", function() {
                inputBox.value = this.textContent;
              });
        }
    }
    
}
// time
setInterval( () => {
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    // let seconds = date.getSeconds();

    // amPm
    let amPm = hours >= 12 ? 'PM' : 'AM';
    aMpM.innerHTML = amPm;
    // Converting...
    hours = hours % 12 || 12;
    // console.log(hours);

    // Good look for time
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    // seconds = seconds < 10 ? '0' + seconds : seconds;

    let displayTime = hours + ":" + minutes;
    // console.log(displayTime);
    time.innerHTML = displayTime;    
},1000);

