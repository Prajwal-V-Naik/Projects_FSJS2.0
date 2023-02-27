// Selectors and stores
const timeDis = document.querySelector("#time");
const aMpM = document.getElementById("aMpM");
let data;
let inputs = new Array;
const inputBox = document.getElementById("inputBox");
const searchList = document.getElementById("latestSearch");
const topLocation = document.getElementById("topLocation");
const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const weatherRegion = document.getElementById("weather-region");
const weatherIcon = document.getElementById("weather-icon");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

const WeatherImageCard = document.querySelector(".WeatherImageCard");
const daysForecast = document.getElementById("daysForecast");

// Weather
const getData = async (event) =>{
  event.preventDefault();
  if (!inputBox.value) {
    topLocation.innerText = "";
    daysForecast.innerHTML = '';
    celsius.innerHTML = '';
    fahrenheit.innerHTML = '';
    weatherRegion.innerHTML = '';
    description.innerHTML = '';
    humidity.innerHTML = '';
    wind.innerHTML = '';
    weatherIcon.src = '';
    WeatherImageCard.style.backgroundColor = '#758c94'
    alert("Please Enter The City Name: ");
    return;
  }else{
    daysForecast.innerHTML = '';
    weatherRegion.innerText = inputBox.value;
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
const city = inputBox.value;

const fetchWeather = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=dc73cc4621524c7cb43105951231102&q=${city}`
);
const orgWeather = await fetchWeather.json();
data = orgWeather;
// Displaying
topLocation.innerHTML = data.location.country;
celsius.innerHTML = data.current.temp_c;
fahrenheit.innerHTML = data.current.temp_f;
humidity.innerHTML = data.current.humidity;
wind.innerHTML = data.current.wind_kph;
weatherIcon.src = data.current.condition.icon;
description.innerHTML = data.current.condition.text;

// Local time setting
let hour = data.location.localtime.slice(11, 13);
let minutes = data.location.localtime.slice(14, 16)
let amPm = hour >= 12 ? 'PM' : 'AM';
aMpM.innerHTML = amPm;
hour = hour % 12 || 12;
hour = hour < 10 ? '0' + hour : hour;
minutes = minutes < 10 ? '0' + minutes : minutes;
let displayTime = hour + ":" + minutes;
timeDis.innerHTML = displayTime; 

// Weather card background
switch (data.current.condition.text) {
  case 'Sunny':
    WeatherImageCard.style.backgroundColor = '#faf500';
    break;
  case 'Partly cloudy':
    WeatherImageCard.style.backgroundColor = '#d3d3d1';
    break;
  case 'Overcast':
    WeatherImageCard.style.backgroundColor = '#ffffff';
    break;
  case 'Mist':
    WeatherImageCard.style.backgroundColor = '#b4bfc0';
    break;
  case 'Clear':
    WeatherImageCard.style.backgroundColor = '#8cd0f7';
    break;
  case 'Fog':
    WeatherImageCard.style.backgroundColor = '#b8cbd5';
    break;
  case 'Blizzard':
    WeatherImageCard.style.backgroundColor = '#ace5ee';
    break;
  case 'Heavy snow':
    WeatherImageCard.style.backgroundColor = '#5cb0cd';
    break;
  case 'Light snow':
    WeatherImageCard.style.backgroundColor = '#adfffd';
    break;
  default:
    WeatherImageCard.style.backgroundColor = '#758c94';
}
// Weather forecasting
const fetchForecast = await fetch(
  `https://api.weatherapi.com/v1/forecast.json?key=dc73cc4621524c7cb43105951231102&q=${city}`
);
const orgForecast = await fetchForecast.json();
foreData = orgForecast;
const forecastData = foreData.forecast.forecastday[0];
// console.log(forecastData);
const hourlyData = forecastData.hour;

hourlyData.forEach(hour => {
  // In this second version thought, I made  a little bit changes with the time to understandable of 12hrs format of forecast section
  const tempHour= hour.time.slice(11, 13);
  let amPmTemp = tempHour >= 12 ? ' pm' : ' am';
  let fTempHour = tempHour % 12 || 12;
  const temp = hour.temp_c;
  const des = hour.condition.icon;
// Implemented grid tech here to display the forecast more beautifully 
  daysForecast.style.display = 'grid';
  daysForecast.style.gridTemplateColumns = 'auto auto auto auto';
  daysForecast.style.columnGap = '1rem';
  daysForecast.style.rowGap = '10px';
  const smallDiv = document.createElement('div');
  smallDiv.style.border = '1px solid var(--gray)';
  smallDiv.style.borderRadius = '6px'
  smallDiv.style.display= 'flex';
  smallDiv.style.flexDirection = 'column';
  // smallDiv.style.gap = '5px';
  smallDiv.style.alignItems = 'center';
  smallDiv.style.justifyContent = 'center';
  smallDiv.style.padding='6px';
  const timeP = document.createElement('p');
  timeP.innerText = fTempHour + amPmTemp; //+ ':' + tempMinute
  const tempP = document.createElement('p');
  tempP.innerText = `${temp}°C`;
  const tempD = document.createElement('img');
  tempD.style.width = '1.5rem';
  tempD.src = des;
  smallDiv.append(timeP);
  smallDiv.append(tempP);
  smallDiv.append(tempD);
  daysForecast.append(smallDiv);
  // const div = document.createElement('div');
  // div.style.display = 'flex';
  // div.style.flexDirection = 'row';
  // div.style.gap = '5px'
  // const timeP = document.createElement('p');
  // timeP.innerText = `On-${time}`;
  // const tempP = document.createElement('p');
  // tempP.innerText = `weather is ${temp}°C`;
  // const tempD = document.createElement('p');
  // tempD.innerText = `like-${des}`;
  // div.appendChild(timeP);
  // div.appendChild(tempP);
  // div.appendChild(tempD);
  // daysForecast.appendChild(div);
});
}
// time
// setInterval( () => {
//     let date = new Date();
//     let hours = date.getHours();
//     let minutes = date.getMinutes();
//     // let seconds = date.getSeconds();

//     // amPm
//     let amPm = hours >= 12 ? 'PM' : 'AM';
//     aMpM.innerHTML = amPm;
//     // Converting...
//     hours = hours % 12 || 12;
//     // console.log(hours);

//     // Good look for time
//     hours = hours < 10 ? '0' + hours : hours;
//     minutes = minutes < 10 ? '0' + minutes : minutes;
//     // seconds = seconds < 10 ? '0' + seconds : seconds;

//     let displayTime = hours + ":" + minutes;
//     // console.log(displayTime);
//     time.innerHTML = displayTime;    
// },1000);

