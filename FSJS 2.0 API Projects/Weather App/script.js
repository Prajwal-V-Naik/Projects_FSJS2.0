// Selectors
const time = document.querySelector("#time");
const aMpM = document.getElementById("aMpM");

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