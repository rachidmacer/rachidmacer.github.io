const api = {
  key:"efe51b26290b5235f3b2ee0e134fbec9"
  base: "https://api.openweathermap.org/data/2.5/"
}

const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);

function setQuery(evt) {
  if(evt.keyCode == 13) {
    getResults(searchbox.value);
    console.log(searchbox.value);
  }
}

function getResults(query) {
  fetch('${api.base}weather?=${query}&units=imperial&APPID=${api.key}')
  .then(weather => {
    return weather.json();
  }) .then(displayResults);
}

function displayResults(weather) {
  console.log(weather);
  let city = document.querySelector('.location ,city');
  city.innerText ='${weather.name}, ${weather.sys.country}'

}
